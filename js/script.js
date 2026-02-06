//Temporary storage for to-do items
let todos = [];

//Function to add a new to-do item
function addToDo() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');

//Simple validation to check if input are filled (both of them))
    if (todoInput.value.trim() === '' || todoDate.value === '') {
        alert('Please enter a to-do item and due date.');
    } else {
        // Create a new to-do object
        const newToDo = {
            text: todoInput.value.trim(),
            date: todoDate.value
        };
        // Add the new to-do to the list
        todos.push(newToDo);

        // Clear the input fields after adding
        todoInput.value = '';
        todoDate.value = '';

        // Render the updated to-do list
        renderToDos();
    }
}

///Function to render the to-do list to the DOM
function renderToDos() {
    const todoList = document.getElementById('todo-list');
    
    //Clear existing list
    todoList.innerHTML = '';

    // Render each to-do item
    todos.forEach((item, _) => {
        todoList.innerHTML += `
            <li class="list-disc ml-6">
            <p class="text-base">${item.text} <span class= "text-sm text-gray-500">(${item.date})</span></p>
            <hr />
            </li>`;
    });
}


//Function to delete all to-do items
function deleteAllToDos() {
    todos = [];
    renderToDos();
}

//Function to filter to-do items (example: show only items with a specific keyword)
function filterTodos() {
    ///To be implemented
}