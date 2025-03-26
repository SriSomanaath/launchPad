"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Tweet } from "react-tweet"

import { cn } from "@/lib/utils"

const tweetGridVariants = cva("max-w-4xl md:max-w-6xl px-2 mx-auto w-full", {
  variants: {
    columns: {
      1: "columns-1",
      2: "sm:columns-1", 
      3: "md:columns-1",
      4: "lg:columns-1",
      5: "xl:columns-1",
    },
  },
  defaultVariants: {
    columns: 3,
  },
})

const tweetItemVariants = cva("break-inside-avoid w-full", {
  variants: {
    spacing: {
      sm: "mb-1",
      md: "mb-1",
      lg: "mb-1",
    },
  },
  defaultVariants: {
    spacing: "md",
  },
})

export interface TweetGridProps
  extends VariantProps<typeof tweetGridVariants>,
    VariantProps<typeof tweetItemVariants> {
  tweets: string[]
  className?: string
}

function TweetGrid({ tweets, columns, spacing, className }: TweetGridProps) {
  return (
    <div className={cn(tweetGridVariants({ columns }), className)}>
      {tweets.map((tweetId, i) => (
        <div
          key={`${tweetId}-${i}`}
          className={cn(tweetItemVariants({ spacing }), "!bg-white overflow-hidden")}
        >
          <Tweet id={tweetId} />
        </div>
      ))}
    </div>
  )
}

export { TweetGrid };
