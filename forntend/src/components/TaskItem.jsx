import { Check, Trash, Undo2 } from "lucide-react";

export default function TaskItem({task, onDelete, onToggle}) {
    return (
        <div className="card mb-3">  
       <li>
        <h2>
            Task Title:
        </h2>
        <p>
            Task Description
        </p>
        <p>
            cerate at: 
        </p>
       </li>
    </div>
    )
    }