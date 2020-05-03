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

?>

<footer id="footer-wrapper">

    <div class="footermain d-flex">
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
</body>
</html>
