function vichislenie() {
  let knopka = document.getElementById("vichislit")
  let first = Number(document.getElementById("first").value)
  let second = Number(document.getElementById("second").value)
  let deist = document.getElementById("deist").value
  let ravno = document.getElementById("ravno")
  let resultat = document.getElementById("result")
  let result = first + second
  let znak = document.getElementById("znak")
  if (deist==="Сложение") {
    result = first + second
    znak.innerHTML = "+"
  }
  else if (deist === "Вычитание") {
    result = first - second
    znak.innerHTML = "-"
  }
  else if (deist === "Умножение") {
    result = first * second
    znak.innerHTML = "*"
  }
  else if (deist === "Деление") {
    result = first / second
    znak.innerHTML = "÷"
  }
  if (knopka.innerHTML === "Вычислить") {
    ravno.innerHTML = "Результат:"
    resultat.innerHTML = result
    knopka.innerHTML = "Сбросить"
  }
  else if (knopka.innerHTML === "Сбросить") {
    ravno.innerHTML = ""
    resultat.innerHTML = ""
    znak
    document.getElementById("first").value=""
    document.getElementById("second").value=""
    knopka.innerHTML = "Вычислить"    
  }
}