const { library, ex } = require('../../ex-4')
const { isObjectAndNotArray } = require('./utils')

test("`library` should be an object with a `books` array", function () {
    isObjectAndNotArray(library)
    expect(library.books).not.toBeUndefined()
    expect(library.books).toBeInstanceOf(Array)
})

test('Should push the `books` array from the `library` object into `myList`', function () {
    const pushSpy = jest.spyOn(Array.prototype, 'push')
    const dummy = []
    ex(dummy, library)
    expect(pushSpy).toBeCalledTimes(1)
    expect(pushSpy).toHaveBeenCalledWith(library.books)
    expect(dummy.length).toBe(library.books.length)
})