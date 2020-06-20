
let productList = [];

function displayTableHeader() {
    let tableContent = '<tr>\n' +
        '        <td>Product Name</td>\n' +
        '        <td colspan="2">' + productList.length + ' products</td>\n' +
        '    </tr>';

    return tableContent;
}

function displayProductAtPosition(index) {
    let productContent = '<tr>\n' +
        '\n' +
        '        <td>' + productList[index] + '</td>\n' +
        '        <td><button>Edit</button></td>\n' +
        '        <td><button>Delete</button></td>\n' +
        '\n' +
        '    </tr>';

    return productContent;
}

function displayProducts() {

    let table = document.getElementById("product_list");

    let tableContent = displayTableHeader();

    for (let i = 0 ; i < productList.length ; i++) {
        // hiển thị sản phẩm tại vị trí i
        tableContent += displayProductAtPosition(i);
    }

    table.innerHTML = tableContent;
}

function addProduct() {

    let productName = document.getElementById("product_name").value;

    productList.push(productName);
    displayProducts();
}

function editProduct() {

}

function deleteProduct(index) {

}
