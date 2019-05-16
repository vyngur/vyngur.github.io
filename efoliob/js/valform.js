/*
Regular Expression para validação do nome
[A-Z]{1} --> Começar por maiúscula
[a-zA-Z]{3,30} --> Admite apenas letras, num total de 30 caracteres
*/
var nameRE = /^[A-Z]{1}[a-zA-Z\s]{3,30}$/;

/*
Regular Expression para validação do email
[a-z0-9]{2,30} --> Admite letras minúsculas e números para o nome até ao máximo de 30 caracteres
@ --> Inclui o @ nesta posição
[a-z]{3,20} --> O domínio apenas admite letras minúsuclas até um máximo de 20 caracteres
\. --> Inclui o '.' nesta posição
[a-z]{2} --> O código do país tem de ser constituído por 2 letras minúsculas
*/
var emailRE = /^[a-z0-9]{2,30}@[a-z]{3,20}\.[a-z]{2}$/;

/*
Regular Expression para validação das passwords
(?=.*[_\-#!=]) --> Inclui pelo menos um caracter especial
(?=.*[A-Z]) --> Inclui pelo menos uma letra maiúscula
(?=.*[0-9]) --> Incluí pelo menos 1 digito
[a-zA-Z0-9_\-#!=]{8,} --> Composta por, pelo menos, 8 caracters
*/
var passwordRE = /^(?=.*[_\-#!=])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_\-#!=]{8,}$/;

// Validação da morada
var addressRE = /^[a-zA-Z0-9\.-\s]{10,}$/;

// Validação do código postal
var zipRE = /^\d{4}[\-]\d{3}$/;

// Validação da localidade
var cityRE = /^[a-zA-Z-\s]{2,}$/;

function valForm() {
    // Variáveis para leitura dos dados do formulário
    var name = document.newReg.name.value;
    var email = document.newReg.email.value;
    var address = document.newReg.address.value;
    var zip = document.newReg.zip.value;
    var city = document.newReg.city.value;
    var password = document.newReg.password.value;
    var passwordc = document.newReg.passwordc.value;

    // Variável de controlo para submissão do formulário
    var valCtrl = true;

    // Rotina de validação do campo "Nome" e apresentação da mensagem de erro
    if( nameRE.test(name) == false || name == "" || name == null) {
        document.newReg.name.focus();
        document.getElementById("errorName").innerHTML = "Verifique o nome";
        valCtrl = false;
    }
    else document.getElementById("errorName").innerHTML = "";
    
    // Rotina de validação do campo "Email" e apresentação da mensagem de erro
    if( emailRE.test(email) == false || email == "" || email == null ) {
        document.newReg.email.focus();
        document.getElementById("errorEmail").innerHTML = "Verifique o email";
        valCtrl = false;
        // console.log("email " + email + " > " + emailRE.test(email));
    }
    else document.getElementById("errorEmail").innerHTML = "";

    // Rotina de validação do campo "Morada" e apresentação da mensagem de erro
    if( addressRE.test(address) == false || address == "" || address == null) {
        document.newReg.address.focus();
        document.getElementById("errorAddress").innerHTML = "Verifique a morada";
        valCtrl = false;
    }
    else document.getElementById("errorAddress").innerHTML = "";

    // Rotina de validação do campo "Código Postal" e apresentação da mensagem de erro
    if( zip == "" || zip == null) {
        document.newReg.zip.focus();
        document.getElementById("errorZip").innerHTML = "Verifique o código postal";
        valCtrl = false;
    }
    else document.getElementById("errorZip").innerHTML = "";

        // Rotina de validação do campo "Localidade" e apresentação da mensagem de erro
        if( city == "" || city == null) {
            document.newReg.city.focus();
            document.getElementById("errorCity").innerHTML = "Verifique a localidade";
            valCtrl = false;
        }
        else document.getElementById("errorCity").innerHTML = "";

    // Rotina de validação do campo "Password" e apresentação da mensagem de erro
    if( passwordRE.test(password) == false || password == "" || password == null ) {
        document.newReg.password.focus();
        document.getElementById("errorPassword").innerHTML = "Verifique a password";
        valCtrl = false;
    }
    else document.getElementById("errorPassword").innerHTML = "";

    // Rotina de validação do campo "Confirmar password" e apresentação da mensagem de erro
    if( passwordc == "" || passwordc == null) {
        document.newReg.passwordc.focus();
        document.getElementById("errorPasswordC").innerHTML = "Verifique a password";
        valCtrl = false;
    }

    if( passwordc !== password ) {
        document.newReg.passwordc.focus();
        document.getElementById("errorPasswordC").innerHTML = "As passwords são diferentes";
        valCtrl = false;
    }
    else document.getElementById("errorPasswordC").innerHTML = "";

    return valCtrl;
}

function loginForm() {
    // Variáveis para leitura dos dados do formulário
    // var user = document.login.user.value;
    var loginEmail = document.login.loginEmail.value;
    var loginPassword = document.login.loginPassword.value;

    // Variável de controlo para submissão do formulário
    var valLoginCtrl = true;

        // Rotina de validação do campo "Email" e apresentação da mensagem de erro
        if( emailRE.test(loginEmail) == false || loginEmail == "" || loginEmail == null ) {
            document.login.loginEmail.focus();
            document.getElementById("errorLoginEmail").innerHTML = "Verifique o email";
            valLoginCtrl = false;
        }
        else document.getElementById("errorLoginEmail").innerHTML = "";

        // Rotina de validação do campo "Password" e apresentação da mensagem de erro
        if( passwordRE.test(loginPassword) == false || loginPassword == "" || loginPassword == null ) {
            document.login.loginPassword.focus();
            document.getElementById("errorLoginPassword").innerHTML = "Verifique a password";
            valLoginCtrl = false;
        }
        else document.getElementById("errorLoginPassword").innerHTML = "";

        return valLoginCtrl;
}