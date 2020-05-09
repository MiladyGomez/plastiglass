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
    'order' => 'ASC',  
);

$garticulos = new WP_Query( $args ); 
$imagen_topp=get_field("imagen_topp");/*Imagen de clientes top*/
$onepost=get_field("destacado_uno");
$twopost=get_field("destacado_dos");


if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.

}

get_header();

?>
<link rel="stylesheet" href="<?php echo get_template_directory_uri().'/css/blog.css' ?>" type="text/css" media="all">

<main id="contacto-template">  
    <section>
        <div>
            <img class="w-100" src="<?php echo $imagen_topp["url"]?>" alt="<?php echo $imagen_topp["alt"]?>">
        </div>
    </section> 
    <section>
        <div class="container-fluid container-plastiglass">
            <div class="one">
                <div class="row">
                    <div class="col-5">
                        <p class="tittle"><?php echo $onepost->post_title?></p>
                        <p class="content"><?php echo get_field("resumen", $onepost->ID);?></p>
                        <a class="verarticulo" href="<?php echo get_the_permalink()?>">
                            VER ARTICULO
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
                    <?php $imgentoppost= get_field("imgtop", $onepost->ID)?>
                    <div class="col-7">
                        <div class="imgpost" style="background-image: url(<?php echo $imgentoppost["url"]?>)">
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </section>      
    <section>
        <div class="container-fluid container-plastiglass">
            <div class="two">
                <div class="row">
                    <?php $imgentoppost= get_field("imgtop", $twopost->ID)?>
                    <div class="col-7">
                        <div class="imgpost" style="background-image: url(<?php echo $imgentoppost["url"]?>)">
                        </div>
                    </div>
                    <div class="col-5">
                        <p class="tittle"> <?php echo $twopost->post_title?></p>
                        <p class="content"> <?php echo get_field("resumen", $twopost->ID);?></p>
                        <a class="verarticulo" href="<?php echo get_the_permalink()?>">
                            VER ARTICULO
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
            </div>
        </div>
    </section>

    <section>
        <div class="textproduct">
            <p> ARTICULOS RECIENTES </p>
        </div>
        <div class="seccionart">
            <div class="recientes">
                <div class="row">
                    <?php if ($garticulos->have_posts()) : ?>
                    <?php while ( $garticulos->have_posts() ) : ?>
                    <?php $garticulos->the_post(); ?>  
                    <?php $galeria = get_field("imgtop"); ?>
                    <div class="col-4">
                        <div class="imgarticulo" style="background-image: url(<?php echo $galeria ["url"]?>)">
                        </div>
                        <div class="textart">
                        <p class="tittle1"> <?php the_date()?> </p>
                        <p class="tittle2"> <?php the_title()?> </p>
                        </div>
                    </div>

                    <?php endwhile ?>
                    <?php endif ?>
                    <?php  wp_reset_postdata() ?>
                </div>
            </div>
        </div>
    </section> 


<?php
get_footer();
?>