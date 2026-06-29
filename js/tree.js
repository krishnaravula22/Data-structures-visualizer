let treeRoot = null;

const container = document.getElementById("treeContainer");
const statusBox = document.getElementById("status");
const codeBox = document.getElementById("codeDisplay");
const traversalOutput = document.getElementById("traversalOutput");

/*==========================================
            NODE STRUCTURE
==========================================*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/*==========================================
            STATUS
==========================================*/

function setStatus(msg) {
    statusBox.innerHTML = msg;
}

/*==========================================
            INSERT NODE (BST)
==========================================*/

function insertNode() {

    const value = Number(document.getElementById("treeValue").value);

    if (!value && value !== 0) {
        setStatus("Enter a value");
        return;
    }

    treeRoot = insertBST(treeRoot, value);

    renderTree(treeRoot);

    setStatus(value + " inserted into tree");

    showInsertCode();
}

/* BST INSERT LOGIC */
function insertBST(root, value) {

    if (root === null) {
        return new Node(value);
    }

    if (value < root.value) {
        root.left = insertBST(root.left, value);
    } else {
        root.right = insertBST(root.right, value);
    }

    return root;
}

/*==========================================
            SEARCH NODE
==========================================*/

function searchNode() {

    const value = Number(document.getElementById("treeValue").value);

    let found = searchBST(treeRoot, value);

    if (found) {
        setStatus(value + " found in tree");
    } else {
        setStatus(value + " not found");
    }

    showSearchCode();
}

function searchBST(root, value) {

    if (!root) return false;

    if (root.value === value) return true;

    if (value < root.value) {
        return searchBST(root.left, value);
    } else {
        return searchBST(root.right, value);
    }
}

/*==========================================
            BASIC RENDER (TEMP SIMPLE)
==========================================*/

function renderTree(root) {

    container.innerHTML = "";

    function traverse(node, level = 0) {

        if (!node) return;

        const div = document.createElement("div");
        div.className = "tree-node";
        div.innerHTML = node.value;

        div.style.marginLeft = (level * 20) + "px";

        container.appendChild(div);

        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
    }

    traverse(root);
}

/*==========================================
            CODE DISPLAY
==========================================*/

function showInsertCode() {
    codeBox.innerHTML = `
Insert BST:
if (value < root)
    go left
else
    go right
`;
}

function showSearchCode() {
    codeBox.innerHTML = `
Search BST:
if (value == root)
    found
else if smaller → left
else → right
`;
}

/*==========================================
            INITIAL STATE
==========================================*/

setStatus("Tree Loaded Successfully");


/*==========================================
            DELETE NODE (BST)
==========================================*/

function deleteNode() {

    const value = Number(document.getElementById("treeValue").value);

    treeRoot = deleteBST(treeRoot, value);

    renderTree(treeRoot);

    setStatus(value + " deleted (if existed)");

    showDeleteCode();
}

function deleteBST(root, value) {

    if (!root) return null;

    if (value < root.value) {
        root.left = deleteBST(root.left, value);
    }
    else if (value > root.value) {
        root.right = deleteBST(root.right, value);
    }
    else {

        // No child
        if (!root.left && !root.right) {
            return null;
        }

        // One child
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        // Two children
        let minNode = findMin(root.right);
        root.value = minNode.value;
        root.right = deleteBST(root.right, minNode.value);
    }

    return root;
}

function findMin(node) {
    while (node.left) {
        node = node.left;
    }
    return node;
}

/*==========================================
            TRAVERSALS
==========================================*/

function inorderTraversal() {

    let result = [];

    inorder(treeRoot, result);

    traversalOutput.innerHTML = result.join(" → ");

    showInorderCode();
}

function inorder(node, result) {

    if (!node) return;

    inorder(node.left, result);
    result.push(node.value);
    inorder(node.right, result);
}

function preorderTraversal() {

    let result = [];

    preorder(treeRoot, result);

    traversalOutput.innerHTML = result.join(" → ");

    showPreorderCode();
}

function preorder(node, result) {

    if (!node) return;

    result.push(node.value);
    preorder(node.left, result);
    preorder(node.right, result);
}

function postorderTraversal() {

    let result = [];

    postorder(treeRoot, result);

    traversalOutput.innerHTML = result.join(" → ");

    showPostorderCode();
}

function postorder(node, result) {

    if (!node) return;

    postorder(node.left, result);
    postorder(node.right, result);
    result.push(node.value);
}

/*==========================================
            LEVEL ORDER (BFS)
==========================================*/

function levelOrderTraversal() {

    if (!treeRoot) {
        traversalOutput.innerHTML = "Tree is empty";
        return;
    }

    let queue = [treeRoot];
    let result = [];

    while (queue.length > 0) {

        let node = queue.shift();

        result.push(node.value);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    traversalOutput.innerHTML = result.join(" → ");

    showLevelCode();
}

/*==========================================
            HEIGHT
==========================================*/

function treeHeight() {

    function height(node) {

        if (!node) return 0;

        return 1 + Math.max(height(node.left), height(node.right));
    }

    let h = height(treeRoot);

    setStatus("Tree Height: " + h);

    showHeightCode();
}

/*==========================================
            LEAF NODES
==========================================*/

function leafNodes() {

    let leaves = [];

    function findLeaves(node) {

        if (!node) return;

        if (!node.left && !node.right) {
            leaves.push(node.value);
        }

        findLeaves(node.left);
        findLeaves(node.right);
    }

    findLeaves(treeRoot);

    traversalOutput.innerHTML = leaves.join(" → ");

    setStatus("Leaf nodes found");

    showLeafCode();
}

/*==========================================
            CLEAR TREE
==========================================*/

function clearTree() {

    treeRoot = null;

    container.innerHTML = "";

    traversalOutput.innerHTML = "";

    setStatus("Tree cleared");

    showClearCode();
}

/*==========================================
            CODE DISPLAY FUNCTIONS
==========================================*/

function showDeleteCode() {
    codeBox.innerHTML = `BST Delete:
- Find node
- Replace or remove`;
}

function showInorderCode() {
    codeBox.innerHTML = `Inorder:
Left → Root → Right`;
}

function showPreorderCode() {
    codeBox.innerHTML = `Preorder:
Root → Left → Right`;
}

function showPostorderCode() {
    codeBox.innerHTML = `Postorder:
Left → Right → Root`;
}

function showLevelCode() {
    codeBox.innerHTML = `Level Order:
Use Queue (BFS)`;
}

function showHeightCode() {
    codeBox.innerHTML = `Height:
1 + max(left, right)`;
}

function showLeafCode() {
    codeBox.innerHTML = `Leaf Nodes:
No children nodes`;
}

function showClearCode() {
    codeBox.innerHTML = `Tree Cleared`;
}