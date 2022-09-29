let btn = document.getElementById("special")
let dataele = document.getElementById("data")
btn.addEventListener('click', loadData);

function loadData() {
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'text.txt', true);
    xhr.send()
    xhr.onprogress = function () {
        dataele.innerText = "loading...."
    }
    xhr.onload = function () {
        dataele.innerText = xhr.responseText;
    }
}