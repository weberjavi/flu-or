//Esta sentencia esconde el menú de proyectos en la carga inicial de la página.
		 			$(".menu_proyectos").hide();
		 			//Código que define el funcionamiento del slider y el elemento html al que se aplica.
		 			//La API del slider se puede consultar en http://slideme.luigiferraresi.it/
					$(".slider").slideme({
						arrows: true,
						loop:true,
						autoslide:false,
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