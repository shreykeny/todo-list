let item = document.getElementById('root');
let submit = document.getElementById('submit');
let text = document.getElementById('text');
let alert = document.getElementById('alert');




submit.onclick = function addItem() {

    if (text.value.trim() == "") {
        alert.innerHTML = "Sorry, add some text";
        text.value = "";
        setTimeout(function () {
            alert.innerHTML = "";
        }, 1500);

    }

    else {
        newItem(text.value);
        text.value = "";
    }

}

text.addEventListener("keyup", addItem => {
    if (event.keyCode == 13) {
        event.preventDefault();
        submit.click();
    }
})


let newItem = text => {

    let div = document.createElement('div');
    let p = document.createElement('input');
    let span = document.createElement('span');

    p.setAttribute('type', 'checkbox');
    p.setAttribute('id', 'checkbox');
    span.innerHTML = text;

    div.appendChild(p);
    div.appendChild(span);

    item.appendChild(div);

}


