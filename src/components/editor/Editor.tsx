"use client";

import Theme from "./plugins/Theme";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { HeadingNode } from "@lexical/rich-text";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import React from "react";
import {
  FloatingComposer,
  FloatingThreads,
  liveblocksConfig,
  LiveblocksPlugin,
} from "@liveblocks/react-lexical";
import FloatingToolbarPlugin from "./plugins/FloatingToolBarPlugin";
import { useThreads } from "@liveblocks/react/suspense";
import Comments from "../lectures/Comments";

function Placeholder() {
  return <div className="editor-placeholder">Enter some rich text...</div>;
}

export function Editor() {
  const { threads } = useThreads();
  const initialConfig = liveblocksConfig({
    namespace: "Editor",
    nodes: [HeadingNode],
    onError: (error: Error) => {
      console.error(error);
      throw error;
    },
    theme: Theme,
    editable: true,
  });

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor-container w-full mx-auto p-4">
        <ToolbarPlugin />
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center w-full gap-6 py-5">
          <div className="editor-inner w-full lg:w-[65%] mb-5 h-fit max-w-full lg:max-w-[800px]">
            <RichTextPlugin
              contentEditable={
                <ContentEditable className="editor-input h-full p-2" />
              }
              placeholder={<Placeholder />}
              ErrorBoundary={LexicalErrorBoundary}
            />
            <FloatingToolbarPlugin />
            <HistoryPlugin />
            <AutoFocusPlugin />
          </div>

          <div className="w-full lg:w-[35%] max-w-full lg:max-w-[800px]">
            <LiveblocksPlugin>
              <FloatingComposer className="w-full lg:w-[350px]" />
              <FloatingThreads threads={threads} />
              <Comments />
            </LiveblocksPlugin>
          </div>
        </div>
      </div>
    </LexicalComposer>
  );
}
