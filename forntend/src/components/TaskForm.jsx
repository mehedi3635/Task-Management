
import { useState } from "react";
import { Plus } from "lucide-react";

export default function TaskForm({ onCreateTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim()) return;

    setSubmitting(true);

    try {
      const success = await onCreateTasks({
        title: title.trim(),
        description: description.trim(),
        is_completed: false,
      });

      if (success) {
        setTitle("");
        setDescription("");
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label fw-semibold">
          Task Title
        </label>

        <input
          type="text"
          className="form-control form-control-lg custom-input"
          id="title"
          placeholder="Enter your task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={200}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="form-label fw-semibold">
          Description
        </label>

        <textarea
          className="form-control custom-input"
          id="description"
          rows="5"
          placeholder="Write something about your task..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary w-100 py-2 fw-semibold"
        disabled={submitting || !title.trim()}
      >
        {submitting ? (
          <>
            <span className="spinner-border spinner-border-sm me-2" />
            Adding Task...
          </>
        ) : (
          <>
            <Plus size={19} className="me-2" />
            Add Task
          </>
        )}
      </button>
    </form>
  );
}
