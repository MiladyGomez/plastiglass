<?php
/**
 * Default page.
 *
 * @package ditto_theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

get_header();
?>

<main id="dt_page" class="woocommerce-content">
	<section class="container-fluid container-plastiglass">
		<?php while (have_posts()) : the_post(); ?>
			<?php the_content(); ?>
		<?php endwhile; ?>
	</section>
</main>

<?php get_footer(); ?>