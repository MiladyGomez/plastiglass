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
  wp_enqueue_style( 'fonts', get_template_directory_uri() . '/fonts/stylesheet.css' );
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

add_action( 'rest_api_init', function () {
	register_rest_route( 'api/v1', 'producto', array(
	  'methods' => 'GET',
	  'callback' => 'catalogo',
	) );
} );

function catalogo($request)
{
  $color = $request->get_param('color');
  $material = $request->get_param('material');
  $forma = $request->get_param('forma');
  $tipo = $request->get_param('tipo');
  $categoria = $request->get_param('categoria');
  $taxonomies= [];

  if ($color){
    array_push($taxonomies, 
      array(
        'taxonomy' => 'color_disponible',
        'field'	   => 'slug',
        'terms'	   => $color
      )				
    );
  }
  if ($material){
    array_push($taxonomies, 
      array(
        'taxonomy' => 'material',
        'field'	   => 'slug',
        'terms'	   => $material
      )				
    );
  }
  if ($forma){
    array_push($taxonomies, 
      array(
        'taxonomy' => 'forma',
        'field'	   => 'slug',
        'terms'	   => $forma
      )				
    );
  }
  if ($tipo){
    array_push($taxonomies, 
      array(
        'taxonomy' => 'tipo',
        'field'	   => 'slug',
        'terms'	   => $tipo
      )				
    );
  }
  if ($categoria){
    array_push($taxonomies, 
      array(
        'taxonomy' => 'categoria_productos',
        'field'	   => 'slug',
        'terms'	   => $categoria
      )				
    );
  }


  $args_producto = array(
    'post_type' => 'productos',
    'posts_per_page' => -1, 
    'post_status' => 'publish',
    'tax_query' => array(
      'relation' => 'AND',
        $taxonomies
     ),
    );

  $consultafiltro = new WP_Query( $args_producto );

$response=[];


foreach ($consultafiltro->posts as $_consultafiltro) {
  $galeria = get_field("caracteristicas_caja_llave_nevera",$_consultafiltro->ID);
  
  array_push($response, array(
    "title" 		=> $_consultafiltro->post_title,
    "image"			=> $galeria["galeria_grifo"][0]["foto_grifo"],
    "link"			=> get_the_permalink( $_consultafiltro->ID ),
    "referencia"		=> $galeria["referencia_text"]			
  ));
}

  return $response;
  
}
add_filter( 'woocommerce_product_single_add_to_cart_text', 'woocommerce_custom_single_add_to_cart_text' ); 
function woocommerce_custom_single_add_to_cart_text() {
    return __( 'Comprar', 'woocommerce' ); 

}

// To change add to cart text on product archives(Collection) page
add_filter( 'woocommerce_product_add_to_cart_text', 'woocommerce_custom_product_add_to_cart_text' );  
function woocommerce_custom_product_add_to_cart_text() {
    return __( 'Comprar', 'woocommerce' );
}

add_filter( 'woocommerce_default_address_fields' , 'bbloomer_rename_city_province', 9999 );
 
function bbloomer_rename_city_province( $fields ) {
    $fields['city']['label'] = 'Cuidad';
    return $fields;
}


add_filter( 'woocommerce_default_address_fields' , 'bbloomer_rename_state_province', 9999 );
 
function bbloomer_rename_state_province( $fields ) {
    $fields['state']['label'] = 'Departamento';
    return $fields;
}


add_filter( 'woocommerce_default_address_fields' , 'bbloomer_rename_address_1_province', 9999 );
 
function bbloomer_rename_address_1_province( $fields ) {
    $fields['address_1']['label'] = 'Dirección';
    return $fields;
}