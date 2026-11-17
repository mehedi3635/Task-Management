
import { ClipboardList } from "lucide-react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state text-center py-5">
        <ClipboardList size={48} className="text-secondary mb-3" />

        <h5 className="fw-bold">No tasks yet!</h5>

        <p className="text-secondary mb-0">
          Create your first task to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column gap-3">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
