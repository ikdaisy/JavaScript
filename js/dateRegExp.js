let data=/^(0[1-9]||[1-2]\d||3[0-1])-([0][1-9]||1[0-2])-([1-9]\d{3})/


console.log(data.test('30-12-2024'));
console.log(data.test('00-12-2000'));
console.log(data.test('30-00-2000'));
console.log(data.test('30-12-0001'));





