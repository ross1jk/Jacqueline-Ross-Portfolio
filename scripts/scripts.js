let submitBtn = document.getElementById("submitBtn"); 

submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    let contactme = {
        userName: document.getElementById("name").value, 
        userEmail: document.getElementById("email").value,
        userMessage: document.getElementById("message").value
    }
    console.log(contactme)
    
});
