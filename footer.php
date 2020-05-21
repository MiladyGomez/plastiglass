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
        <defs>
            <style>
                .cls-1{fill:#a4a4a4;}
            </style>
        </defs>
        <g id="Capa_2" data-name="Capa 2">
            <g id="Layer_1" data-name="Layer 1">
                <polygon class="cls-1" points="13 7.56 6.85 1.41 0.71 7.56 0 6.85 6.85 0 13.71 6.85 13 7.56" />
            </g>
        </g>
    </svg>
    <p class="uparrowtext">SUBIR</p>

</div>

<footer id="footer-wrapper">

    <div class="footermain d-xl-flex">
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
