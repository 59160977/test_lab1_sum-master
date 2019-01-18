const sum = require('./sum');
// 1 + 2 เท่ากับ 3
test('1 + 2 เท่ากับ 3', ()=> {
  expect(sum(1,2)).toBe(3);
});

// 20 + 1 เท่ากับ 21
test('20 + 1 เท่ากับ 21',()=>{
  expect(sum(20,1)).toBe(21);
})

// 2 + 5 เท่ากับ 7
test('2 + 5 เท่ากับ 7',()=> {
  expect(sum(2,5)).toBe(7);
})

// ทำอีก 3 อัน โดยการพิมพ์เอง อย่า copy

// 4 + 5 เท่ากับ 9
test('4 + 5 เท่ากับ 9',()=> {
  expect(sum(4,5)).toBe(9);
})

// 5 + 6 เท่ากับ 11
test('5 + 6 เท่ากับ 11',()=> {
  expect(sum(5,6)).toBe(11);
})

// 10 + 10 เท่ากับ 20
test('10 + 10 เท่ากับ 20',()=> {
  expect(sum(10,10)).toBe(20);
})
