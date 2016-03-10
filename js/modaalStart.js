$(document).ready(function() {
    // inhoud van modale vensters in variabelen gestopt en uit de dom verwijderd
    var ingangInhoud = $('#ingang').detach();
    var halInhoud = $('#hal').detach();
    var patroonInhoud = $('#patroon').detach();
    
    //events bij de thumbs : modaal venster openen met de passende inhoud erin
    $('#ingangThumb').on('click', function() {
        modaalVenObj.openen({inhoud: ingangInhoud, breedte: 1000});
    });
    
    $('#halThumb').on('click', function() {
        modaalVenObj.openen({inhoud: halInhoud, breedte: 1000});
    });
    
    $('#patroonThumb').on('click', function() {
        modaalVenObj.openen({inhoud: patroonInhoud, breedte: 1000});
    });
    
});
