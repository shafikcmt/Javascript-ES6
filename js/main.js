var x1 = 3;
let x2 = 50;
{
    var a = 100;
    let x = 30;
    document.write("Inside with let keyword:"+x+"<br>");
    document.write("Inside with let keyword global:"+x1+"<br>");
    document.write("Inside with var keyword:"+a);
    
    
}

document.write("Outside with let keyword:"+x); // not working because its declare in scope
document.write("Outside with let keyword:"+x3);

