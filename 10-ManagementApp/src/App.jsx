import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar";
import { useState } from "react";
function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
  });
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectsSidebar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
