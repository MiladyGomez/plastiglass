<?php
/**
 * 
 * Template Name: productosvarios
 * @package Plastiglass
 * 
 */
$imagen_top=get_field("imagen_top"); /*Imagen de clientes top*/



if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.

}

get_header();

?>
<link rel="stylesheet" href="<?php echo get_template_directory_uri().'/css/productosvarios.css' ?>" type="text/css" media="all">

<main id="contacto-template">  
    <section>
        <div>
            <img class="w-100" src="<?php echo $imagen_top["url"]?>" alt="<?php echo $imagen_top["alt"]?>">
        </div>
    </section>  


<?php
get_footer();
?>