//importar la funcion para las tareas del localStorage
import { getTasks } from "./task";

//funcion para visualizar las tareas 
export const renderTasks = () => {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    const tasks = getTasks();
    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);

        if(task.completed === true) {
            li.classList.add("completed");
        }

        li.innerHTML = `
        ${task.text}
        <button class="delete"> borrar </button>
        <button class="toggle"> ${task.completed === true ? "regresar" : "complete"} </button>  
              `;
             
              taskList.appendChild(li);  
    });
};