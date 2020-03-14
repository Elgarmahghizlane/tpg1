function somme(t){
    var s=0 ;
    console.log(t);
    for( let i=0 ;i<t.lenght;i++){
        s+=t[i];
    }
    return s;
}
var t=new Array();
do{
    var v=prompt("donnez un nombre :");
    v=parseInt(v);
    console.log(v);
    if(!(isNaN(v))) t.push(v);
}while(!(isNaN(v)));
let some=somme(t);
console.log(some);