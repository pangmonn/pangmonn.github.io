const list = document.querySelector("#list");
const todo_input = document.querySelector("#list_input");
const btn = document.querySelector("#list_btn");
let toDos = [];

btn.addEventListener("click",handleClick);

function handleClick(event) {
    event.preventDefault();
    const new_value = todo_input.value;
    addNewNode(new_value);
    todo_input.value = "";
}

function addNewNode(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.addEventListener("click",deleteToDo);
    delBtn.innerHTML = "X";
    const span = document.createElement("span");
    span.innerHTML = text;
    const new_id = toDos.length + 1;
    li.id = new_id;
    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);

    
    const toDoObj = {
        text,
        id:new_id,
    }
    toDos.push(toDoObj);
    saveToDos();
}

function saveToDos() {
    localStorage.setItem("toDos",JSON.stringify(toDos));
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    list.removeChild(li);
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    }); //삭제된 id 빼고 다 저장
    toDos = cleanToDos;
    saveToDos();
}

function loadToDos() {
    const load = localStorage.getItem("toDos");
    if(load !== null) {
        const parsedToDos = JSON.parse(load);
        parsedToDos.forEach(element => {
            addNewNode(element.text);
        });
    }
}

loadToDos();