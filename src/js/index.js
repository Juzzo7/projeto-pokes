const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const ImagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () =>{
    console.log("diabo");
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")
    
    if(modoEscuroEstaAtivo) {
        body.classList.remove("modo-escuro");
        ImagemBotaoTrocaDeTema.setAttribute("src" , "./src/imagens/sun.png");

    } else { 
        body.classList.add("modo-escuro");

    ImagemBotaoTrocaDeTema.setAttribute("src" , "./src/imagens/moon.png");

    }
    
});