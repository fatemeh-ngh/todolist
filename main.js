const input = document.querySelector(".search-box").querySelector("input");
const plusIcon = document.querySelector(".search-box").querySelector("i");
const ul = document.querySelector(".todo-container").querySelector("ul");
const filtertodo = document.querySelector(".filter-todo");

plusIcon.addEventListener("click", addToDo);

function addToDo(event){
    let li = document.createElement("li");
    let trash = document.createElement("i");
    trash.classList = "i-trash fa-solid fa-trash-can";
    let chek = document.createElement("i");
    chek.classList= "i-tik fa-solid fa-check";
    li.innerText = input.value;
    li.appendChild(chek);
    li.appendChild(trash);
    li.classList = "todo";
    ul.appendChild(li);
    savetodo(input.value);
    input.value = "";
}
function savetodo(todo){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos));
}

ul.addEventListener("click", donetrash);
function donetrash(event){
    const item = event.target;
    const todo = item.parentElement;
    if (item.classList[0] == 'i-tik') {
        todo.classList.toggle("done-todo");
    }
    if (item.classList[0] == 'i-trash') {
        todo.remove();
        removeFromLocalStorage(todo);
    }
}
function removeFromLocalStorage(todo){
    let todos;
    const todoindex = todo.innerText;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.splice(todos.indexOf(todoindex), 1)
    localStorage.setItem("todos", JSON.stringify(todos));
}

filtertodo.addEventListener("click", filteredtodo)
function filteredtodo(event){
    const todos = ul.childNodes;
    todos.forEach(todo => {
        switch(event.target.value){
            case "All":
                todo.style.display = "flex";
                break;
            case "Complated":
                if(todo.classList.contains("done-todo")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                };
                break;
            case "Uncompalted":
                if(todo.classList.contains("done-todo")){
                    todo.style.display = "none";
                }else{
                    todo.style.display = "flex";
                };
                break;
        }
    })
    
}

