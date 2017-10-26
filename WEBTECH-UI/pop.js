function addpop() {
    var txt;
    if (confirm("Send user request?") == true) {
        txt = "You have sent a friend request!";
    } else {
        txt = "Friend request removed.";
    }
    document.getElementById("notif").innerHTML = txt;
}
function blockpop() {
    var txt;
    if (confirm("Block user?") == true) {
        txt = "You blocked this user!";
    } else {
        txt = "User not blocked";
    }
    document.getElementById("notif").innerHTML = txt;
}