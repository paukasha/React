// тест начинается со слова test
// первый аргуменьт название должно содержать слово типа "должен, должна(функция )"
// что-то вернуть если что-то делаем

// группы первый аргумент название что тестируем
describe('Math.max', () => {
    test('should return 2 when 1+1', () => {
        expect(1+1).toBe(2)
    })

    // может быть любой уровень вложенности тесты могут быть async
    describe('again', () =>{
        test('sss', () => {})
    })
})



