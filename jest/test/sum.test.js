const   {sum}  = require( '../add.js')

test('add 1+2 to equal 3',()=>{
    expect(sum(1,2)).toBe(3);
})

console.log(sum(1,3));