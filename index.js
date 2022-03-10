function cliquei() {
    alert('aperta ok ai vai vc vai gostar');
}

function clicar() {
    document.getElementById("botaot").click();
}

function check() {
    let email = document.getElementById("email").value;
    if (email.endsWith('@yahoo.com') || email.endsWith('@gmail.com') || email.endsWith('@hotmail.com') || email.endsWith('@outlook.com')) {
        alert('email valido aperte ok por favor')
    } else {
        alert('email invalido ou fora dos dominios suportados')
    }
}