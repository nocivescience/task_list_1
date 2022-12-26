import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./componentes/Home";
import { Navbar } from "./componentes/Navbar";
import { TaskList } from "./componentes/TaskList";
import { Contacts } from "./componentes/Contacts";
import { Products } from "./componentes/Products";
import { Formulario } from "./componentes/Fortmulario";
import { data } from "./actividades";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);
  function createTask(taskTitle) {
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        id: tasks.length,
        description: "que mirai",
      },
    ]);
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskList tasks={tasks} />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/formulario"
            element={<Formulario createTask={createTask} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
