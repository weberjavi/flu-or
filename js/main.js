jQuery(document).ready(function($){
	var isLateralNavAnimating = false;
	
	//Activa la transición de la portada a la página de proyectos. Ésta animación se basa en éste trabajo de http://codyhouse.co/gem/full-screen-pushing-navigation/
	$('.gatillo_proyectos').on('click', function(event){
		event.preventDefault();
		//stop if nav animation is running 
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			$('body').toggleClass('navigation-is-open');
			$('.pag_proyectos_wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	});
	//Código que esconde y muestra la información sobre el estudio
	$( ".estudio" ).hide();
	$( ".btn_acordeon" ).click(function() {
  		$( ".estudio" ).slideToggle( "slow" );
	});
	//Esta sentencia esconde el menú de proyectos en la carga inicial de la página.
		 			$(".menu_proyectos").hide();
		 			//Código que define el funcionamiento del slider y el elemento html al que se aplica.
		 			//La API del slider se puede consultar en http://slideme.luigiferraresi.it/
					$(".slider").slideme({
						arrows: true,
						loop:true,
						autoslide:true,
						interval : 8000,
						autoslideHoverStop : false,
						transition : "fade",
						resizable: {
							width: 990,
							height: 450,
							},
						labels : {
							prev: "&lt",
							next: "&gt"
							}
						});
					//Código que esconde la información sobre el proyecto, una vez ha desaparecido hace aparecer de nuevo e menú de proyectos.		
					$(".btn_esconder").click(function(){
						$("#informacion").animate({
							left: -1000
						}, 500, "swing", function() {
							$(".menu_proyectos").slideToggle("fast");
						});
					});
					//Código que muestra la información sobre el proyecto una vez estamos en la página del proyecto sin necesidad de recargar la página.		
					$("#btn_mostrar").click(function(){
						$(".menu_proyectos").slideToggle( "fast", function() {
		    				$("#informacion").animate({
								left: 0
							}, 500, "swing");
	  					});
					});
});