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

cdt_Fillon=cdt_Fillon_eco+cdt_Fillon_env+cdt_Fillon_pub+cdt_Fillon_soc;
cdt_Macron=cdt_Macron_eco+cdt_Macron_env+cdt_Macron_pub+cdt_Macron_soc;
cdt_LePen=cdt_LePen_eco+cdt_LePen_env+cdt_LePen_pub+cdt_LePen_soc;
cdt_Melanchon=cdt_Melanchon_eco+cdt_Melanchon_env+cdt_Melanchon_pub+cdt_Melanchon_soc;
cdt_Hamon=cdt_Hamon_eco+cdt_Hamon_env+cdt_Hamon_pub+cdt_Hamon_soc;

var div_questions = document.getElementById("questionnaire");
div_questions.remove();

var div_res = document.getElementById("resultat");

let res_title = document.createElement("h3");
res_title.innerHTML="Résultats";
div_res.append(res_title);

let res_subtitle1 = document.createElement("p");
res_subtitle1.innerHTML="Vous trouverez ci-dessous les résultats de votre questionnaire par catégorie";
div_res.append(res_subtitle1);

let res_subtitle2 = document.createElement("p");
res_subtitle2.innerHTML='Un résultat est sous la forme "Candidat (pourcentage de correspondance)"';
div_res.append(res_subtitle2);

var cdt_Array_gen = [["Macron",cdt_Macron],["LePen",cdt_LePen],["Fillon",cdt_Fillon],["Melanchon",cdt_Melanchon],["Hamon",cdt_Hamon]];
var cdt_Array_eco = [["Macron",cdt_Macron_eco],["LePen",cdt_LePen_eco],["Fillon",cdt_Fillon_eco],["Melanchon",cdt_Melanchon_eco],["Hamon",cdt_Hamon_eco]];
var cdt_Array_env = [["Macron",cdt_Macron_env],["LePen",cdt_LePen_env],["Fillon",cdt_Fillon_env],["Melanchon",cdt_Melanchon_env],["Hamon",cdt_Hamon_env]];
var cdt_Array_pub = [["Macron",cdt_Macron_pub],["LePen",cdt_LePen_pub],["Fillon",cdt_Fillon_pub],["Melanchon",cdt_Melanchon_pub],["Hamon",cdt_Hamon_pub]];
var cdt_Array_soc = [["Macron",cdt_Macron_soc],["LePen",cdt_LePen_soc],["Fillon",cdt_Fillon_soc],["Melanchon",cdt_Melanchon_soc],["Hamon",cdt_Hamon_soc]];

var cdt_sortArray_gen = sort(cdt_Array_gen);
var cdt_sortArray_eco = sort(cdt_Array_eco);
var cdt_sortArray_env = sort(cdt_Array_env);
var cdt_sortArray_pub = sort(cdt_Array_pub);
var cdt_sortArray_soc = sort(cdt_Array_soc);

var res_table = document.createElement("table");
var res_ligne1 = document.createElement("tr");
var res_ligne2 = document.createElement("tr");
var res_ligne3 = document.createElement("tr");
var res_ligne4 = document.createElement("tr");
var res_ligne5 = document.createElement("tr");

var res_11 = document.createElement("th");
res_11.innerHTML = "Général";
res_ligne1.append(res_11);
var res_21 = document.createElement("th");
res_21.innerHTML = "Economie";
res_ligne2.append(res_21);
var res_31 = document.createElement("th");
res_31.innerHTML = "Environnement";
res_ligne3.append(res_31);
var res_41 = document.createElement("th");
res_41.innerHTML = "Politique publique";
res_ligne4.append(res_41);
var res_51 = document.createElement("th");
res_51.innerHTML = "Social";
res_ligne5.append(res_51);

var res_12 = document.createElement("tr");

res_12.innerHTML = cdt_Array_gen[4][0]+" ("+((cdt_Array_gen[4][1]*100)/26).toFixed(1)+"%)";
res_ligne1.append(res_12);
var res_22 = document.createElement("tr");
res_22.innerHTML = cdt_Array_gen[3][0]+" ("+((cdt_Array_gen[3][1]*100)/26).toFixed(1)+"%)";
res_ligne1.append(res_22);
var res_32 = document.createElement("tr");
res_32.innerHTML = cdt_Array_gen[2][0]+" ("+((cdt_Array_gen[2][1]*100)/26).toFixed(1)+"%)";
res_ligne1.append(res_32);
var res_42 = document.createElement("tr");
res_42.innerHTML = cdt_Array_gen[1][0]+" ("+((cdt_Array_gen[1][1]*100)/26).toFixed(1)+"%)";
res_ligne1.append(res_42);
var res_52 = document.createElement("tr");
res_52.innerHTML = cdt_Array_gen[0][0]+" ("+((cdt_Array_gen[0][1]*100)/26).toFixed(1)+"%)";
res_ligne1.append(res_52);

