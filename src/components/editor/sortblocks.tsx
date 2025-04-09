import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
    Heading1,
    Heading2,
    Heading3,
    Code2,
    ImageIcon,
    Plus,
} from "lucide-react";
import { v4 as uuidv4 } from "uuid";

type BlockType = "paragraph" | "heading1" | "heading2" | "heading3" | "code" | "image";

export interface Block {
    id: string;
    type: BlockType;
    content: string;
}

const blockOptions: { type: BlockType; label: string; icon: React.ComponentType }[] = [
    { type: "heading1", label: "Heading 1", icon: Heading1 },
    { type: "heading2", label: "Heading 2", icon: Heading2 },
    { type: "heading3", label: "Heading 3", icon: Heading3 },
    { type: "code", label: "Code Block", icon: Code2 },
    { type: "image", label: "Image", icon: ImageIcon },
    { type: "paragraph", label: "Paragraph", icon: Plus },
];

export default function SortableBlock({
    block,
    onChange,
    onDelete,
    onDuplicate,
    commandBlockId,
    setCommandBlockId,
    addBlockAfter,
    focusedBlockId,
    setFocusedBlockId,
}: {
    block: Block;
    onChange: (id: string, value: string) => void;
    onDelete: (id: string) => void;
    onDuplicate: (block: Block) => void;
    commandBlockId: string | null;
    setCommandBlockId: (id: string | null) => void;
    addBlockAfter: (id: string, newBlock: Block) => void;
    focusedBlockId: string | null;
    setFocusedBlockId: (id: string | null) => void;
}) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id: block.id,
    });
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const divRef = useRef<HTMLDivElement | null>(null);
    const preRef = useRef<HTMLPreElement | null>(null);

    const getTextContent = () => {
        if (block.type === "code" && preRef.current) {
            return preRef.current.innerText;
        }
        if (divRef.current) {
            return divRef.current.innerText;
        }
        return "";
    };

    const handleInput = () => {
        const text = getTextContent();
        onChange(block.id, text);

        if (block.type) {
            if (text.endsWith("/")) {
                setCommandBlockId(block.id);
            } else {
                setCommandBlockId(null);
            }
        }
    };

    const commonProps = {
        contentEditable: true,
        suppressContentEditableWarning: true,
        onInput: handleInput,
    };

    useEffect(() => {
        if (block.id === focusedBlockId) {
            if (block.type === "code" && preRef.current) {
                const range = document.createRange();
                const sel = window.getSelection();
                range.selectNodeContents(preRef.current);
                range.collapse(false);
                sel?.removeAllRanges();
                sel?.addRange(range);
                preRef.current.focus();
            } else if (divRef.current) {
                const range = document.createRange();
                const sel = window.getSelection();
                range.selectNodeContents(divRef.current);
                range.collapse(false);
                sel?.removeAllRanges();
                sel?.addRange(range);
                divRef.current.focus();
            }
            setFocusedBlockId(null); // only focus once
        }
    }, [focusedBlockId, block.id, block.type, setFocusedBlockId]);

    const renderDropdown = () => (
        <DropdownMenu open onOpenChange={() => setCommandBlockId(null)}>
            <DropdownMenuTrigger asChild>
                <div className="absolute top-full left-0 mt-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-60">
                {blockOptions.map((opt, index) => (
                    <DropdownMenuItem
                        key={opt.type}
                        onSelect={() => {
                            const newBlock: Block = {
                                id: uuidv4(),
                                type: opt.type,
                                content: opt.type === "image" ? "" : "New " + opt.type,
                            };
                            addBlockAfter(block.id, newBlock);
                            onChange(block.id, "");
                            setCommandBlockId(null);
                            setSelectedOptionIndex(0);
                        }}
                        className={`flex items-center gap-2 ${selectedOptionIndex === index ? "bg-gray-100" : ""}`}
                    >
                        <opt.icon />
                        <span>{opt.label}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );    

    const renderBlock = () => {
        let content;
    
        switch (block.type) {
            case "heading1":
                content = (
                    <h1 {...commonProps} ref={divRef} className="text-4xl font-bold outline-none" />
                );
                break;
            case "heading2":
                content = (
                    <h2 {...commonProps} ref={divRef} className="text-3xl font-semibold outline-none" />
                );
                break;
            case "heading3":
                content = (
                    <h3 {...commonProps} ref={divRef} className="text-2xl font-medium outline-none" />
                );
                break;
            case "code":
                content = (
                    <pre
                        {...commonProps}
                        ref={preRef}
                        className="bg-gray-800 text-white p-3 rounded-md font-mono whitespace-pre-wrap outline-none"
                    />
                );
                break;
            case "paragraph":
                content = (
                    <p {...commonProps} ref={divRef} className="text-base outline-none" />
                );
                break;
            case "image":
                content = (
                    <div>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (!file) return;
                                const reader = new FileReader();
                                reader.onload = () => {
                                    onChange(block.id, reader.result as string);
                                };
                                reader.readAsDataURL(file);
                            }}
                        />
                        {block.content && (
                            <img
                                src={block.content}
                                className="max-w-full mt-2 rounded border"
                                alt="uploaded"
                            />
                        )}
                    </div>
                );
                break;
            default:
                content = (
                    <p {...commonProps} ref={divRef} className="text-base outline-none" />
                );
                break;
        }
    
        return (
            <div className="relative">
                {content}
                {commandBlockId === block.id && renderDropdown()}
            </div>
        );
    };
    

    return (
        <ContextMenu>
            <div
                ref={setNodeRef}
                style={style}
                className="group p-2 last:border-none flex items-start gap-2"
            >
                <div {...listeners} {...attributes} className="cursor-grab">
                    <GripVertical className="w-4 h-4" />
                </div>
                <ContextMenuTrigger className="flex-1">{renderBlock()}</ContextMenuTrigger>
            </div>
            <ContextMenuContent className="w-48">
                <ContextMenuItem onClick={() => onDuplicate(block)}>Duplicate</ContextMenuItem>
                <ContextMenuItem onClick={() => onDelete(block.id)}>Delete</ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    );
}
