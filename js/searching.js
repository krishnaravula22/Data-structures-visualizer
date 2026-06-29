/*==================================================
            SEARCHING VISUALIZER
==================================================*/

let arr = [];

const container = document.getElementById("searchContainer");
const statusBox = document.getElementById("status");
const codeBox = document.getElementById("codeDisplay");

/*==================================================
                RENDER ARRAY
==================================================*/

function renderArray(){

container.innerHTML = "";

arr.forEach((value, index) => {

const box = document.createElement("div");

box.className = "array-box";

box.innerHTML = value;

container.appendChild(box);

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
            LINEAR SEARCH
==================================================*/

async function linearSearch(){

const value = Number(document.getElementById("searchValue").value);

const boxes = document.querySelectorAll(".array-box");

showLinearCode();

for(let i = 0; i < arr.length; i++){

boxes[i].classList.add("array-active");

setStatus("Checking index " + i);

await sleep(600);

if(arr[i] === value){

boxes[i].classList.remove("array-active");

boxes[i].classList.add("array-found");

setStatus(value + " found at index " + i);

return;

}

boxes[i].classList.remove("array-active");

}

setStatus(value + " not found");

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

arr.push(randomNumbers);`;
}

function showLinearCode(){

codeBox.innerHTML = `// Linear Search

for(i=0;i<n;i++){

 if(arr[i]==key)

   return i;

}`;
}

/*==================================================
            INITIAL STATE
==================================================*/

generateArray();

/*==================================================
            BINARY SEARCH
==================================================*/

async function binarySearch(){

let value = Number(document.getElementById("searchValue").value);

if(arr.length === 0){

setStatus("Array is empty");

return;

}

/* Sort array for binary search */
arr.sort((a,b)=>a-b);
renderArray();

let boxes = document.querySelectorAll(".array-box");

let left = 0;
let right = arr.length - 1;

showBinaryCode();

while(left <= right){

let mid = Math.floor((left + right) / 2);

setStatus(`Checking mid index ${mid}`);

highlightPointers(boxes, left, mid, right);

await sleep(800);

if(arr[mid] === value){

boxes[mid].classList.add("array-found");

setStatus(value + " found at index " + mid);

return;

}

else if(arr[mid] < value){

left = mid + 1;

setStatus("Searching right half");

}
else{

right = mid - 1;

setStatus("Searching left half");

}

await sleep(600);

resetHighlights(boxes);

}

setStatus(value + " not found");

}

/*==================================================
        POINTER VISUALIZATION
==================================================*/

function highlightPointers(boxes, left, mid, right){

if(boxes[left]) boxes[left].classList.add("array-active");
if(boxes[mid]) boxes[mid].classList.add("array-found");
if(boxes[right]) boxes[right].classList.add("array-active");

}

function resetHighlights(boxes){

boxes.forEach(box => {

box.classList.remove("array-active");
box.classList.remove("array-found");

});

}

/*==================================================
            RESET + EXTRA
==================================================*/

function showBinaryCode(){

codeBox.innerHTML = `// Binary Search

sort(arr);

while(left <= right){

 mid = (l+r)/2;

 if(arr[mid]==key)

   return mid;

 else if(arr[mid]<key)

   left = mid+1;

 else

   right = mid-1;

}`;
}