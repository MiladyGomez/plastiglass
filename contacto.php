<?php
/**
 * 
 * Template Name: contacto
 * @package Plastiglass
 * 
 */
$imagen_top=get_field("imagen_top"); /*Imagen de clientes top*/
$box_contacto=get_field("box_contacto");
$centro_mapa=get_field("centro_mapa");


if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.

}

get_header();

?>
<link rel="stylesheet" href="<?php echo get_template_directory_uri().'/css/contacto.css' ?>" type="text/css" media="all">

<main id="contacto-template">  
    <section>
        <div>
            <img class="w-100" src="<?php echo $imagen_top["url"]?>" alt="<?php echo $imagen_top["alt"]?>">
        </div>
    </section> 
    <section>
        <div class="inforcontactos">
            <p class="tittlecontantacnos"><?php echo $box_contacto["titulo_contantacnos"]?></p>
            <div class="textcontactanos">
                <?php echo $box_contacto["informacion_contactanos"]?>
            </div> 
        </div>
    </section> 
    <section>
         <?php echo get_template_part('partials/formulariocontactanos') ?> 
    </section>
    <section >
        <div id="map">

        </div>
        <script>
            var map;
                function initMap() {
                    map = new google.maps.Map(document.getElementById('map'), {
                        center: {lat: <?php echo $centro_mapa["lat"]?>, lng: <?php echo $centro_mapa["lng"]?>},
                        zoom: 15
                    });
                    var marker = new google.maps.Marker({
                        position: {lat: <?php echo $centro_mapa["lat"]?>, lng: <?php echo $centro_mapa["lng"]?>},
                        map: map,
                    });
            }
            jQuery(document).ready(function(){
                initMap()
            })

        </script>
    </section>



<?php
get_footer();
?>