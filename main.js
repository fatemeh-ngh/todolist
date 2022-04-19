const input = document.querySelector(".search-box").querySelector("input");
const plusIcon = document.querySelector(".search-box").querySelector("i");
const ul = document.querySelector(".todo-container").querySelector("ul");


plusIcon.addEventListener("click", addToDo);

function addToDo(){
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
    
    savetodo();
    input.value = "";
}
function savetodo(){
    let todos = [];
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(input.value)
    localStorage.setItem("todos", JSON.stringify(todos));
}


ul.addEventListener("click", donetrash);

function donetrash(event){
    if(event.target.classList = "i-tik fa-solid fa-check"){
        event.target.classList.toggle("done-todo")
        // ul.li.classList.add("done-todo")
    }
}
// localStorage.clear();

