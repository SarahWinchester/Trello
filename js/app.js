//Adding the element from HTML
var buttonTask = document.getElementById("addThisList");
var listAndTaskContents = document.getElementById("InputTaskCont");

//Creating function - create elements
buttonTask.addEventListener('click', function(){
//Erasing button who calls the function
  listAndTaskContents.removeChild(buttonTask);
//Creating first box content and the biggest one
  var principalTaskDiv = document.createElement("div");
    principalTaskDiv.id = "principalTaskDivId"
//creating the input who will collect the name of the task list and setting the attributes
  var inputNameList = document.createElement("input");
    inputNameList.setAttribute("placeholder", "List Name");
    inputNameList.id ="inputNameListId";
//creating Save button  for the name inputNameList
  var saveButtonNameList = document.createElement("button");
  var saveButtonNameListText= document.createTextNode("Save");
    saveButtonNameList.id = "saveButtonNameListId";
    saveButtonNameList.appendChild(saveButtonNameListText);
// Creating Cancel Button
  var CancelButtonNameList = document.createElement("button");
  var CancelButtonNameListText= document.createTextNode("X");
    CancelButtonNameList.id = "CancelButtonNameListId";
    CancelButtonNameList.appendChild(CancelButtonNameListText);
//Creating Span to contain buttons
  var buttonsAddListContainer = document.createElement("div")
//Adding everything to firstDivContainer
  principalTaskDiv.appendChild(inputNameList)
    //this will add buttons to an a span
  buttonsAddListContainer.appendChild(saveButtonNameList);
  buttonsAddListContainer.appendChild(CancelButtonNameList);
//Adding button Container to firstDivContainer
  principalTaskDiv.appendChild(buttonsAddListContainer);
  //adding to the body
  document.body.appendChild(principalTaskDiv);
});
