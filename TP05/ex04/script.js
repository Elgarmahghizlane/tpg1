let nbr= Math.random()*250;
//console.log(nbr);
 nbr=Math.floor(nbr);
console.log(nbr);
let x=prompt("donner un nombre :");
x=parseInt(x);
trouver=parseInt(x);

while(trouver===false){
    if(x>nbr){
        alert("ce nombre est grand");
        x=prompt("donner un nombre :");
        x=parseInt(x);
   
   }else if(x<nbr){
   
        alert("ce nombre est petit");
        x=prompt("donner un nombre :");
        x=parseInt(x);
   
   }else{
    trouver===true;
    alert("BRAVOO!!!");
   }
}  