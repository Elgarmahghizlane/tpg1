function Member(name,id,grade){
    this.name=name;
    this.id=id;
    this.grade=grade;
    this.tostring();
    let str="";
    return str;
}
class Member{
    constructor(){
        this.name=name;
        this.id=id;
        this.grade=grade;
    }
 function Member(name,id,grade){
        this.name=name;
        this.id=id;
        this.grade=grade;
        this.tostring();
        let str="";
        return str;
    }
    function Team(name,id){
        this.name=name;
        this.id=id;
        this.tostring();
        this.members=new Array();
        this.addMember=function(m){
            this.members.push(m);
        }
        this.toString(){
            let str="";
        }
    
}
var m1=new Member("souad",1,B);
var m2=new Member("Ghizlane",2,c);
var m3=new Member("ouma",3,A);
var m=new Member("fati",4,D);
var est=new Team("team",25);
var fst=new Team("team",25);

