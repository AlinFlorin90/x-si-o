var turn = false;
var array1 = [];
var array2 = [];

let functionDiv1 = function(){
    console.log("Ai selectat pozitia [1,1]");
    if(turn === false){
        document.querySelector(".div1").innerText = "X";
        array1.push([1,1]);
        turn = true;
        console.log(array1);
    }
    else if (turn === true){
           document.querySelector(".div1").innerText = "O";
           array2.push([1,1]);
           turn = false;
           console.log(array2);
    }
    else{}
}

let functionDiv2 = function(){
    console.log("Ai selectat pozitia [1,2]");
    if(turn === false){
        document.querySelector(".div2").innerText = "X";
        array1.push([1,2]);
        console.log(array1);
        turn = true;
    }
    else if (turn === true){
        document.querySelector(".div2").innerText = "O";
        array2.push([1,2]);
        console.log(array2);
        turn = false;
    }
    else{}
}

let functionDiv3 = function(){
    console.log("Ai selectat pozitia [1,3]");
    if(turn === false){
        document.querySelector(".div3").innerText = "X";
        array1.push([1,3]);
        console.log(array1);
        turn = true;
    }
    else if (turn === true){
        document.querySelector(".div3").innerText = "O";
        array2.push([1,3]);
        console.log(array2);
        turn = false;
    }
    else{}
 }

let functionDiv4 = function(){
    console.log("Ai selectat pozitia [2,1]");
    if(turn === false){
        document.querySelector(".div4").innerText = "X";
        array1.push([2,1]);
        console.log(array1);
        turn = true;
    }
    else if (turn === true){
        document.querySelector(".div4").innerText = "O";
        array2.push([2,1]);
        console.log(array2);
        turn = false;
    }
    else{}
 }

let functionDiv5 = function(){
    console.log("Ai selectat pozitia [2,2]");
    if(turn === false){
        document.querySelector(".div5").innerText = "X";
        array1.push([2,2]);
        console.log(array1);
        turn = true;
    }
    else if (turn === true){
        document.querySelector(".div5").innerText = "O";
        array2.push([2,2]);
        console.log(array2);
        turn = false;
    }
    else{}
 }

let functionDiv6 = function(){
    console.log("Ai selectat pozitia [2,3]");
    if(turn === false){
        document.querySelector(".div6").innerText = "X";
        array1.push([2,3]);
        console.log(array1);
        turn = true;
    }
    else if (turn === true){
        document.querySelector(".div6").innerText = "O";
        array2.push([2,3]);
        console.log(array2);
        turn = false;
    }
    else{}
 }

let functionDiv7 = function(){
    console.log("Ai selectat pozitia [3,1]");
    if(turn === false){
        document.querySelector(".div7").innerText = "X";
        array1.push([3,1]);
        console.log(array1);
        turn = true;
    }
    else if (turn === true){
        document.querySelector(".div7").innerText = "O";
        array2.push([3,1]);
        console.log(array2);
        turn = false;
    }
    else{}
 }

let functionDiv8 = function(){
    console.log("Ai selectat pozitia [3,2]");
    if(turn === false){
        document.querySelector(".div8").innerText = "X";
        array1.push([3,2]);
        console.log(array1);
        turn = true;
    }
    else if (turn === true){
        document.querySelector(".div8").innerText = "O";
        array2.push([3,2]);
        console.log(array2);
        turn = false;
    }
    else{}
 }

let functionDiv9 = function(){
    console.log("Ai selectat pozitia [3,3]");
    if(turn === false){
        document.querySelector(".div9").innerText = "X";
        array1.push([3,3]);
        console.log(array1);
        turn = true;
        }
        else if (turn === true){
            document.querySelector(".div9").innerText = "O";
            array2.push([3,3]);
            console.log(array2);
            turn = false;
        }
        else{}
     }



console.log(array2);