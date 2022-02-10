// const loginEmail = document.getElementById("login-email");
// const loginPass = document.getElementById("login-password");
const loginButton = document.getElementById("login-button");
loginButton.addEventListener("click",function(){
    
        const loginEmail = document.getElementById("login-email");
        const loginPass = document.getElementById("login-password");
        if(loginEmail.value == "fahimekermall" && loginPass.value == "FAHIMLOVERAIN"){
            window.location.href = "./second_page.html";
        }  
    
        else{
            alert("Please enter Correct password");
    
        }
    
});