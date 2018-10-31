const { extras, ex } = require('../../ex-3')
const { isObjectAndNotArray } = require('./utils')

test("Items in `extras` should be objects", () => extras.forEach(i => { isObjectAndNotArray(i) }))

test("Should add all objects in `extras` to `myList`", function () {
    let stuff = []
    let moreStuff = [{ a: 1 }, { b: 2 }]
    ex(stuff, moreStuff)
    expect(stuff.length).toBe(2)
})

test("`extras` should be added to `myList` using the spread syntax", function () {
    let stuff = []
    let moreStuff = [{ a: 1 }, { b: 2 }, { a: 1 }, { b: 2 }, { a: 1 }, { b: 2 }, { a: 1 }, { b: 2 }, { a: 1 }, { b: 2 }, { a: 1 }, { b: 2 }]
    const pushSpy = jest.spyOn(Array.prototype, 'push')
    ex(stuff, moreStuff)

    expect(pushSpy).toBeCalledTimes(1)
    expect(pushSpy).toHaveBeenCalledWith(...moreStuff)
    expect(stuff.length).toBe(moreStuff.length)
})