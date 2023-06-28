let todoList = [];
function addTodo() {
    let todoInput = document.getElementById("input");
    let newTodo = todoInput.value;
    if (newTodo.trim() === "") {
        alert("Вы ничего не ввели");
        return;
    }
    todoList.push(newTodo);
    todoInput.value = "";
    renderTodoList();
}
function deleteTodo(index) {
    todoList.splice(index, 1);
    renderTodoList();
}

function renderTodoList() {
    let todoListContainer = document.getElementById("todoListContainer");
    todoListContainer.innerHTML = "";
    todoList.forEach(function(todo, index) {
        let listItem = document.createElement("li");
        listItem.innerText = todo;
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Удалить";
        deleteButton.addEventListener("click", function() {
            deleteTodo(index);
        });
        listItem.appendChild(deleteButton);
        todoListContainer.appendChild(listItem);
    });
}