let todo = []; // Declare todo as a global variable

function submit() {
    let form = document.getElementById("todo-input");

    todo.push(form.value);
    addEntry(form.value);
    setCookie("todo", todo, 9999);
}

function addEntry(text) {
    var ul = document.getElementById("todo-list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    ul.appendChild(li);
}
function getCookie(cookie_name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + cookie_name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}

function setCookie(cookieName, cookieValue, expirationDays) {
    // Stringify the array before storing it as a cookie
    let cookieValueStr = JSON.stringify(cookieValue);

    var d = new Date();
    d.setTime(d.getTime() + (expirationDays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cookieName + "=" + cookieValueStr + ";" + expires + ";path=/";
}

function restore() {
    let cookieValue = getCookie("todo");
    if (cookieValue === "") {
        todo = [];
    } else {
        // Parse the cookie value back into an array
        todo = JSON.parse(cookieValue);
    }
    for (let i = 0; i < todo.length; i++) {
        addEntry(todo[i]);
    }
}

