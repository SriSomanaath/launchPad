"use client";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import {
//   Heading1,
//   Heading2,
//   Heading3,
//   Code2,
//   ImageIcon,
//   Plus,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
import SortableBlock from "./sortblocks";
type BlockType = "paragraph" | "heading1" | "heading2" | "heading3" | "code" | "image";

interface Block {
  id: string;
  type: BlockType;
  content: string;
}

// const blockOptions = [
//   { type: "heading1", label: "Heading 1", icon: Heading1 },
//   { type: "heading2", label: "Heading 2", icon: Heading2 },
//   { type: "heading3", label: "Heading 3", icon: Heading3 },
//   { type: "code", label: "Code Block", icon: Code2 },
//   { type: "image", label: "Image", icon: ImageIcon },
//   { type: "paragraph", label: "Paragraph", icon: Plus },
// ];

export default function Editor() {
  const [blocks, setBlocks] = useState<Block[]>([
    { id: uuidv4(), type: "heading1", content: "Welcome to the Editor" },
    { id: uuidv4(), type: "paragraph", content: "Start typing here..." },
    { id: uuidv4(), type: "paragraph", content: "" },
  ]);
  const [showMenu, setShowMenu] = useState(false);
  const [commandBlockId, setCommandBlockId] = useState<string | null>(null);
  const blockRef = useRef<HTMLDivElement>(null);
  const sensors = useSensors(useSensor(PointerSensor));
  const [focusedBlockId, setFocusedBlockId] = useState<string | null>(null);
  
  const addBlockAfter = (id: string, newBlock: Block) => {
    const index = blocks.findIndex(b => b.id === id);
    const updated = [...blocks.slice(0, index + 1), newBlock, ...blocks.slice(index + 1)];
    setBlocks(updated);
    setFocusedBlockId(newBlock.id); // 🔥 focus the new block
};


  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = blocks.findIndex((b) => b.id === active.id);
      const newIndex = blocks.findIndex((b) => b.id === over.id);
      setBlocks(arrayMove(blocks, oldIndex, newIndex));
    }
  };

  const handleDelete = (id: string) => {
    setBlocks((prev) => {
      if (prev.length === 1) return prev;
      return prev.filter((b) => b.id !== id);
    });
  };
  
  const handleDuplicate = (block: Block) => {
    const index = blocks.findIndex((b) => b.id === block.id);
    const duplicatedBlock = {
      ...block,
      id: uuidv4(),
    };
    setBlocks((prev) => [
      ...prev.slice(0, index + 1),
      duplicatedBlock,
      ...prev.slice(index + 1),
    ]);
  };
  

  const handleChange = (id: string, value: string) => {
    setBlocks((prev) =>
      prev.map((b) => (b.id === id ? { ...b, content: value } : b))
    );
  };

  const addBlock = (type: BlockType) => {
    setBlocks((prev) => [
      ...prev,
      {
        id: uuidv4(),
        type,
        content: type === "image" ? "" : "New " + type,
      },
    ]);
    setShowMenu(false);
  };

  return (
    <div className="mx-auto p-4">
      {/* <div className="flex justify-end mb-2">
        <Button size="sm" variant="outline" onClick={() => setShowMenu(!showMenu)}>
          <Plus className="w-4 h-4 mr-1" /> Add Block
        </Button>
      </div>

      {showMenu && (
        <div className="grid grid-cols-2 gap-2 mb-4">
          {blockOptions.map((block) => (
            <Button
              key={block.type}
              variant="secondary"
              onClick={() => addBlock(block.type as BlockType)}
              className="flex gap-2 justify-start"
            >
              <block.icon className="w-4 h-4" /> {block.label}
            </Button>
          ))}
        </div>
      )} */}

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={blocks.map((b) => b.id)} strategy={verticalListSortingStrategy}>
          {blocks.map((block) => (
            <SortableBlock
                block={block}
                onChange={handleChange}
                onDelete={handleDelete}
                onDuplicate={handleDuplicate}
                commandBlockId={commandBlockId}
                setCommandBlockId={setCommandBlockId}
                addBlockAfter={addBlockAfter}
                focusedBlockId={focusedBlockId}
                setFocusedBlockId={setFocusedBlockId}
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}
