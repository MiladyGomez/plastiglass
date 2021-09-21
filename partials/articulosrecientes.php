<?php
    $args = array(
        'post_type' => 'post',
        'posts_per_page' => 3, /*n de articulos a mostrar*/
        'orderby' => 'date',  
        'order' => 'DESC',  
    );

    $garticulos = new WP_Query( $args ); 
?>

<link rel="stylesheet" href="<?php echo get_template_directory_uri().'/css/blog.css' ?>" type="text/css" media="all">

<section>
    <div class="textproduct">
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
    </div> 
</section>