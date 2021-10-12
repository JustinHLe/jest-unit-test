const axios = require('axios')
const functions = require('./functions');

// beforeEach(()=>initDatabase())
// afterEach(()=> closeDatabase())

// beforeAll(()=>initDatabase())
// afterAll(()=> closeDatabase())

// const initDatabase = () => {
//     console.log('Database initialized...')
// }
// const closeDatabase = () => {
//     console.log('Database closed...')
// }
// const nameCheck = () => {
//     console.log('checking name')
// }
// describe('Checking Names', ()=> {
//     beforeEach(()=>{
//         nameCheck()
//     })
//     test('User is Jeff', ()=> {
//         const user = "Jeff"
//         expect(user).toBe('Jeff')
//     })
//     test('User is Karen', ()=> {
//         const user = "Karen"
//         expect(user).toBe('Karen')
//     })
// })
test('Adds 2 + 2 to equal 4', ()=>{
    expect(functions.add(2,2)).toBe(4)
})

test('Adds 2 + 2 to NOT equal 5', ()=>{
    expect(functions.add(2,2)).not.toBe(5)
})

//toBeNull matches only NULL
//toBeUndefined matches only undefined
//toBeDefined is the opposite of toBeUndefined
//toBeTruthy matches anything that an if statements treats as true
//toBeFalsy matches anything than if statement treats as false


test('should be null', ()=>{
    expect(functions.isNull()).toBeNull()
})

test('Should be falsy', ()=> {
    expect(functions.checkValue(null)).toBeFalsy()
})

test('User should be Brad Traversy Object', ()=>{
    expect(functions.createUser()).toEqual({
    firstName: 'Brad', 
    lastName: 'Traversy'
    })
})

//less than and greater than
test('Should be under 1600',()=>{
    const load1 = 800
    const load2 = 700
    expect(load1+load2).toBeLessThan(1600)
})

//Regex
test('There is no I in team', ()=>{
    expect('team').not.toMatch(/I/i)
})

//Arrays
test('Admin should be in usernames', ()=>{
    usernames = ['john','karen','admin']
    expect(usernames).toContain('admin')
})

//Working with async data
describe("async testing", ()=>{
    beforeEach(()=>{
        console.log('async')
    })
    test('User fetched name should be Leanne Graham with promises', () => {
        return axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res=>{
            expect(res.data.name).toEqual("Leanne Graham")
        })
    });
    
    test('User fetched name should be Leanne Graham with async', async () => {
        const res= await axios.get('https://jsonplaceholder.typicode.com/users/1')
        expect(res.data.name).toEqual('Leanne Graham')
    });
})
