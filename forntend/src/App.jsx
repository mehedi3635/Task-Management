import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
function App() {
  return (
    <div className="container py-5">
      <main>
        <section >
          <header>
            <div>
              <h1>Task Manager</h1>
            </div>
          </header>
          <TaskForm />
          <br />
          <TaskList />
        </section>
      </main>



    </div>
  );
}

export default App;
