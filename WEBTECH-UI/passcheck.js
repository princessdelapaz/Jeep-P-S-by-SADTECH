function checkPass()
{
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    var message = document.getElementById('pcheckMess');
    var badColor = "#ff6666";
    if(pass1.value != pass2.value){
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords do not match. Please re-enter your password"
    }
}  