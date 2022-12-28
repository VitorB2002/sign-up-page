function checkForm(form){
    
    if(form.password.value == form.confirmPassword.value){
        alert("Congrats, account created!");
        return true;
    }   else{
        alert("Passwords dont match, try again!");
        return false;
    }
}