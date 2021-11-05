const inputOneTask = document.getElementById("new-task");
const addBtn = document.getElementById("add-button");
const notCompleteTask = document.getElementById("to-do-task");
const completedTasks = document.getElementById("completed-task");


//Funktion för att skapa element när man ska lägga de till "Att göra".
function createListElement(inputString){

    // Variabler för alla ny-skapade element.
    let listElement = document.createElement('li');
    let listContent = document.createElement('input');
    let label = document.createElement('label');
    let editButton = document.createElement('button');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    // Alla nya elements olika värden, namn och klassnamn.
    listContent.value = inputString;
    listContent.setAttribute('readonly', 'readonly');
    listContent.id = "edit-task";
    editButton.innerHTML = "Ändra";
    editButton.id = "edit-button";
    doneButton.innerHTML = "Färdig";
    doneButton.id = "done-button";
    deleteButton.innerHTML = "Radera";
    deleteButton.id = "delete-button";

    
    deleteButton.onclick = deleteListElement;
    doneButton.onclick = completedList;
    editButton.onclick = editTask;


    
    //För att allt ska kunna synas i browsern behövs append metoden..
    listElement.append(label, listContent, editButton, doneButton, deleteButton);

    return listElement;

}

// Funktion för att hämta och lägga över sin nya "task" till sin "Att göra" lista. 
function addToList(){
    let newTask = createListElement(inputOneTask.value);
    notCompleteTask.appendChild(newTask);
    inputOneTask.value = "";
    
}
//klick event när man trycker på "lägg till" knappen.
addBtn.addEventListener('click', addToList);

//Funktion för att ta bort en punkt i listan
function deleteListElement(){
    let taskToRemove = this.parentNode;
    let list = taskToRemove.parentNode;
    list.removeChild(taskToRemove);   
}

//Funktion för att flytta en punkt från "Att göra" till "Klara!" listan.
function completedList() {
    let removeDoneBtn = document.getElementById('done-button');
    let completed= this.parentNode;
    completedTasks.appendChild(completed).removeChild(removeDoneBtn); 

}

function editTask(){
    
    let taskToChange = this.parentNode;
    let buttonElement = document.getElementById('edit-button');
    
    taskToChange.addEventListener("click", function(e){
        buttonElement.innerHTML = "Spara";
        e.target.removeAttribute('readonly', 'readonly');        
    });
}