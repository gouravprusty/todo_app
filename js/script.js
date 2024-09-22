const inputBox = document.querySelector("#input_box");
const addBtn = document.querySelector("#add_button");
const list = document.querySelector("#list_container");

addBtn.addEventListener("click", () => {
    if(inputBox.value === ""){
        inputBox.setAttribute("placeholder", "Please enter your task first");
    }else{
        const listItem = document.createElement("li");
        listItem.innerText = inputBox.value;
        list.appendChild(listItem);

        let dltBtn = document.createElement("button");
        dltBtn.classList.add("delete_btn");
        listItem.appendChild(dltBtn);

    }
    inputBox.value = "";
    saveData();
});
list.addEventListener("click", (event) => {
    if(event.target.nodeName == "BUTTON"){
        let toDelete = event.target.parentElement;
        toDelete.remove();
        saveData();
    }else if(event.target.nodeName == "LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
});
function saveData(){
    localStorage.setItem("data", list.innerHTML);
};
function showTask(){
    list.innerHTML = localStorage.getItem("data");
};
showTask();