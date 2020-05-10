<?php
/**
 *articuloblog.
 *
 * @package ditto_theme
 */

 global $post;

 
$imgentop=get_field("imgentop");
$flechas=get_field("flechas");
$mas_articulos=get_field("mas_articulos");





if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

get_header();
?>

<link rel="stylesheet" href="<?php echo get_template_directory_uri().'/css/articuloblog.css' ?>" type="text/css" media="all">

<main id="dt_single">
<section>
        <div>
            <img class="w-100" src="<?php echo $imgentop["url"]?>" alt="<?php echo $imgentop["alt"]?>">
        </div>
</section>
<section>
	<div class="blogcontent">
		<div class="row">
				<div class="col-8">
					<h1 class="title"><?php echo $post->post_title?></h1>
					<p class="content"><?php echo $post->post_content?></p>
					<div class="social"> 
						<a href="#">
							<svg class="icono1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.76 18.85">
								<defs>
									<style>
										.cls-1{fill:#92a5ae;}
									</style>
								</defs>
								<g id="Capa_2" data-name="Capa 2">
									<g id="Layer_1" data-name="Layer 1">
										<path class="cls-1" d="M8.42,9.42H5.78l0,9.42H1.88V9.44H0V6.11H1.86V4a3.68,3.68,0,0,1,4-4H8.7V3.23H6.6a.8.8,0,0,0-.83.9v2h3Z" />
									</g>
								</g>
							</svg>
						</a>
						<a href="#">
							<svg class="icono2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.6 18.6">
								<defs>
									<style>
										.cls-1{fill:#92a5ae;}
									</style>
								</defs>
								<g id="Capa_2" data-name="Capa 2">
									<g id="Layer_1" data-name="Layer 1">
										<path class="cls-1" d="M9.3,4.53A4.78,4.78,0,1,0,14.08,9.3,4.76,4.76,0,0,0,9.3,4.53Zm0,7.87a3.1,3.1,0,1,1,3.1-3.1A3.1,3.1,0,0,1,9.3,12.4Z" />
										<path class="cls-1" d="M14.27,3.22a1.12,1.12,0,1,0,1.11,1.12A1.12,1.12,0,0,0,14.27,3.22Z" />
										<path class="cls-1" d="M18.55,5.47a7,7,0,0,0-.43-2.26A4.62,4.62,0,0,0,17,1.56,4.47,4.47,0,0,0,15.4.49,6.76,6.76,0,0,0,13.14.06C12.15,0,11.83,0,9.3,0S6.46,0,5.47.06A6.71,6.71,0,0,0,3.21.49,4.71,4.71,0,0,0,.49,3.21,6.71,6.71,0,0,0,.06,5.47C0,6.46,0,6.78,0,9.3s0,2.84.06,3.84a6.64,6.64,0,0,0,.43,2.25A4.43,4.43,0,0,0,1.56,17a4.62,4.62,0,0,0,1.65,1.08,7,7,0,0,0,2.26.43c1,0,1.31.05,3.83.05s2.85,0,3.84-.05a7,7,0,0,0,2.26-.43A4.5,4.5,0,0,0,17,17a4.45,4.45,0,0,0,1.08-1.65,6.9,6.9,0,0,0,.43-2.25c0-1,.05-1.31.05-3.84S18.59,6.46,18.55,5.47Zm-1.68,7.59a5.06,5.06,0,0,1-.32,1.73,3,3,0,0,1-1.76,1.76,5.06,5.06,0,0,1-1.73.32c-1,.05-1.27.06-3.76.06s-2.78,0-3.76-.06a5,5,0,0,1-1.72-.32,2.86,2.86,0,0,1-1.07-.69,2.92,2.92,0,0,1-.7-1.07,5.06,5.06,0,0,1-.32-1.73c0-1-.05-1.27-.05-3.76s0-2.78.05-3.76a5,5,0,0,1,.32-1.72,2.77,2.77,0,0,1,.7-1.07,2.77,2.77,0,0,1,1.07-.7,5,5,0,0,1,1.72-.32c1,0,1.28-.05,3.76-.05s2.78,0,3.76.05a5.06,5.06,0,0,1,1.73.32,2.92,2.92,0,0,1,1.07.7,2.86,2.86,0,0,1,.69,1.07,5,5,0,0,1,.32,1.72c.05,1,.06,1.28.06,3.76S16.92,12.08,16.87,13.06Z" />
									</g>
								</g>
							</svg>
						</a>
						<a href="#">
							<svg class="icono3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.74 19.8">
								<defs>
									<style>
										.cls-1{fill:#92a5ae;}
									</style>
								</defs>
								<g id="Capa_2" data-name="Capa 2">
									<g id="Layer_1" data-name="Layer 1">
										<path class="cls-1" d="M15.61,6.1a4.42,4.42,0,0,0-4,2.21v0h0l0,0V6.42H7.17c.06,1.25,0,13.36,0,13.36h4.44V12.32a3,3,0,0,1,.14-1.08A2.43,2.43,0,0,1,14,9.61c1.6,0,2.25,1.22,2.25,3v7.15h4.44V12.1c0-4.1-2.2-6-5.12-6" />
										<path class="cls-1" d="M2.51,0a2.32,2.32,0,1,0,0,4.62h0A2.32,2.32,0,1,0,2.51,0" />
										<rect class="cls-1" x="0.28" y="6.44" width="4.44" height="13.35" transform="translate(-0.03 0) rotate(-0.11)" />
									</g>
								</g>
							</svg>
						</a>
						<a href="#">
							<svg class="icono4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.18 18.84">
								<defs>
									<style>
										.cls-1{fill:#92a5ae;}
									</style>
								</defs>
								<g id="Capa_2" data-name="Capa 2">
									<g id="Layer_1" data-name="Layer 1">
										<path class="cls-1" d="M23.18,2.23A9.6,9.6,0,0,1,20.45,3,4.8,4.8,0,0,0,22.54.35a9.6,9.6,0,0,1-3,1.15,4.76,4.76,0,0,0-8.23,3.26,4.32,4.32,0,0,0,.13,1.08,13.51,13.51,0,0,1-9.81-5A4.77,4.77,0,0,0,3.09,7.22a4.78,4.78,0,0,1-2.16-.6v.06a4.76,4.76,0,0,0,3.82,4.67,4.73,4.73,0,0,1-1.26.16,5.26,5.26,0,0,1-.89-.08A4.75,4.75,0,0,0,7,14.73a9.53,9.53,0,0,1-5.91,2A10.55,10.55,0,0,1,0,16.7a13.43,13.43,0,0,0,7.29,2.14A13.44,13.44,0,0,0,20.82,5.31c0-.21,0-.41,0-.62A9.9,9.9,0,0,0,23.18,2.23Z" />
									</g>
								</g>
							</svg>
						</a>
						<a href="#">
							<svg class="icono5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.63 15.63">
								<defs>
									<style>
										.cls-1{fill:#92a5ae;}
									</style>
								</defs>
								<g id="Capa_2" data-name="Capa 2">
									<g id="Layer_1" data-name="Layer 1">
										<rect class="cls-1" x="5.71" width="4.21" height="15.63" />
										<rect class="cls-1" x="5.71" width="4.21" height="15.63" transform="translate(15.63 0) rotate(90)" />
									</g>
								</g>
							</svg>
						</a>
					</div>
					<div class="bottomarrow">
						<a class="botonanterior" href="<?php echo $flechas["arrowleft"]["url"]?>">
							<svg class="arrowleft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.63 16.36">
								<defs>
									<style>
										.cls-1{fill:none;stroke:#92a5ae;stroke-miterlimit:10;stroke-width:2px;}.cls-2{fill:#92a5ae;}
									</style>
								</defs>
								<g id="Capa_2" data-name="Capa 2">
									<g id="Layer_1" data-name="Layer 1">
										<line class="cls-1" x1="29.63" y1="8.18" x2="2.17" y2="8.18" />
										<polygon class="cls-2" points="8.8 0 10.16 1.47 2.94 8.18 10.16 14.89 8.8 16.36 0 8.18 8.8 0" />
									</g>
								</g>
							</svg>
							<?php echo $flechas["arrowleft"]["title"]?>
						</a>
						<a class="botonsiguiente" href="<?php echo $flechas["arrowrigh"]["url"]?>">
						<?php echo $flechas["arrowrigh"]["title"]?>
								<svg class="arrowrigh" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.63 16.36">
									<defs> 
										<style>
											.cls-1{fill:none;stroke:#92a5ae;stroke-miterlimit:10;stroke-width:2px;}.cls-2{fill:#92a5ae;}
										</style>
									</defs>
									<g id="Capa_2" data-name="Capa 2">
										<g id="Layer_1" data-name="Layer 1">
											<line class="cls-1" y1="8.18" x2="27.46" y2="8.18" />
											<polygon class="cls-2" points="20.83 16.36 19.47 14.89 26.69 8.18 19.47 1.47 20.83 0 29.63 8.18 20.83 16.36" />
										</g>
									</g>
								</svg>
							</a> 
					</div>

				</div>
				<div class="col-4">
					<div>
						<p class="textproduct"> EXPLORA MÁS ARTÍCULOS </p>
					</div> 
					<div >	
							<?php if($mas_articulos): ?>
								<?php foreach($mas_articulos as $articulo): ?> 
									 
									<div class="articulossimilares">
										<a href="<?php echo get_permalink($articulo["articulo"]->ID)?>">

											<?php $galeria= get_field("imgentop", $articulo["articulo"]->ID);?>

											<img class="w-100" src="<?php echo $galeria["url"]?>" alt="<?php echo $galeria["alt"]?>">
											<div class="boxtext">
												<div>  
													<p class="textdate"><?php echo $articulo["articulo"]->post_date; ?></p>
												</div>
												<div>  
													<p class="texttitle"><?php echo $articulo["articulo"]->post_title; ?></p>
												</div>
											</div>
										</a>
									</div>	 
								<?php endforeach ?> 
							<?php endif ?> 
						
					</div> 
				</div>
		</div>
	</div>
</section> 


</main>

<?php get_footer(); ?>