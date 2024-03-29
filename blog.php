<?php
/**
 * 
 * Template Name: blog
 * @package Plastiglass
 * 
 */

$args = array(
    'post_type' => 'post',
    'posts_per_page' => 3, /*n de articulos a mostrar*/
    'orderby' => 'date',  
    'order' => 'DESC',  
);

$garticulos = new WP_Query( $args ); 
$imagen_topp=get_field("imagen_topp");/*Imagen de clientes top*/
$imagen_topp_mobile=get_field("imagen_topp_mobile");
$onepost=get_field("destacado_uno");
$twopost=get_field("destacado_dos");


if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.

} 

get_header();

?>
<link rel="stylesheet" href="<?php echo get_template_directory_uri().'/css/blog.css' ?>" type="text/css" media="all">

<main id="contacto-template">  
    <section class="main-banner">
        <div class="d-none d-md-block">
            <img class="w-100" src="<?php echo $imagen_topp["url"]?>" alt="<?php echo $imagen_topp["alt"]?>">
        </div>
        <div class="d-block d-md-none">
            <img class="w-100" src="<?php echo $imagen_topp_mobile["url"]?>" alt="<?php echo $imagen_topp_mobile["alt"]?>">
        </div>
    </section> 
    <section>
        <div class="container-fluid container-plastiglass">
            <div class="one">
                <div class="row"> 
                    <div class="col-lg-6 col-xl-5">
                        <p class="tittle"><?php echo $onepost->post_title?></p>
                        <p class="content"><?php echo get_field("resumen", $onepost->ID);?></p>
                        <a class="verarticulo" href="<?php echo get_permalink($onepost)?>">
                            Ver articulo
                            <svg class="arrowrigh" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.63 16.36">
                                <g id="Capa_2" data-name="Capa 2">
                                    <g id="Layer_1" data-name="Layer 1">
                                        <rect y="7.18" width="27.46" height="2" style="fill:#a67eb1"/>
                                        <polygon points="20.83 16.36 19.47 14.89 26.69 8.18 19.47 1.47 20.83 0 29.63 8.18 20.83 16.36" style="fill:#a67eb1"/>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <?php $imgentoppost= get_field("imgentop", $onepost->ID)?>
                    <?php $imgentoppostmobile= get_field("imgentop_mobile", $onepost->ID)?>
                    <div class="col-lg-6 col-xl-7">
                        <div class="imgpost" style="background-image: url(<?php echo $imgentoppost["url"]?>)">
                        </div>
                    </div>                     
                </div>
            </div>
        </div>
    </section>      
    <section class="d-none d-md-block"> 
        <div class="container-fluid container-plastiglass">
            <div class="two">
                <div class="row">
                    <?php $imgentoppost= get_field("imgentop", $twopost->ID)?>
                    <?php $imgentoppostmobile= get_field("imgentop_mobile", $twopost->ID)?>
                    <div class="col-lg-6 col-xl-7">
                        <div class="imgpost" style="background-image: url(<?php echo $imgentoppost["url"]?>)">
                        </div>
                    </div>                    
                    <div class="col-lg-6 col-xl-5">
                        <p class="tittle"> <?php echo $twopost->post_title?></p>
                        <p class="content"> <?php echo get_field("resumen", $twopost->ID);?></p>
                        <a class="verarticulo" href="<?php echo get_permalink($twopost)?>">
                            Ver articulo
                            <svg class="arrowrigh" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.63 16.36">
                                <g id="Capa_2" data-name="Capa 2">
                                    <g id="Layer_1" data-name="Layer 1">
                                        <rect y="7.18" width="27.46" height="2" style="fill:#a67eb1"/>
                                        <polygon points="20.83 16.36 19.47 14.89 26.69 8.18 19.47 1.47 20.83 0 29.63 8.18 20.83 16.36" style="fill:#a67eb1"/>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="d-block d-md-none"> 
        <div class="container-fluid container-plastiglass">
            <div class="two">
                <div class="row">
                     <div class="col-md-5">
                        <p class="tittle"> <?php echo $twopost->post_title?></p>
                        <p class="content"> <?php echo get_field("resumen", $twopost->ID);?></p>
                        <a class="verarticulo" href="<?php echo get_permalink($twopost)?>">
                            Ver articulo
                            <svg class="arrowrigh" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.63 16.36">
                                <g id="Capa_2" data-name="Capa 2">
                                    <g id="Layer_1" data-name="Layer 1">
                                        <rect y="7.18" width="27.46" height="2" style="fill:#a67eb1"/>
                                        <polygon points="20.83 16.36 19.47 14.89 26.69 8.18 19.47 1.47 20.83 0 29.63 8.18 20.83 16.36" style="fill:#a67eb1"/>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <?php $imgentoppost= get_field("imgentop", $twopost->ID)?>
                    <?php $imgentoppostmobile= get_field("imgentop_mobile", $twopost->ID)?>
                    <div class="d-none d-md-block col-md-7">
                        <div class="imgpost" style="background-image: url(<?php echo $imgentoppost["url"]?>)">
                        </div>
                    </div> 
                    <div class="d-block d-md-none col-md-7">
                        <div class="imgpost" style="background-image: url(<?php echo $imgentoppostmobile["url"]?>)">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <?php echo get_template_part('partials/articulosrecientes') ?> 
        <!-- <div class="textproduct">
            <p> Articulos recientes </p> 
        </div>

        <div class="container-fluid container-plastiglass">
            <div class="seccionart">
                <div class="overproductos">
                    <div class="recientes">
                        <div class="row">
                            <?php if ($garticulos->have_posts()) : ?>
                            <?php while ( $garticulos->have_posts() ) : ?>
                            <?php $garticulos->the_post(); ?>
                            
                            <?php $galeria = get_field("imgentop"); ?>
                            
                            <div class="col-4">
                                <a href="<?php echo get_permalink($articulo["articulo"]->ID)?>">
                                <div class="box-articulo">
                                    <div class="imgarticulo" style="background-image: url(<?php echo $galeria ["url"]?>)">
                                    </div>
                                    <div class="textart">
                                        <p class="tittle1"> <?php the_date()?> </p>
                                        <p class="tittle2"> <?php the_title()?> </p>
                                    </div>
                                </div>
                                </a> 
                            </div>
                            
                            <?php endwhile ?>
                            <?php endif ?>
                            <?php  wp_reset_postdata() ?> 
                        </div>
                    </div>
                </div>  
            </div>
        </div>  -->
    </section> 
    <!-- <section>
        <?php echo get_template_part('partials/formulariosuscribirme') ?> 
    </section>  -->


<?php
get_footer();
?>