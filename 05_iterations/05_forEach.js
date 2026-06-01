// forEach 

const myObj =[
    {
        rollNo : 44,
        name : 'omkar',
    },
    {
        rollNo : 15,
        name : 'pogo',
    },
    {
        rollNo : 35,
        name : 'More',
    },
    {
        rollNo : 32,
        name : 'aditya',
    },
    {
        rollNo : 0,
        name : 'vithal',
    },
]

myObj.forEach(key => { console.log(key.rollNo + ' : ' + key.name)});