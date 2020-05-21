<link rel="stylesheet" href="<?php echo get_template_directory_uri().'/css/formularioclientes.css' ?>" type="text/css" media="all">

<div class="formulcliente">
            <?php echo do_shortcode('[contact-form-7 id="281" title="Inscripcion de Clientes"]')?>
            
</div>  

<script>
    jQuery(document).ready(function() {
        jQuery(".formulcliente .box").append(`
            <span class="custemequiss" > 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.29 27.92">
                    <defs>
                        <style>
                            .cls{fill:#fff;stroke:#d0cfd0;stroke-miterlimit:10;stroke-width:0.5px;}.equiss{font-size:23.43px;fill:#698893;font-family:WorkSans-Medium, Work Sans;font-weight:500;letter-spacing:0.04em;}
                            
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
        jQuery(".formulcliente .box svg").click(function(){
            if(jQuery(this).find(".equiss").hasClass("equissmostar")){
                jQuery(this).find(".equiss").removeClass("equissmostar")
                jQuery('input[name="box[]"]').prop( "checked", false ); 
            }
            else{
                jQuery(this).find(".equiss").addClass("equissmostar")
                jQuery('input[name="box[]"]').prop( "checked", true ); 
            } 
          
        
        })
        jQuery("#Camara").parent().append(`

            <span class="titlfile">Cámara de comercio</span>
            <span class="addart" id="addcamara">Agregar Documento</span>
            <label class="bottombuscar" for="Camara">BUSCAR ARCHIVO</label>
        `)
        jQuery("#Camara").change(function(e){
            console.log(e.target.files[0].name);
            jQuery("#addcamara").text(e.target.files[0].name) 
        });

        jQuery("#Cedula").parent().append(` 

            <span class="titlfile">Cédula representante legal</span>
            <span class="addart" id="addCedula">Agregar Documento</span>
            <label class="bottombuscar" for="Cedula">BUSCAR ARCHIVO</label>
        `)
        jQuery("#Cedula").change(function(e){
            console.log(e.target.files[0].name);
            jQuery("#addCedula").text(e.target.files[0].name)
        });

        jQuery("#Rut").parent().append(`

            <span class="titlfile">RUT</span>
            <span class="addart" id="addrut">Agregar Documento</span>
            <label class="bottombuscar" for="Rut">BUSCAR ARCHIVO</label>
        `)
        jQuery("#Rut").change(function(e){
            console.log(e.target.files[0].name);
            jQuery("#addrut").text(e.target.files[0].name)
        });

        jQuery("#Habeas").parent().append(`

            <span class="titlfile">Formulario habeas data</span>
            <span class="addart" id="addhabeas">Agregar Documento</span>
            <label class="bottombuscar" for="Habeas">BUSCAR ARCHIVO</label>
        `)
        jQuery("#Habeas").change(function(e){
            jQuery("#addhabeas").text(e.target.files[0].name)
        });

    });
</script>  