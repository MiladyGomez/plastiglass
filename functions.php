<?php
/*** +Theme Includes ***/
include_once 'inc/theme-includes-menu.php';
include_once 'inc/theme-includes.php';
include_once 'inc/dt-post-duplicator.php';
include_once 'inc/dt-user-agent.php';
/*** +Theme Includes ***/

/*** +Register Theme Scripts ***/
function ditto_theme_scripts() {
  wp_enqueue_style( 'core', get_template_directory_uri() . '/style.css' );
  wp_enqueue_style( 'fonts', get_template_directory_uri() . 'fonts/stylesheet.css' );
}
add_action( 'wp_enqueue_scripts', 'ditto_theme_scripts');
/*** -Register Theme Scripts ***/

/*** +Register Navigation Menus ***/
function ditto_theme_navigation_menus() {
  $locations = array(
    'main_menu' => __( 'Main Menu', 'text_domain' ),
    'footer_menu' => __( 'Footer Menu', 'text_domain' )
  );
  register_nav_menus( $locations );
}
add_action( 'init', 'ditto_theme_navigation_menus' );
/*** -Register Navigation Menus ***/

/*** +Theme support ***/
add_theme_support( 'custom-logo' );
/*** +Theme support ***/

if (function_exists('acf_add_options_page')) {
  acf_add_options_page(array(
    'page_title'    => 'Theme Settings',
    'menu_title'    => 'Theme Settings',
    'menu_slug'     => 'theme-settings',
    'capability'    => 'edit_posts',
    'redirect'      =>  true
  ));

  acf_add_options_sub_page(array(
    'page_title' 	  => 'General',
    'menu_title' 	  => 'General',
    'parent_slug' 	=> 'theme-settings',
  ));

  acf_add_options_sub_page(array(
	'page_title' 	  => 'Header',
	'menu_title' 	  => 'Header',
  'parent_slug' 	=> 'theme-settings',
  ));

  acf_add_options_sub_page(array(
	'page_title' 	  => 'Footer',
	'menu_title' 	  => 'Footer',
	'parent_slug' 	=> 'theme-settings',
  ));

  acf_add_options_sub_page(array(
	'page_title' 	  => '404 Error',
	'menu_title' 	  => '404 Error',
  'parent_slug' 	=> 'theme-settings',
	));
}
