//lista de tareas
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//funcion para llevar tareas 
export const getTasks = () => tasks;

//funcion para agregar una tarea 
export const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
    };
    tasks.push(newTask);
    console.log("tasks, ", tasks)
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//funcion para eliminar una tarea
export const deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== parseInt(id));
    localStorage.setItem("tasks", JSON.stringify(tasks));
};
//funcion para actualizar una tarea
export const toggleTask = (id) => {
    tasks = tasks.map((task) => {
        if(task.id === parseInt(id)) {
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
};