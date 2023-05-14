const botaoalterartema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagembotatrocadetema = document.querySelector(".imagem-botao")

botaoalterartema.addEventListener("click", () => {
    const modoescuroestaativo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro")

    if (modoescuroestaativo) {
        imagembotatrocadetema.setAttribute("src", "./src/imagens/sun.png")
    } else {
        imagembotatrocadetema.setAttribute("src", "./src/imagens/moon.png")
    }
});