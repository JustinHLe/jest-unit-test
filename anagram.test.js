const isAnagram = require('./anagram')

test('isAnagram function exists', ()=>{
    expect(typeof isAnagram).toEqual('function')
})

test('cinema is an anagram of iceman', ()=>{
    expect(isAnagram('cinema','iceman')).toBeTruthy()
})

test('Dormitory is an anagram of dirty Room##', ()=>{
    expect(isAnagram('Dormitory','dirty room##')).toBeTruthy()
})

test('hello is not an anagram of aloha', ()=>{
    expect(isAnagram('Hello','Aloha')).toBeFalsy()
})