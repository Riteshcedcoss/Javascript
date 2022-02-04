function myfun(){
    console.log("sfds");
    // var a=Number(document.getElementByID('fname').value);
    // var b=Number(document.getElementByID('lname').value);
    var a=parseInt(document.getElementById('fname').value);
    var b=parseInt(document.getElementById('lname').value);
 var area = a * b;
//  console.log(x);
var parameter= 2*(a * b);
document.getElementById('Area').innerHTML=area;
document.getElementById('Parameter').innerHTML=parameter;
}