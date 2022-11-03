// 231485698 - Abdullah Baig - Lab 4

// TASK 1
const sum = (arr) => {
    return arr.reduce(function (x, y) {
        return x + y;
    }, 0);
}


// TASK 2
const calculateButton = (operation) => {
    const btn1 = document.getElementById("number1").value;
    const btn2 = document.getElementById("number2").value;
    let res;
    switch (operation) {
        case "+": {
            res = (parseInt(btn1) + parseInt(btn2)).toString()
            document.getElementById("result1").innerText = res;
            break;
        }
        case "-": {
            res = (parseInt(btn1) - parseInt(btn2)).toString()
            document.getElementById("result1").innerText = res;
            break;
        }
        case "*": {
            res = (parseInt(btn1) * parseInt(btn2)).toString()
            document.getElementById("result1").innerText = res;
            break;
        }
        case "/": {
            res = (parseInt(btn1) / parseInt(btn2)).toString()
            document.getElementById("result1").innerText = res;
            break;
        }
    }
    console.log(res)
}


// TASK 3
const sortArr = () => {
    let arr = document.getElementById("arr").value;
    if (!arr.includes("[")) {
        arr = "[" + arr
    }
    if (!arr.includes("]")) {
        arr = arr + "]"
    }
    document.getElementById("result2").innerText = (JSON.parse(arr).sort()).toString();
}

// TASK 4
const checkFormInput = () => {
    let name = document.getElementById("name");
    let email = document.getElementById("mail");
    let password = document.getElementById("pass");
    console.log(password.value.length)
    let fieldsEmpty = false;

    if (name.value === "") {
        name.style = "background-color: salmon; border: 1px solid red;";
        fieldsEmpty = true;
    }
    if (email.value === "") {
        email.style = "background-color: salmon; border: 1px solid red;";
        fieldsEmpty = true;
    }
    if (password.value === "") {
        password.style = "background-color: salmon; border: 1px solid red;";
        fieldsEmpty = true;
    }

    if (password.value.length < 8) {
        alert("Password length can't be less than 8 characters!")
    }

    if (fieldsEmpty) {
        alert("Fields can't be empty!")
    }
}