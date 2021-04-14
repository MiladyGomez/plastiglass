<?php
/**
 * Header.
 *
 * @package ditto_theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
?>
<!DOCTYPE html>
<html class="no-js" <?php language_attributes(); ?>>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title><?php wp_title('|', true, 'right'); ?> <?php bloginfo('name'); ?></title>

  <meta name="description" content="">
  <meta name="author" content="">

  <meta name="viewport" content="width=device-width">
  <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri() ?>/css/main.css">

  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div id="page"> <!-- +Page container -->

  <header id="header-wrapper">
    <div class="container-header">
      <nav class="d-flex" id="PR-navbar">
        <?php if (has_custom_logo()): ?>
          <?php the_custom_logo(); ?>
        <?php else: ?>
          <a class="navbar-brand mr-auto" rel="home" href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" itemprop="url"><?php bloginfo( 'name' ); ?></a>
        <?php endif ?>
        <div class="menumobile" onclick="seemain()">
          <span></span> 
          <span></span>
          <span></span>
        </div>
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
   
      </nav>
    </div>
    <div class="see_main_mobile">
    <?php
          wp_nav_menu([
            'menu'            => 'main_menu',
            'theme_location'  => 'main_menu',
            'container'       => 'nav',
            'container_id'    => '',
            'container_class' => 'main_mobile',
            'menu_id'         => 'main_mobile',
            'menu_class'      => '',
          ]);
        ?>
        <div class="exit" onclick="seemain()">
          <span></span> 
          <span></span>
        </div>
    </div>
  </header>


  <script>
      jQuery(document).ready(function() {
        jQuery(".mainws a").text("");
        jQuery(".mainws a").append(`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.41 39.6">
              <g id="Capa_2" data-name="Capa 2">
                  <g id="Layer_1" data-name="Layer 1">
                      <path d="M33.66,5.75A19.63,19.63,0,0,0,2.78,29.43L0,39.6l10.4-2.73a19.63,19.63,0,0,0,9.38,2.38h0A19.62,19.62,0,0,0,33.66,5.75ZM19.79,35.94h0a16.3,16.3,0,0,1-8.3-2.27l-.6-.36L4.71,34.93l1.65-6L6,28.3a16.31,16.31,0,1,1,13.82,7.64Zm8.94-12.21c-.49-.25-2.9-1.43-3.35-1.6s-.78-.24-1.1.25S23,24,22.73,24.3s-.58.37-1.07.12A13.2,13.2,0,0,1,17.72,22,14.87,14.87,0,0,1,15,18.59c-.28-.49,0-.73.22-1a14.07,14.07,0,0,0,1.22-1.67.87.87,0,0,0,0-.86c-.12-.25-1.1-2.66-1.51-3.64s-.8-.83-1.1-.84-.61,0-.94,0a1.8,1.8,0,0,0-1.31.61,5.5,5.5,0,0,0-1.71,4.09,9.48,9.48,0,0,0,2,5.07c.24.33,3.45,5.28,8.37,7.41a29.77,29.77,0,0,0,2.8,1,6.67,6.67,0,0,0,3.08.19c.95-.14,2.91-1.18,3.31-2.33a4.12,4.12,0,0,0,.29-2.33c-.12-.2-.45-.33-.94-.57Z" style="fill:#fff;fill-rule:evenodd"/>
                  </g>
              </g>
          </svg>
        `);
        jQuery(".mainws a").attr("target" , "_blank");
      });
      jQuery(document).ready(function() {
        jQuery(".maincarrito a").text("");
        jQuery(".maincarrito a").append(`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.15 46.87">
            <g id="Capa_2" data-name="Capa 2">
                <g id="Layer_1" data-name="Layer 1">
                    <path d="M15.36,36.81a5,5,0,1,0,5,5A5,5,0,0,0,15.36,36.81Zm0,7.82a2.79,2.79,0,1,1,2.79-2.79A2.79,2.79,0,0,1,15.36,44.63Z" style="fill:#fff"/>
                    <path d="M36.59,36.81a5,5,0,1,0,5,5A5,5,0,0,0,36.59,36.81Zm0,7.82a2.79,2.79,0,1,1,2.79-2.79A2.79,2.79,0,0,1,36.59,44.63Z" style="fill:#fff"/>
                    <path d="M47.93,7.49A1.37,1.37,0,0,0,47,7l-36.36-.5-1-3.08A5.13,5.13,0,0,0,4.86,0H1.12a1.12,1.12,0,1,0,0,2.23H4.86a2.92,2.92,0,0,1,2.68,2l7.09,21.39-.55,1.29a5.34,5.34,0,0,0,.5,4.86,5.18,5.18,0,0,0,4.19,2.34H40.5a1.12,1.12,0,0,0,0-2.23H18.77a2.85,2.85,0,0,1-2.35-1.34,3.09,3.09,0,0,1-.28-2.68l.45-1,23.52-2.46a6.13,6.13,0,0,0,5.3-4.69L48.09,8.43A.94.94,0,0,0,47.93,7.49Zm-4.7,11.67a3.78,3.78,0,0,1-3.4,3l-23.24,2.4L11.4,8.77l34.24.5Z" style="fill:#fff"/>
                </g>
            </g>
          </svg>
        `);
        jQuery(".maincarrito a").attr("target" , "_blank");
      });
      function seemain(){
        jQuery(".see_main_mobile").toggleClass("mostrar")
        jQuery("body").toggleClass("nonescroll")
      } 
  </script> 

