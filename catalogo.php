<?php
/**
 * 
 * Template Name: catalogo
 * @package Plastiglass
 * 
*/
$categorias_args = array(
	'taxonomy'     => "forma",
	'parent'	   => 0,
	'hide_empty'   => 0,
	'orderby'      => 'name',
    'order'        => 'ASC'
);

$categoriaforma = get_categories( $categorias_args );

$material_args = array(
	'taxonomy'     => "material",
	'parent'	   => 0,
	'hide_empty'   => 0,
	'orderby'      => 'name',
    'order'        => 'ASC'
);

$material = get_categories( $material_args);

$color_args = array(
	'taxonomy'     => "color_disponible",
	'parent'	   => 0,
	'hide_empty'   => 0,
	'orderby'      => 'name',
    'order'        => 'ASC'
);
$color = get_categories($color_args);

$tipo_args = array(
	'taxonomy'     => "tipo",
	'parent'	   => 0,
	'hide_empty'   => 0,
	'orderby'      => 'name',
    'order'        => 'ASC'
);
$tipo = get_categories($tipo_args);


$imagen_top=get_field("imagen_top"); /*Imagen de clientes top*/
$imagen_top_movile=get_field("imagen_top_movile");
$imagen_top_productos=get_field("imagen_top_productos");
$tilte_productos="Productos";



if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.

}
$consulta;

$args = array(
    'post_type' => 'product',
    'posts_per_page' => -1,  

);

if (isset($_GET['categoria'])) {
    $categoriaurl=$_GET['categoria'];
    foreach($imagen_top_productos as $categoria){
        if($categoria["categoria"][0]->slug==$_GET['categoria']){
            $imagen_top=$categoria["imagen_top_categoria_producto"];
            $tilte_productos=$categoria["categoria"][0]->name;
            $args = array(
                'post_type' => 'product',
                'posts_per_page' => -1,  
                'tax_query' => array(
                    array(
                        'taxonomy' => 'product_cat',
                        'field' => 'slug',
                        'terms' => $categoria["categoria"][0]->slug,
                    )
  
                ),  
            );
            
        break;
        }
    }
    $consulta = new WP_Query( $args );

} 
else{
    $args = array(
        'post_type' => 'product',
        'posts_per_page' => -1,  

    );
    $consulta = new WP_Query( $args );
}

get_header();

?>
<link rel="stylesheet" href="<?php echo get_template_directory_uri().'/css/catalogo.css' ?>" type="text/css" media="all">

