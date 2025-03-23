function vichislenie() {
  let knopka = document.getElementById("vichislit")
  let first = Number(document.getElementById("first").value)
  let second = Number(document.getElementById("second").value)
  let deist = document.getElementById("deist").value
  let ravno = document.getElementById("ravno")
  let resultat = document.getElementById("result")
  let result = 0
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
    result = Math.sqrt(second)
  }
  else {
    ravno.innerHTML = "Выберите действие"
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
function znak() {
  let one = document.getElementById("first")
  let two = document.getElementById("second")
  let znak = document.getElementById("znak")
  let deist = document.getElementById("deist").value
  let ravno = document.getElementById("ravno")
  if (deist==="Сложение") {
    znak.innerHTML = "+"
    one.hidden = false
    one.setAttribute("placeholder", "Первое слагаемое")
    two.setAttribute("placeholder", "Второе слагаемое")
  }
  else if (deist==="Вычитание") {
    znak.innerHTML = "-"
    one.hidden = false
    one.setAttribute("placeholder", "Уменьшаемое")
    second.setAttribute("placeholder", "Вычитаемое")
  }
  else if (deist==="Умножение") {
    znak.innerHTML = "×"
    one.hidden = false
    one.setAttribute("placeholder", "Первый множитель")
    second.setAttribute("placeholder", "Второй множитель")
  }
  else if (deist==="Деление") {
    znak.innerHTML = "÷"
    one.hidden = false
    one.setAttribute("placeholder", "Делимое")
    second.setAttribute("placeholder", "Делитель")
  }
  else if (deist==="Возведение в степень") {
    znak.innerHTML = "^"
    one.hidden = false
    one.setAttribute("placeholder", "Основание степени")
    two.setAttribute("placeholder", "Показатель степени")
  }
  else if (deist==="Извлечение арифметического квадратного корня") {
    document.getElementById("first").hidden = true
    znak.innerHTML = "√"
    document.getElementById("second").setAttribute("placeholder", "Подкоренное выражение")
  }
}