<link rel="stylesheet" href="<?php echo get_template_directory_uri().'/css/formulariocotizacion.css' ?>" type="text/css" media="all">

<?php global $post ?>

<div class="formulcotizacion">
            <p class="title"> FORMULARIO DE COTIZACIÓN </p>
            <?php echo do_shortcode('[contact-form-7 id="372" title="Cotizacion Jacuzzis"]')?>
            
</div>

<script>
    jQuery(document).ready(function() {
        jQuery("input[name='referencia']").val('<?php echo $post->post_title?>')
        jQuery(".formulcotizacion .box").append(`
            <span class="custemchulito" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.65 28.54">
                <defs>
                    <style>
                        .cls{fill:#fff;stroke:#d0cfd0;stroke-width:0.5px;}.cls,.chulito{stroke-miterlimit:10;}.chulito{fill:#698893;stroke:#698893;}
                    </style>
                </defs>
                <g id="Capa_2" data-name="Capa 2">
                    <g id="Layer_1" data-name="Layer 1">
                        <rect class="cls" x="0.25" y="5.5" width="22.79" height="22.79" />
                        <path class="chulito" d="M12.89,20.66H11.27L8.19,13.11H9.85l2.22,5.94h0L25.11.5H26.7Z" />
                    
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