// Instead of sink avace pomises are used
// Pomise are like are real would promic just like we promic to athor pepale to doing this task leat soo it is promic...
// 
/*
const promicOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Inside settime Out")
        resolve()
    },1000)
})

promicOne.then(function() {
    console.log('inside then'); 
})
*/
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ OOORRRR~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~?

// other syntax : - Don't need to store inside a variable
/*
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('inside second promise');
        resolve()
    },1000)
}).then(function(){
    console.log('inside second this');
    
})
*/

// how to get value or how values are flow though the resolve and reject 
// may be i want to say how argument passon to each other in resolve and reject

// argument or data are pass by the resolve and reject are object's
/*
const promicsThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({name: 'omkar' ,age : 20})
        
    }, 1000);
})

promicsThree.then(function(data){
    console.log(data);
})

*/

// ~~~~~~~~~~~~~~~~ handling reject() ~~~~~~~~~~~~~~~~~~~~~~~~

/*
const promicsFour = new Promise (function(resolve,reject){

    const error = true
    if (!error){
        resolve({name:"javascript",type:'Progarming langavge'})
    }else{
        reject('ERROR : somting is Wrong')
    }
})
*/
// promicsFour.then((data)=>{
//     console.log(data);
//     return data.name
    
// }).then(function(name){
//     console.log(name);
// }).catch(function(error){
//     console.log(error);
    
// })

// ~~~~~~~~~~` Also we can handal the data by async await

/*
async function consumepromicsFour() {
    try {
        const result = await promicsFour
        console.log(result);
    } catch (error) {
        console.log(error)
        
    }
    
}
consumepromicsFour()
*/

// ~~~~~~~~~~~~~~~~~~~~~~ fetch ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
async function cosumefetch() {
    
const data = await fetch('https://api.freeapi.app/api/v1/public/randomjokes?limit=1&query=science&inc=categories%2Cid%2Ccontent&page=1')
 try{
    const result = await data.json()
    console.log(result.data);
 }catch(error){
 console.log(error)
 }
    

}
cosumefetch()
*/


fetch('https://areeapi.app/api/v1/public/randomjokes?limit=1&query=science&inc=categories%2Cid%2Ccontent&page=1')
.then((data)=>{
    console.log(data);
    const respons = data.json()
    return respons
    
}).then((data)=>{
    console.log(data.data);
    
}).catch((error)=> {
    console.log('E : ' ,error);
    
})