var res_13 = document.createElement("tr");
res_13.innerHTML = cdt_Array_eco[4][0]+" ("+((cdt_Array_eco[4][1]*100)/6).toFixed(1)+"%)";
res_ligne2.append(res_13);
var res_23 = document.createElement("tr");
res_23.innerHTML = cdt_Array_eco[3][0]+" ("+((cdt_Array_eco[3][1]*100)/6).toFixed(1)+"%)";
res_ligne2.append(res_23);
var res_33 = document.createElement("tr");
res_33.innerHTML = cdt_Array_eco[2][0]+" ("+((cdt_Array_eco[2][1]*100)/6).toFixed(1)+"%)";
res_ligne2.append(res_33);
var res_43 = document.createElement("tr");
res_43.innerHTML = cdt_Array_eco[1][0]+" ("+((cdt_Array_eco[1][1]*100)/6).toFixed(1)+"%)";
res_ligne2.append(res_43);
var res_53 = document.createElement("tr");
res_53.innerHTML = cdt_Array_eco[0][0]+" ("+((cdt_Array_eco[0][1]*100)/6).toFixed(1)+"%)";
res_ligne2.append(res_53);

var res_14 = document.createElement("tr");
res_14.innerHTML = cdt_Array_env[4][0]+" ("+((cdt_Array_env[4][1]*100)/3).toFixed(1)+"%)";
res_ligne3.append(res_14);
var res_24 = document.createElement("tr");
res_24.innerHTML = cdt_Array_env[3][0]+" ("+((cdt_Array_env[3][1]*100)/3).toFixed(1)+"%)";
res_ligne3.append(res_24);
var res_34 = document.createElement("tr");
res_34.innerHTML = cdt_Array_env[2][0]+" ("+((cdt_Array_env[2][1]*100)/3).toFixed(1)+"%)";
res_ligne3.append(res_34);
var res_44 = document.createElement("tr");
res_44.innerHTML = cdt_Array_env[1][0]+" ("+((cdt_Array_env[1][1]*100)/3).toFixed(1)+"%)";
res_ligne3.append(res_44);
var res_54 = document.createElement("tr");
res_54.innerHTML = cdt_Array_env[0][0]+" ("+((cdt_Array_env[0][1]*100)/3).toFixed(1)+"%)";
res_ligne3.append(res_54);

var res_15 = document.createElement("tr");
res_15.innerHTML = cdt_Array_pub[4][0]+" ("+((cdt_Array_pub[4][1]*100)/10).toFixed(1)+"%)";
res_ligne4.append(res_15);
var res_25 = document.createElement("tr");
res_25.innerHTML = cdt_Array_pub[3][0]+" ("+((cdt_Array_pub[3][1]*100)/10).toFixed(1)+"%)";
res_ligne4.append(res_25);
var res_35 = document.createElement("tr");
res_35.innerHTML = cdt_Array_pub[2][0]+" ("+((cdt_Array_pub[2][1]*100)/10).toFixed(1)+"%)";
res_ligne4.append(res_35);
var res_45 = document.createElement("tr");
res_45.innerHTML = cdt_Array_pub[1][0]+" ("+((cdt_Array_pub[1][1]*100)/10).toFixed(1)+"%)";
res_ligne4.append(res_45);
var res_55 = document.createElement("tr");
res_55.innerHTML = cdt_Array_pub[0][0]+" ("+((cdt_Array_pub[0][1]*100)/10).toFixed(1)+"%)";
res_ligne4.append(res_55);

var res_16 = document.createElement("tr");
res_16.innerHTML = cdt_Array_soc[4][0]+" ("+((cdt_Array_soc[4][1]*100)/7).toFixed(1)+"%)";
res_ligne5.append(res_16);
var res_26 = document.createElement("tr");
res_26.innerHTML = cdt_Array_soc[3][0]+" ("+((cdt_Array_soc[3][1]*100)/7).toFixed(1)+"%)";
res_ligne5.append(res_26);
var res_36 = document.createElement("tr");
res_36.innerHTML = cdt_Array_soc[2][0]+" ("+((cdt_Array_soc[2][1]*100)/7).toFixed(1)+"%)";
res_ligne5.append(res_36);
var res_46 = document.createElement("tr");
res_46.innerHTML = cdt_Array_soc[1][0]+" ("+((cdt_Array_soc[1][1]*100)/7).toFixed(1)+"%)";
res_ligne5.append(res_46);
var res_56 = document.createElement("tr");
res_56.innerHTML = cdt_Array_soc[0][0]+" ("+((cdt_Array_soc[0][1]*100)/7).toFixed(1)+"%)";
res_ligne5.append(res_56);

res_table.append(res_ligne1);
res_table.append(res_ligne2);
res_table.append(res_ligne3);
res_table.append(res_ligne4);
res_table.append(res_ligne5);

div_res.append(res_table);

}


function sort(cdt_Array) {
    for(let i=0; i<cdt_Array.length; i++) {
        for(let j=0; j<cdt_Array.length-i-1; j++) {
            if(cdt_Array[j + 1][1]<cdt_Array[j][1]) {
                [cdt_Array[j+1],cdt_Array[j]] = [cdt_Array[j],cdt_Array[j+1]]
            }
        }
    };
    return cdt_Array;
};