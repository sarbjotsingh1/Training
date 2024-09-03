let person={
    firtname : "John",
    lastName : "Doe",
    address : {
        street : 'XYZ',
        city : 'Mumabai',
    },
    fullName : function(){
        console.log(this.firtname + " " + this.lastName,);
    } 
}
console.log(person.address.street);
console.log(person["lastName"]);

for(key in person){
    if(person[key] instanceof Object){
        for(let k in person[key]){
            console.log(k+ " " + person[key][k]);
        }
    }
    else{
        console.log(key + " : " + person[key])
    }
}


// console.log(person.fullName());

