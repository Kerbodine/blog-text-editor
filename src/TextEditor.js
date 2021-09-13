import React, { useContext, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import {
  BiClipboard,
  BiCodeBlock,
  BiDownArrowCircle,
  BiLoaderAlt,
  BiSave,
} from "react-icons/bi";
import { RiReactjsLine, RiHtml5Line } from "react-icons/ri";
import { SettingsConsumer } from "./SettingsContext";

export default function TextEditor({ setCopyData }) {
  const editorRef = useRef(null);
  const [editorLoading, setEditorLoading] = useState(true);

  const copyHTML = () => {
    if (editorRef.current) {
      navigator.clipboard.writeText(editorRef.current.getContent());
      setCopyData(true);
    }
  };

  const copyReactElement = () => {};

  const downloadHTML = () => {};

  const saveFile = () => {};

  const getStyles = (tag) => {
    return Object.keys(tag)
      .map((css) => css + ":" + tag[css] + ";")
      .join(" ");
  };

  return (
    <div className="w-screen h-screen p-4 bg-white flex flex-col gap-4">
      <div className="flex-auto rounded-2xl overflow-hidden bg-gray-100">
        {editorLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <BiLoaderAlt className="text-4xl text-black animate-spin" />
          </div>
        ) : null}
        <SettingsConsumer>
          {({ settings, setSettings }) => {
            return (
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
                    "searchreplace visualblocks code fullscreen preview emoticons print image pageembed hr",
                    "insertdatetime media table paste code help wordcount",
                  ],
                  toolbar:
                    "undo redo | styleselect | bold italic underline strikethrough superscript subscript | numlist bullist | alignleft aligncenter alignright alignjustify | forecolor backcolor | image media pageembed table hr link charmap emoticons code | pagebreak | preview fullscreen print | help",
                  // content_style:
                  //   `h1 { ${getStyles(settings.h1)} }` +
                  //   `h2 { ${getStyles(settings.h2)} }` +
                  //   `h3 { ${getStyles(settings.h3)} }` +
                  //   `h4 { ${getStyles(settings.h4)} }` +
                  //   `h5 { ${getStyles(settings.h5)} }` +
                  //   `h6 { ${getStyles(settings.h6)} }` +
                  //   `div { ${getStyles(settings.p)} }`,
                  formats: {
                    // Changes the default format for h1 to have a class of heading
                    h1: {
                      block: "h1",
                      classes: "text-4xl font-bold",
                    },
                    h2: {
                      block: "h2",
                      classes: "text-3xl font-bold",
                    },
                    h3: {
                      block: "h3",
                      classes: "text-2xl font-bold",
                    },
                    h4: {
                      block: "h4",
                      classes: "text-xl font-bold",
                    },
                    h5: {
                      block: "h5",
                      classes: "text-lg font-bold",
                    },
                    h6: {
                      block: "h6",
                      classes: "text-base font-bold",
                    },
                    ol: {
                      block: "ol",
                      classes: "editor-content",
                    },
                    ul: {
                      block: "ul",
                      classes: "editor-content",
                    },
                    li: {
                      block: "li",
                      classes: "editor-content",
                    },
                  },
                }}
              />
            );
          }}
        </SettingsConsumer>
      </div>
      <div className="flex gap-4">
        <button
          className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-2xl hover:bg-accent text-2xl hover:text-white"
          onClick={copyHTML}
        >
          <BiClipboard />
        </button>
        <button className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-2xl hover:bg-accent text-2xl hover:text-white">
          <RiReactjsLine />
        </button>
        <button className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-2xl hover:bg-accent text-2xl hover:text-white">
          <RiHtml5Line />
        </button>
        <button className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-2xl hover:bg-accent text-2xl hover:text-white">
          <BiSave />
        </button>
      </div>
    </div>
  );
}
