tarjetas=[["AMERICA","Machu Picchu Peru","IRUDIAK/machu picchu.jpg","10","2100" ],["ASIA","Vietnam","IRUDIAK/vietnam.jpg","1","2800"],["AFRICA","Cataratas Victoria","IRUDIAK/africa victoria.jpg","11","3000"],["EUROPA","Croacia","IRUDIAK/croacia.jpg","8","1200"],["OCEANIA","Australia","IRUDIAK/australia.jpg","2","3200"],["ASIA","Taj Mahal","IRUDIAK/tajmahal.jpg","4","2500"],["AFRICA","Piramides de Egipto","IRUDIAK/egipto.jpg","7","2100"],["EUROPA","Roma","IRUDIAK/roma.jpg","6","1000"],["AMERICA","Amazonas","IRUDIAK/ecuadoramazonia.jpg","0","2300"],["OCEANIA","Nueva Zelanda","IRUDIAK/new_zealand.jpg","11","3400"]];
texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac bibendum purus. Cras gravida, nisl at egestas pharetra, sapien sapien varius tellus, imperdiet laoreet urna ante ac elit. Nullam ac libero non ante luctus egestas id a erat. Fusce id diam in ante blandit porttitor et sit amet dolor"


const selectElement = document.getElementById('selectContinent');

selectElement.addEventListener('change', function(event) {

  const selectedOption = selectElement.options[selectElement.selectedIndex].value;
  const option_container = document.querySelector( "#selectTravel" );
  option_container.innerHTML = "";
  tarjetas.forEach( tarjeta =>{
    
     if(selectedOption == tarjeta[0]){
            const option_container = document.querySelector( "#selectTravel" );

            var contenido_option = `
            
            <option>${tarjeta[1]}</option>
            
            `;
            option_container.innerHTML += contenido_option;
        tarjeta.forEach(info => {
            
        });
     }
  });

});
