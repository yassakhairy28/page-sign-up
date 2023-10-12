let submit = document.querySelector(".submit");
let email = document.querySelector(".mail")

let rg = /\w+\@\w+\.\w+/g;
submit.onclick = function () {

    if (email.value == email.value.match(rg)) {
        document.querySelector(".page").style.display = "none";
        document.querySelector(".subscribe").style.display = "flex";
    } else {
        email.classList.add("valid")
        document.querySelector(".validate").style.display = "block"
    }
}

email.onclick = function () {
    email.classList.remove("valid")
    document.querySelector(".validate").style.display = "none"
}