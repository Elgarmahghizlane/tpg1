function Etudiant(a,b){
    this.nom=a;
    this.prenom=b;
    this.dirBonjour=function(){
        console.log("hi I am :"+this.nom)
      }
    this.ajouterNote=function(n){
        this.notes.push(n);
    }
    this.calculMoyenne=function(){
        var s=0;
        for(var i=0; i<this.notes.length;i++)
          s+=notes[i];
          return this.notes.length===0?0:s/this.notes.length;
    }
}
var e1=new Etudiant("Elgarmah","Ghizlane");
var e2=new Etudiant("Barabad","Souad");

e1.dirBonjour();
e2.dirBonjour();

e1.ajouterNote(12,16);
e1.ajouterNote(14,15);
console.log(e1);
console.log(e2);
