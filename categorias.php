<?php
/**
 * 
 * Template Name: categorias
 * @package Plastiglass
 * 
 */
$args = array(
	'taxonomy'     => "categoria_productos",
	'parent'	   => 0,
	'hide_empty'   => 0,
	'orderby'      => 'id',
    'order'        => 'ASC'
);

$categoriasopen = get_categories( $args );

$imagen_top=get_field("imagen_top"); /*Imagen de clientes top*/



if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.

}

get_header();

?>
<link rel="stylesheet" href="<?php echo get_template_directory_uri().'/css/categorias.css' ?>" type="text/css" media="all">

<main id="contacto-template">  
    <section>
        <div>
            <img class="w-100" src="<?php echo $imagen_top["url"]?>" alt="<?php echo $imagen_top["alt"]?>">
        </div>
    </section>  
    <section> 
        
        <div class="container-fluid container-plastiglass">  
            <div class="boxcategorias">
                <div class="row">
                    <?php if ($categoriasopen) : ?>
                        <?php $content=0 ?>
                        <?php foreach($categoriasopen as $productocat): ?>
                            <?php $imgcategoria = get_field("imagen_categoria", $productocat); ?>
                            <?php if ($content%2==0) : ?>
                                
                                    <div class="col-6 boximg">
                                        <img class="w-100" src="<?php echo $imgcategoria["url"]?>" alt="<?php echo $imgcategoria["alt"]?>">
                                    </div>
                                    <div class="col-6 boxtext">
                                        <div class="paddingtext">
                                            <p class="name"><?php echo $productocat->name; ?></p>
                                            <p class="descri"><?php echo $productocat->description; ?></p>
                                            <a class="verproducto" href="<?php echo get_the_permalink()?>">
                                                VER PRODUCTOS
                                            </a>
                                        </div> 
                                    </div>
                                
                            <?php else:?> 
                                <div class="col-6 boxtext">
                                    <div class="paddingtext"> 
                                        <p class="name"><?php echo $productocat->name; ?></p>
                                        <p class="descri"><?php echo $productocat->description; ?></p>
                                        <a class="verproducto" href="<?php echo get_the_permalink()?>">
                                            VER PRODUCTOS
                                        </a>
                                    </div>
                                </div>
                                <div class="col-6 boximg">
                                    <img class="w-100" src="<?php echo $imgcategoria["url"]?>" alt="<?php echo $imgcategoria["alt"]?>">
                                </div>
                            <?php endif ?>
                            <?php $content++ ?>
                        <?php endforeach ?>
                    <?php endif ?>
                </div>
            </div>
        </div>
    </section>


<?php
get_footer();
?>