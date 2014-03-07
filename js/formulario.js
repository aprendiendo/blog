var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$link = $('#link'),
	$button = $('#mostrar_form'),
	$list = $('#contenido'),
	$primerPost = $('.item').first();

if (localStorage.getItem('autosave')) {
	$titulo.val(sessionStorage.getItem('titulo'));
	$link.val(sessionStorage.getItem('link'));
};

var id = setInterval(function(){
	sessionStorage.setItem('titulo', $titulo.val());
	sessionStorage.setItem('link', $link.val());
}, 1000);

function mostrarOcultarFormulario (evento) {
	evento.preventDefault();
	evento.stopPropagation();
	$form.slideToggle();
	$list.slideToggle();
}

function agregarPost(evento) {
	evento.preventDefault();
	evento.stopPropagation();
	var titulo = $titulo.val(),
		link = $link.val(),
		$clone = $primerPost.clone();

	$clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', link);
		
	$clone.hide();

	$list.prepend($clone);

	$clone.fadeIn();

	mostrarOcultarFormulario();

	$titulo.val('');
	$link.val('');

	$clone.slideDown();
}

//Eventos
$button.click( mostrarOcultarFormulario );
$form.on('submit', agregarPost );

