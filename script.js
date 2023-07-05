let todoList = [];
let todoListContainer = document.getElementById("todo-list-container");
let newTask = document.getElementById("new-task");

const addTodo = () => {
    if (newTask.value.trim() === "") {
        alert("Вы ничего не ввели");
    } else {
        let task = {name: newTask.value, status: false, id: todoList.length}
        todoList.push(task);
        saveTodoList();
        printTask(task);
        newTask.value = '';
    }
}
const deleteTask = (id) => {
    todoList.splice(id, 1);
    saveTodoList();
    todoListContainer.innerHTML = '';
    for (let i = id; i < todoList.length; i++) {
        todoList[i].id = i;
    }
    printList();
}

const completeTodo = (id) => {
    todoList[id].status = !todoList[id].status;
    saveTodoList();
    todoListContainer.innerHTML = '';
    printList();
}

const printList = () => {
    todoListContainer.innerHTML = '';
    todoList.forEach(printTask);
}

const printTask = (task) => {
    todoListContainer.innerHTML +=
        `
        <div class="task-container">
            <div class="task-name ${task.status ? 'completed-task' : ''}">${task.name}</div>
            <button onclick="deleteTask(${task.id})" class="delete-button">Удалить дело</button>
            <button onclick="completeTodo(${task.id})" class="complete-button">Выполнено</button>
            <div style="border-bottom: 1px solid black; margin-top: 10px">
            
            </div>
        </div>
    `
}
const saveTodoList = () => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
}

const loadTodoList = () => {
    const savedTodoList = localStorage.getItem("todoList");
    if (savedTodoList) {
        todoList = JSON.parse(savedTodoList);
        printList();
    }
}

loadTodoList();
printList();