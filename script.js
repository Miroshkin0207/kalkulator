function vichislenie() {
knopka = document.getElementById("vichislit")
let first = Number(document.getElementById("first").value)
let second = Number(document.getElementById("second").value)
let result = Number(first + second)
let ravno = document.getElementById("ravno")
let resultat = document.getElementById("result")
if (knopka.innerHTML === "Вычислить") {
ravno.innerHTML = "Результат:"
resultat.innerHTML = result
knopka.innerHTML = "Вернуть"
}
else if (knopka.innerHTML === "Вернуть") {
first.innerHTML = ""
second.innerHTML = ""
ravno.innerHTML = ""
resultat.innerHTML = ""
knopka.innerHTML = "Вычислить"
}
}