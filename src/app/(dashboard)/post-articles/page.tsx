"use client";

import Editor from '@/components/editor/editor';
import React, { useState } from 'react'
// import {Editor} from 'novel';
// const [content, setContent] = useState<string | undefined>();

export default function Page() {
  return (
    <section className='py-24'>
      <div className='container'>
        <Editor />
      </div>
    </section>
  )
}
