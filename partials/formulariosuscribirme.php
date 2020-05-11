<link rel="stylesheet" href="<?php echo get_template_directory_uri().'/css/formulariosuscribirme.css' ?>" type="text/css" media="all">

<div class="formulsuscribirme">
            <p class="title"> SUSCRIBIRME AL BLOG </p>
            <?php echo do_shortcode('[contact-form-7 id="282" title="suscribirme"]')?>
            
</div> 

<script>
    jQuery(document).ready(function() { 
        jQuery(".formulsuscribirme .box").append(`
            <span class="custemequiss" > 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.29 27.92">
                    <defs>
                        <style>
                            .cls{fill:rgb(146, 165, 174, -0.75);stroke:rgb(112, 111, 111, 0.25);stroke-miterlimit:10;}.equiss{font-size:23.43px;fill:#698893;font-family:WorkSans-Medium, Work Sans;font-weight:500;letter-spacing:0.04em;}
                            
                        </style>
                    </defs>
                    <g id="Capa_2" data-name="Capa 2">
                        <g id="Layer_1" data-name="Layer 1">
                            <rect class="cls" x="0.25" y="0.25" width="22.79" height="22.79" />
                            <text class="equiss" transform="translate(3.81 20)">
                                X
                            </text>
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