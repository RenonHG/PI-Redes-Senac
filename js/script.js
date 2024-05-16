function verificar() {
    let inputUser = document.getElementById("usuario");
    let inputSenha = document.getElementById("senha");

    if (inputUser.value == "Picapau" && inputSenha.value == "Csgo_7070!") {
        alert("Acesso Liberado")

        window.location.href = "https://www.sp.senac.br/senac-americana";
    }

    else {
        alert("Acesso Negado")

        window.location.href = "index.html";
    }
}   