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
// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.

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
      <div className="editor-container size-full">
        <ToolbarPlugin />
        <div className="flex justify-center w-full gap-24 py-5 h-full">
          <div className="editor-inner min-h-fit mb-5 h-fit w-full max-w-[800px]">
            <RichTextPlugin
              contentEditable={
                <ContentEditable className="editor-input h-full" />
              }
              placeholder={<Placeholder />}
              ErrorBoundary={LexicalErrorBoundary}
            />
            <FloatingToolbarPlugin />
            <HistoryPlugin />
            <AutoFocusPlugin />
          </div>
          <div className="">
            <LiveblocksPlugin>
              <FloatingComposer className="w-[350px]" />
              <FloatingThreads threads={threads} />
              <Comments />
            </LiveblocksPlugin>
          </div>
        </div>
      </div>
    </LexicalComposer>
  );
}
