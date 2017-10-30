/* SCROLL MODAL */
$(document).ready(ajustamodal);
  $(window).resize(ajustamodal);
  function ajustamodal() {
    var altura = $(window).height() - 100; //value corresponding to the modal heading + footer
    $(".ativa-scroll").css({"height":altura,"overflow-y":"auto"});
  }
/* PUXA PAGINA EM MODA(load) pagina servicos*/
$(document).ready(function(e){
    $('.pgServise').click(function(){
        var url = $(this).attr('href');
        $('.modal-servise').load("pageServises/servises.html "+url);
    });
});

/* PUXA PAGINA EM MODA(load) pagina ptoduto*/
$(document).ready(function(e){
    $('.pgProduto').click(function(){
        var url = $(this).attr('href');
        $('.modal-product').load("pageProduto/produtos.html "+url);
    });
});
