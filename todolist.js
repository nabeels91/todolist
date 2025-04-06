const heading = document.querySelector('.heading');
heading.style.color = "blue";

const userInput = document.querySelector('input');
const addButton = document.querySelector('.addButton');

function addItemToList(){

    const itemDetails = userInput.value;
    userInput.value = "";

    const addLi = document.createElement('li');
    const addSpan = document.createElement('span');
    const addDeleteButton = document.createElement('button');

    addSpan.textContent = itemDetails;
    addDeleteButton.textContent = "delete";
    
    addLi.append(addSpan);
    addLi.append(addDeleteButton);
    unorderedList.append(addLi);

    // addDeleteButton.addEventListener('click', ()=> {
    //     unorderedList.removeChild(addLi);

    // });
    function deleteAction(){
        unorderedList.removeChild(addLi);
    }
    addDeleteButton.addEventListener('click', deleteAction);
  
}

addButton.addEventListener('click', () => {
    addItemToList();
        
    });

//let enter do the same as t5he click
userInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        addItemToList();
    }
});
 
 
 //const unorderedList = document.querySelector('ul');


// const addButton = document.querySelector("#addItemButton");
// const toDoList = document.querySelector("#toDoList");
// const itemInput = document.querySelector("#itemInput");

// // Add new item to the list
// function addItem() {
//     const itemText = itemInput.value;
//     itemInput.value = ""; // Clear input after adding

//     // Create a new list item with a delete button
//     const newItem = document.createElement("li");

//     // Set the text content directly on the li element
//     newItem.textContent = itemText ; 
    
//     // Create and configure the delete button
//     const deleteButton = document.createElement("button");
//     deleteButton.className = "deleteBtn";
//     deleteButton.textContent = "delete";

//     // Attach the cleaner delete handler
//     deleteButton.addEventListener('click', () => {
//         deleteItem(newItem);
//     });

    
    
//     // Append the button to the li
//     newItem.append(deleteButton);

//     //Append new item to the list
//     toDoList.append(newItem);
    
// }

// //this has to be out otherwise it is a recurrsive function and may act in an unorthadox way.
// addButton.addEventListener('click',addItem);
// // Delete an item when its delete button is clicked
// function deleteItem(listItem) {
//     toDoList.removeChild(listItem);
// }

// // Allow pressing Enter to add an item
// itemInput.addEventListener("keydown", (event) => {
//     if (event.key === "Enter") {  // Check if Enter was pressed
//         addItem();  // Trigger the add function
//     }
// });


//another method to implement the same thing


 
// const list = document.querySelector('ul'); // select the ul in the html 
// const input = document.querySelector('input'); // select the input box from html
// const button = document.querySelector('button'); // select the add item button from html

// function addItemToList(){
//     const myItem = input.value;
//     input.value = '';

//     const listItem = document.createElement("li");
//     const listText = document.createElement("span");
//     const listBtn = document.createElement("button");

//     listText.textContent = myItem;
//     listBtn.textContent = 'delete';

//     listItem.append(listText);
//     listItem.append(listBtn);
//     list.append(listItem);
    
//     listBtn.addEventListener('click', () => {
//       list.removeChild(listItem);
//     });
// }
//     button.addEventListener('click', addItemToList);

//     //this is for pressing enter to make it add item:
//     input.addEventListener("keydown", (event) => {
//         if(event.key === "Enter"){
//             addItemToList();
//         }
//     });
    





























