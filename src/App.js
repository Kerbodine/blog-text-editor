import { useEffect, useState } from "react";
import TextEditor from "./TextEditor";
import { SettingsProvider } from "./SettingsContext";
import Alert from "./Alert";
import { BiCheckCircle } from "react-icons/bi";

function App() {
  const settingsData = {
    h1: {
      "font-size": "2.25rem",
      "line-height": "2.25rem",
    },
    h2: {
      "font-size": "2rem",
      "line-height": "2rem",
    },
    h3: {
      "font-size": "1.75rem",
      "line-height": "1.75rem",
    },
    h4: {
      "font-size": "1.5rem",
      "line-height": "1.5rem",
    },
    h5: {
      "font-size": "1.25rem",
      "line-height": "1.25rem",
    },
    h6: {
      "font-size": "1rem",
      "line-height": "1.25rem",
    },
    p: {
      "font-size": "1rem",
      "line-height": "1.125rem",
    },
  };

  const [settings, setSettings] = useState(settingsData);
  const [copyData, setCopyData] = useState(false);

  useEffect(() => {
    if (copyData) {
      setCopyData(true);
    }
    const banner = setTimeout(() => {
      setCopyData(false);
    }, 2500);
    return () => {
      clearTimeout(banner);
    };
  }, [copyData]);

  return (
    <div className="App w-full relative">
      <SettingsProvider
        value={{ settings: settings, setSettings: setSettings }}
      >
        <Alert
          message="Copied HTML to clipboard"
          icon={<BiCheckCircle />}
          visible={copyData}
        />
        <TextEditor setCopyData={setCopyData} />
        <div class="editor-content">{/* Paste test html content */}</div>
      </SettingsProvider>
    </div>
  );
}

export default App;
