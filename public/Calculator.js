function appuyerSurBouton(valeur) {
        document.getElementById('ecran').value += valeur;
        
    }
    
    function calculer() {
        let ecran = document.getElementById('ecran');
        ecran.value = eval(ecran.value);

    }
    
    function effacer() {
        document.getElementById('ecran').value = '';
    }
    