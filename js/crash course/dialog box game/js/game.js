function game() {
    var userName = prompt('Indtast dit navn:')
    if (userName) {
        var welcome = confirm('Hej ' + userName + '. Er du klar til at spille?')
        if (welcome == true) {
            var score = 0
            var question1 = prompt('Spørgsmål 1:\nHvad er 2 + 2?')
            if (question1 == 4) {
                alert('Korrekt')
                var answer1 = 'Spørgsmål 1: Korrekt'
                score++
            }
            else {
                alert("Forkert");
                var answer1 = 'Spørgsmål 1: Forkert'
            }
    
            var question2 = prompt('Spørgsmål 2:\nHvad er 1 + 1?')
            if (question2 == 2) {
                alert('Korrekt')
                var answer2 = 'Spørgsmål 2: Korrekt'
                score++
            }
            else {
                alert("Forkert");
                var answer2 = 'Spørgsmål 2: Forkert'
            }
    
            var question3 = prompt('Spørgsmål 3:\nHvad er 2 + 2 med moms?')
            if (question3 == 5) {
                alert('Korrekt')
                var answer3 = 'Spørgsmål 3: Korrekt'
                score++
            }
            else {
                alert("Forkert");
                var answer3 = 'Spørgsmål 3: Forkert'
            }
    
            var question4 = prompt('Spørgsmål 4:\nHvad er 2 + 3?')
            if (question4 == 5) {
                alert('Korrekt')
                var answer4 = 'Spørgsmål 4: Korrekt'
                score++
            }
            else {
                alert("Forkert");
                var answer4 = 'Spørgsmål 4: Forkert'
            }
    
            var question5 = prompt('Spørgsmål 5:\nHvad er 2 + 2?')
            if (question5 == 4) {
                alert('Korrekt')
                var answer5 = 'Spørgsmål 5: Korrekt'
                score++
            }
            else {
                alert("Forkert");
                var answer5 = 'Spørgsmål 5: Forkert'
            }
    
            var result = document.querySelector('#result')
            result.innerHTML = '<h2>Samlet score for ' + userName + ': ' + score + '</h2>'
            result.innerHTML += answer1 + '<br>'
            result.innerHTML += answer2 + '<br>'
            result.innerHTML += answer3 + '<br>'
            result.innerHTML += answer4 + '<br>'
            result.innerHTML += answer5 + '<br>'
    
        }
    }

}
