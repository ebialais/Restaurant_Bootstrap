window.onload = function (){
    let timeUser = new Date();
    let UTCMin = timeUser.getMinutes();


    
    const date = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    let txt = "Bonjour, nous sommes " + date[timeUser.getDay()] + " et il est actuellement " + timeUser.getHours() + "h" + timeUser.getMinutes() + " chez vous.";

    document.getElementById('ici').textContent = txt;

    function TokyoTime(user, d) {
        let TokyoHour;
        let TokyoJour;
        let UTCHour = user.getUTCHours();

        
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
            document.getElementById('tokyoOuvert').textContent = "Le Bistro du coin est actuellement ouvert."
        } else {
            document.getElementById('tokyoOuvert').textContent = "Le Bistro du coin est actuellement fermé."
        }
    }

    function BxlParisTime(user, d) {
        let BxlParisHour;
        let BxlParisJour;
        let UTCHour = user.getUTCHours();

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

        let BxlParisTxt = "A Bruxelles et à Paris, nous sommes " + BxlParisJour + " et il est " + BxlParisHour + "h" + UTCMin + ".";

        document.getElementById('ParisBxl').textContent = BxlParisTxt;

        if (BxlParisJour != 1 && (BxlParisHour > 11 || BxlParisHour < 1)){
            document.getElementById('bxlOuvert').textContent = "Le Bistro du coin est actuellement ouvert."
            document.getElementById('parisOuvert').textContent = "Le Bistro du coin est actuellement ouvert."
        } else {
            document.getElementById('bxlOuvert').textContent = "Le Bistro du coin est actuellement fermé."
            document.getElementById('parisOuvert').textContent = "Le Bistro du coin est actuellement fermé."
        }
    }

    
    BxlParisTime(timeUser, date);
    TokyoTime(timeUser, date);

}