"use client";

import { useMemo, useRef } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";
import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

const WIDTH = 800;
const HEIGHT = 400;

export function WorldMap({ dots = [], lineColor = "#0ea5e9" }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const { theme } = useTheme();

  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    return map.getSVG({
      radius: 0.22,
      color: theme === "dark" ? "#FFFFFF40" : "#00000040",
      shape: "circle",
      backgroundColor: theme === "dark" ? "black" : "white",
    });
  }, [theme]);

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (WIDTH / 360);
    const y = (90 - lat) * (HEIGHT / 180);
    return { x, y };
  };

  const projectedDots = useMemo(() => {
    return dots.map((dot) => ({
      start: projectPoint(dot.start.lat, dot.start.lng),
      end: projectPoint(dot.end.lat, dot.end.lng),
    }));
  }, [dots]);

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans">
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
        priority
      />

      <svg
        ref={svgRef}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {projectedDots.map(({ start, end }, i) => (
          <motion.path
            key={`path-${i}`}
            d={createCurvedPath(start, end)}
            fill="none"
            stroke="url(#path-gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5 * i, ease: "easeOut" }}
          />
        ))}

        {projectedDots.map(({ start, end }, i) => (
          <g key={`points-${i}`}>
            {[start, end].map((point, j) => (
              <g key={j}>
                <circle cx={point.x} cy={point.y} r="2" fill={lineColor} />
                <circle cx={point.x} cy={point.y} r="2" fill={lineColor} opacity="0.5">
                  <animate attributeName="r" from="2" to="8" dur="1.5s" begin="0s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
                </circle>
              </g>
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
}
