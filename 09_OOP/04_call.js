function username(name){
    this.name =name
}

function userdata(name,age,score) {
    username.call(this,name)
//  .call is to move data of username to userdata
    this.age= age
    this.score =score
    
}

const u1 = new userdata('omkar',20,99)
console.log(u1);
