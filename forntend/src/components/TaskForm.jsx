import { useState } from "react"


import { Plus } from "lucide-react";

export default function TaskForm() {
    const [title,setTitle] =useState()
    const [descrioption, setDescrioption] =useState()

    function handelSubmit(event){
        event.preventDefult();
    }
    return (
        <form onSubmit={handelSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" id="description" rows="3" value={descrioption} onChange={(e)=>setDescrioption(e.target.value)}></textarea>
            </div>
            <button type="submit" className="btn btn-primary"><Plus/> Add Task</button>
        </form>
    )

}