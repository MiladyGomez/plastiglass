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
 <section class="main-banner">
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
                <g id="Capa_2" data-name="Capa 2">
                    <g id="Layer_1" data-name="Layer 1">
                        <rect y="7.18" width="27.46" height="2" style="fill:#a67eb1"/>
                        <polygon points="20.83 16.36 19.47 14.89 26.69 8.18 19.47 1.47 20.83 0 29.63 8.18 20.83 16.36" style="fill:#a67eb1"/>
                    </g>
                </g>
            </svg>
        </div>
        </a>
    </div>

 </section >
 <section class="texthistoria d-md-flex">
        <div class="secleftimg" style="background-image: url(<?php echo $historia["imagen_historia"]["url"]?>)">
            
        </div>
        <div class="boxleft">
            <p class="textone"><?php echo $historia["historia_tittle"]?></p>
            <p class="texttwo"><?php echo $historia["historia_content"]?></p>
            <svg class="fondo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 777 29.97">
                <g id="Capa_2" data-name="Capa 2">
                    <g id="Layer_1" data-name="Layer 1">
                        <path d="M.4,9c51.49-2.77,103.05-5.11,154.27,2.36,24.37,3.56,48.53,8.46,73,11.12,24.33,2.64,48.38,2.32,72.48-2.05S348,9.19,372.51,7.83A147.91,147.91,0,0,1,410.74,11c12.15,2.5,24.14,5.75,36.44,7.52,24.82,3.57,50.1,2.28,75.09,1.8l78.31-1.48,156.64-3,19.38-.36a.42.42,0,0,0,0-.83L620,17.63l-78.32,1.48c-25.64.49-51.51,1.93-77.14.32a242,242,0,0,1-38.32-5.86C414.6,11,403,8.13,391.1,7.17c-23.82-1.91-47.39,3.34-70.53,8.27-24.74,5.26-49.09,9-74.45,7.69S195.51,17,170.37,12.94a549.91,549.91,0,0,0-74.22-7.4c-25.6-.67-51.21.31-76.77,1.6q-9.49.48-19,1c-.53,0-.53.85,0,.82" style="fill:#5fd0df" />
                        <path d="M446.1,30a15,15,0,1,1,15-15A15,15,0,0,1,446.1,30Zm0-28.53A13.55,13.55,0,1,0,459.64,15,13.56,13.56,0,0,0,446.1,1.44Z" style="fill:#5fd0df" />
                    </g>
                </g>
            </svg>
        </div>
 </section >


<?php
get_footer();
?>