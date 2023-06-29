let todoList = [];

addTodo = () => {
    let todoInput = document.getElementById("input");
    let newTodo = todoInput.value;
    if (newTodo.trim() === "") {
        alert("Вы ничего не ввели");
        return;
    }
    todoList.push(newTodo);
    todoInput.value = "";
    displayTodoList();
}
displayTodoList = () => {
    let todoListContainer = document.getElementById("todoListContainer");
    todoListContainer.innerHTML = "";
    todoList.forEach(function (todo, index) {
        let listItem = document.createElement("li");
        listItem.innerText = todo;
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Удалить";
        deleteButton.addEventListener("click",  () => {
            deleteTodo(index);
        });
        let completeButton = document.createElement("button");
        completeButton.innerText = "Выполнено";
        completeButton.addEventListener("click",  () => {
            completeTodo(index);
        });

        listItem.appendChild(deleteButton);
        listItem.appendChild(completeButton);
        todoListContainer.appendChild(listItem);
    });
}

deleteTodo = (index) => {
    todoList.splice(index, 1);
    displayTodoList();
}
 completeTodo = (index) => {
    if (todoList[index].completed) {
        todoList[index].completed = true;
        let listItem = document.getElementsByTagName("li")[index];
        displayTodoList()
    } else {
        todoList[index].completed = false;
        let listItem = document.getElementsByTagName("li")[index];
        listItem.style.color = "green";
    }
}
