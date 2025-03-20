function vichislenie() {
    let knopka = document.getElementById("vichislit")
    let first = Number(document.getElementById("first").value)
    let second = Number(document.getElementById("second").value)
    let result = Number(first + second)
    let ravno = document.getElementById("ravno")
    let resultat = document.getElementById("result")
    if (knopka.innerHTML === "Вычислить") {
      ravno.innerHTML = "Результат:"
      resultat.innerHTML = result
      knopka.innerHTML = "Сбросить"
    }
    else if (knopka.innerHTML === "Сбросить") {
      ravno.innerHTML = ""
      resultat.innerHTML = ""
      first.reset()
      second.reset()
      knopka.innerHTML = "Вычислить"    
    }
  }
