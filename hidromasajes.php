<?php
/**
 * 
 * Template Name: hidromasajes
 * @package Plastiglass
 * 
 */

$args = array(
    'post_type' => 'jacuzzi',
    'post_status' => 'publish',
    'posts_per_page' => -1,    
);


$gjacuzzis = new WP_Query( $args ); 
$imagen_top=get_field("imagen_top"); /*Imagen de clientes top*/
$imagen_top_mobile=get_field("imagen_top_mobile");
$modal_instrucciones = get_field("modal_instrucciones");



if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.

}

get_header();

?>
<link rel="stylesheet" href="<?php echo get_template_directory_uri().'/css/hidromasajes.css' ?>" type="text/css" media="all">

<main id="hidromasajes-template">   
    <section class="imagen-top">
        <div class="d-none d-md-block">
            <img class="w-100" src="<?php echo $imagen_top["url"]?>" alt="<?php echo $imagen_top["alt"]?>">
        </div>
        <div class="d-block d-md-none">
            <img class="w-100" src="<?php echo $imagen_top_mobile["url"]?>" alt="<?php echo $imagen_top_mobile["alt"]?>">
        </div>  
        <div class="btn-formulario d-block d-md-none" onclick="openformulario()">
            <span>Personaliza y <br>cotiza tu Jacuzzi
                <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.69 13.95">
                    <defs>
                        <style>.cls-1{fill:#FFFFFF;}</style>
                    </defs>
                    <g id="Capa_2" data-name="Capa 2">
                        <g id="Layer_1" data-name="Layer 1">
                            <polygon class="cls-1" points="0 13.23 6.25 6.97 0 0.72 0.72 0 7.69 6.97 0.72 13.95 0 13.23" />
                        </g>
                    </g>
                </svg>
            </span>
        </div>
        <div class="formulario">
            <svg class="close d-block d-md-none"  onclick="closeformulario()" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.04 13.04">
                <defs>
                    <style>.cls-2{fill:#00263a;}</style>
                </defs>
                <g id="Capa_2" data-name="Capa 2">
                    <g id="Layer_1" data-name="Layer 1">
                        <path class="cls-2" d="M11.42,12.52,0,2.34,1.62.52,13,10.7Z" />
                        <path class="cls-2" d="M.52,11.42,10.7,0l1.82,1.62L2.34,13Z" />
                    </g>
                </g>
            </svg>
            <svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550.25 21.22">
                <g id="Capa_2" data-name="Capa 2">
                    <g id="Layer_1" data-name="Layer 1">
                        <path d="M.28,6.35c36.47-2,73-3.62,109.25,1.67,17.26,2.51,34.37,6,51.72,7.87a178,178,0,0,0,51.32-1.45c17-3.09,33.86-7.93,51.23-8.89a104.31,104.31,0,0,1,27.07,2.23c8.61,1.77,17.1,4.07,25.81,5.32,17.58,2.53,35.48,1.61,53.17,1.28l55.47-1.05,110.92-2.1L550,11a.3.3,0,0,0,0-.59L439,12.49l-55.46,1c-18.16.34-36.48,1.36-54.63.22a170.33,170.33,0,0,1-27.13-4.15C293.6,7.75,285.38,5.76,277,5.08,260.1,3.72,243.4,7.45,227,10.93c-17.52,3.73-34.76,6.39-52.72,5.45s-35.85-4.32-53.65-7.22A389.38,389.38,0,0,0,68.09,3.93C50,3.45,31.83,4.14,13.73,5.05L.28,5.76c-.37,0-.37.61,0,.59" style="fill:#5fd0df"/>
                        <path d="M315.91,21.22a10.61,10.61,0,1,1,10.61-10.61A10.62,10.62,0,0,1,315.91,21.22Zm0-20.2a9.59,9.59,0,1,0,9.59,9.59A9.6,9.6,0,0,0,315.91,1Z" style="fill:#5fd0df"/>
                    </g>
                </g>
            </svg> 
            <?php echo get_template_part('partials/formulariopersolizajacuzzis') ?>  
        </div>
    </section>  

    <?php if($modal_instrucciones['activo']) : ?>    
   
    <div class="modal-instructions">
        <div class="body">
            <div class="header">
                <h2>INSTRUCCIONES</h2>
                <div class="close-btn" onclick="closeModalInstruction()">
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="content">
                <div class="text">
                    <?php if ($modal_instrucciones['pasos']) : ?>                        
                        <?php foreach ($modal_instrucciones['pasos'] as $_paso) : ?>
                            <p>
                                <span><?= $_paso['titulo_paso'] ?></span> <?= $_paso['descripcion'] ?>
                            </p>
                        <?php endforeach ?>
                    
                    <?php endif ?>

                    <div class="footer-modal">
                        <button onclick="closeModalInstruction()">CONTINUAR</button>
                    </div>   
                 
                </div>     
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550.25 21.22">
                    <g id="Capa_2" data-name="Capa 2">
                        <g id="Layer_1" data-name="Layer 1">
                            <path d="M.28,6.35c36.47-2,73-3.62,109.25,1.67,17.26,2.51,34.37,6,51.72,7.87a178,178,0,0,0,51.32-1.45c17-3.09,33.86-7.93,51.23-8.89a104.31,104.31,0,0,1,27.07,2.23c8.61,1.77,17.1,4.07,25.81,5.32,17.58,2.53,35.48,1.61,53.17,1.28l55.47-1.05,110.92-2.1L550,11a.3.3,0,0,0,0-.59L439,12.49l-55.46,1c-18.16.34-36.48,1.36-54.63.22a170.33,170.33,0,0,1-27.13-4.15C293.6,7.75,285.38,5.76,277,5.08,260.1,3.72,243.4,7.45,227,10.93c-17.52,3.73-34.76,6.39-52.72,5.45s-35.85-4.32-53.65-7.22A389.38,389.38,0,0,0,68.09,3.93C50,3.45,31.83,4.14,13.73,5.05L.28,5.76c-.37,0-.37.61,0,.59" style="fill:#5fd0df"/>
                            <path d="M315.91,21.22a10.61,10.61,0,1,1,10.61-10.61A10.62,10.62,0,0,1,315.91,21.22Zm0-20.2a9.59,9.59,0,1,0,9.59,9.59A9.6,9.6,0,0,0,315.91,1Z" style="fill:#5fd0df"/>
                        </g>
                    </g>
                </svg>        
            </div>
        </div>
    </div>

    <?php endif ?>

    <section class="d-none d-md-block">
        <div class="container-fluid container-plastiglass">  
            <div class="containerpost">
                <div class="row">
                    <?php if ($gjacuzzis->have_posts()) : ?>
                        <?php $content=0 ?>
                        <?php while ( $gjacuzzis->have_posts() ) : ?>
                            <?php $gjacuzzis->the_post(); ?>  
                            <?php $galeria = get_field("jacuzziimgjacuzzi"); ?>
                            <?php if ($content%2==0) : ?> 
                                <div class="col-6 marginbottomimg">  
                                    <?php if ($galeria[0]["jacuzziimgjacuzzip"]) : ?>
                                        <img class="w-100" src="<?php echo $galeria[0]["jacuzziimgjacuzzip"]["url"]?>" alt="<?php echo $galeria[0]["jacuzziimgjacuzzip"]["alt"]?>">
                                    <?php endif ?>
                                </div>                        
                                <div class="col-6 marginbottomtext"> 
                                    <div class="sectext">
                                        <p class="tittle"> <?php the_title()?> </p>
                                        <div class="content"> <?php the_content()?> </div>
                                        <a class="verdetalles" href="<?php echo get_the_permalink()?>">
                                            Ver detalles
                                        </a>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550.25 21.22">
                                            <g id="Capa_2" data-name="Capa 2">
                                                <g id="Layer_1" data-name="Layer 1">
                                                    <path d="M.28,6.35c36.47-2,73-3.62,109.25,1.67,17.26,2.51,34.37,6,51.72,7.87a178,178,0,0,0,51.32-1.45c17-3.09,33.86-7.93,51.23-8.89a104.31,104.31,0,0,1,27.07,2.23c8.61,1.77,17.1,4.07,25.81,5.32,17.58,2.53,35.48,1.61,53.17,1.28l55.47-1.05,110.92-2.1L550,11a.3.3,0,0,0,0-.59L439,12.49l-55.46,1c-18.16.34-36.48,1.36-54.63.22a170.33,170.33,0,0,1-27.13-4.15C293.6,7.75,285.38,5.76,277,5.08,260.1,3.72,243.4,7.45,227,10.93c-17.52,3.73-34.76,6.39-52.72,5.45s-35.85-4.32-53.65-7.22A389.38,389.38,0,0,0,68.09,3.93C50,3.45,31.83,4.14,13.73,5.05L.28,5.76c-.37,0-.37.61,0,.59" style="fill:#5fd0df"/>
                                                    <path d="M315.91,21.22a10.61,10.61,0,1,1,10.61-10.61A10.62,10.62,0,0,1,315.91,21.22Zm0-20.2a9.59,9.59,0,1,0,9.59,9.59A9.6,9.6,0,0,0,315.91,1Z" style="fill:#5fd0df"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </div> 
                            <?php else:?>  
                                <div class="col-6 marginbottomtext">
                                    <div class="sectext">
                                        <p class="tittle"> <?php the_title()?></p>
                                        <div class="content"> <?php the_content()?></div>
                                        <a class="verdetalles" href="<?php echo get_the_permalink()?>">
                                            Ver detalles
                                        </a>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550.25 21.22">
                                            <g id="Capa_2" data-name="Capa 2">
                                                <g id="Layer_1" data-name="Layer 1">
                                                    <path d="M.28,6.35c36.47-2,73-3.62,109.25,1.67,17.26,2.51,34.37,6,51.72,7.87a178,178,0,0,0,51.32-1.45c17-3.09,33.86-7.93,51.23-8.89a104.31,104.31,0,0,1,27.07,2.23c8.61,1.77,17.1,4.07,25.81,5.32,17.58,2.53,35.48,1.61,53.17,1.28l55.47-1.05,110.92-2.1L550,11a.3.3,0,0,0,0-.59L439,12.49l-55.46,1c-18.16.34-36.48,1.36-54.63.22a170.33,170.33,0,0,1-27.13-4.15C293.6,7.75,285.38,5.76,277,5.08,260.1,3.72,243.4,7.45,227,10.93c-17.52,3.73-34.76,6.39-52.72,5.45s-35.85-4.32-53.65-7.22A389.38,389.38,0,0,0,68.09,3.93C50,3.45,31.83,4.14,13.73,5.05L.28,5.76c-.37,0-.37.61,0,.59" style="fill:#5fd0df"/>
                                                    <path d="M315.91,21.22a10.61,10.61,0,1,1,10.61-10.61A10.62,10.62,0,0,1,315.91,21.22Zm0-20.2a9.59,9.59,0,1,0,9.59,9.59A9.6,9.6,0,0,0,315.91,1Z" style="fill:#5fd0df"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div class="col-6 marginbottomimg">  
                                    <?php if ($galeria[0]["jacuzziimgjacuzzip"]) : ?>
                                        <img class="w-100" src="<?php echo $galeria[0]["jacuzziimgjacuzzip"]["url"]?>" alt="<?php echo $galeria[0]["jacuzziimgjacuzzip"]["alt"]?>">
                                    <?php endif ?>
                                </div>
                            <?php endif ?>
                            <?php $content++ ?>
                        <?php endwhile ?>                        
                    <?php endif ?>
                    <?php  wp_reset_postdata() ?>
                </div> 
            </div>
        </div>  
    </section>
    <section class="d-block d-md-none">
        <div class="container-fluid container-plastiglass">  
            <div class="containerpost">
                <div class="row">
                    <?php if ($gjacuzzis->have_posts()) : ?>
                        
                        <?php while ( $gjacuzzis->have_posts() ) : ?>
                            <?php $gjacuzzis->the_post(); ?>  
                            <?php $galeria = get_field("jacuzziimgjacuzzi"); ?>
                            
                                <div class="col-md-6 marginbottomimg">  
                                    <?php if ($galeria[0]["jacuzziimgjacuzzip"]) : ?>
                                        <img class="w-100" src="<?php echo $galeria[0]["jacuzziimgjacuzzip"]["url"]?>" alt="<?php echo $galeria[0]["jacuzziimgjacuzzip"]["alt"]?>">
                                    <?php endif ?>
                                </div>                        
                                <div class="col-md-6 marginbottomtext"> 
                                    <div class="sectext">
                                        <p class="tittle"> <?php the_title()?> </p>
                                        <div class="content"> <?php the_content()?> </div>
                                        <a class="verdetalles" href="<?php echo get_the_permalink()?>">
                                            Ver detalles
                                        </a> 
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550.25 21.22">
                                            <g id="Capa_2" data-name="Capa 2">
                                                <g id="Layer_1" data-name="Layer 1">
                                                    <path d="M.28,6.35c36.47-2,73-3.62,109.25,1.67,17.26,2.51,34.37,6,51.72,7.87a178,178,0,0,0,51.32-1.45c17-3.09,33.86-7.93,51.23-8.89a104.31,104.31,0,0,1,27.07,2.23c8.61,1.77,17.1,4.07,25.81,5.32,17.58,2.53,35.48,1.61,53.17,1.28l55.47-1.05,110.92-2.1L550,11a.3.3,0,0,0,0-.59L439,12.49l-55.46,1c-18.16.34-36.48,1.36-54.63.22a170.33,170.33,0,0,1-27.13-4.15C293.6,7.75,285.38,5.76,277,5.08,260.1,3.72,243.4,7.45,227,10.93c-17.52,3.73-34.76,6.39-52.72,5.45s-35.85-4.32-53.65-7.22A389.38,389.38,0,0,0,68.09,3.93C50,3.45,31.83,4.14,13.73,5.05L.28,5.76c-.37,0-.37.61,0,.59" style="fill:#5fd0df"/>
                                                    <path d="M315.91,21.22a10.61,10.61,0,1,1,10.61-10.61A10.62,10.62,0,0,1,315.91,21.22Zm0-20.2a9.59,9.59,0,1,0,9.59,9.59A9.6,9.6,0,0,0,315.91,1Z" style="fill:#5fd0df"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </div> 

                        <?php endwhile ?>
                    <?php endif ?>
                    <?php  wp_reset_postdata() ?>
                </div> 
            </div>
        </div>  
    </section>

    <script>
        function closeModalInstruction() {
           jQuery('.modal-instructions').fadeOut(300);
        }
        function openformulario(){
            jQuery('.formulario').show();
        }
        function closeformulario(){
            jQuery('.formulario').hide();
        }
    </script>
<?php
get_footer();
?>