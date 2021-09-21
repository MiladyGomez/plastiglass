<?php
/**
 * jacuzzi.
 *
 * @package ditto_theme
 */

 global $post;
$color_casco = wp_get_post_terms($post->ID, "color_casco");
$color_exterior = wp_get_post_terms($post->ID, "color_exterior");
$jacuzziimgtop=get_field("jacuzziimgtop");
$jacuzziimgtopmovile=get_field("jacuzziimgtopmovile");
$jacuzziimgjacuzzi=get_field("jacuzziimgjacuzzi");
$jacuzzicapacity=get_field("jacuzzicapacity");
$jacuzzidimensions=get_field("jacuzzidimensions");
$jacuzzijets=get_field("jacuzzijets");
$jacuzziwateramount=get_field("jacuzziwateramount");
$jacuzzimaterial=get_field("jacuzzimaterial");
$productos_similares=get_field("producto_similar");
$informacion_adicional=get_field("informacion_adicional");
$configurador_jacuzzi = get_field('configurador_jacuzzi');

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

get_header();
?>

<?php if ($configurador_jacuzzi) : ?>
<script type="text/javascript" src="<?php echo get_template_directory_uri() ?>/jacuzzis-3d/<?= $configurador_jacuzzi ?>/pano2vr_player.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri() ?>/jacuzzis-3d/<?= $configurador_jacuzzi ?>/skin.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri() ?>/jacuzzis-3d/<?= $configurador_jacuzzi ?>/pano2vrgyro.js"></script>


<style type="text/css" title="Default">
			@font-face{
            font-family: Lane;
            src: url(<?php echo get_template_directory_uri() ?>/jacuzzis-3d/<?= $configurador_jacuzzi ?>/LANENAR_.woff);
            }
			@font-face{
            font-family: Visby-bold;
            src: url(<?php echo get_template_directory_uri() ?>/jacuzzis-3d/<?= $configurador_jacuzzi ?>/VisbyCF-Bold.woff);
            }
			@font-face{
            font-family: Visby-regular;
            src: url(<?php echo get_template_directory_uri() ?>/jacuzzis-3d/<?= $configurador_jacuzzi ?>/VisbyCF-Regular.woff);
            }
			@font-face{
            font-family: Ready;
            src: url(<?php echo get_template_directory_uri() ?>/jacuzzis-3d/<?= $configurador_jacuzzi ?>/Ready.woff);
            }

			.3d-render div, .3d-render h1, .3d-render h2, .3d-render span, .3d-render p {
				font-family: Visby-regular,Verdana,Arial,Helvetica,sans-serif;
			}
			.3d-render h3 {
				font-family: Visby-regular;
			}
			/* fullscreen */
			
			table,tr,td {
				font-size: 10pt;
				border-color : #777777;
				background : #dddddd; 
				color: #000000; 
				border-style : solid;
				border-width : 2px;
				padding: 5px;
				border-collapse:collapse;
			}
			.3d-render h1 {
				font-size: 18pt;
			}
			.3d-render h2 {
				font-size: 14pt;
			}
			.warning { 
				font-weight: bold;
			} 
			/* fix for scroll bars on webkit & Mac OS X Lion */ 
			::-webkit-scrollbar {
				background-color: rgba(0,0,0,0.5);
				width: 0.75em;
			}
			::-webkit-scrollbar-thumb {
    			background-color:  rgba(255,255,255,0.5);
            }
            div.ggskin_scrollarea .ggskin.ggskin_text div {
                
                line-height: 9px;
            }

            .ggskin.ggskin_text div {
                overflow: hidden!important;
                line-height: 21px;
            }
            
</style>	
<?php endif ?>

<link rel="stylesheet" href="<?php echo get_template_directory_uri().'/css/jacuzzi.css' ?>" type="text/css" media="all">

