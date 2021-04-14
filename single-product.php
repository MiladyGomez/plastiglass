<?php
/**
 * The Template for displaying all single products
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://docs.woocommerce.com/document/template-structure/
 * @package     WooCommerce/Templates
 * @version     1.6.4
 */


if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

global $product;

$_product = wc_get_product( $post->ID);
$color_disponible = wp_get_post_terms($post->ID, "color_disponible");
$material_disponible = wp_get_post_terms($post->ID, "material");
$forma_disponible = wp_get_post_terms($post->ID, "forma");
$tipo_disponible = wp_get_post_terms($post->ID, "tipo");
$Menu_link=get_field("Menu_link");
$caracteristicas_caja_llave_nevera=get_field("caracteristicas_caja_llave_nevera");
$productos_similar=get_field("productos_similares");
$productos_similares=get_field("producto_similar");
$caracteristicas_caja_llave_nevera=get_field("caracteristicas_caja_llave_nevera");
$main_category = wp_get_post_terms($post->ID, "categoria_productos");

get_header();

?>

<link rel="stylesheet" href="<?php echo get_template_directory_uri().'/css/productos.css' ?>" type="text/css" media="all">

<main id="dt_single">
	<section class="Menu_link">
		<div class="Menu_link_Menu">
			<a class="Menu_link_Menuproducto" href="catalogo">
                Productos
            </a>
			<a class="Menu_link_Menugrifo" href="catalogo/?categoria=<?php echo $main_category[0]->slug?>">
				<?php echo $main_category[0]->name?>
            </a>
			<a class="Menu_link_Menunevera">
                <?php echo $post->post_title?>
            </a>
		</div>
	</section>
	<section>
		<div class="contenido_grifo">  
				<div class="row">
					<div class="col-lg-7">
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

					<div class="col-lg-5"> 
						<p class="title_grifo"><?php echo $post->post_title?></p>
						<p class="content_grifo"><?php echo $post->post_content?></p>
						<p class="classp"><?php echo $caracteristicas_caja_llave_nevera["Nota_text"]?></p> 
						<div class="characteristic">
							<div>
								<p class="classp1">Referencia</p> 
								<p class="classp2"><?php echo $caracteristicas_caja_llave_nevera["referencia_text"]?></p> 
							</div>
							<div>
								<p class="classp1">Dimensiones (cms)</p> 
								<p class="classp2"><?php echo $caracteristicas_caja_llave_nevera["dimensiones_text"]?></p>
							</div>
							<div> 
								<p class="classp1">Cantidad de agua</p> 
								<p class="classp2"><?php echo $caracteristicas_caja_llave_nevera["cantidad_de_agua"]?></p> 
							</div>
							<div>
								<div class="row materialcol">
									<div class="col-7">
										<p class="classp3">Material</p>
									</div>
									<div class="col-5">
										<ul class="listacaracteristicas">
											<?php if ($material_disponible): ?>
												<?php foreach ($material_disponible as $materiald): ?>
														<li class="classp4"><?php echo $materiald->name ?></li>
												<?php endforeach ?>
											<?php endif ?> 
										</ul>
									</div>
								</div>
							</div>
							<div>
								<div class="row">
									<div class="col-7">
										<p class="classp3">Forma</p> 
									</div>
									<div class="col-5">
										<ul class="listacaracteristicas">
											<?php if ($forma_disponible): ?>								
												<?php foreach ($forma_disponible as $formad): ?>
													<li class="classp4"><?php echo $formad->name ?></li>
												<?php endforeach ?>								
											<?php endif ?>
										</ul>
									</div>
								</div>
							</div>
							<div>
								<div class="row">
									<div class="col-7">
										<p class="classp3">Tipo</p> 
									</div>
									<div class="col-5">
										<ul class="listacaracteristicas">
											<?php if ($tipo_disponible): ?>								
												<?php foreach ($tipo_disponible as $tipod): ?>
													<li class="classp4"><?php echo $tipod->name ?></li>
												<?php endforeach ?>								
											<?php endif ?>
										</ul>
									</div>
								</div>
								
							</div>
							<p class="colores_text">Colores disponibles</p>
							<?php if ($color_disponible): ?>
								<div class="infcolor">
									<?php foreach ($color_disponible as $colord): ?>
										<?php $background = get_field("color_disponible", $colord);  ?>
										<span onclick="circlecolordisponible(this)" namecolor="<?php echo $colord->name ?>" class="circlec" style="background-color:<?php echo $background ?>"> 
										</span>
									<?php endforeach ?>
										<span id="colordisponibleselet">
										
										</span> 
								</div>
							<?php endif ?>
							<p class="precio"><?php echo wc_price($_product->price);  ?> COP</p>
							<form class="cart" action="<?php echo esc_url( get_permalink($post->ID)); ?>" method="post" enctype='multipart/form-data'>
								<button type="submit" name="add-to-cart" value="<?php echo esc_attr( $post->ID ); ?>" class="single_add_to_cart_button button alt buttomcomprar">Comprar</button>
							</form>
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
		<script>
            function circlecolordisponible(elementoentrante) {
                var textcolor=jQuery(elementoentrante).attr("namecolor");
                jQuery("#colordisponibleselet").text(textcolor)
                jQuery(".circlec").removeClass("activo")
                jQuery(elementoentrante).addClass("activo")
				jQuery("input[name='disponible']").val(textcolor)
            }
        </script>
	</section> 
    <section> 
        <!-- <?php echo get_template_part('partials/formulariocotizacion') ?> -->
    </section>
	<section class="productsimili">
		<div class="textproduct">
            
			<p class="textproductsimil"> Productos similares </p>
			
		</div>
		<div class="overproductos">
			<div class="productssimilares d-flex"> 
				<?php if($productos_similares): ?>
					<?php foreach($productos_similares as $producto): ?> 
						<div class="productsimilares" >
							<a href="<?php echo get_permalink($producto["producto"]->ID)?>">  
							<?php $galeria = get_field("caracteristicas_caja_llave_nevera", $producto["producto"]->ID); ?>
							<img class="w-100" src="<?php echo $galeria["galeria_grifo"][0]["foto_grifo"]["url"]?>" alt="<?php echo $galeria[0]["foto_grifo"]["alt"]?>"> 
							<p class="productsimilarestext"><?php echo $producto["producto"]->post_title; ?></p>
							</a>
						</div>
						<?php endforeach ?> 
				<?php endif ?> 
			</div> 
		</div> 
	</section>

</main>

<?php get_footer(); ?>  
