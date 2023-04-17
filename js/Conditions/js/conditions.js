var ele = document.querySelector('mission1')

document.getElementById('btn-1').addEventListener('click', mission1);
document.getElementById('btn-2').addEventListener('click', mission2)
document.getElementById('btn-3').addEventListener('click', mission3)
document.getElementById('btn-4').addEventListener('click', mission4)
document.getElementById('btn-5').addEventListener('click', mission5)
document.getElementById('btn-6').addEventListener('click', mission6)


function mission1() {
    let num1 = prompt('1 ud af 2\nIndtast et tal')
    let num2 = prompt('2 ud af 2\nIndtast et tal')
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    ele = document.querySelector("#m1text")
    if (num1 > num2) {
        ele.innerHTML = 'Den højeste værdi er: ' + num1
    }
    else if (num1 < num2) {
        ele.innerHTML = 'Den højeste værdi er: ' + num2
    }
    else if (num1 == num2) {
        ele.innerHTML = 'Det er det samme tal.'
    }
    else {
        ele.innerHTML = 'du indsatte ikke 2 tal'
    }
}

function mission2() {
    let num1 = prompt('1 ud af 3\nIndtast et tal')
    let num2 = prompt('2 ud af 3\nIndtast et tal')
    let num3 = prompt('3 ud af 3\nIndtast et tal')
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    num3 = parseFloat(num3)
    ele = document.querySelector("#m2text")
    if (num1 > num2 && num1 > num3) {
        ele.innerHTML = 'Den højeste værdi er: ' + num1
    }
    else if (num2 > num3 && num2 > num1) {
        ele.innerHTML = 'Den højeste værdi er: ' + num2
    }
    else if (num3 > num2 && num3 > num1) {
        ele.innerHTML = 'Den højeste værdi er: ' + num3
    }
    else if (num1 == num2 == num3) {
        ele.innerHTML = 'Det er det samme tal.'
    }
    else {
        ele.innerHTML = 'du indsatte ikke 3 tal'
    }

}

function mission3() {
    let num1 = prompt('Skriv et heltal')
    num1 = parseInt(num1)
    ele = document.querySelector("#m3text")
    result = num1 % 2
    switch (result) {
        case 1:
            ele.innerHTML = 'Det er et ulige tal'
            break
        case 0:
            ele.innerHTML = 'Det er et lige tal'
            break
        default:
            ele.innerHTML = 'Det er ikke et tal'
    }
}


function mission4() {
    let num1 = prompt("Indskriv dit tal af rigtige svar\nMax antal svar rigtige 80")
    num1 = parseInt(num1)
    ele = document.querySelector("#m4text")
    console.log(num1)
    switch (true) {
        case (num1 <= -1):
            ele.innerHTML = "Du kan ikke have negative antal af rigtige svar"
            break
        case (num1 == 0):
            ele.innerHTML = "Din karakter er: -3"
            break
        case (num1 <= 10):
            ele.innerHTML = "Din karakter er: 00"
            break
        case (num1 <= 20):
            ele.innerHTML = "Din karakter er: 02"
            break
        case (num1 <= 40):
            ele.innerHTML = "Din karakter er: 4"
            break
        case (num1 <= 55):
            ele.innerHTML = "Din karakter er: 7"
            break
        case (num1 <= 70):
            ele.innerHTML = "Din karakter er: 10"
            break
        case (num1 <= 80):
            ele.innerHTML = "Din karakter er: 12"
            break
        case (num1 >= 81):
            ele.innerHTML = "Du har flere rigtige svar end max antal af svar(80)"
            break
        default:
            ele.innerHTML = "du har ikke indtastet et tal først"
            break
    }
}

function mission5() {
    let x = prompt("skriv et heltal hvor tallet vil blive: \nGanget med sig selv\nRegnet Kvadratroden ud\nOpløftet med sig selv")
    x = parseInt(x)
    ele = document.querySelector("#m5text")
    let num1 = x * x
    let num2 = Math.sqrt(x)
    let num3 = x ** x

    ele.innerHTML = "" + x + " ganget med sig selv er: " + num1
    ele.innerHTML += "<br>Kvadratroden af " + x + " er: " + num2
    ele.innerHTML += "<br>" + x + " opløftet med sig selv er: " + num3
}

function mission6() {
    const month = ["Januar ", "Februar ", "Marts ", "April ", "Maj ", "Juni ", "Juli ", "August ", "September ", "Oktober ", "November ", "December "]
    const d = new Date()
    let year = d.getFullYear()
    let monthname = month[d.getMonth()]
    ele = document.querySelector("#m6text")
    
ele.innerHTML = "" + monthname
    ele.innerHTML += "" + year
}