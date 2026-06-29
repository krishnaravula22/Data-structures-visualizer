/*==================================================
                QUEUE VISUALIZER
==================================================*/

let queue = [];

const MAX_SIZE = 10;

const container =
document.getElementById("queueContainer");

const statusBox =
document.getElementById("status");

const codeBox =
document.getElementById("codeDisplay");


/*==================================================
                RENDER QUEUE
==================================================*/

function renderQueue(){

container.innerHTML="";

queue.forEach((value,index)=>{

const box=document.createElement("div");

box.className="queue-box";

box.innerHTML=value;

box.style.animationDelay=(index*0.08)+"s";

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
                ENQUEUE
==================================================*/

function enqueue(){

const value=
document.getElementById("queueValue").value;

if(value===""){

setStatus("Enter a value.");

return;

}

if(queue.length>=MAX_SIZE){

setStatus("Queue Overflow");

return;

}

queue.push(value);

renderQueue();

setStatus(value+" inserted into Queue.");

showEnqueueCode();

document.getElementById("queueValue").value="";

}


/*==================================================
                DEQUEUE
==================================================*/

function dequeue(){

if(queue.length===0){

setStatus("Queue Underflow");

return;

}

const removed=queue.shift();

renderQueue();

setStatus(removed+" removed from Queue.");

showDequeueCode();

}


/*==================================================
                FRONT
==================================================*/

function frontElement(){

if(queue.length===0){

setStatus("Queue is Empty");

return;

}

setStatus("Front Element : "+queue[0]);

showFrontCode();

}


/*==================================================
                REAR
==================================================*/

function rearElement(){

if(queue.length===0){

setStatus("Queue is Empty");

return;

}

setStatus("Rear Element : "+queue[queue.length-1]);

showRearCode();

}


/*==================================================
                SIZE
==================================================*/

function queueSize(){

setStatus("Queue Size : "+queue.length);

showSizeCode();

}

/*==================================================
                isEmpty
==================================================*/

function isEmpty(){

if(queue.length===0){

setStatus("Queue is Empty");

}
else{

setStatus("Queue is NOT Empty");

}

showIsEmptyCode();

}

/*==================================================
                isFull
==================================================*/

function isFull(){

if(queue.length===MAX_SIZE){

setStatus("Queue is Full");

}
else{

setStatus("Queue is NOT Full");

}

showIsFullCode();

}

/*==================================================
                CLEAR QUEUE
==================================================*/

function clearQueue(){

queue=[];

renderQueue();

setStatus("Queue Cleared Successfully");

showClearCode();

}

/*==================================================
                CODE IMPLEMENTATIONS
==================================================*/

function showEnqueueCode(){

codeBox.innerHTML=

`// Enqueue

queue.push(value);`;

}

function showDequeueCode(){

codeBox.innerHTML=

`// Dequeue

queue.shift();`;

}

function showFrontCode(){

codeBox.innerHTML=

`// Front

queue[0];`;

}

function showRearCode(){

codeBox.innerHTML=

`// Rear

queue[queue.length-1];`;

}

function showSizeCode(){

codeBox.innerHTML=

`// Size

queue.length;`;

}

function showIsEmptyCode(){

codeBox.innerHTML=

`// isEmpty

queue.length===0;`;

}

function showIsFullCode(){

codeBox.innerHTML=

`// isFull

queue.length===MAX_SIZE;`;

}

function showClearCode(){

codeBox.innerHTML=

`// Clear Queue

queue=[];`;

}

/*==================================================
                INITIAL DATA
==================================================*/

queue.push(10);
queue.push(20);
queue.push(30);
queue.push(40);

renderQueue();

setStatus("Queue Loaded Successfully");

codeBox.innerHTML=

`Welcome to Queue Visualizer

Available Operations

✔ Enqueue

✔ Dequeue

✔ Front

✔ Rear

✔ Size

✔ isEmpty

✔ isFull

✔ Clear`;
