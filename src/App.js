import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./App.css";

const App = () => {
  const commands = [
    {
      command: "reset",
      callback: ({ resetTranscript }) => {
        resetTranscript();
      },
    },
    {
      command: "clear",
      callback: ({ resetTranscript }) => resetTranscript(),
    },
    {
      command: "open *",
      callback: (site) => {
        window.open("http://" + site);
      },
    },
    {
      command: "increase text size",
      callback: () => {
        document.getElementById("content").style.fontSize = "30px";
      },
    },
    {
      command: "decrease text size",
      callback: () => {
        document.getElementById("content").style.fontSize = "15px";
      },
    },
    {
      command: "change text colour to *",
      callback: (color) => {
        document.getElementById("content").style.color = color;
      },
    },
  ];

  SpeechRecognition.startListening({ continuous: true, language: "en" });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition(
    { commands }
  );

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div className="container">
      <div className="nav">
        <h2>
          Hey, buddy! What's up! <br />
          Speak something to write here:
        </h2>
      </div>
      <div id="content">{transcript}</div>
    </div>
  );
};
export default App;
