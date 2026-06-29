/*==========================================
        ARRAY VISUALIZER
==========================================*/

let array = [12, 25, 8, 40, 18];

const container = document.getElementById("arrayContainer");
const statusBox = document.getElementById("status");
const codeBox = document.getElementById("codeDisplay");

/*==========================================
            RENDER ARRAY
==========================================*/

function renderArray() {

    container.innerHTML = "";

    array.forEach((value, index) => {

        const box = document.createElement("div");

        box.className = "array-box";

        box.setAttribute("data-index", index);

        box.innerHTML = value;

        container.appendChild(box);

    });

}

/*==========================================
            STATUS
==========================================*/

function setStatus(message) {

    statusBox.innerHTML = message;

}

/*==========================================
            INSERT END
==========================================*/

function insertEnd() {

    const value =
        document.getElementById("arrayValue").value;

    if (value === "") {

        setStatus("Enter a value.");

        return;

    }

    array.push(Number(value));

    renderArray();

    setStatus(value + " inserted at the end.");

    showInsertCode();

}

/*==========================================
            INSERT INDEX
==========================================*/

function insertIndex() {

    const value =
        Number(document.getElementById("arrayValue").value);

    const index =
        Number(document.getElementById("arrayIndex").value);

    if (index < 0 || index > array.length) {

        setStatus("Invalid index.");

        return;

    }

    array.splice(index, 0, value);

    renderArray();

    setStatus(value + " inserted at index " + index);

    showInsertCode();

}

/*==========================================
            DELETE
==========================================*/

function deleteIndex() {

    const index =
        Number(document.getElementById("arrayIndex").value);

    if (index < 0 || index >= array.length) {

        setStatus("Invalid index.");

        return;

    }

    const deleted = array[index];

    array.splice(index, 1);

    renderArray();

    setStatus(deleted + " deleted.");

    showDeleteCode();

}

/*==========================================
            UPDATE
==========================================*/

function updateValue() {

    const value =
        Number(document.getElementById("arrayValue").value);

    const index =
        Number(document.getElementById("arrayIndex").value);

    if (index < 0 || index >= array.length) {

        setStatus("Invalid index.");

        return;

    }

    array[index] = value;

    renderArray();

    setStatus("Updated index " + index);

    showUpdateCode();

}

/*==========================================
            INITIAL LOAD
==========================================*/

renderArray();

setStatus("Array Loaded Successfully");


/*==========================================
            SEARCH
==========================================*/

async function searchValue() {

    const value =
        Number(document.getElementById("arrayValue").value);

    const boxes =
        document.querySelectorAll(".array-box");

    showSearchCode();

    for (let i = 0; i < boxes.length; i++) {

        boxes[i].classList.add("array-active");

        setStatus("Checking Index : " + i);

        await sleep(700);

        if (array[i] === value) {

            boxes[i].classList.remove("array-active");

            boxes[i].classList.add("array-found");

            setStatus(value + " Found at Index " + i);

            return;

        }

        boxes[i].classList.remove("array-active");

    }

    setStatus(value + " Not Found");

}

/*==========================================
            TRAVERSE
==========================================*/

async function traverseArray() {

    const boxes =
        document.querySelectorAll(".array-box");

    for (let i = 0; i < boxes.length; i++) {

        boxes[i].classList.add("array-active");

        setStatus("Traversing : " + array[i]);

        await sleep(500);

        boxes[i].classList.remove("array-active");

    }

    setStatus("Traversal Completed");

}

/*==========================================
            REVERSE
==========================================*/

function reverseArray() {

    array.reverse();

    renderArray();

    setStatus("Array Reversed");

    codeBox.innerHTML =

`array.reverse();`;

}

/*==========================================
            RANDOM ARRAY
==========================================*/

function randomArray() {

    array = [];

    for (let i = 0; i < 8; i++) {

        array.push(

            Math.floor(Math.random() * 90) + 10

        );

    }

    renderArray();

    setStatus("Random Array Generated");

}

/*==========================================
            CLEAR ARRAY
==========================================*/

function clearArray() {

    array = [];

    renderArray();

    setStatus("Array Cleared");

}

/*==========================================
            DELAY
==========================================*/

function sleep(ms) {

    return new Promise(resolve =>

        setTimeout(resolve, ms)

    );

}

/*==========================================
        IMPLEMENTATION CODES
==========================================*/

function showInsertCode() {

codeBox.innerHTML =

`// Insert

array.push(value);

// OR

array.splice(index,0,value);`;

}

function showDeleteCode() {

codeBox.innerHTML =

`// Delete

array.splice(index,1);`;

}

function showUpdateCode() {

codeBox.innerHTML =

`// Update

array[index]=value;`;

}

function showSearchCode() {

codeBox.innerHTML =

`for(let i=0;i<array.length;i++){

 if(array[i]==value){

    return i;

 }

}`;

}

/*==========================================
        INITIAL CODE
==========================================*/

codeBox.innerHTML =

`Welcome to Array Visualizer

Choose any operation

to see its implementation.`;