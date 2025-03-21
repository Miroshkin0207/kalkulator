function vichislenie() {
  let knopka = document.getElementById("vichislit")
  let first = Number(document.getElementById("first").value)
  let second = Number(document.getElementById("second").value)
  let deist = document.getElementById("deist").value
  let ravno = document.getElementById("ravno")
  let resultat = document.getElementById("result")
  if (deist==="Сложение") {
    let result = first + second
  }
  else if (deist === "Вычитание") {
    let result = first - second
  }
  else if (deist === "Умножение") {
    let result = first * second
  }
  else if (deist === "Деление") {
    let result = first / second
  }
  if (knopka.innerHTML === "Вычислить") {
    ravno.innerHTML = "Результат:"
    resultat.innerHTML = result
    knopka.innerHTML = "Сбросить"
  }
  else if (knopka.innerHTML === "Сбросить") {
    ravno.innerHTML = ""
    resultat.innerHTML = ""
    document.getElementById("first").value=""
    document.getElementById("second").value=""
    knopka.innerHTML = "Вычислить"    
  }
}