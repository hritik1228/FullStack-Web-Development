// Shallow Copy-It copies the value doesn't copy the reference of the object.It not works when there is object inside another object i.e nested object then here it comes deep copy
// let user1={name:'Hritik',age:24}
// let user2=Object.assign({},user1)
// let user2={...user1}
// user2.name='Kumar'
// console.log(user1)
// console.log(user2)

// Deep shallow copy
let user1 = {
    name: 'Hritik',
    address: {
        street: 'Main Road',
        pin: '82828202'
    },
    getData: () => {
        return 'all data is here'
    }
}

let user2 = JSON.parse(JSON.stringify(user1))
user2.address.street = 'G.T. Road'
console.log(user1);
// Function gets removed from here this can be resolved by loadash ._cloneDeep 
console.log(user2)