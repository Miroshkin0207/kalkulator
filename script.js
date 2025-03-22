function vichislenie() {
  let knopka = document.getElementById("vichislit")
  let first = Number(document.getElementById("first").value)
  let second = Number(document.getElementById("second").value)
  let deist = document.getElementById("deist").value
  let ravno = document.getElementById("ravno")
  let resultat = document.getElementById("result")
  let result = 0
  let skrznak = document.getElementById("skrznak")
  if (deist==="Сложение") {
    result = first + second
  }
  else if (deist === "Вычитание") {
    result = first - second
  }
  else if (deist === "Умножение") {
    result = first * second
  }
  else if (deist === "Деление") {
    result = first / second
  }
  else if (deist=== "Возведение в степень") {
    result = first ** second
  }
  else if (deist=== "Извлечение арифметического квадратного корня") {
    result = Math.sqrt(first)
    document.getElementById("second").hidden = true
  }
  if (knopka.innerHTML === "Вычислить") {
    ravno.innerHTML = "Результат:"
    resultat.innerHTML = result
    second.hidden = false
    knopka.innerHTML = "Сбросить"
  }
  else if (knopka.innerHTML === "Сбросить") {
    ravno.innerHTML = ""
    resultat.innerHTML = ""
    document.getElementById("first").value=""
    document.getElementById("second").value=""
    skrznak.innerHTML = ""
    second.hidden = false
    knopka.innerHTML = "Вычислить"    
  }
}
function znak() {
  let znak = document.getElementById("znak")
  let deist = document.getElementById("deist").value
  let ravno = document.getElementById("ravno")
  let skrznak = document.getElementById("skrznak")
  if (deist==="Сложение") {
    znak.innerHTML = "+"
  }
  else if (deist==="Вычитание") {
    znak.innerHTML = "-"
  }
  else if (deist==="Умножение") {
    znak.innerHTML = "×"
  }
  else if (deist==="Деление") {
    znak.innerHTML = "÷"
  }
  else if (deist==="Возведение в степень") {
    znak.innerHTML = "^"
  }
  else if (deist==="Извлечение арифметического квадратного корня") {
    document.getElementById("second").hidden = true
    skrznak.innerHTML = "√"
  }
  else {
    ravno.innerHTML = "Выберите действие"
  }
}
