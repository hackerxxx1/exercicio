function cliquei() {
    alert('aperta ok ai vai vc vai gostar');
}

function check(email) {
    if (email.toLowerCase().endsWith('@yahoo.com') || email.toLowerCase().endsWith('@gmail.com') || email.toLowerCase().endsWith('@yahoo.com')) {
        alert('email valido aperte ok por favor')
    } else {
        alert('email invalido ou fora dos dominios suportados')
    }
}
$(document).ready(
    function() {
        alert("bem vindo")
    })