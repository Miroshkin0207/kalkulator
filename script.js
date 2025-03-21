function vichislenie() {
    let knopka = document.getElementById("vichislit")
    let first = Number(document.getElementById("first").value)
    let second = Number(document.getElementById("second").value)
    let deist = document.getElementById("deist").value
    let ravno = document.getElementById("ravno")
    let resultat = document.getElementById("result")
    if (knopka.innerHTML === "Вычислить") {
      ravno.innerHTML = "Результат:"
      if (deist==="Сложение") {
        resultat.innerHTML = first + second
      }
      else if (deist === "Вычитание") {
        resultat.innerHTML = first - second
      }
      else if (deist === "Умножение") {
        resultat.innerHTMl = first * second
      }
      else if (deist === "Деление") {
        resultat.innerHTML = first / second
      }
      knopka.innerHTML = "Сбросить"
    }
    else if (knopka.innerHTML === "Сбросить") {
      ravno.innerHTML = ""
      resultat.innerHTML = ""
      document.getElementById("first").innerHTML=""
      document.getElementById("second").innerHTML=""
      knopka.innerHTML = "Вычислить"    
    }
  }