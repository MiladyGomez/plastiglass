<?php
/**
 * 
 * Template Name: Home
 * @package Plastiglass
 * 
 */
$hometop=get_field("hometop"); /*Imagen de home top*/
$imagen_top_mobile=get_field("imagen_top_mobile");
$homemiddeo=get_field("homemiddeo"); 
$homemiddet=get_field("homemiddet");
$homemiddf=get_field("homemiddf");

$productos_similares=get_field("producto_similar");




if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.

}

get_header();

?>
<link rel="stylesheet" href="<?php echo get_template_directory_uri().'/css/home.css' ?>" type="text/css" media="all">

<main id="home-template">    
    <section>
        <div class="d-none d-md-block">
            <img class="w-100" src="<?php echo $hometop["url"]?>" alt="<?php echo $hometop["alt"]?>">
        </div>
        <div class="d-block d-md-none">
            <img class="w-100" src="<?php echo $imagen_top_mobile["url"]?>" alt="<?php echo $imagen_top_mobile["alt"]?>">
        </div> 
    </section>
    <section class="middensec  d-lg-flex">
        <div class="secleft">
            <div>
                <img class="w-100" src="<?php echo $homemiddeo["homemiddeone"]["url"]?>" alt="<?php echo $homemiddeo["homemiddeone"]["alt"]?>">
            </div> 
            <a class="boxdescrip" href="<?php echo $homemiddeo["link_home"]["url"]?>">
                <div class="sectext">
                    <?php echo $homemiddeo["homemiddetext"]?>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.63 16.36">
                            <g id="Capa_2" data-name="Capa 2">
                                <g id="Layer_1" data-name="Layer 1">
                                    <line y1="8.18" x2="27.46" y2="8.18" style="fill:none;stroke:#a67eb1;stroke-miterlimit:10;stroke-width:2px"/>
                                    <polygon points="20.83 16.36 19.47 14.89 26.69 8.18 19.47 1.47 20.83 0 29.63 8.18 20.83 16.36" style="fill:#a67eb1"/>
                                </g>
                            </g>
                        </svg>
                    </p> 

                </div> 
            </a>
        </div>
        <div class="secright">  
            <img class="w-100" src="<?php echo $homemiddeo["homemiddetwo"]["url"]?>" alt="<?php echo $homemiddeo["homemiddetwo"]["alt"]?>">
        </div>
    </section>
    <section class="d-md-flex">
        <div class="secleftimg d-none d-lg-block" style="background-image: url(<?php echo $homemiddet["homemiddethree"]["url"]?>)">
            
        </div>
        <div class="secleftimg d-block d-lg-none">
            <img class="w-100" src="<?php echo $homemiddet["homemiddethreemovile"]["url"]?>" alt="<?php echo $homemiddet["homemiddethreemovile"]["alt"]?>">
        </div>
        <div class="boxleft">
            <div class="textone"><?php echo $homemiddet["homemiddetextt"]?></div>
            <p class="texttwo"><?php echo $homemiddet["homemiddetextf"]?></p>
            <a class="textthree" href="<?php echo $homemiddet["homemiddeproducto"]["url"]?>">
                <?php echo $homemiddet["homemiddeproducto"]["title"]?>
            </a>
        </div>
    </section>  
    <section>  
            <div>
                <p class="textcenter"> <?php echo $homemiddf["homemiddenttext"]?> </p>
            </div>
        <div class="overproductos">
            <div class="products d-flex">
                <?php if($homemiddf["homemiddenproduct"]): ?>
                    <?php foreach($homemiddf["homemiddenproduct"] as $categoria): ?>  
                        <a href="<?php echo $categoria["link_productos"]["url"]?>">
                            <div class="product" >                  
                            <img class="w-100" src="<?php echo $categoria["imgcat"]["url"]?>" alt="<?php echo $categoria["homemiddenproduct"]["alt"]?>">
                            <p class="productext"><?php echo $categoria["link_productos"]["title"] ?></p>
                            </div>
                            <?php endforeach ?>
                        </a>
                <?php endif ?> 
            </div>
        </div>
    </section>

</main>

<?php
get_footer();
?>