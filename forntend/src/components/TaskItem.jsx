
import { CheckCircle2, Clock3 } from "lucide-react";

export default function TaskItem({ task,ondelete }) {
  const formattedDate = task.created_at
    ? new Date(task.created_at).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "Unknown";

  return (
    <div className="task-item card border-0 bg-light rounded-3">
      <div className="card-body p-3">
        <div className="d-flex justify-content-between align-items-start gap-2">
          <div className="flex-grow-1">
            <h6 className="fw-bold mb-2">{task.title}</h6>

            <p className="text-secondary small mb-3">
              {task.description || "No description provided."}
            </p>
          </div>

          {task.is_completed ? (
            <span className="badge text-bg-success">
              <CheckCircle2 size={12} className="me-1" />
              Completed
            </span>
          ) : (
            <span className="badge text-bg-warning">
              <Clock3 size={12} className="me-1" />
              Pending
            </span>
          )}
        </div>

        <div className="d-flex justify-content-between align-items-center border-top pt-2">
          <small className="text-secondary">
            Created: {formattedDate}
          </small>

          <small className="text-secondary">
            #{task.id}
          </small>
        </div>
        <div className="d-flex justify-content-end mt-2">
          <button
            className="btn btn-sm btn-danger"
            onClick={() => ondelete(task.id)}
          >
            Delete
          </button>
        </div>  
      </div>
    </div>
  );
}
