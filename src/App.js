import React from "react";
import "./style/master.scss";
import Project from "./components/Project";
import { projects } from "./data/projects";

console.log(projects);

function App() {
   return (
      <>
         <h1 className="text-danger">Hello world again</h1>
         <Project />
      </>
   );
}

export default App;
