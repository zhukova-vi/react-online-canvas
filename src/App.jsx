import React from "react";
import SettingBar from "./components/SettingBar";
import ToolBar from "./components/ToolBar";
import Canvas from "./components/Canvas"
import "./styles/app.scss"

const App = () => {
  return (
    <div className="app">
      <ToolBar></ToolBar>
      <SettingBar></SettingBar>
      <Canvas></Canvas>
    </div>
  )
}
export default App;
