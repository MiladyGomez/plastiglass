<link rel="stylesheet" href="<?php echo get_template_directory_uri().'/css/formulariopersolizajacuzzis.css' ?>" type="text/css" media="all">

<?php global $post ?>

<div class="formulcotizacion"> 
    <p class="title"> Personaliza y cotiza tu Bañera </p> 
    <?php echo do_shortcode('[contact-form-7 id="1094" title="Formulario cotiza tu producto"]')?>
            
</div>

<script>
    jQuery(document).ready(function() {
        jQuery("input[name='referencia']").val('<?php echo $post->post_title?>')
        jQuery(".formulcotizacion .box").append(`
            <span class="custemchulito" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.14 26.42">
                    <defs>
                        <style>
                            .cls{fill:#fff;stroke:#d0cfd0;stroke-width:0.5px;}.cls,.chulito{stroke-miterlimit:10;}.chulito{fill:#5fd0df;}
                        </style>
                    </defs>
                    <g id="Capa_2" data-name="Capa 2">
                        <g id="Layer_1" data-name="Layer 1">
                            <rect x="0.25" y="3.37" width="22.79" height="22.79" style="fill:#fff;stroke:#d0cfd0;stroke-miterlimit:10;stroke-width:0.5px"/>
                            <path class="chulito" d="M12.38,20.66H10.75L7.68,13.11H9.33l2.22,5.94h0L24.6.5h1.59Z" style="fill:#5fd0df"/>
                            <path class="chulito" d="M12.64,21.16H10.42L6.93,12.61H9.68l2,5.4L24.34,0h2.8Zm-1.55-1h1L25.24,1h-.39l-13,18.55h-.61l-.15-.32L9,13.61H8.42Z" style="fill:#5fd0df"/>
                        </g>
                    </g>
                </svg>
            </span>
        `) 
        jQuery(".formulcotizacion .box svg").click(function(){
            if(jQuery(this).find(".chulito").hasClass("chulitomostar")){
                jQuery(this).find(".chulito").removeClass("chulitomostar")
                jQuery('input[name="box[]"]').prop( "checked", false ); 
            }
            else{
                jQuery(this).find(".chulito").addClass("chulitomostar")
                jQuery('input[name="box[]"]').prop( "checked", true );
            }
        })
    });
</script>