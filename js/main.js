document.write('<h1>Javascript Variable</h1>');
var x1 = 3;
let x2 = 50;
{
    var a = 100;
    let x = 30;
    document.write("Inside with let keyword:"+x+"<br>");
    document.write("Inside with let keyword global:"+x1+"<br>");
    document.write("Inside with var keyword:"+a);
    
    
}

// document.write("Outside with let keyword:"+x); // not working because its declare in scope
// document.write("Outside with let keyword:"+x3);

document.write('<hr>');
document.write('<h1>Javascript Template String</h1>');

var a = 78;
var b = 45;
var sum = a+b;
var mul = a*b;
var sub = a-b;
var div = a+b;
document.write('<b>Output without template string</b>');
document.write('Sum is:'+sum+'<br> Mul is:'+mul+'<br> Sub is:'+sub+'<br>Div is:'+div+'<br>');
document.write('<b>Output with template string</b> <br>');
document.write(`Sum is: ${sum} <br> Mul is: ${mul} <br> Sub is: ${sub} <br> Div is: ${div} <br>`);

function fullName(fname,lname){
    return `${fname} ${lname}`;
}

document.write(`Hello ${fullName('Md Shafiqul','Islam')}`);