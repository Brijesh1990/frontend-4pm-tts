function auth()
{
var user=document.getElementById("username").value;
var em=document.getElementById("email").value;
var pass=document.getElementById("password").value;

if(user=="manager" && em=="manager@gmail.com" && pass=="password")
{
Swal.fire({
title: "Wow?",
text: "You are Logged in as Manager",
icon: "success"
});
window.location="manager.html";
}
else if(user=="Developer" && em=="developer@gmail.com" && pass=="password")
{
    Swal.fire({
    title: "Wow?",
    text: "You are Logged in as Developer",
    icon: "success"
    });
    window.location="developer.html";
}
else if(user=="Srdeveloper" && em=="srdeveloper@gmail.com" && pass=="password")
{
    Swal.fire({
    title: "Wow?",
    text: "You are Logged in as Senior Developer",
    icon: "success"
    });
    window.location="srdeveloper.html";
}
else
{
    Swal.fire({
    title: "Oops!",
    text: "Invalid Username or Password",
    icon: "error"
    });
    document.getElementById("username").value="";
}
}