function loggedIn() {
var username = "hello";
var password = "hello";

if (document.login.password.value == password && document.login.username.value == username) {
    alert('Password and username is correct! You are being logged in');
    top.location.href="correctpassword.html";
}

else {
    if(document.login.password != password && document.login.username.value != username) {
        alert("Password and username is not correct. Try again!")
    }
    if(document.login.password != password && document.login.username.value == username) {
        alert("Password is not correct. Try again!")
    }
    if(document.login.password == password && document.login.username.value != username) {
        alert("Username is not correct. Try again!")
    }
}
}