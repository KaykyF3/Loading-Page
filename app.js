var pre_carregamento = document.querySelector("div.pre-carregamento")

function precarregamento(){
    pre_carregamento.style.opacity = "0";

    setTimeout(function() {
        pre_carregamento.style.display = "none";
    },500);

}