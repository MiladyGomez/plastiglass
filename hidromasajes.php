<?php
/**
 * 
 * Template Name: hidromasajes
 * @package Plastiglass
 * 
 */

$args = array(
    'post_type' => 'jacuzzi',
    'posts_per_page' => -1,    
);


$gjacuzzis = new WP_Query( $args ); 
$imagen_top=get_field("imagen_top"); /*Imagen de clientes top*/




if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.

}

get_header();

?>
<link rel="stylesheet" href="<?php echo get_template_directory_uri().'/css/hidromasajes.css' ?>" type="text/css" media="all">

<main id="hidromasajes-template">  
    <section>
        <div>
            <img class="w-100" src="<?php echo $imagen_top["url"]?>" alt="<?php echo $imagen_top["alt"]?>">
        </div>
    </section>  
    <section>
        <div class="containerpost">
            <div class="row">
                <?php if ($gjacuzzis->have_posts()) : ?>
                    <?php $content=0 ?>
                    <?php while ( $gjacuzzis->have_posts() ) : ?>
                        <?php $gjacuzzis->the_post(); ?>  
                        <?php $galeria = get_field("jacuzziimgjacuzzi"); ?>
                        <?php if ($content%2==0) : ?>
                            <div class="col-6 marginbottomimg">  
                                <img class="w-100" src="<?php echo $galeria[0]["jacuzziimgjacuzzip"]["url"]?>" alt="<?php echo $galeria[0]["jacuzziimgjacuzzip"]["alt"]?>">
                            </div>                      
                            <div class="col-6 marginbottomtext"> 
                                <div class="sectext">
                                    <p class="tittle"> <?php the_title()?> </p>
                                    <p class="content"> <?php the_content()?> </p>
                                    <a class="verdetalles" href="<?php echo get_the_permalink()?>">
                                        VER DETALLES
                                    </a>
                                </div>
                            </div>
                        <?php else:?> 
                            <div class="col-6 marginbottomtext">
                                <div class="sectext">
                                    <p class="tittle"> <?php the_title()?></p>
                                    <p class="content"> <?php the_content()?></p>
                                    <a class="verdetalles" href="<?php echo get_the_permalink()?>">
                                        VER DETALLES
                                    </a>
                                </div>
                            </div>
                            <div class="col-6 marginbottomimg">  
                                <img class="w-100" src="<?php echo $galeria[0]["jacuzziimgjacuzzip"]["url"]?>" alt="<?php echo $galeria[0]["jacuzziimgjacuzzip"]["alt"]?>">
                            </div>
                         <?php endif ?>
                         <?php $content++ ?>
                    <?php endwhile ?>
                <?php endif ?>
                <?php  wp_reset_postdata() ?>
            </div> 
        </div>  
    </section>

<?php
get_footer();
?>