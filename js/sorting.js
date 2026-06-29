/*==================================================
            SORTING VISUALIZER
==================================================*/

let arr = [];

const container = document.getElementById("sortContainer");
const statusBox = document.getElementById("status");
const codeBox = document.getElementById("codeDisplay");

/*==================================================
                RENDER BARS
==================================================*/

function renderArray(){

container.innerHTML = "";

arr.forEach((value) => {

const bar = document.createElement("div");

bar.className = "bar";

bar.style.height = value * 3 + "px";

bar.innerHTML = value;

container.appendChild(bar);

});

}

/*==================================================
                STATUS
==================================================*/

function setStatus(msg){

statusBox.innerHTML = msg;

}

/*==================================================
            GENERATE ARRAY
==================================================*/

function generateArray(){

arr = [];

for(let i = 0; i < 10; i++){

arr.push(Math.floor(Math.random() * 90) + 10);

}

renderArray();

setStatus("Array Generated");

showGenerateCode();

}

/*==================================================
                RESET
==================================================*/

function resetArray(){

arr = [];

renderArray();

setStatus("Array Reset");

}

/*==================================================
            BUBBLE SORT
==================================================*/

async function bubbleSort(){

let bars = document.querySelectorAll(".bar");

showBubbleCode();

for(let i = 0; i < arr.length; i++){

for(let j = 0; j < arr.length - i - 1; j++){

bars = document.querySelectorAll(".bar");

bars[j].classList.add("array-active");
bars[j+1].classList.add("array-active");

setStatus(`Comparing ${arr[j]} and ${arr[j+1]}`);

await sleep(500);

if(arr[j] > arr[j+1]){

// swap
let temp = arr[j];
arr[j] = arr[j+1];
arr[j+1] = temp;

renderArray();

bars = document.querySelectorAll(".bar");

}

bars[j].classList.remove("array-active");
bars[j+1].classList.remove("array-active");

}

}

setStatus("Sorting Completed");

}

/*==================================================
                DELAY
==================================================*/

function sleep(ms){

return new Promise(resolve => setTimeout(resolve, ms));

}

/*==================================================
            CODE DISPLAY
==================================================*/

function showGenerateCode(){

codeBox.innerHTML = `// Generate Array

arr.push(randomValues);`;
}

function showBubbleCode(){

codeBox.innerHTML = `// Bubble Sort

for(i=0;i<n;i++){

 for(j=0;j<n-i-1;j++){

   if(arr[j]>arr[j+1]){

     swap();

   }

 }

}`;
}