let items = localStorage.getItem('itemList')
// Operador Ternario
items = items ? items.split(',') : []
showItem()

function addItem() {
    let nameItem = document.getElementById('item').value
    let descripItem = document.getElementById('descrip').value
    let amountItem = document.getElementById('amount').value
    let valueItem = document.getElementById('value').value

    if(nameItem && descripItem && amountItem && valueItem){
        items.push({ 'nombreArticulo': nameItem, 'descripArticulo': descripItem,'cantidadArticulo': amountItem, 'valorArticulo': valueItem })
        showItem()
    }
}

function showItem() {
    document.getElementById('item').value   = ''
    document.getElementById('descrip').value   = ''
    document.getElementById('amount').value   = ''
    document.getElementById('value').value   = ''


    let html = ''
    for (let i = 0; i < items.length; i++) {
        //html = html + '<div class="col-10 mb-3">' + items[i] + '</div>'
        html = html + '<div class="col"> <a href="#" class="btn btn-danger" onclick="deleteItem(' + i + ')"> </a> </div>'
        html += `<div class="col-10 mb-3"> ${items[i]} </div>`
        //html += `<div class="col"> <a href="#" class="btn btn-danger" onclick="deleteItem(${i})"> X </a> </div>`
    }





    localStorage.setItem('itemList', JSON.stringify(items))
    document.getElementById('items').innerHTML = html
}

function deleteItem(item) {
    items.splice(item, 1)
    showItem()
}






