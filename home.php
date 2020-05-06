<?php
/**
 * 
 * Template Name: Home
 * @package Plastiglass
 * 
 */
$hometop=get_field("hometop"); /*Imagen de home top*/
$homemiddeo=get_field("homemiddeo"); 
$homemiddet=get_field("homemiddet");
$homemiddf=get_field("homemiddf");

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.

}

get_header();

?>
<link rel="stylesheet" href="<?php echo get_template_directory_uri().'/css/home.css' ?>" type="text/css" media="all">

<main id="home-template">    
    <section>
        <div>
            <img class="w-100" src="<?php echo $hometop["url"]?>" alt="<?php echo $hometop["alt"]?>">
        </div>
    </section>
    <section class="middensec  d-flex">
        <div class="secleft">
            <div>
                <img class="w-100" src="<?php echo $homemiddeo["homemiddeone"]["url"]?>" alt="<?php echo $homemiddeo["homemiddeone"]["alt"]?>">
            </div> 
            <div class="sectext">
                <?php echo $homemiddeo["homemiddetext"]?>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.63 16.36">
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
                </p> 

            </div> 
        </div>
        <div class="secright">
            <img class="w-100" src="<?php echo $homemiddeo["homemiddetwo"]["url"]?>" alt="<?php echo $homemiddeo["homemiddetwo"]["alt"]?>">
        </div>
    </section>
    <section class="d-flex">
        <div class="secleftimg">
            <img class="w-100" src="<?php echo $homemiddet["homemiddethree"]["url"]?>" alt="<?php echo $homemiddet["homemiddethree"]["alt"]?>">
        </div>
        <div class="boxleft">
            <p class="textone"><?php echo $homemiddet["homemiddetextt"]?></p>
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
        <div class="products d-flex">
            <?php if($homemiddf["homemiddenproduct"]): ?>
                <?php foreach($homemiddf["homemiddenproduct"] as $categoria): ?> 
                    <div class="product" >                  
                    <img class="w-100" src="<?php echo $categoria["imgcat"]["url"]?>" alt="<?php echo $categoria["homemiddenproduct"]["alt"]?>">
                    <p class="productext"><?php echo $categoria["cattxt"][0]->name; ?></p>
                    </div>
                    <?php endforeach ?>
            <?php endif ?>
        </div>
    </section>

</main>

<?php
get_footer();
?>