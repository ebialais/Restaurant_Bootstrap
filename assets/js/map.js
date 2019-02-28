window.onload = function (){
    let timeUser = new Date();
    let UTCMin = timeUser.getMinutes();
    // let UTCTime = timeUser.getUTCDate();
    // let UTCtxt = timeUser.toUTCString();

    
    const date = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    let txt = "Bonjour, nous sommes " + date[timeUser.getDay()] + " et il est actuellement " + timeUser.getHours() + "h" + timeUser.getMinutes() + " chez vous.";

    document.getElementById('ici').textContent = txt;

    function TokyoTime(user, d) {
        let TokyoHour;
        let TokyoDate;
        let UTCHour = user.getUTCHours();
        // const jour = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

        
        if (UTCHour < 15) {
            TokyoHour = UTCHour + 9;
            TokyoJour = d[user.getUTCDay()];
        } else {
            TokyoHour = UTCHour - 24 + 9;
            TokyoJour = d[user.getUTCDay() + 1];
        }

        if (UTCMin < 10) {
            UTCMin = "0" + UTCMin;
        }

        let TokyoTxt = "A Tokyo, nous sommes " + TokyoJour + " et il est " + TokyoHour + "h" + UTCMin + ".";

        document.getElementById('Tokyo').textContent = TokyoTxt;
        
        if (TokyoJour != 1 && (TokyoHour > 11 || TokyoHour < 1)){
            document.getElementById('tokyoOuvert').textContent = "Le Bistro du coin est ouvert."
        } else {
            document.getElementById('tokyoOuvert').textContent = "Le Bistro du coin est fermé."
        }
    }

    function BxlParisTime(user, d) {
        let BxlParisHour;
        let BxlParisDate;
        let UTCHour = user.getUTCHours();
        // const jour = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

        if (UTCHour < 23) {
            BxlParisHour = UTCHour + 1;
            BxlParisJour = d[user.getUTCDay()];
        } else {
            BxlParisHour = UTCHour - 24 + 1;
            BxlParisJour = d[user.getUTCDay() + 1];
        }

        if (UTCMin < 10) {
            UTCMin = "0" + UTCMin;
        }


        // const d = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

        let BxlParisTxt = "A Bruxelles et à Paris, nous sommes " + BxlParisJour + " et il est " + BxlParisHour + "h" + UTCMin + ".";

        document.getElementById('ParisBxl').textContent = BxlParisTxt;

        if (BxlParisJour != 1 && (BxlParisHour > 11 || BxlParisHour < 1)){
            document.getElementById('bxlOuvert').textContent = "Le Bistro du coin est ouvert."
            document.getElementById('parisOuvert').textContent = "Le Bistro du coin est ouvert."
        } else {
            document.getElementById('bxlOuvert').textContent = "Le Bistro du coin est fermé."
            document.getElementById('parisOuvert').textContent = "Le Bistro du coin est fermé."
        }
    }

    
    BxlParisTime(timeUser, date);
    TokyoTime(timeUser, date);

}