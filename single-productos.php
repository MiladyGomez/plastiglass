<?php
/**
 * productos.
 *
 * @package ditto_theme
 */

 global $post;

 
$Menu_link=get_field("Menu_link");
$caracteristicas_caja_llave_nevera=get_field("caracteristicas_caja_llave_nevera");
$productos_similares=get_field("productos_similares");



if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

get_header();
?>

<link rel="stylesheet" href="<?php echo get_template_directory_uri().'/css/productos.css' ?>" type="text/css" media="all">

<main id="dt_single">
	<section class="Menu_link">
		<div class="Menu_link_Menu">
			<a class="Menu_link_Menuproducto" href="<?php echo $Menu_link["productos_link"]["url"]?>">
                <?php echo $Menu_link["productos_link"]["title"]?>
            </a>
			<a class="Menu_link_Menugrifo" href="<?php echo $Menu_link["cajagrifos_link"]["url"]?>">
                <?php echo $Menu_link["cajagrifos_link"]["title"]?>
            </a>
			<a class="Menu_link_Menunevera" href="<?php echo $Menu_link["caja_llave_nevera_link"]["url"]?>">
                <?php echo $Menu_link["caja_llave_nevera_link"]["title"]?>
            </a>
		</div>
	</section>
	<section>
		<div class="contenido_grifo">
				<div class="row">
					<div class="col-7">
						<div class="rela">
							<div class="slider-for">
								<?php if($caracteristicas_caja_llave_nevera ["galeria_grifo"]): ?>
									<?php foreach($caracteristicas_caja_llave_nevera ["galeria_grifo"] as $imagen): ?>                     
										<div class="imagen" >                  
											<img class="w-100" src="<?php echo $imagen["foto_grifo"]["url"]?>" alt="<?php echo $imagen["foto_grifo"]["alt"]?>">                   
										</div>
									<?php endforeach ?>
								<?php endif ?>
							</div>
							<div class="slider-nav">
								<?php if($caracteristicas_caja_llave_nevera ["galeria_grifo"]): ?>
									<?php foreach($caracteristicas_caja_llave_nevera ["galeria_grifo"] as $imagen): ?>                     
										<div class="imagen_nav" >                  
											<img class="w-100" src="<?php echo $imagen["foto_grifo"]["url"]?>" alt="<?php echo $imagen["foto_grifo"]["alt"]?>">                   
										</div>
									<?php endforeach ?>
								<?php endif ?>
							</div>
						</div>
					</div>

					<div class="col-5">
						<p class="title_grifo"><?php echo $post->post_title?></p>
						<p class="content_grifo"><?php echo $post->post_content?></p>
						<p class="classp"><?php echo $caracteristicas_caja_llave_nevera["Nota_text"]?></p> 
						<div class="characteristic">
							<div>
								<p class="classp1">REFERENCIA</p> 
								<p class="classp2"><?php echo $caracteristicas_caja_llave_nevera["referencia_text"]?></p> 
							</div>
							<div>
								<p class="classp1">DIMENSIONES (CMS)</p> 
								<p class="classp2"><?php echo $caracteristicas_caja_llave_nevera["dimensiones_text"]?></p>
							</div>
							<div> 
								<p class="classp1">CANTIDAD DE AGUA</p> 
								<p class="classp2"><?php echo $caracteristicas_caja_llave_nevera["cantidad_de_agua"]?></p> 
							</div>
							<div>
								<p class="classp1">MATERIAL</p> 
								<p class="classp2"><?php echo $caracteristicas_caja_llave_nevera["material_text"]?></p> 
							</div>
							<p class="colores_text">colores disponibles</p>
						</div>
					</div>
				</div>
		</div>
		<script>
            jQuery(document).ready(function() {
				
					jQuery('.slider-for').slick({
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: false,
						fade: true,
						asNavFor: '.slider-nav'
					});
					jQuery('.slider-nav').slick({
						slidesToShow: 3,
						slidesToScroll: 1,
						asNavFor: '.slider-for',
						arrows: false,
						centerMode: true,
						focusOnSelect: true
					});
				
			});
        </script>
	</section>
	<section class="productsimili">
		<div class="textproduct">
            <p class="textproductsimil"> <?php echo $productos_similares["productos_similares"]?> </p>
        </div>
	</section>

</main>

<?php get_footer(); ?>