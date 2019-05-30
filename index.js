function enlace(evento){
	$("section").html('<div class="loader"><img src"resources/spinner.gif">Cargando ....</div>');
	$("section").fadeOut(300, function(){
    $("section").load(evento).fadeIn(2000);
});
    return false;
}