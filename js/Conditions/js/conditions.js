var result
var ele = document.querySelector('mission1')

document.getElementById('btn-1').addEventListener('click', mission1);
document.getElementById('btn-2').addEventListener('click', mission2)
document.getElementById('btn-3').addEventListener('click', mission3)
//document.getElementById('btn-4').addEventListener('click', mission4)
//document.getElementById('btn-5').addEventListener('click', mission5)
//document.getElementById('btn-6').addEventListener('click', mission6)


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
