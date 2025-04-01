var myVar;
function mainFunction()
{
 myVar=setTimeout("display()",2000);
 window.setTimeout(function(){

    // Move to a new location or you can do something else
    window.location.href = "dashboard.html";

}, 2000);

}

function display()
{
   document.getElementById("loader").style="display:none";
   document.getElementById("main").style="display:block; background-color:white"; 
}