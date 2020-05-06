<?php
/**
 * 
 * Template Name: clientes
 * @package Plastiglass
 * 
 */
$imagen_top=get_field("imagen_top");
$inscripcion_de_clientes=get_field("inscripcion_de_clientes"); /*Imagen de clientes top*/


if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.

}

get_header();

?>
<link rel="stylesheet" href="<?php echo get_template_directory_uri().'/css/clientes.css' ?>" type="text/css" media="all">

<main id="clientes-template">    
 <section>
     <div>
        <img class="w-100" src="<?php echo $imagen_top["url"]?>" alt="<?php echo $imagen_top["alt"]?>">
     </div>
 </section>
 <section>
    <div class="cliente_text">
        <p class="cliente_tittle"><?php echo $inscripcion_de_clientes["inscripcion_tittle"]?></p>
        <p class="cliente_content"><?php echo $inscripcion_de_clientes["inscripcion_content"]?></p>
    </div>
 </section>

</main>

<?php
get_footer();
?>