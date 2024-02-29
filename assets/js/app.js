// Record this?

// First - store a value using sessionStorage.setItem("key", "value")

// Now get it and display it somewhere

// Delete the sessionStorage and the code above and do the main task:

// Get the form

const formEl = document.querySelector("form");

// Listen for submit event, prevent default, store the first+last name in sessionStorage


if(formEl){
    
formEl.addEventListener("submit", function(e){
    e.preventDefault();
    const firstName = formEl.formFirstName.value;
    
    const lastName = formEl.formLastName.value;
   
    sessionStorage.setItem("username", `${firstName} ${lastName}`);
    currentUserEl.textContent = sessionStorage.getItem("username");
});
}

// Get the .currentUser and store the value of the sessionStorage in there

const currentUserEl = document.querySelector(".currentUser");

currentUserEl.textContent = sessionStorage.getItem("username");

// Now try getting the sessionStorage from anotherfile.html

// If you have time: try to write the pseudocode for handling the light/darkmode colorswitch. Tip: I've setup the css so that all you have to do to go to darkmode is change the css-variables lines 2-3, have a look
