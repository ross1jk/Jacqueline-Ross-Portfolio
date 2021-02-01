let submitBtn = document.getElementById("submitBtn"); 

submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    let nameInput = document.getElementById("username").value; 
    let emailInput = document.getElementById("email").value; 
    let message = document.getElementById("message").value; 
    var maillink = "mailto:jacqueline.ross09@gmail.com?subject=Portfolio Response From:"+emailInput+"&body="+message+" -"+nameInput+""
    let contactme = {
        userName: nameInput,
        userEmail: emailInput,
        userMessage: message
    }
    localStorage.setItem("contactme", JSON.stringify(contactme)); 
    window.location.href = maillink; 
    
});
