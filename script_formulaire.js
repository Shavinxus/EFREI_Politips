function submitQuestionnaire() {
    var questions = document.forms.Questionnaire;
    

    
var cdt_Macron = 0,cdt_Macron_eco = 0, cdt_Macron_soc = 0, cdt_Macron_pub = 0, cdt_Macron_env = 0;
var cdt_LePen = 0,cdt_LePen_eco = 0, cdt_LePen_soc = 0, cdt_LePen_pub = 0, cdt_LePen_env = 0;
var cdt_Fillon = 0,cdt_Fillon_eco = 0, cdt_Fillon_soc = 0, cdt_Fillon_pub = 0, cdt_Fillon_env = 0;
var cdt_Melanchon = 0,cdt_Melanchon_eco = 0, cdt_Melanchon_soc = 0, cdt_Melanchon_pub = 0, cdt_Melanchon_env = 0;
var cdt_Hamon = 0,cdt_Hamon_eco = 0, cdt_Hamon_soc = 0, cdt_Hamon_pub = 0, cdt_Hamon_env = 0;


if (document.getElementById("pour1").checked) {
    cdt_Macron_pub+=1;
    cdt_LePen_pub+=1;
    cdt_Melanchon_pub+=1;
}
if (document.getElementById("contre1").checked) {
    cdt_Fillon_pub+=1;
}
if (document.getElementById("na1").checked) {
    cdt_Hamon_pub+=1;
}


if (document.getElementById("pour2").checked) {
    cdt_Melanchon_eco+=1;
    cdt_Hamon_eco+=1;
}
if (document.getElementById("contre2").checked) {
    cdt_Macron_eco+=1;
    cdt_LePen_eco+=1;
    cdt_Fillon_eco+=1;
}


if (document.getElementById("pour3").checked) {
    cdt_Macron_eco+=1;
    cdt_LePen_eco+=1;
    cdt_Fillon_eco+=1;
}
if (document.getElementById("contre3").checked) {
    cdt_Melanchon_eco+=1;
    cdt_Hamon_eco+=1;
}


if (document.getElementById("pour4").checked) {
    cdt_Macron_env+=1;
    cdt_Macron_pub+=1;
    cdt_Melanchon_env+=1;
    cdt_Melanchon_pub+=1;
    cdt_Hamon_env+=1;
    cdt_Hamon_pub+=1;
}
if (document.getElementById("contre4").checked) {
    cdt_LePen_env+=1;
    cdt_LePen_pub+=1;
    cdt_Fillon_env+=1;
    cdt_Fillon_pub+=1;
}


if (document.getElementById("pour6").checked) {
    cdt_LePen_soc+=1;
    cdt_LePen_pub+=1;
    cdt_Melanchon_soc+=1;
    cdt_Melanchon_pub+=1;
}
if (document.getElementById("contre6").checked) {
    cdt_Macron_soc+=1;
    cdt_Macron_pub+=1;
    cdt_Hamon_soc+=1;
    cdt_Hamon_pub+=1;
    cdt_Fillon_soc+=1;
    cdt_Fillon_pub+=1;
}


if (document.getElementById("pour5").checked) {
    cdt_Hamon_soc+=1;
    cdt_Hamon_pub+=1;
}
if (document.getElementById("contre5").checked) {
    cdt_LePen_soc+=1;
    cdt_LePen_pub+=1;
    cdt_Fillon_soc+=1;
    cdt_Fillon_pub+=1;
    cdt_Macron_soc+=1;
    cdt_Macron_pub+=1;
    cdt_Melanchon_soc+=1;
    cdt_Melanchon_pub+=1;
}


if (document.getElementById("pour7").checked) {
    cdt_Macron_eco+=1;
    cdt_LePen_eco+=1;
    cdt_Fillon_eco+=1;
}
if (document.getElementById("contre7").checked) {
    cdt_Melanchon_eco+=1;
    cdt_Hamon_eco+=1;
}


if (document.getElementById("pour8").checked) {
    cdt_Macron_eco+=1;
    cdt_Macron_soc+=1;
    cdt_Melanchon_soc+=1;
    cdt_Melanchon_eco+=1;
    cdt_Hamon_eco+=1;
    cdt_Hamon_soc+=1;
}
if (document.getElementById("contre8").checked) {
    cdt_LePen_eco+=1;
    cdt_LePen_soc+=1;
}
if (document.getElementById("na8").checked) {
    cdt_Fillon_eco+=1;
    cdt_Fillon_soc+=1;
}


if (document.getElementById("pour9").checked) {
    cdt_Melanchon_env+=1;
    cdt_Hamon_env+=1;
}
if (document.getElementById("contre9").checked) {
    cdt_Macron_env+=1;
    cdt_LePen_env+=1;
    cdt_Fillon_env+=1;
}


if (document.getElementById("pour10").checked) {
    cdt_LePen_pub+=1;
    cdt_Fillon_pub+=1;
    cdt_Melanchon_pub+=1;
}
if (document.getElementById("contre10").checked) {
    cdt_Macron_pub+=1;
    cdt_Hamon_pub+=1;
}


if (document.getElementById("pour11").checked) {
    cdt_Macron_pub+=1;
    cdt_Hamon_pub+=1;
}
if (document.getElementById("contre11").checked) {
    cdt_LePen_pub+=1;
    cdt_Fillon_pub+=1;
    cdt_Melanchon_pub+=1;
}


if (document.getElementById("pour12").checked) {
    cdt_LePen_eco+=1;
    cdt_Fillon_eco+=1;
}
if (document.getElementById("contre12").checked) {
    cdt_Macron_eco+=1;
    cdt_Melanchon_eco+=1;
    cdt_Hamon_eco+=1;
}


if (document.getElementById("pour13").checked) {
    cdt_Fillon_env+=1;
}
if (document.getElementById("contre13").checked) {
    cdt_Macron_env+=1;
    cdt_LePen_env+=1;
    cdt_Melanchon_env+=1;
    cdt_Hamon_env+=1;
}


if (document.getElementById("pour14").checked) {
    cdt_LePen_pub+=1;
    cdt_Melanchon_pub+=1;
}
if (document.getElementById("contre14").checked) {
    cdt_Macron_pub+=1;
    cdt_Fillon_pub+=1;
    cdt_Hamon_pub+=1;
}


if (document.getElementById("pour15").checked) {
    cdt_LePen_pub+=1;
    cdt_LePen_soc+=1;
    cdt_Fillon_pub+=1;
    cdt_Fillon_soc+=1;
}
if (document.getElementById("contre15").checked) {
    cdt_Melanchon_pub+=1;
    cdt_Melanchon_soc+=1;
    cdt_Macron_pub+=1;
    cdt_Macron_soc+=1;
    cdt_Hamon_pub+=1;
    cdt_Hamon_soc+=1;
}


if (document.getElementById("pour16").checked) {
    cdt_Melanchon_eco+=1;
    cdt_Melanchon_soc+=1;
    cdt_Macron_eco+=1;
    cdt_Macron_soc+=1;
    cdt_Hamon_eco+=1;
    cdt_Hamon_soc+=1;
}
if (document.getElementById("contre16").checked) {
    cdt_LePen_eco+=1;
    cdt_LePen_soc+=1;
    cdt_Fillon_eco+=1;
    cdt_Fillon_soc+=1;
}


if (document.getElementById("pour17").checked) {
    cdt_LePen_pub+=1;
    cdt_LePen_soc+=1;
    cdt_Fillon_pub+=1;
    cdt_Fillon_soc+=1;
    cdt_Macron_pub+=1;
    cdt_Macron_soc+=1;
}
if (document.getElementById("contre17").checked) {
    cdt_Melanchon_pub+=1;
    cdt_Melanchon_soc+=1;
    cdt_Hamon_pub+=1;
    cdt_Hamon_soc+=1;
}


if (document.getElementById("pour18").checked) {
    
    cdt_Fillon_pub+=1;
    cdt_Fillon_soc+=1;
    cdt_Macron_pub+=1;
    cdt_Macron_soc+=1;
}
if (document.getElementById("contre18").checked) {
    cdt_Melanchon_pub+=1;
    cdt_Melanchon_soc+=1;
    cdt_Hamon_pub+=1;
    cdt_Hamon_soc+=1;
    cdt_LePen_pub+=1;
    cdt_LePen_soc+=1;
}

}

