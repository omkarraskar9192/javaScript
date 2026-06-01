const myObj = {
    name : 'omkar',
    isLogedIn : true,
    time : 12,
    getname : function() {
        console.log(this.name);
        console.log(this);
        
    }

}
// myObj.getname()
function user(name,age,score) {
    this.name = name
    this.age = age
    this.score = score
    this.geeting = function(){
        console.log(`${this.name}`)
    }
    // return this
    //****** If i using 'new' keyword thin no need to use `return this`  ********/

}

const u1 = new user('omkar',20,84)
const u2 = new user('more',21,83)
console.log(u1)
console.log(u2)