<main id="contacto-template">  
    <section>
        <div class="d-none d-md-block">
            <img class="w-100" src="<?php echo $imagen_top["url"]?>" alt="<?php echo $imagen_top["alt"]?>">
        </div>
        <div class="d-block d-md-none">
            <img class="w-100" src="<?php echo $imagen_top_movile["url"]?>" alt="<?php echo $imagen_top_movile["alt"]?>">
        </div>
    </section> 
    <section>

    </section>
    <section class="catalogobox d-flex">
        <div class="filtros">
            <div class="equisprin d-block d-md" onclick="filtroscerrados()"> 
                <span class="equis1">

                </span>
                <span class="equis2">

                </span>
            </div>
            <div class="titufiltro">
                <p class="titlefiltro"> Filtrar por: </p>
            </div>
            <div class="Cuadrocolor">
                <p class="titlefiltro" onclick="mostrarfiltro(this)"> Color 
                    <span class="colormas">

                    </span>
                    <span class="colormenos">

                    </span>
                </p>

                <ul>
                    <div class="boxcolor">
                        <?php if ($color) : ?>
                            <?php foreach($color as $_color): ?>
                                <?php $background = get_field("color_disponible", $_color);  ?>
                                <li onclick="filtrar('<?php echo $_color->slug ?>','color',this)">
                                <span namecolor="<?php echo $_color->name ?>" class="circlec" style="background-color:<?php echo $background ?>"> 
                                </span>
                                </li>
                            <?php endforeach ?>
                        <?php endif ?>
                    </div>
                </ul>
                
            </div>
            <div class="Cuadromaterial">
                <p class="titlefiltro" onclick="mostrarfiltro(this)"> Material 
                    <span class="colormas">
                    </span>
                    <span class="colormenos">
                    </span>
                </p>
                <ul>
                    <?php if ($material) : ?>
                        <?php foreach($material as $_material): ?>
                            <li onclick="filtrar('<?php echo $_material->slug ?>','material',this)">
                            <p class="textcat"> 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.7 28.04">
                                <defs>
                                    <style>
                                        .cls-3{fill:#fff;stroke:#d0cfd0;stroke-width:0.5px;}.cls-3,.cls-2{stroke-miterlimit:10;}.cls-2{fill:#5fd0df;}
                                    </style>
                                </defs>
                                <g id="Capa_2" data-name="Capa 2">
                                    <g id="Layer_1" data-name="Layer 1">
                                        <rect class="cls-3" x="0.25" y="5" width="22.79" height="22.79" style="fill:#fff;stroke:#d0cfd0;stroke-miterlimit:10;stroke-width:0.5px" />
                                        <path class="cls-2 chulitocategoria" d="M12.89,20.16H11.27L8.19,12.61H9.85l2.22,5.94h0L25.11,0H26.7Z" style="fill:#5fd0df" />
                                    </g>
                                </g>
                            </svg>                                                      
                            <?php echo $_material->name?> </p>
                            </li>
                        <?php endforeach ?>
                    <?php endif ?>
                </ul>
                
            </div>
            <div class="Cuadroforma">
                <p class="titlefiltro" onclick="mostrarfiltro(this)"> Forma 
                    <span class="colormas">
                    </span>
                    <span class="colormenos">
                    </span>
                </p>
                <ul>
                    <?php if ($categoriaforma) : ?>
                        <?php foreach($categoriaforma as $_categoriaforma): ?>
                            <li onclick="filtrar('<?php echo $_categoriaforma->slug ?>','forma',this)">
                            <p class="textcat"> 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.7 28.04">
                                <defs>
                                    <style>
                                        .cls-3{fill:#fff;stroke:#d0cfd0;stroke-width:0.5px;}.cls-3,.cls-2{stroke-miterlimit:10;}.cls-2{fill:#5fd0df;}
                                    </style>
                                </defs>
                                <g id="Capa_2" data-name="Capa 2">
                                    <g id="Layer_1" data-name="Layer 1">
                                        <rect class="cls-3" x="0.25" y="5" width="22.79" height="22.79" style="fill:#fff;stroke:#d0cfd0;stroke-miterlimit:10;stroke-width:0.5px" />
                                        <path class="cls-2 chulitocategoria" d="M12.89,20.16H11.27L8.19,12.61H9.85l2.22,5.94h0L25.11,0H26.7Z" style="fill:#5fd0df" />
                                    </g>
                                </g>
                            </svg> 
                            <?php echo $_categoriaforma->name?> </p>
                            </li>
                        <?php endforeach ?>
                    <?php endif ?>
                </ul>
                
            </div>
            <div class="Cuadrotipo">
                <p class="titlefiltro" onclick="mostrarfiltro(this)"> Tipo 
                    <span class="colormas">
                    </span>
                    <span class="colormenos">
                    </span>
                </p>
                <ul>
                     <?php if ($tipo) : ?>
                        <?php foreach($tipo as $_tipo): ?>
                            <li onclick="filtrar('<?php echo $_tipo->slug ?>','tipo',this)">
                            <p class="textcat"> 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.7 28.04">
                                <defs>
                                    <style>
                                        .cls-3{fill:#fff;stroke:#d0cfd0;stroke-width:0.5px;}.cls-3,.cls-2{stroke-miterlimit:10;}.cls-2{fill:#5fd0df;}
                                    </style>
                                </defs>
                                <g id="Capa_2" data-name="Capa 2">
                                    <g id="Layer_1" data-name="Layer 1">
                                        <rect class="cls-3" x="0.25" y="5" width="22.79" height="22.79" style="fill:#fff;stroke:#d0cfd0;stroke-miterlimit:10;stroke-width:0.5px" />
                                        <path class="cls-2 chulitocategoria" d="M12.89,20.16H11.27L8.19,12.61H9.85l2.22,5.94h0L25.11,0H26.7Z" style="fill:#5fd0df" />
                                    </g>
                                </g>
                            </svg> 
                            <?php echo $_tipo->name?> </p>
                            </li>
                        <?php endforeach ?>
                    <?php endif ?>
                </ul>
                
            </div>
            <div>
                <button class="botonaplicar" onclick="busquedabottom()">
                    APLICAR FILTROS
                </button>
            </div>
        </div>
        <div class="gridproducto">
            <div class="container-fluid">  
                <div class="row">
                    <div class="col-12">
                        <p class="titlepag"> <?php echo $tilte_productos ?></p>
                        <p class="menumobilefiltro"> 
                            <svg onclick="filtrosabierto()" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 19.69">
                                <defs>
                                    <style>
                                        .cls-1{fill:#698893;}
                                    </style>
                                </defs>
                                <g id="Capa_2" data-name="Capa 2">
                                    <g id="Layer_1" data-name="Layer 1">
                                        <rect class="cls-1" y="3.25" width="38" height="3" />
                                        <rect class="cls-1" x="27" y="3.5" width="9.5" height="2.5" transform="translate(27 36.5) rotate(-90)" />
                                        <rect class="cls-1" x="5" y="13.69" width="9.5" height="2.5" transform="translate(-5.19 24.69) rotate(-90)" />
                                        <rect class="cls-1" y="13.44" width="38" height="3" />
                                    </g>
                                </g>
                            </svg> 
                        </p>
                    </div>
                </div>
                
                    <?php if ($consulta->have_posts()) : ?>
                        <div class="row" id="galeriaproductos">
                            <?php while ( $consulta->have_posts() ) : ?>
                                <?php $consulta->the_post(); ?>  
                                <?php $galeria = get_field("caracteristicas_caja_llave_nevera"); ?>
                                <?php $referencia = $galeria["referencia_text"]; ?>
                                <div class="col-lg-4 col-md-6" >
                                    <a href="<?php the_permalink() ?>">
                                        <div class="boxproduc">
                                            <img class="w-100" src="<?php echo $galeria["galeria_grifo"][0]["foto_grifo"]["url"]?>" alt="<?php echo $galeria["galeria_grifo"][0]["foto_grifo"]["alt"]?>">
                                            <p class="tittleref"> REF <?php echo $referencia?> </p>
                                            <p class="tittleproc"> <?php the_title()?> </p>
                                        </div>
                                    </a>
                                </div>
                                
                            <?php endwhile ?>
                        </div>
                    <?php endif ?>
                    <?php  wp_reset_postdata() ?>
                </div> 
            </div> 
        </div>
        <script>
            var parametros={
                color:'',
                material:'',
                forma:'',
                tipo:''
            }

            var categoriaselecciona='<?php echo $categoriaurl?>'
            function filtrar(value,atributo,elemento) {

                if (atributo=='color'){
                    if(parametros.color==value){
                        parametros.color=''
                        jQuery(elemento).removeClass("openchilito")
                    }
                    else{
                    parametros.color=value
                    jQuery(elemento).parent().find('li').removeClass("openchilito")
                    jQuery(elemento).addClass("openchilito")
                        
                    }
                }
                if (atributo=='material'){
                    if(parametros.material==value){
                        parametros.material=''
                        jQuery(elemento).removeClass("openchilito")
                    }
                    else{
                        parametros.material=value
                        jQuery(elemento).parent().find('li').removeClass("openchilito")
                        jQuery(elemento).addClass("openchilito")
                        
                    }
                    
                }
                if (atributo=='forma'){
                    if(parametros.forma==value){
                        parametros.forma=''
                        jQuery(elemento).removeClass("openchilito")
                    }
                    else{
                        parametros.forma=value
                        jQuery(elemento).parent().find('li').removeClass("openchilito")
                        jQuery(elemento).addClass("openchilito")
                    }
                }
                if (atributo=='tipo'){
                    if(parametros.tipo==value){
                        parametros.tipo=''
                        jQuery(elemento).removeClass("openchilito")
                    }
                    else{
                        parametros.tipo=value
                        jQuery(elemento).parent().find('li').removeClass("openchilito")
                        jQuery(elemento).addClass("openchilito")
                    }
                }
                //console.log(parametros)

                var path='?'
                if (categoriaselecciona){
                    path+='categoria='+categoriaselecciona
                }
                
                Object.entries(parametros).forEach(([key, value]) => {
                    if(value){
                        path+= '&'+key+'='+value
                        console.log(key + ' ' + value);     
                    }

                });
            var url='../wp-json/api/v1/producto'+path
            console.log(url)
            if(jQuery(window).width()>767){
                $.get(url, function(data, status){
                    console.log(data);
                    $("#galeriaproductos").empty();
                    data.forEach(function(producto){
                        $("#galeriaproductos").append(`                                
                            <div class="col-lg-4 col-md-6" >
                                <a href="${producto.link}">
                                    <div class="boxproduc">
                                        <img class="w-100" src="${producto.image.url}" alt="">
                                        <p class="tittleref"> REF ${producto.referencia} </p>
                                        <p class="tittleproc">${producto.title} </p>
                                    </div>
                                </a>
                            </div>`);
                        })
                });
            }


            }
        </script>
        <script>
            function mostrarfiltro(ver) {
                jQuery(ver).parent().toggleClass("filtrosmostrar")
            } 
            function filtrosabierto(){
                jQuery(".filtros").toggleClass("filtronopen")
            }
            function filtroscerrados() {
                jQuery(".filtros").toggleClass("filtronopen")
            }
            function busquedabottom() {
                jQuery(".filtros").toggleClass("filtronopen")
                var path='?'
                if (categoriaselecciona){
                    path+='categoria='+categoriaselecciona
                }
                
                Object.entries(parametros).forEach(([key, value]) => {
                    if(value){
                        path+= '&'+key+'='+value
                        console.log(key + ' ' + value);     
                    }

                });
                var url='../wp-json/api/v1/producto'+path
                console.log(url)
                
                    $.get(url, function(data, status){
                        console.log(data);
                        $("#galeriaproductos").empty();
                        data.forEach(function(producto){ 
                            $("#galeriaproductos").append(`                                
                                <div class="col-lg-4 col-md-6" >
                                    <a href="${producto.link}">
                                        <div class="boxproduc">
                                            <img class="w-100" src="${producto.image.url}" alt="">
                                            <p class="tittleref"> REF ${producto.referencia} </p>
                                            <p class="tittleproc">${producto.title} </p>
                                        </div>
                                    </a>
                                </div>`);
                            })
                    });
                
            }
        </script>
    </section> 



<?php
get_footer();
?>