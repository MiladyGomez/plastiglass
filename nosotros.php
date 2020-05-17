<?php
/**
 * 
 * Template Name: nosotros
 * @package Plastiglass
 * 
 */
$imagen_top=get_field("imagen_top"); /*Imagen de clientes top*/
$imagen_top_mobile=get_field("imagen_top_mobile"); 
$texto_informativo=get_field("texto_informativo");
$historia=get_field("historia");


if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.

}

get_header();

?>
<link rel="stylesheet" href="<?php echo get_template_directory_uri().'/css/nosotros.css' ?>" type="text/css" media="all">

<main id="nosotros-template">    
 <section>
     <div class="d-none d-md-block">
            <img class="w-100" src="<?php echo $imagen_top["url"]?>" alt="<?php echo $imagen_top["alt"]?>">
        </div>
        <div class="d-block d-md-none">
            <img class="w-100" src="<?php echo $imagen_top_mobile["url"]?>" alt="<?php echo $imagen_top_mobile["alt"]?>">
        </div>
 </section>
 <section>
    <div class="nosotros_text">
        <p class="nosotros_tittle"><?php echo $texto_informativo["inf_tittle"]?></p>
        <p class="cliente_content"><?php echo $texto_informativo["inf_content"]?></p>
        <a class="botonvisitar" href="<?php echo $texto_informativo["visitanos"]["url"]?>">
                        <?php echo $texto_informativo["visitanos"]["title"]?>
        
        <div class="arrow"> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.63 16.36">
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
        </div>
        </a>
    </div>

 </section >
 <section class="texthistoria d-md-flex">
        <div class="secleftimg">
            <img class="w-100" src="<?php echo $historia["imagen_historia"]["url"]?>" alt="<?php echo $homemiddet["homemiddethree"]["alt"]?>">
        </div>
        <div class="boxleft">
            <p class="textone"><?php echo $historia["historia_tittle"]?></p>
            <p class="texttwo"><?php echo $historia["historia_content"]?></p>
        </div>
 </section >


<?php
get_footer();
?>