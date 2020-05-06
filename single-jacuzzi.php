<?php
/**
 * jacuzzi.
 *
 * @package ditto_theme
 */

 global $post;
 
$jacuzziimgtop=get_field("jacuzziimgtop");
$jacuzziimgjacuzzi=get_field("jacuzziimgjacuzzi");
$jacuzzicapacity=get_field("jacuzzicapacity");
$jacuzzidimensions=get_field("jacuzzidimensions");
$jacuzzijets=get_field("jacuzzijets");
$jacuzziwateramount=get_field("jacuzziwateramount");
$jacuzzimaterial=get_field("jacuzzimaterial");
$personaliza_tu_jacuzzi_imagen=get_field("personaliza_tu_jacuzzi_imagen");
$personaliza_tu_jacuzzi_text=get_field("personaliza_tu_jacuzzi_text");
$personaliza_tu_jazuzzi_contenido=get_field("personaliza_tu_jazuzzi_contenido");
$boton_cotizar=get_field("boton_cotizar");
$caracteristicas_jacuzzi=get_field("caracteristicas_jacuzzi");
$productos_similares=get_field("productos_similares");







if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

get_header();
?>

<link rel="stylesheet" href="<?php echo get_template_directory_uri().'/css/jacuzzi.css' ?>" type="text/css" media="all">

<main id="dt_single">
    <section>
        <div>
            <img class="w-100" src="<?php echo $jacuzziimgtop["url"]?>" alt="<?php echo $jacuzziimgtop["alt"]?>">
        </div>
    </section>
    <section class="infjacuzzi">
        <div class="container-fluid container-plastiglass">
            <div class="row">
                <div class="col-7">
                    <div class="sliderjacuzzi">
                        <?php if($jacuzziimgjacuzzi): ?>
                            <?php foreach($jacuzziimgjacuzzi as $imagen): ?>                     
                                <div class="imagen" >                  
                                    <img class="w-100" src="<?php echo $imagen["jacuzziimgjacuzzip"]["url"]?>" alt="<?php echo $imagen["jacuzziimgjacuzzip"]["alt"]?>">                   
                                </div>
                            <?php endforeach ?>
                        <?php endif ?>
                    </div>
                </div>
                <div class="col-5">
                    <p class="title"><?php echo $post->post_title?></p>
                    <p class="content"><?php echo $post->post_content?></p>
                    <div class="characteristic">
                        <div>
                            <p class="classp1">CAPACIDAD</p> 
                            <p class="classp2"><?php echo $jacuzzicapacity?></p> 
                        </div>
                        <div>
                            <p class="classp1">DIMENSIONES</p> 
                            <p class="classp2"><?php echo $jacuzzidimensions?></p>
                        </div>
                        <div> 
                            <p class="classp1">CHORROS</p> 
                            <p class="classp2"><?php echo $jacuzzijets?></p> 
                        </div>
                        <div>
                            <p class="classp1">CANTIDAD DE AGUA</p> 
                            <p class="classp2"><?php echo $jacuzziwateramount?></p> 
                        </div>
                        <div>
                            <p class="classp1">MATERIAL</p> 
                            <p class="classp2"><?php echo $jacuzzimaterial?></p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script>
            jQuery(document).ready(function() {
                jQuery('.sliderjacuzzi').slick({
                    arrows: true,
                    prevArrow: `
                    <svg class="prevArro" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.63 16.36">
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
                    `,
                    nextArrow:`
                    <svg class="nextArro" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.63 16.36">
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
                    `
                    });
                
            });
        </script>
    </section>
    <section class="customizejacuzzi">
        <div class="container-fluid container-plastiglass">
            <div class="row">
                <div class="col-7">
                        <div class="jacuzzi_imagen">
                            <img class="w-100" src="<?php echo $personaliza_tu_jacuzzi_imagen["url"]?>" alt="<?php echo $personaliza_tu_jacuzzi_imagen["alt"]?>">
                        </div>
                </div>
                <div class="col-5">
                    <p class="text_jacuzzi_text"><?php echo $personaliza_tu_jacuzzi_text?></p>
                    <p class="text_jacuzzi_contenido"><?php echo $personaliza_tu_jazuzzi_contenido?></p>
                    <p class="color_casco">COLOR CASCO</p>
                    <p class="color_exterior">COLOR EXTERIOR</p>
                    <a class="botoncotizar" href="<?php echo $boton_cotizar["url"]?>">
                        <?php echo $boton_cotizar["title"]?>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section>
        <img class="w-100" src="<?php echo $caracteristicas_jacuzzi["url"]?>" alt="<?php echo $caracteristicas_jacuzzi["alt"]?>">
    </section>
    <section class="productsimili">
        <div class="textproduct">
            <p class="textproductsimil"> <?php echo $productos_similares["productos_similares_text"]?> </p>
        </div>

        <div class="productssimilares d-flex">
            <?php if($productos_similares["galeria_productos_similares"]): ?>
                <?php foreach($productos_similares["galeria_productos_similares"] as $categoria): ?> 
                    <div class="productsimilares" >                  
                        <img class="w-100" src="<?php echo $categoria["imagen_productos_similares"]["url"]?>" alt="<?php echo $categoria["galeria_productos_similares"]["alt"]?>">
                        <p class="productsimilarestext"><?php echo $categoria["text_producto_similares"][0]->name; ?></p>
                    </div>
                    <?php endforeach ?>
            <?php endif ?>
        </div>            
    </section>

</main>

<?php get_footer(); ?>