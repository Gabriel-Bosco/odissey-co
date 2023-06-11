/* --- GROWER CARD ASSINATURA --- */

window.addEventListener("scroll", function() {
    var assinatura = document.getElementById("assinatura");
    var surgir = document.querySelector("#element-grower");
    var surgirmd = document.querySelector("#element-grower-md")
    var assinaturaPosicao = assinatura.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
  
    if (assinaturaPosicao <= windowHeight) {
      surgir.classList.add("ativo");
      surgirmd.classList.add("ativo")
    }
  });
