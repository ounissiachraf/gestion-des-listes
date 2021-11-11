"use strict"

$(document).ready(function(){

    localStorage.clear();
    let cmpt;
    cmpt=0;
    function add(){
        let nom=$("#nom").val();
        let prenom=$("#prenom").val();
        cmpt++;
        if(nom!="" && prenom!="")
        {
            $("tbody").append("<tr><td>"+nom+"</td><td>"+prenom+"</td><td><button id='btn' data-id='"+cmpt+"' type='submit'>Supprimer</button></td></tr>");
            console.log(cmpt);
            
        }
        else if(nom!="" && prenom=="")
        {
            alert("Prenom manquant");
        }else if(nom=="" && prenom!=""){
            alert("Nom manquant");
        }
        else 
        {
            alert("Pas de donnéeà ajouter");
        }
        
        let P={nom: nom,prenom:prenom}
        localStorage.setItem("Personne "+cmpt,JSON.stringify(P));
    }
    //$("tbody tr").each(function(index,element){
      //  $(element).append("<td><input type='checkbox' id='scales'></td>");
    //});


    function supprimer(event){
        if(event.target.matches("#btn"))
        $(event.target).parent().parent().remove();
        
        localStorage.removeItem("Personne "+$(event.target).data("id"));
    }

    $("input+button").click(add);
    $("table").click(supprimer);

});