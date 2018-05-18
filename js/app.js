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
//Creating the box who will contain input and buttons
  var SecondBoxContainer = document.createElement("div")
    SecondBoxContainer.id = "SecondBoxContainerId"
//Creating Span to contain buttons
  var buttonsAddListContainer = document.createElement("div")
//Adding everything to firstDivContainer
  principalTaskDiv.appendChild(SecondBoxContainer);
  //this will add the input to the secondContainer
  SecondBoxContainer.appendChild(inputNameList);
  //this will add buttons to an a span
  buttonsAddListContainer.appendChild(saveButtonNameList);
  buttonsAddListContainer.appendChild(CancelButtonNameList);
  //Adding buttonBox to secondContainer
  SecondBoxContainer.appendChild(buttonsAddListContainer);
//Adding to the body
  document.body.appendChild(principalTaskDiv);

//Creating Functionality for saveButton
saveButtonNameList.addEventListener('click', function(){
  //Takes the text from the input
  var titleElementNameTask = document.getElementById('inputNameListId').value;
   titleElementNameTask.id = "divTitleValue";
  //Creates a Div to use it as a title
  var titlePrincipalBox = document.createElement("h4");
  var titlePrincipalBoxText = document.createTextNode(titleElementNameTask);
  titlePrincipalBox.appendChild(titlePrincipalBoxText);
  principalTaskDiv.appendChild(titlePrincipalBox);
//Earsing the inputbox
  principalTaskDiv.removeChild(SecondBoxContainer);
//Creating the AddTaskBox
  var addTaskDiv = document.createElement("a");
  var addTaskDivText = document.createTextNode("Add Task");
   addTaskDiv.appendChild(addTaskDivText);
   principalTaskDiv.appendChild(addTaskDiv);
//function with the textArea
addTaskDiv.addEventListener('click', function(){
  principalTaskDiv.removeChild(addTaskDiv);
//creating textArea  


});

});


});
