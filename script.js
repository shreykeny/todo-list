let item = document.getElementById('root');
let submit = document.getElementById('submit');
let text = document.getElementById('text');
let alert = document.getElementById('alert');

let list = [];

let i = 0;

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
        i++;
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

    list.push(text);

    let div = document.createElement('div');
    let p = document.createElement('input');
    let span = document.createElement('span');

    p.setAttribute('type', 'checkbox');
    p.setAttribute('class', 'checkbox');

    p.setAttribute('id', i);

    p.setAttribute('onclick', 'myFunction(this.id)')



    span.setAttribute('id', "span" + i);
    span.innerHTML = list[i];

    div.appendChild(p);
    div.appendChild(span);

    item.appendChild(div);

}

function myFunction(id) {

    let checkbox = document.getElementById(id);

    let item = document.getElementById("span" + id);


    if (checkbox.checked == true) {
        item.style.color = "green";

        item.style.textDecoration = "line-through";

    }

    else {

        item.style.color = "inherit";

        item.style.textDecoration = "inherit";
    }







}
