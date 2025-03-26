"use client"

import * as React from "react"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface Tab {
  id: string
  label: string
}

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: Tab[]
  activeTab?: string
  tabContent?: Record<string, React.ReactNode>
  onTabChange?: (tabId: string) => void
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, tabs, activeTab, tabContent, onTabChange, ...props }, ref) => {
    const [internalActiveTab, setInternalActiveTab] = useState(activeTab || tabs[0]?.id)
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [hoverStyle, setHoverStyle] = useState({})
    const [activeStyle, setActiveStyle] = useState({ left: "0px", width: "0px" })
    const tabRefs = useRef<(HTMLDivElement | null)[]>([])

    const currentActiveTab = activeTab ?? internalActiveTab
    const activeIndex = tabs.findIndex((tab) => tab.id === currentActiveTab)

    useEffect(() => {
      if (hoveredIndex !== null) {
        const hoveredElement = tabRefs.current[hoveredIndex]
        if (hoveredElement) {
          setHoverStyle({
            left: `${hoveredElement.offsetLeft}px`,
            width: `${hoveredElement.offsetWidth}px`,
          })
        }
      }
    }, [hoveredIndex])

    useEffect(() => {
      if (activeIndex !== -1) {
        const activeElement = tabRefs.current[activeIndex]
        if (activeElement) {
          setActiveStyle({
            left: `${activeElement.offsetLeft}px`,
            width: `${activeElement.offsetWidth}px`,
          })
        }
      }
    }, [activeIndex])

    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        <div className="relative">
          {/* Hover Highlight */}
          <div
            className="absolute h-[30px] transition-all duration-300 ease-out bg-[#0e0f1114] dark:bg-[#ffffff1a] rounded-[6px] flex items-center"
            style={{
              ...hoverStyle,
              opacity: hoveredIndex !== null ? 1 : 0,
            }}
          />

          {/* Active Indicator */}
          <div
            className="absolute bottom-[-6px] h-[2px] bg-[#0e0f11] dark:bg-white transition-all duration-300 ease-out"
            style={activeStyle}
          />

          {/* Tabs */}
          <div className="relative flex space-x-[6px] items-center">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                className={cn(
                  "px-3 py-2 cursor-pointer transition-colors duration-300 h-[30px]",
                  tab.id === currentActiveTab 
                    ? "text-[#0e0e10] dark:text-white" 
                    : "text-[#0e0f1199] dark:text-[#ffffff99]"
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  if (!activeTab) setInternalActiveTab(tab.id)
                  onTabChange?.(tab.id)
                }}
              >
                <div className="text-sm font-medium leading-5 whitespace-nowrap flex items-center justify-center h-full">
                  {tab.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Render Tab Content */}
        <div className="mt-4">
          {tabContent?.[currentActiveTab] ?? null}
        </div>
      </div>
    )
  }
)

Tabs.displayName = "Tabs"

export { Tabs }
