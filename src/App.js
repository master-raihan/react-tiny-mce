import React from "react";
import Editor from "./Editor";

function App() {
    const [text, setText] = React.useState("");
    const [theme, setTheme] = React.useState({});

  function handleEditorChange (e,h){
    setText(e);
  }

  const themes = {
      dark: {
          skin: "oxide-dark",
          css: "dark",
      }
  }


  function handleThemeChange (t){
      setTheme(themes[t]);
  }

  return (
      <>
          <div style={{ display: "flex", margin: "20px" }}>
              <button>Light</button>
              <button onClick={()=>{ handleThemeChange("dark") }}>Dark</button>
          </div>
          <Editor
              apiKey="56rg3jkcwt76o5sqe7qnj3qmlqan8lcnd8u1vedrx4q61ekk"
              theme={theme}
              onChange={handleEditorChange}
          />

          {text}
      </>
  );
}

export default App;
