/*==================================================
                LINKED LIST VISUALIZER
==================================================*/

let linkedList = [10, 20, 30, 40];

const container =
document.getElementById("linkedListContainer");

const statusBox =
document.getElementById("status");

const codeBox =
document.getElementById("codeDisplay");

/*==================================================
                RENDER LIST
==================================================*/

function renderList(){

container.innerHTML="";

linkedList.forEach((value,index)=>{

const node=document.createElement("div");

node.className="list-node";

node.innerHTML=value;

node.style.animationDelay=(index*0.08)+"s";

container.appendChild(node);

});

}

/*==================================================
                STATUS
==================================================*/

function setStatus(message){

statusBox.innerHTML=message;

}

/*==================================================
                INSERT FIRST
==================================================*/

function insertBeginning(){

const value=
document.getElementById("nodeValue").value;

if(value===""){

setStatus("Enter a value.");

return;

}

linkedList.unshift(Number(value));

renderList();

setStatus(value+" inserted at beginning.");

showInsertFirstCode();

document.getElementById("nodeValue").value="";

}

/*==================================================
                INSERT LAST
==================================================*/

function insertEnd(){

const value=
document.getElementById("nodeValue").value;

if(value===""){

setStatus("Enter a value.");

return;

}

linkedList.push(Number(value));

renderList();

setStatus(value+" inserted at end.");

showInsertLastCode();

document.getElementById("nodeValue").value="";

}

/*==================================================
            INSERT AT POSITION
==================================================*/

function insertPosition(){

const value=
Number(document.getElementById("nodeValue").value);

const pos=
Number(document.getElementById("position").value);

if(pos<0 || pos>linkedList.length){

setStatus("Invalid Position.");

return;

}

linkedList.splice(pos,0,value);

renderList();

setStatus(value+" inserted at position "+pos);

showInsertPositionCode();

}

/*==================================================
                DELETE NODE
==================================================*/

function deleteNode(){

const pos=
Number(document.getElementById("position").value);

if(pos<0 || pos>=linkedList.length){

setStatus("Invalid Position.");

return;

}

const removed=
linkedList.splice(pos,1);

renderList();

setStatus(removed[0]+" deleted.");

showDeleteCode();

}

/*==================================================
                UPDATE NODE
==================================================*/

function updateNode(){

const value=
Number(document.getElementById("nodeValue").value);

const pos=
Number(document.getElementById("position").value);

if(pos<0 || pos>=linkedList.length){

setStatus("Invalid Position.");

return;

}

linkedList[pos]=value;

renderList();

setStatus("Node updated.");

showUpdateCode();

}


/*==================================================
                SEARCH NODE
==================================================*/

async function searchNode(){

const value=
Number(document.getElementById("nodeValue").value);

const nodes=
document.querySelectorAll(".list-node");

showSearchCode();

for(let i=0;i<nodes.length;i++){

nodes[i].classList.add("array-active");

setStatus("Checking Node "+i);

await sleep(700);

if(linkedList[i]===value){

nodes[i].classList.remove("array-active");

nodes[i].classList.add("array-found");

setStatus(value+" Found at Position "+i);

return;

}

nodes[i].classList.remove("array-active");

}

setStatus(value+" Not Found");

}

/*==================================================
                TRAVERSE
==================================================*/

async function traverseList(){

const nodes=
document.querySelectorAll(".list-node");

for(let i=0;i<nodes.length;i++){

nodes[i].classList.add("array-active");

setStatus("Visiting Node : "+linkedList[i]);

await sleep(500);

nodes[i].classList.remove("array-active");

}

setStatus("Traversal Completed");

showTraverseCode();

}

/*==================================================
                REVERSE
==================================================*/

function reverseList(){

linkedList.reverse();

renderList();

setStatus("Linked List Reversed");

showReverseCode();

}

/*==================================================
                CLEAR
==================================================*/

function clearList(){

linkedList=[];

renderList();

setStatus("Linked List Cleared");

showClearCode();

}

/*==================================================
                DELAY
==================================================*/

function sleep(ms){

return new Promise(resolve=>setTimeout(resolve,ms));

}

/*==================================================
                CODE PANEL
==================================================*/

function showInsertFirstCode(){

codeBox.innerHTML=`// Insert First

linkedList.unshift(value);`;

}

function showInsertLastCode(){

codeBox.innerHTML=`// Insert Last

linkedList.push(value);`;

}

function showInsertPositionCode(){

codeBox.innerHTML=`// Insert at Position

linkedList.splice(position,0,value);`;

}

function showDeleteCode(){

codeBox.innerHTML=`// Delete

linkedList.splice(position,1);`;

}

function showUpdateCode(){

codeBox.innerHTML=`// Update

linkedList[position]=value;`;

}

function showSearchCode(){

codeBox.innerHTML=`for(let i=0;i<linkedList.length;i++){

if(linkedList[i]==value){

return i;

}

}`;

}

function showTraverseCode(){

codeBox.innerHTML=`for(let node of linkedList){

console.log(node);

}`;

}

function showReverseCode(){

codeBox.innerHTML=`linkedList.reverse();`;

}

function showClearCode(){

codeBox.innerHTML=`linkedList=[];`;

}

/*==================================================
                INITIAL LOAD
==================================================*/

renderList();

setStatus("Linked List Loaded Successfully");

codeBox.innerHTML=`Welcome to Linked List Visualizer

✔ Insert First

✔ Insert Last

✔ Insert Position

✔ Delete

✔ Update

✔ Search

✔ Traverse

✔ Reverse

✔ Clear`;