/*==================================================
            GRAPH VISUALIZER (BASIC)
==================================================*/

let graph = {};

const container = document.getElementById("graphContainer");
const statusBox = document.getElementById("status");
const codeBox = document.getElementById("codeDisplay");

/*==================================================
            CREATE NODE
==================================================*/

function addNode(node){

if(!graph[node]){
graph[node] = [];
setStatus("Node " + node + " added");
}

renderGraph();

showAddNodeCode();
}

/*==================================================
            ADD EDGE
==================================================*/

function addEdge(u, v){

if(!graph[u]) graph[u] = [];
if(!graph[v]) graph[v] = [];

graph[u].push(v);
graph[v].push(u); // undirected graph

setStatus(`Edge ${u} - ${v} added`);

renderGraph();

showAddEdgeCode();
}

/*==================================================
            RENDER GRAPH (BASIC UI)
==================================================*/

function renderGraph(){

container.innerHTML = "";

for(let node in graph){

const nodeDiv = document.createElement("div");
nodeDiv.className = "graph-node";
nodeDiv.innerHTML = node;

container.appendChild(nodeDiv);

let neighbors = graph[node];

neighbors.forEach(nei => {

const edge = document.createElement("div");
edge.className = "graph-edge";
edge.innerHTML = `${node} → ${nei}`;

container.appendChild(edge);

});

}

}

/*==================================================
            BFS TRAVERSAL
==================================================*/

async function bfs(start){

let visited = {};
let queue = [start];

showBFSCode();

while(queue.length > 0){

let node = queue.shift();

if(!visited[node]){

visited[node] = true;

setStatus("Visiting " + node);

highlightNode(node);

await sleep(700);

for(let nei of graph[node]){

if(!visited[nei]){
queue.push(nei);
}
}

}

}

setStatus("BFS Completed");
}

/*==================================================
            DFS TRAVERSAL
==================================================*/

async function dfs(start, visited = {}){

if(!graph[start]) return;

visited[start] = true;

setStatus("Visiting " + start);

highlightNode(start);

await sleep(700);

for(let nei of graph[start]){

if(!visited[nei]){
await dfs(nei, visited);
}

}

}

/*==================================================
            HIGHLIGHT NODE
==================================================*/

function highlightNode(node){

const nodes = document.querySelectorAll(".graph-node");

nodes.forEach(n => {

if(n.innerHTML == node){

n.classList.add("array-found");

setTimeout(()=>{

n.classList.remove("array-found");

}, 500);

}

});

}

/*==================================================
            UTILITY DELAY
==================================================*/

function sleep(ms){

return new Promise(resolve => setTimeout(resolve, ms));

}

/*==================================================
            CODE DISPLAY
==================================================*/

function showAddNodeCode(){

codeBox.innerHTML = `// Add Node

graph[node] = [];`;
}

function showAddEdgeCode(){

codeBox.innerHTML = `// Add Edge

graph[u].push(v);
graph[v].push(u);`;
}

function showBFSCode(){

codeBox.innerHTML = `// BFS

queue.push(start);

while(queue.length){

node = queue.shift();

visit(node);`;
}

/*==================================================
            INITIAL GRAPH
==================================================*/

addNode("A");
addNode("B");
addNode("C");

addEdge("A","B");
addEdge("A","C");