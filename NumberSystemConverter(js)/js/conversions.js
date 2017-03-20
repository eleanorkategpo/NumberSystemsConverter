function Decimal() {
    

    if(document.getElementById('decimalValue').value == ""){
        document.getElementById("demo").innerHTML= "Please input decimal value.";
    }
    else{
        var num = parseInt(document.getElementById('decimalValue').value);
        var selection = document.getElementById('decimalSelect').value;
        if (selection=="Binary"){
            var a = num.toString(2);
        }
        else if (selection == "Octal"){
            var a = num.toString(8);
        }
        else if (selection == "Hexadecimal"){
            var a = num.toString(16);
        }

        var b = selection+ " value of "+num+" is: "+ a;

        document.getElementById("demo").innerHTML=b;
    }
    
}

function Binary() {

    if(document.getElementById('binaryValue').value == ""){
        document.getElementById("demo2").innerHTML= "Please input binary value.";
    }
    else{
        var value = document.getElementById('binaryValue').value;
        var num = parseInt(value, 2);
        var selection = document.getElementById('binarySelect').value;


        if (selection=="Decimal"){
            var a = num.toString();
        }
        else if (selection == "Octal"){
            var a = num.toString(8);
        }
        else if (selection == "Hexadecimal"){
            var a = num.toString(16);
        }
        
        var b = selection+ " value of "+num+" is: "+ a;
        document.getElementById("demo2").innerHTML=b;
    }

}
function Octal() {
    if(document.getElementById('octalValue').value == ""){
        document.getElementById("demo3").innerHTML= "Please input octal value.";
    }
    else{
        var value = document.getElementById('octalValue').value;
        var num = parseInt(value, 8);
        var selection = document.getElementById('octalSelect').value;


        if (selection=="Decimal"){
            var a = num.toString();
        }
        else if (selection == "Binary"){
            var a = num.toString(2);
        }
        else if (selection == "Hexadecimal"){
            var a = num.toString(16);
        }
        var b = selection+ " value of "+num+" is: "+ a;
        document.getElementById("demo3").innerHTML=b;
    }

}
function Hexadecimal() {

    if(document.getElementById('hexValue').value == ""){
        document.getElementById("demo4").innerHTML= "Please input hexadecimal value.";
    }
    else{
        var value = document.getElementById('hexValue').value;
        var num = parseInt(value, 16);
        var selection = document.getElementById('hexSelect').value;


        if (selection=="Decimal"){
            var a = num.toString();
        }
        else if (selection == "Binary"){
            var a = num.toString(2);
        }
        else if (selection == "Octal"){
            var a = num.toString(8);
        }
        var b = selection+ " value of "+num+" is: "+ a;
         document.getElementById("demo4").innerHTML=b;
    }

}
function Erase() {
    document.getElementById("demo").innerHTML="";
    document.getElementById("demo2").innerHTML= "";
    document.getElementById("demo3").innerHTML= "";
    document.getElementById("demo4").innerHTML= "";
}
