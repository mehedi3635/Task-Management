
import { useEffect, useState } from "react";
import { ClipboardList, CheckCircle2, Clock3 } from "lucide-react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getApiTasks, createApiTask } from "./services/taskApi";

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTasks() {
      try {
        setError("");
        const data = await getApiTasks();
        setTasks(data);
      } catch (error) {
        setError("Failed to fetch tasks. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, []);

  async function handleCreateTask(task) {
    try {
      setError("");
      const newTask = await createApiTask(task);
      setTasks((prevTasks) => [...prevTasks, newTask]);
      return true;
    } catch (error) {
      setError(error.message || "Failed to create task.");
      return false;
    }
  }

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.is_completed
  ).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="app-wrapper min-vh-100 py-4 py-md-5">
      <div className="container">
        {/* Header */}
        <header className="d-flex justify-content-between align-items-center mb-5">
          <div className="d-flex align-items-center gap-3">
            <div className="brand-icon">
              <ClipboardList size={25} />
            </div>
            <div>
              <h4 className="fw-bold mb-0">TaskFlow</h4>
              <small className="text-secondary">Personal Workspace</small>
            </div>
          </div>

          <span className="badge rounded-pill text-bg-primary px-3 py-2">
            My Dashboard
          </span>
        </header>

        {/* Page Heading */}
        <div className="mb-4">
          <h1 className="fw-bold display-6 mb-2">My Tasks</h1>
          <p className="text-secondary mb-0">
            Organize your work and stay productive.
          </p>
        </div>

        {/* Statistics */}
        <div className="row g-3 mb-4">
          <div className="col-12 col-md-4">
            <div className="card stat-card border-0 shadow-sm h-100">
              <div className="card-body d-flex justify-content-between align-items-center p-4">
                <div>
                  <p className="text-secondary mb-2">Total Tasks</p>
                  <h2 className="fw-bold mb-0">{totalTasks}</h2>
                </div>
                <div className="stat-icon total-icon">
                  <ClipboardList size={25} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card stat-card border-0 shadow-sm h-100">
              <div className="card-body d-flex justify-content-between align-items-center p-4">
                <div>
                  <p className="text-secondary mb-2">Completed</p>
                  <h2 className="fw-bold mb-0">{completedTasks}</h2>
                </div>
                <div className="stat-icon completed-icon">
                  <CheckCircle2 size={25} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card stat-card border-0 shadow-sm h-100">
              <div className="card-body d-flex justify-content-between align-items-center p-4">
                <div>
                  <p className="text-secondary mb-2">Pending</p>
                  <h2 className="fw-bold mb-0">{pendingTasks}</h2>
                </div>
                <div className="stat-icon pending-icon">
                  <Clock3 size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="alert alert-danger alert-dismissible fade show">
            {error}
            <button
              type="button"
              className="btn-close"
              onClick={() => setError("")}
            />
          </div>
        )}

        {/* Main Content */}
        <div className="row g-4">
          {/* Task Form */}
          <div className="col-12 col-lg-5">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-1">Create New Task</h5>
                <p className="text-secondary small mb-4">
                  Add a new task to your workspace.
                </p>

                <TaskForm onCreateTasks={handleCreateTask} />
              </div>
            </div>
          </div>

          {/* Task List */}
          <div className="col-12 col-lg-7">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <h5 className="fw-bold mb-1">Recent Tasks</h5>
                    <p className="text-secondary small mb-0">
                      Manage your daily activities.
                    </p>
                  </div>

                  <span className="badge text-bg-primary rounded-pill">
                    {totalTasks} Tasks
                  </span>
                </div>

                {loading ? (
                  <div className="text-center py-5">
                    <div className="spinner-border text-primary" />
                    <p className="text-secondary mt-2 mb-0">
                      Loading tasks...
                    </p>
                  </div>
                ) : (
                  <TaskList tasks={tasks} />
                )}
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center mt-5 text-secondary small">
          © 2026 TaskFlow. Built with React & Django.
        </footer>
      </div>
    </div>
  );
}

export default App;
