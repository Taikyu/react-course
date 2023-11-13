import React, { useState } from "react";

import BasePage from "./components/BasePage.jsx";
import NewProject from "./components/NewProject.jsx";
import SideBar from "./components/SideBar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  const filteredTasks = projectState.tasks.filter(
    (task) => task.projectId === projectState.selectedProjectId
  );

  // for tasks

  function handleDeleteTask(id) {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        tasks: prevProjectState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleAddTask(collectedNewTask, selectedProjectId) {
    setProjectState((prevProjectState) => {
      const taskId = Math.random();
      const newTask = {
        id: taskId,
        text: collectedNewTask,
        projectId: selectedProjectId,
      };

      return {
        ...prevProjectState,
        tasks: [...prevProjectState.tasks, newTask],
      };
    });
  }

  // for projects

  function handleAddNewProject(projectData) {
    const projectId = Math.random();
    const newProject = { id: projectId, ...projectData, tasks: [] };
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        projects: [...prevProjectState.projects, newProject],
        selectedProjectId: undefined,
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProjectId: undefined,
        projects: prevProjectState.projects.filter(
          (project) => prevProjectState.selectedProjectId !== project.id
        ),
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevProjectState) => {
      return { ...prevProjectState, selectedProjectId: id };
    });
  }

  function handleAddProject() {
    setProjectState((prevProjectState) => {
      return { ...prevProjectState, selectedProjectId: null };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevProjectState) => {
      return { ...prevProjectState, selectedProjectId: undefined };
    });
  }

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={filteredTasks}
    />
  );

  if (projectState.selectedProjectId === undefined) {
    content = <BasePage onAddProject={handleAddProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onAdd={handleAddNewProject}
        onCancel={handleCancelAddProject}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onAddProject={handleAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedID={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
