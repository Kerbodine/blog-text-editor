import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import {
  BiClipboard,
  BiCodeBlock,
  BiCopy,
  BiDownArrowCircle,
  BiLoaderAlt,
  BiSave,
} from "react-icons/bi";

export default function TextEditor() {
  const editorRef = useRef(null);
  const [editorLoading, setEditorLoading] = useState(true);

  const log = () => {
    if (editorRef.current) {
      navigator.clipboard.writeText(editorRef.current.getContent());
    }
  };

  return (
    <div className="w-screen h-screen p-4 bg-white flex flex-col gap-4">
      <div className="flex-auto rounded-2xl overflow-hidden bg-gray-100">
        {editorLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <BiLoaderAlt className="text-4xl text-black animate-spin" />
          </div>
        ) : null}
        <Editor
          onInit={(evt, editor) => {
            editorRef.current = editor;
            setEditorLoading(false);
          }}
          id="tinymce-editor"
          apiKey="9jz5ulzyll0jkomjnscn6f2rm725w3kuuu6eoay5e974vhm7"
          init={{
            skin: "snow",
            browser_spellcheck: true,
            content_css: "writer",
            height: "100%",
            menubar: false,
            resize: false,
            plugins: [
              "advlist autolink lists link charmap print preview anchor",
              "searchreplace visualblocks code fullscreen preview emoticons print",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | styleselect | bold italic underline strikethrough superscript subscript | numlist bullist | alignleft aligncenter alignright alignjustify | outdent indent | forecolor backcolor removeformat | table hr link charmap emoticons code | pagebreak | preview fullscreen print | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </div>
      <div className="flex gap-4">
        <button
          className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-2xl hover:bg-accent text-2xl hover:text-white"
          onClick={log}
        >
          <BiClipboard />
        </button>
        <button
          className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-2xl hover:bg-accent text-2xl hover:text-white"
          onClick={log}
        >
          <BiCodeBlock />
        </button>
        <button
          className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-2xl hover:bg-accent text-2xl hover:text-white"
          onClick={log}
        >
          <BiDownArrowCircle />
        </button>
        <button
          className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-2xl hover:bg-accent text-2xl hover:text-white"
          onClick={log}
        >
          <BiSave />
        </button>
      </div>
    </div>
  );
}
