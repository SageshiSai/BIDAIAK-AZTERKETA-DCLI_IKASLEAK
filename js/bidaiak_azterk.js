let tarjetas=[["AMERICA","Machu Picchu Peru","IRUDIAK/machu picchu.jpg","10","2100" ],["ASIA","Vietnam","IRUDIAK/vietnam.jpg","1","2800"],["AFRICA","Cataratas Victoria","IRUDIAK/africa victoria.jpg","11","3000"],["EUROPA","Croacia","IRUDIAK/croacia.jpg","8","1200"],["OCEANIA","Australia","IRUDIAK/australia.jpg","2","3200"],["ASIA","Taj Mahal","IRUDIAK/tajmahal.jpg","4","2500"],["AFRICA","Piramides de Egipto","IRUDIAK/egipto.jpg","7","2100"],["EUROPA","Roma","IRUDIAK/roma.jpg","6","1000"],["AMERICA","Amazonas","IRUDIAK/ecuadoramazonia.jpg","0","2300"],["OCEANIA","Nueva Zelanda","IRUDIAK/new_zealand.jpg","11","3400"]]
const texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac bibendum purus. Cras gravida, nisl at egestas pharetra, sapien sapien varius tellus, imperdiet laoreet urna ante ac elit. Nullam ac libero non ante luctus egestas id a erat. Fusce id diam in ante blandit porttitor et sit amet dolor"

function crearCards(num_id){
    const tarjeta_container = document.querySelector("#seccion");

    var tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    
    var irudia = document.createElement("div");
    irudia.classList.add("irudia");
    
    var h3 = document.createElement("h3");
    h3.textContent = tarjetas[num_id][1];
    irudia.appendChild(h3);
    
    var img = document.createElement("img");
    img.src = tarjetas[num_id][2];
    irudia.appendChild(img);
    
    var textos = document.createElement("div");
    textos.classList.add("texto");
    
    var p = document.createElement("p");
    p.textContent = texto;
    textos.appendChild(p);
    
    var input = document.createElement("input");
    input.type = "hidden";
    input.id = num_id;
    
    tarjeta.appendChild(irudia);
    tarjeta.appendChild(textos);
    tarjeta.appendChild(input);
    
    tarjeta_container.appendChild(tarjeta);
}

var getClickNav = document.querySelector( "#navHeader" );

getClickNav.addEventListener( "click", function( event ){

    const tarjeta_container = document.querySelector( "#seccion" );
    tarjeta_container.innerHTML = "";
    var pais = event.target.textContent.trim();

        for ( var i = 0; i < tarjetas.length; i++ ) {

            switch (pais) {

                case tarjetas[ i ][ 0 ]:
                    
                crearCards(i);
                    
                    break;

                case "ALL":

                crearCards(i);

                    break;
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

        crearCards(i);
    }
    var tarjeta = document.querySelectorAll( ".tarjeta" );

    tarjeta.forEach(function ( tarjetas ) {

        tarjetas.addEventListener( "click", function (event) {
            var input = tarjetas.querySelector( "input" );

            console.log(input.id)
        });

        
    })
});


//BOTTON POPUP
var boton = document.querySelector( "button" )
boton.addEventListener("click", function() {
    window.open("BIDAIAK_AZTERK_2.html", "ventana1","width=1000,height=700");
})



  