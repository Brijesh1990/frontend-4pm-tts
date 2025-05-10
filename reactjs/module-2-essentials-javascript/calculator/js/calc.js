// for clear a calculator result values
function clr()
{
 document.getElementById("result").value="";    
}
// create a function to get values of button inside of result
function getResult(val)
{
    document.getElementById("result").value+=val;
}
// create a function for slice a result values ...
function sliceValue()
{
  var sl=document.getElementById("result").value;
  var res=sl.slice(0,-1);
  document.getElementById("result").value=res;
}
// create a function for final result 
function finalResult()
{
    var x=document.getElementById("result").value;
    var res=eval(x);
    document.getElementById("result").value=res;

}

// create a function for square
function sq()
{
    var x=document.getElementById("result").value;
    var res=Math.pow(x,2);
    document.getElementById("result").value=res;
}
// create a function for squareRoot
function sqRT()
{
    var x=document.getElementById("result").value;
    var res=Math.sqrt(x);
    document.getElementById("result").value=res;
}