tarjetas=[["AMERICA","Machu Picchu Peru","IRUDIAK/machu picchu.jpg","10","2100" ],["ASIA","Vietnam","IRUDIAK/vietnam.jpg","1","2800"],["AFRICA","Cataratas Victoria","IRUDIAK/africa victoria.jpg","11","3000"],["EUROPA","Croacia","IRUDIAK/croacia.jpg","8","1200"],["OCEANIA","Australia","IRUDIAK/australia.jpg","2","3200"],["ASIA","Taj Mahal","IRUDIAK/tajmahal.jpg","4","2500"],["AFRICA","Piramides de Egipto","IRUDIAK/egipto.jpg","7","2100"],["EUROPA","Roma","IRUDIAK/roma.jpg","6","1000"],["AMERICA","Amazonas","IRUDIAK/ecuadoramazonia.jpg","0","2300"],["OCEANIA","Nueva Zelanda","IRUDIAK/new_zealand.jpg","11","3400"]]
texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac bibendum purus. Cras gravida, nisl at egestas pharetra, sapien sapien varius tellus, imperdiet laoreet urna ante ac elit. Nullam ac libero non ante luctus egestas id a erat. Fusce id diam in ante blandit porttitor et sit amet dolor"


var getClickNav = document.querySelector( "#navHeader" );

getClickNav.addEventListener( "click", function( event ){
    const tarjeta_container = document.querySelector( "#seccion" );
    tarjeta_container.innerHTML = "";
    var pais = event.target.textContent.trim();
        for ( var i = 0; i <= tarjetas.length; i++ ) {
            
            if(pais == tarjetas[ i ][ 0 ]){
                const tarjeta_container = document.querySelector( "#seccion" );

                    var contenido_tarjeta = `
                        <div class="tarjeta">
                            <div class="irudia">
                                <h3>${ tarjetas[i][1] }</h3>
                                <img src="${ tarjetas[i][2] }">
                            </div> 
                            <div class="texto">
                                <p>
                                ${ texto }  
                                </p>
                            </div>
                            <input type="hidden" id="${i}"/>
                        <div>
                    `;

                    tarjeta_container.innerHTML += contenido_tarjeta;
                    var tarjeta = document.querySelectorAll( ".tarjeta" );

                    
    
            } else if( pais == "ALL" ){
                for( let i = 0; i < tarjetas.length; i++ ){

                    const tarjeta_container = document.querySelector( "#seccion" );

                        var contenido_tarjeta = `
                            <div class="tarjeta">
                                <div class="irudia">
                                    <h3>${ tarjetas[ i ][ 1 ] }</h3>
                                    <img src="${ tarjetas[ i ][ 2 ] }">
                                </div> 
                                <div class="texto">
                                    <p>
                                    ${ texto }  
                                    </p>
                                </div>
                                <input type="hidden" id="${i}"/>
                            <div>
                        `;
                        tarjeta_container.innerHTML += contenido_tarjeta;

                        
                }
                
    
            }
            var tarjeta = document.querySelectorAll( ".tarjeta" );

            tarjeta.forEach(function ( tarjetas ) {

            tarjetas.addEventListener( "click", function () {
                var input = tarjetas.querySelector( "input" );

                console.log(input.id)
            });

        
            })
        }
});
document.addEventListener( "DOMContentLoaded", function() {
    
    for( let i = 0; i < tarjetas.length; i++ ){

    const tarjeta_container = document.querySelector( "#seccion" );

        var contenido_tarjeta = `
            
            <div class="tarjeta" href="#">
                <div class="irudia">
                    <h3>${ tarjetas[ i ][ 1 ] }</h3>
                    <img src="${ tarjetas[ i ][ 2 ] }">
                </div> 
                <div class="texto">
                    <p>
                    ${ texto }  
                    </p>
                </div>
                <input type="hidden" id="${i}"/>
            <div>
            
        `;
        tarjeta_container.innerHTML += contenido_tarjeta;
    }
    var tarjeta = document.querySelectorAll( ".tarjeta" );

    tarjeta.forEach(function ( tarjetas ) {

        tarjetas.addEventListener( "click", function (event) {
            var input = tarjetas.querySelector( "input" );

            console.log(input.id)
        });

        
    })
    //BOTTON POPUP
    var boton = document.querySelector( "button" )
    boton.addEventListener("click", function() {
        window.open("BIDAIAK_AZTERK_2.html", "ventana1","width=1000,height=700");
    })
});



  