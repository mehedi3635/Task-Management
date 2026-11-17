import { Check, Trash, Undo2 } from "lucide-react";

export default function TaskItem({task}) {
    return (
        <div className="card mb-3">  
       <li>
        <h2>
            Task Title:{task.title}
        </h2>
        <p>
            Task Description:{task.description}
        </p>
        <p>
            cerate at: {task.created_at}
        </p>
       </li>
    </div>
    )
    }