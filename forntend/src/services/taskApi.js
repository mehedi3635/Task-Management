const API_BASE_URL = 'http://127.0.0.1:8000/api/';

export async function getApiTasks(){
    const response = await fetch(`${API_BASE_URL}/tasks/`);
    if (!response.ok){
        throw new Error('Failed to fetch tasks');
    }
    return response.json();
}

export async function crateApiTask(task){
    const response =await fatch(`${API_BASE_URL}/tasks/`,{
        method : "POST",
        headers:{
            'Content-Type': 'application/json', 

        },
        body: JSON.stringify(task)
    })
}