add = document.getElementById("add")
let task;
let desc;
add.addEventListener("click", () => {
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
});