<?php
/**
 * Footer template.
 *
 * @package ditto_theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$footer=get_field("footer_main", "option");
$terminos=get_field("pagina_de_terminos", "option");
?>
<div class="uparrow">
    <svg class="uparrowsvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.71 7.56">
        <g id="Capa_2" data-name="Capa 2">
            <g id="Layer_1" data-name="Layer 1">
                <polygon points="13 7.56 6.85 1.41 0.71 7.56 0 6.85 6.85 0 13.71 6.85 13 7.56" style="fill:gray"/>
            </g>
        </g>
    </svg>
    <p class="uparrowtext">SUBIR</p>

</div>

<footer id="footer-wrapper">

    <!-- <div class="footermain d-lg-flex">
        <div class="footerleft">
            <span >
                <?php echo $footer["copyright"]?>
            </span>
        </div>

        <div class="footerright">
            <a class="mail" href="mailto:<?php echo $footer["email"]?>">
                <?php echo $footer["email"]?>
            </a>
            <a href="<?php echo $footer["phoneone"]["url"]?>">
                T: <?php echo $footer["phoneone"]["title"]?>
            </a>
            <a class="phonetwo" href="<?php echo $footer["phonetwo"]["url"]?>">
                <?php echo $footer["phoneone"]["title"]?>
            </a>
            <span>
                <?php echo $footer["address"]?>
            </span>
        </div>


    </div> -->

    <div class="footermain contenido-footer">
        <div class="d-lg-flex top">
            <div class="uno">
                <img src="<?php echo $footer["logo"]["url"]?>" alt="<?php echo $footer["logo"]["alt"]?>">
            </div>
            <div class="footerright dos">
                <h3>Contáctanos</h3>
                <div>
                    <a href="<?php echo $footer["phoneone"]["url"]?>">
                        T: <?php echo $footer["phoneone"]["title"]?>
                    </a>
                    <a class="phonetwo" href="<?php echo $footer["phonetwo"]["url"]?>">
                        <?php echo $footer["phoneone"]["title"]?>
                    </a>
                </div>
                <div>
                    <a class="mail" href="mailto:<?php echo $footer["email"]?>">
                        <?php echo $footer["email"]?>
                    </a>
                </div>
                <div>
                    <p>
                        <?php echo $footer["address"]?>
                    </p>
                </div>
            </div>
            <div class="tres">
                <?php
                wp_nav_menu([
                    'menu'            => 'main_menu',
                    'theme_location'  => 'main_menu',
                    'container'       => 'nav',
                    'container_id'    => 'navbarCollapse',
                    'container_class' => '',
                    'menu_id'         => 'main_menu',
                    'menu_class'      => 'navbar-nav ml-auto',
                ]);
                ?>
            </div>
            <div class="cuatro">
                <?php if ($footer['informacion']) : ?>                        
                    <?php foreach ($footer['informacion'] as $info) : ?>
                        <div>
                            <a href="<?php echo $info["info"]["url"]?>">
                                <?php echo $info["info"]["title"]?>
                            </a>
                        </div>
                    <?php endforeach ?>
                
                <?php endif ?>
            </div>
            <div class="cinco">
                <div>
                    <?php echo get_template_part('partials/formulariosuscribirme') ?> 
                </div>
                <?php if ($footer['redes_sociales']) : ?>
                    <div class="d-lg-flex">                       
                        <?php foreach ($footer['redes_sociales'] as $item) : ?>
                            <a href="<?php echo $item["link"]["url"]?>">
                                <img class="w-100" src="<?php echo $item["imagen"]["url"]?>" alt="<?php echo $item["imagen"]["alt"]?>">
                            </a>
                        <?php endforeach ?>
                    </div> 
                <?php endif ?>
            </div>
        </div>
        <div class="d-lg-flex align-items-center bottom">
            <span >
                <?php echo $footer["copyright"]?>
            </span>
            <?php if ($footer['medios_de_pagos']) : ?>
                <div class="d-flex align-items-center">                       
                    <?php foreach ($footer['medios_de_pagos'] as $item_pago) : ?>
                        <img class="w-100" src="<?php echo $item_pago["imagen"]["url"]?>" alt="<?php echo $item_pago["imagen"]["alt"]?>">
                    <?php endforeach ?>
                </div> 
            <?php endif ?>
        </div>
        
    </div>

</footer>

</div> <!-- -Page container -->
<?php wp_footer(); ?>

<script>
    $('.uparrow').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    jQuery(window).scroll(function(){
        var top = jQuery(window).scrollTop();
        
        if (top >= 400) {
            jQuery('.uparrow').show(600);            
        } else {
            jQuery('.uparrow').hide(600);        
        }
    });
</script>

<script>
    <?php if ($terminos) :?>
        jQuery(document).ready(function() {
            jQuery('.wpcf7-list-item-label').each(function(index, element) {
                console.log(jQuery(element).text())
                if (jQuery(element).text() == 'Acepto términos y condiciones.') {
                    jQuery(element).html('Acepto <a href="<?php echo $terminos['url'] ?>">términos y condiciones.</a>')

                }
            })
        })
    <?php endif ?>
</script>

<!-- comentario -->

</body>

</html>
