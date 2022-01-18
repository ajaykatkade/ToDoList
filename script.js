add = document.getElementById("add")

let task;
let desc;


function update() {

    itemJsonArrayStr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    if (itemJsonArray != null) {
        tableBody = document.getElementById("tableBody");
        let dataStr = '';
        itemJsonArray.forEach((element, index) => {
            dataStr += `
            <tr>
            <th scope="row">${index+1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-primary my-2" onclick="deleteData(${index})">Completed</button></td>
            </tr>
            `
        });
        tableBody.innerHTML = dataStr;
    }
}

function addData() {

    // console.log("Updating)
    task = document.getElementById("title").value;
    desc = document.getElementById("description").value;
    //console.log(task)
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([task, desc]);
        //   console.log(itemJsonArray[0]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    } else {
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([task, desc]);
        //   console.log(itemJsonArray[0]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }


    //populate the table
    update()


}

function deleteData(itemIndex) {
    console.log(itemIndex);
    itemStr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemStr);
    //DELETING THE THE ELEMENT OF INDEX 
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();
}

add.addEventListener("click", addData);
update();