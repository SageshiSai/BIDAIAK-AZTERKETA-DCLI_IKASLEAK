let tarjetas=[["AMERICA","Machu Picchu Peru","IRUDIAK/machu picchu.jpg","10","2100" ],["ASIA","Vietnam","IRUDIAK/vietnam.jpg","1","2800"],["AFRICA","Cataratas Victoria","IRUDIAK/africa victoria.jpg","11","3000"],["EUROPA","Croacia","IRUDIAK/croacia.jpg","8","1200"],["OCEANIA","Australia","IRUDIAK/australia.jpg","2","3200"],["ASIA","Taj Mahal","IRUDIAK/tajmahal.jpg","4","2500"],["AFRICA","Piramides de Egipto","IRUDIAK/egipto.jpg","7","2100"],["EUROPA","Roma","IRUDIAK/roma.jpg","6","1000"],["AMERICA","Amazonas","IRUDIAK/ecuadoramazonia.jpg","0","2300"],["OCEANIA","Nueva Zelanda","IRUDIAK/new_zealand.jpg","11","3400"]];
const texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac bibendum purus. Cras gravida, nisl at egestas pharetra, sapien sapien varius tellus, imperdiet laoreet urna ante ac elit. Nullam ac libero non ante luctus egestas id a erat. Fusce id diam in ante blandit porttitor et sit amet dolor"
const meses= ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];


let p = tarjetas[0]

let [Continente, Ciudad] = p

const selectElement = document.getElementById('selectContinent');
var option_container = "";
selectElement.addEventListener('change', function() {

  var selectedOption = selectElement.options[selectElement.selectedIndex].value;
  var option_container = document.querySelector( "#selectTravel" );
  
  option_container.innerHTML = "";
  tarjetas.forEach( tarjeta =>{
    
     if( selectedOption == tarjeta[ 0 ] ){

      const option_container = document.querySelector( "#selectTravel" );

      var option = document.createElement( "option" );
      option.textContent = tarjeta[ 1 ];

      option_container.appendChild( option );
     }
     
  });

});

   var option_container = document.querySelector( "#selectTravel" );

   option_container.addEventListener( "change", function() {

      var div_container = document.querySelector( "#divSeccion" );
      div_container.innerHTML = "";
                           
      var selectedOption = option_container.options[ option_container.selectedIndex ].textContent;

      tarjetas.forEach( tarjeta =>{
         
         if( selectedOption == tarjeta[ 1 ] ){

            const option_container = document.querySelector( "#divSeccion" );
            
            var irudia = document.createElement( "div" );
            irudia.classList.add( "irudia" );
            
            var h3 = document.createElement( "h3" );
            h3.textContent = tarjeta[ 1 ];
            irudia.appendChild( h3 );
            
            var img = document.createElement( "img" );
            img.src = tarjeta[ 2 ];
            irudia.appendChild( img );
            
            var textos = document.createElement( "div" );
            textos.classList.add( "texto" );
            
            var p = document.createElement( "p" );
            p.textContent = texto;
            textos.appendChild( p );
            
            option_container.appendChild( irudia );
            option_container.appendChild( textos );
            console.log(tarjeta[ 3 ]);
            var temporada = document.querySelectorAll("#divSeccion");
            console.log(temporada)

            if(tarjeta[ 3 ] == 6 || tarjeta[ 3 ] == 7 || tarjeta[ 3 ] == 11){
               
               temporada.textContent = "High season";
               temporada.style.display = "block";
               temporada.style.backgroundColor = "#f1f275";

            } else if(tarjeta[ 3 ] == 9 || tarjeta[ 3 ] == 10 || tarjeta[ 3 ] == 1) {

               temporada.textContent = "Low season";
               temporada.style.display = "block";
               temporada.style.backgroundColor = "#7ff695";
               
            }
            

         }
         
      });
   
   });
    


