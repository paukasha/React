// test('some', () => {
//     expect(true).toBe(true);
// })



//тесты можно объединять в блоки

describe('Add function', () => {
    test('should return 2 when add one and one', () => {
        expect(1+1).toBe(2)
    });

    describe('again',() => {
        test('sss', () => {})
    })
})