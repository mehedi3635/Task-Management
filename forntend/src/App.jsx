
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import {getApiTasks, crateApiTask} from "./services/taskApi";
import { useEffect, useState } from "react";

function App() {

  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchTasks() {
      try {
        setError("");
        const data = await getApiTasks();
        setTasks(data);
      } catch (error) {
        setError("Failed to fetch tasks");
      }
    }

    fetchTasks();
  
}, []);

async function handleCreateTask(task) {
  try {
    setError("");
    const newTask = await crateApiTask(task);
    setTasks((prevTasks) => [...prevTasks, newTask]);
  } catch (error) {
    setError(error);
  }
}
  return (
    <div className="container py-5">
      <main>
        <section >
          <header>
            <div>
              <h1>Task Manager</h1>
            </div>
          </header>
          <TaskForm  oncreatetasks={handleCreateTask}/>
          <br />
          <TaskList />
        </section>
      </main>



    </div>
  );
}

export default App;
