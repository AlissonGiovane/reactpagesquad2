jQuery(document).ready(function($) {
  var time = 380;
  setTimeout(function() {
    $("h1.responsive-headline").fitText(1, { minFontSize: "40px", maxFontSize: "90px" });

    $(".smoothscroll").on("click", function(e) {
      e.preventDefault();
      var target = this.hash,
        $target = $(target);

      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $target.offset().top
          },
          800,
          "swing",
          function() {
            window.location.hash = target;
          }
        );
    });

    


    $(".flexslider").flexslider({
      namespace: "flex-",
      controlsContainer: ".flex-container",
      animation: "slide",
      controlNav: true,
      directionNav: false,
      smoothHeight: true,
      slideshowSpeed: 7000,
      animationSpeed: 600,
      randomize: false
    });

    $("form#contatoForm button.submit").click(function() {
      var contatoNome = $("#contatoNome #contatoNome").val();
      var contatoEmail = $("#contatoForm #contatoEmail").val();
      var contatoAssunto = $("#contatoForm #contatoAssunto").val();
      var contatoMensagem = $("#contatoForm #contatoMensagem").val();

      var data =
        "contatoNome=" +
        contatoNome +
        "&contatoEmail=" +
        contatoEmail +
        "&contatoAssunto=" +
        contatoAssunto +
        "&contatoMensagem=" +
        contatoMensagem;
      return false;
    });
  }, time);
});
