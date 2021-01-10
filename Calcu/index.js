function myfun(){

var choice = document.getElementById("choices").value;
//alert(choice);

switch(choice)
{
    case "add" :{
        var a=10; 
        var b=30;
        var sum = a+b;
        document.write("the addition on A and B is " + sum );
        break;
    }
    case "sub" :{
        var a=10;
         var b=30;
        var sub = a-b;
        document.write("the subtraction on A and B is " + sub );
        break;
    }
    case "mul" :{
        var a=10; 
        var b=30;
        var mult = a*b;
        document.write("the multiplaication on A and B is " + mult );
        break;
    }
    case "div" :{
        var a=10; 
        var b=30;
        var dvi = a/b;
        document.write("the division on A and B is " + dvi );
        break;
    }
    default : alert("not a valid operaot");
};


};
