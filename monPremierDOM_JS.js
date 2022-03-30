
function voirDate(){
   var today = new Date();
   var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();  
   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();   
   var dateTime = date+' '+time;
   /*----------------------Manipulation de DOM--------------------------------------------------------------------*/
   const body= document.body;
   const divi= document.createElement("div");
   divi.textContent="La date est: " + date + " et il est: " +time ;
   body.append(divi);
   //console.log(dateTime);    
   }
function ajouterPrenom(){
   if((typeof Prenom == "undefined")){
var table = document.getElementById("laTable");
var row = table.insertRow(1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
cell1.innerHTML = "Prenom: ";
var pnom = document.createElement("input");
pnom.type = "text";
pnom.id = "Prenom";
cell2.appendChild(pnom);
   }
   else
alert("Prenom déjà ajouté.");
}

let tester = /^[A-Za-z]+( [A-Za-z]+)*$/g;

function validerNomPrenom()
   { 
   let nom = document.querySelector("#nom").value.trim();
   let nomInput = document.querySelector("#nom");
 
   if(nom.match(tester)) {
      nomInput.style.backgroundColor = "green";
      nomInput.style.borderColor = "green";
      console.log("Nom valide");
      alert("Nom valide");
   }
   else {
       nomInput.style.backgroundColor = "red";
       nomInput.style.borderColor = "red";
       console.log("Un probleme dans le nom");
       alert("Un probleme dans le nom");
   }
   let Prenom = document.querySelector("#Prenom").value.trim();
   let PrenomInput = document.querySelector("#Prenom");
   if((typeof Prenom !== "undefined")&& (Prenom!="undefined")){
     if(Prenom.match(tester)) {
       PrenomInput.style.backgroundColor = "green";
       PrenomInput.style.borderColor = "green";
      console.log("Prenom valide");
      alert("Prenom valide");
   }
   else {
       PrenomInput.style.backgroundColor = "red";
       PrenomInput.style.borderColor = "red";
       console.log("Un probleme dans le prenom");
       alert("Un probleme dans le prenom");
   }   
   }
}
