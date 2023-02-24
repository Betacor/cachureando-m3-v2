// mantiene ocultos el aviso de éxito
$( document ).ready(function(){
   $("#alerta-exito").hide();
   $("input[type=radio]").click(function(){
      $("#alerta-exito").show("slow");
   });
   $("#close-exito").click(function(){
   $("#alerta-exito").hide("slow");
   });
});

