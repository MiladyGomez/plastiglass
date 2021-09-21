<link rel="stylesheet" href="<?php echo get_template_directory_uri().'/css/formulariosuscribirme.css' ?>" type="text/css" media="all">

<div class="formulsuscribirme">
            <p class="title"> Suscribirme al boletín </p>
            <?php echo do_shortcode('[contact-form-7 id="282" title="suscribirme"]')?>
            
</div> 

<script>
    jQuery(document).ready(function() { 
        jQuery(".formulsuscribirme .box").append(`
            <span class="custemequiss" > 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.29 23.29">
                    <g id="Capa_2" data-name="Capa 2">
                        <g id="Layer_1" data-name="Layer 1">
                            <rect x="0.25" y="0.25" width="22.79" height="22.79" style="fill:#fff;stroke:gray;stroke-miterlimit:10;stroke-width:0.5px" />
                            <text class="equiss" transform="translate(7.35 16.15)" style="font-size:18px;fill:gray;font-family:Raleway-Regular, Raleway;letter-spacing:0.05002170138888889em">x</text>
                        </g>
                    </g>
                </svg>
        </span>
        `)
        jQuery(".formulsuscribirme .box svg").click(function(){
            if(jQuery(this).find(".equiss").hasClass("equissmostar")){
                jQuery(this).find(".equiss").removeClass("equissmostar")
                jQuery('input[name="box[]"]').prop( "checked", false ); 
            }
            else{
                jQuery(this).find(".equiss").addClass("equissmostar")
                jQuery('input[name="box[]"]').prop( "checked", true );
            }
            
        })
    });
</script>