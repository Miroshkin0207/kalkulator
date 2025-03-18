function vichislenie() {
let first = Number(document.getElementById("first").value)
let second = Number(document.getElementById("second").value)
let result = Number(first + second)
document.getElementById("ravno").innerHTML = "Результат:"
document.getElementById("result").innerHTML = result
}