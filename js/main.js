myArray = [

]
let totalProduct=0
function indexOfProduct(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] == item) {
            return (i)
        }

    }
    return (-1)
}
function refreshQuantity() {
     document.getElementById('quantity').textContent=totalProduct;

}
function addItem(elementId) {
    let elm, pName, pDesc, pPrice, newRow, index;
    elm = document.getElementById(elementId);

    pImage = elm.children[0].src;
    console.log("fff"+pImage);
    pName = elm.children[1].textContent;
    // pDesc = elm.children[2].textContent;
    pPrice = elm.children[3].textContent;
    newRow = [pName, pPrice, 1,pImage]
    index = indexOfProduct(myArray, pName);
    console.log(index);
    if (index >= 0) {
        myArray[index][2]++
    } else {
        myArray.push(newRow)
    }
    arrayToTable();

}
function removeItem(index) {
    myArray.splice(index, 1)
    arrayToTable()
}
function plusProduct(index) {
    myArray[index][2]++;
    arrayToTable()
}
function minusProduct(index) {
    myArray[index][2]--;
    arrayToTable()
}
function arrayToTable() {
    let rows = "";
    //make body of table 
    for (let i = 0, j = 1; i < myArray.length; i++, j++) {
        rows += "<tr><td><div class='product_holder'><img src='" + myArray[i][3] + " ' /><div></td><td>" + myArray[i][0] + "</td><td>" + myArray[i][1] + "</td><td><button onclick='plusProduct("+i+")'>+</button>" + myArray[i][2] + "<button onclick='minusProduct("+i+")'>-</button></td><td><a href=javascript:removeItem('" + i + "')><img src='/images/remove.svg' /></a></td></tr>";
    }
    let tableBody = document.getElementById('tableRows');
    tableBody.innerHTML = rows
    //make footer of table
    let sum = 0
    for (let j = 0; j < myArray.length; j++) {
        sum += parseInt(myArray[j][1])*parseInt(myArray[j][2]);
    }
    let totalPrice = document.getElementById('totalPrice');
    totalPrice.innerHTML = sum
    totalProduct=0
    for (let j = 0; j < myArray.length; j++) {
        totalProduct += parseInt(myArray[j][2]);
    }
    let totalNum = document.getElementById('totalNum');
    totalNum.innerHTML = totalProduct;
    refreshQuantity()

}
function showBasket() {
    document.getElementById('basket').className='basket basketTransitionOpen'
}
function hideBasket() {
    document.getElementById('basket').className='basket basketTransitionClose'

}