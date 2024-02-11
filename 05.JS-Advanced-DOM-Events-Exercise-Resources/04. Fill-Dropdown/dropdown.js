function addItem() {
    const text = document.getElementById('newItemText');
    const val = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');

    let item = document.createElement('option');
    item.textContent = text.value;
    item.value = val.value;

    menu.appendChild(item);

    text.value = "";
    val.value = "";
}