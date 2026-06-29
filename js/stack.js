/*==================================================
                STACK VISUALIZER
==================================================*/

let stack = [];

const MAX_SIZE = 10;

const container =
document.getElementById("stackContainer");

const statusBox =
document.getElementById("status");

const codeBox =
document.getElementById("codeDisplay");

/*==================================================
                RENDER STACK
==================================================*/

function renderStack(){

container.innerHTML="";

stack.forEach(value=>{

const box=document.createElement("div");

box.className="stack-box";

box.innerHTML=value;

container.appendChild(box);

});

}

/*==================================================
                STATUS
==================================================*/

function setStatus(message){

statusBox.innerHTML=message;

}

/*==================================================
                PUSH
==================================================*/

function pushElement(){

const value=
document.getElementById("stackValue").value;

if(value===""){

setStatus("Enter a value.");

return;

}

if(stack.length>=MAX_SIZE){

setStatus("Stack Overflow");

return;

}

stack.push(value);

renderStack();

setStatus(value+" pushed successfully.");

showPushCode();

document.getElementById("stackValue").value="";

}

/*==================================================
                POP
==================================================*/

function popElement(){

if(stack.length===0){

setStatus("Stack Underflow");

return;

}

const removed=stack.pop();

renderStack();

setStatus(removed+" popped.");

showPopCode();

}

/*==================================================
                PEEK
==================================================*/

function peekElement(){

if(stack.length===0){

setStatus("Stack is Empty");

return;

}

const top=stack[stack.length-1];

setStatus("Top Element : "+top);

showPeekCode();

}

/*==================================================
                SIZE
==================================================*/

function stackSize(){

setStatus("Stack Size : "+stack.length);

showSizeCode();

}

/*==================================================
                isEmpty
==================================================*/

function isEmpty(){

if(stack.length===0){

setStatus("Stack is Empty");

}
else{

setStatus("Stack is NOT Empty");

}

showIsEmptyCode();

}

/*==================================================
                isFull
==================================================*/

function isFull(){

if(stack.length===MAX_SIZE){

setStatus("Stack is Full");

}
else{

setStatus("Stack is NOT Full");

}

showIsFullCode();

}

/*==================================================
                CLEAR STACK
==================================================*/

function clearStack(){

stack=[];

renderStack();

setStatus("Stack Cleared");

showClearCode();

}

/*==================================================
                CODE IMPLEMENTATION
==================================================*/

function showPushCode(){

codeBox.innerHTML=`// Push

stack.push(value);`;

}

function showPopCode(){

codeBox.innerHTML=`// Pop

stack.pop();`;

}

function showPeekCode(){

codeBox.innerHTML=`// Peek

let top = stack[stack.length-1];`;

}

function showSizeCode(){

codeBox.innerHTML=`// Size

let size = stack.length;`;

}

function showIsEmptyCode(){

codeBox.innerHTML=`// isEmpty

stack.length===0`;

}

function showIsFullCode(){

codeBox.innerHTML=`// isFull

stack.length===MAX_SIZE`;

}

function showClearCode(){

codeBox.innerHTML=`// Clear

stack=[];`;

}

/*==================================================
                INITIAL DATA
==================================================*/

stack.push(10);
stack.push(20);
stack.push(30);

renderStack();

setStatus("Stack Loaded Successfully");

codeBox.innerHTML=

`Welcome to Stack Visualizer

Operations Available

✔ Push

✔ Pop

✔ Peek

✔ Size

✔ isEmpty

✔ isFull

✔ Clear`;