<main id="dt_single">
    <section>
        <?php if ($jacuzziimgtop) : ?>
        <div class="d-none d-md-block">
            <img class="w-100" src="<?php echo $jacuzziimgtop["url"]?>" alt="<?php echo $jacuzziimgtop["alt"]?>">
        </div>
        <?php endif ?>
        <?php if ($jacuzziimgtopmovile) : ?>
        <div class="d-block d-md-none">
            <img class="w-100" src="<?php echo $jacuzziimgtopmovile["url"]?>" alt="<?php echo $jacuzziimgtopmovile["alt"]?>">
        </div> 
        <?php endif ?>
    </section>
    <section class="infjacuzzi">
        <div class="container-fluid container-plastiglass">
            <div class="row">
                <div class="col-md-7">
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
                <div class="col-md-5">
                    <p class="title"><?php echo $post->post_title?></p>
                    <p class="content"><?php echo $post->post_content?></p>
                    <div class="characteristic">
                        <div>
                            <p class="classp1">Capacidad</p> 
                            <p class="classp2"><?php echo $jacuzzicapacity?></p> 
                        </div>
                        <div>
                            <p class="classp1">Dimensiones</p> 
                            <p class="classp2"><?php echo $jacuzzidimensions?></p>
                        </div>
                        <div> 
                            <p class="classp1">Chorros</p> 
                            <p class="classp2"><?php echo $jacuzzijets?></p> 
                        </div>
                        <div>
                            <p class="classp1">Cantidad de agua</p> 
                            <p class="classp2"><?php echo $jacuzziwateramount?></p> 
                        </div>
                        <div>
                            <p class="classp1">Material</p> 
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
                        <g id="Capa_2" data-name="Capa 2">
                            <g id="Layer_1" data-name="Layer 1">
                                <line x1="29.63" y1="8.18" x2="2.17" y2="8.18" style="fill:none;stroke:gray;stroke-miterlimit:10;stroke-width:2px"/>
                                <polygon points="8.8 0 10.16 1.47 2.94 8.18 10.16 14.89 8.8 16.36 0 8.18 8.8 0" style="fill:gray"/>
                            </g>
                        </g>
                    </svg>
                    `,
                    nextArrow:`
                    <svg class="nextArro" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.63 16.36">
                        <g id="Capa_2" data-name="Capa 2">
                            <g id="Layer_1" data-name="Layer 1">
                                <line y1="8.18" x2="27.46" y2="8.18" style="fill:none;stroke:gray;stroke-miterlimit:10;stroke-width:2px"/>
                                <polygon points="20.83 16.36 19.47 14.89 26.69 8.18 19.47 1.47 20.83 0 29.63 8.18 20.83 16.36" style="fill:gray"/>
                            </g>
                        </g>
                    </svg>
                    `
                    });
                
            });
        </script> 
    </section>

    <section class="container-fluid container-plastiglass">
        <h2 class="title-render">Información adicional</h2>
        <div class="inf-adicional">
            <?php if($informacion_adicional["caracteristicas_especiales"]): ?>
                <div>
                    <div class="title-info">Características Especiales
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.3 15.3">
                                <defs>
                                    <style>.cls-1{fill:#00263a;}</style>
                                </defs>
                                <g id="Capa_2" data-name="Capa 2">
                                    <g id="Layer_1" data-name="Layer 1">
                                        <path class="cls-1" d="M15.3,8.87H0V6.43H15.3Z" />
                                        <path class="cls-1 mas" d="M6.43,15.3V0H8.87V15.3Z" />
                                    </g>
                                </g>
                            </svg>
                        </span>
                    </div>
                    <div class="text-infor"><?php echo $informacion_adicional["caracteristicas_especiales"]; ?></div>
                </div>
            <?php endif ?>
            <?php if ($color_exterior): ?>
                <div>
                    <div class="title-info">Colores
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.3 15.3">
                                <defs>
                                    <style>.cls-1{fill:#00263a;}</style>
                                </defs>
                                <g id="Capa_2" data-name="Capa 2">
                                    <g id="Layer_1" data-name="Layer 1">
                                        <path class="cls-1" d="M15.3,8.87H0V6.43H15.3Z" />
                                        <path class="cls-1 mas" d="M6.43,15.3V0H8.87V15.3Z" />
                                    </g>
                                </g>
                            </svg>
                        </span>
                    </div>
                    <div class="text-infor">
                        <div class="contenedor-colores">
                            <?php foreach ($color_exterior as $colorj): ?>
                                <?php $background = get_field("color", $colorj);  ?>
                                <div class="box-color">
                                    <span class="circlec" style="background-color:<?php echo $background ?>"> </span>
                                    <div> <?php echo $colorj->name ?> </div>
                                </div>
                            <?php endforeach ?>
                        </div>
                    </div>
                </div>
            <?php endif ?>
            <?php if($informacion_adicional["equipos_&_accesorios"]): ?>
                <div>
                    <div class="title-info">Equipos & Accesorios
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.3 15.3">
                                <defs>
                                    <style>.cls-1{fill:#00263a;}</style>
                                </defs>
                                <g id="Capa_2" data-name="Capa 2">
                                    <g id="Layer_1" data-name="Layer 1">
                                        <path class="cls-1" d="M15.3,8.87H0V6.43H15.3Z" />
                                        <path class="cls-1 mas" d="M6.43,15.3V0H8.87V15.3Z" />
                                    </g>
                                </g>
                            </svg>
                        </span>
                    </div>
                    <div class="text-infor">
                        <table class="accesorios">
                            <thead>
                                <?php foreach ($informacion_adicional["equipos_&_accesorios"]["head"] as $title): ?>
                                    <th><?php echo $title["text"] ?></th>
                                <?php endforeach ?>
                            </thead>
                            <tbody>
                                <?php foreach ($informacion_adicional["equipos_&_accesorios"]["body"] as $body): ?>
                                    <tr>
                                        <?php foreach ($body["td"] as $td): ?>
                                            <?php if(strlen($td["text"] ) > 0): ?>
                                                <td ><?php echo $td["text"] ?></td>
                                            <?php else: ?>
                                                <td class="cont"><?php echo $td["text"] ?></td>
                                            <?php endif ?>
                                        <?php endforeach ?>
                                    </tr>
                                <?php endforeach ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            <?php endif ?>
            <?php if($informacion_adicional["garantia"]): ?>
                <div>
                    <div class="title-info">Garantía
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.3 15.3">
                                <defs>
                                    <style>.cls-1{fill:#00263a;}</style>
                                </defs>
                                <g id="Capa_2" data-name="Capa 2">
                                    <g id="Layer_1" data-name="Layer 1">
                                        <path class="cls-1" d="M15.3,8.87H0V6.43H15.3Z" />
                                        <path class="cls-1 mas" d="M6.43,15.3V0H8.87V15.3Z" />
                                    </g>
                                </g>
                            </svg>
                        </span>
                    </div>
                    <div class="text-infor"><?php echo $informacion_adicional["garantia"]; ?></div>
                </div>
            <?php endif ?>
            <?php if($informacion_adicional["archivos_descargables"]): ?>
                <div>
                    <div class="title-info">Archivos Descargables
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.3 15.3">
                                <defs>
                                    <style>.cls-1{fill:#00263a;}</style>
                                </defs>
                                <g id="Capa_2" data-name="Capa 2">
                                    <g id="Layer_1" data-name="Layer 1">
                                        <path class="cls-1" d="M15.3,8.87H0V6.43H15.3Z" />
                                        <path class="cls-1 mas" d="M6.43,15.3V0H8.87V15.3Z" />
                                    </g>
                                </g>
                            </svg>
                        </span>
                    </div>
                    <div class="text-infor">
                        <?php foreach($informacion_adicional["archivos_descargables"] as $file): ?>  
                            <div>                 
                                <a href="<?php echo $file["archivo"]["url"]?>">
                                    <?php echo $file["nombre"]?>
                                </a>
                            </div>  
                        <?php endforeach ?>
                    </div>
                </div>
            <?php endif ?>
        </div>
    </section>
  
    <?php if ($configurador_jacuzzi) : ?>
    <h2 class="title-render">CONFIGURA TU JACUZZI</h2>
    <section class="section-render">
        <button class="btn-cotizar" onclick="cotizarJacuzzi()">COTIZAR</button>
        <div class="over-render">
            <button onclick="configureJacuzzi()">CONFIGURAR</button>
        </div>
        <div class="3d-render" id="jacuzzi-3D"></div>
    </section>
   <?php endif ?>

    <section>
        <?php echo get_template_part('partials/formulariojacuzzis') ?>  
    </section>
    <section class="productsimili">
        <div class="textproduct">
            <p class="textproductsimil"> Productos similares </p> 
        </div>
        <div class="overproductos">
            <div class="productssimilares d-flex">
                <?php if($productos_similares): ?>                    
                    <?php foreach($productos_similares as $producto): ?> 
                        <div class="productsimilares" >
                            <a href="<?php echo get_permalink($producto["producto"]->ID)?>">    
                            <?php $galeria = get_field("jacuzziimgjacuzzi", $producto["producto"]->ID); ?>               
                            <img class="w-100" src="<?php echo $galeria[0]["jacuzziimgjacuzzip"]["url"]?>" alt="<?php echo $galeria[0]["jacuzziimgjacuzzip"]["alt"]?>">
                            <p class="productsimilarestext"><?php echo $producto["producto"]->post_title; ?></p>
                            </a>
                        </div>
                        <?php endforeach ?>    
                <?php endif ?>   
            </div> 
        </div>            
    </section>  
 
</main>

<?php if ($configurador_jacuzzi) : ?>
<script type="text/javascript">
	
    // check for CSS3 3D transformations and WebGL
    if (ggHasHtml5Css3D() || ggHasWebGL()) {
    // use HTML5 panorama

        // create the panorama player with the container
        pano=new pano2vrPlayer("jacuzzi-3D");
        // add the skin object
        skin=new pano2vrSkin(pano, "<?php echo get_template_directory_uri() ?>/jacuzzis-3d/<?= $configurador_jacuzzi ?>/");
        // load the configuration
        pano.readConfigUrl("<?php echo get_template_directory_uri() ?>/jacuzzis-3d/<?= $configurador_jacuzzi ?>/pano.xml");
        // hide the URL bar on the iPhone
        setTimeout(function() { hideUrlBar(); }, 10);
        // add gyroscope controller
        gyro=new pano2vrGyro(pano,"jacuzzi-3D");
            gyro.disable(); // disable on startup
            } else 
    if (swfobject.hasFlashPlayerVersion("10.0.0")) {
        var flashvars = {};
        var params = {};
        // enable javascript interface
        flashvars.externalinterface="1";
        params.quality = "high";
        params.bgcolor = "#ffffff";
        params.allowscriptaccess = "sameDomain";
        params.allowfullscreen = "true";
        var attributes = {};
        attributes.id = "pano";
        attributes.name = "pano";
        attributes.align = "middle";
        flashvars.panoxml="pano.xml";
        params.base=".";
        swfobject.embedSWF(
            "pano2vr_player.swf", "jacuzzi-3D", 
            "100%", "100%",
            "9.0.0", "", 
            flashvars, params, attributes);
        
    }
</script>
<?php endif ?>

<script>
    jQuery('.formulcotizacion form').submit(function(e) {
        
        jQuery('input[name="color"]').val(pano.getVariableValue('color'));
        jQuery('input[name="hidros"]').val(pano.getVariableValue('hidros'));
        jQuery('input[name="luces"]').val(pano.getVariableValue('luces'));
        if (pano.getVariableValue('blower')) {
            jQuery('input[name="blower"]').val('Si');
        } else {
            jQuery('input[name="blower"]').val('No');
        }
        
        if (pano.getVariableValue('cabeceros')) {
            jQuery('input[name="cabeceros"]').val('Si');
        } else {
            jQuery('input[name="cabeceros"]').val('No');
        }

        if (pano.getVariableValue('cascada')) {
            jQuery('input[name="cascada"]').val('Si');
        } else {
            jQuery('input[name="cascada"]').val('No');
        }        
    })

    function configureJacuzzi() {
        jQuery('.over-render').hide(500);
        jQuery('.btn-cotizar').show(500);
        
    }

    function cotizarJacuzzi() {
        jQuery('.over-render').show(500);
        jQuery('.btn-cotizar').hide(500);
        detination = jQuery('.formulcotizacion');
        if (detination.length > 0) {
            jQuery([document.documentElement, document.body]).animate({
                scrollTop: detination.offset().top - 100
            }, 1500);
        }
    }
    jQuery('.title-info').click(function(e){
        jQuery('.title-info').not(this).parent().removeClass('open');
        jQuery('.title-info').not(this).parent().find('.text-infor').slideUp("slow");   
        jQuery(this).parent().toggleClass('open');
        jQuery(this).parent().find('.text-infor').slideToggle("slow");
    });
</script>
<?php get_footer(); ?>