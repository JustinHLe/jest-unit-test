const chunkArray = require('./chunk')

test('chunkArray exists' , () => {
    expect(chunkArray).toBeDefined()
})

test('chunk an array with 10 values with len of 2', ()=>{
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const len = 2;
    const chunkedArr = chunkArray(numbers,len)
    expect(chunkedArr).toEqual([[1,2],[3,4],[5,6],[7,8],[9,10]])
})