const { myList, ex } = require('../../ex-2')
const { isObjectAndNotArray } = require('./utils')

const shouldBeNonEmptyObject = (item) => expect(Object.keys(item).length).toBeGreaterThan(0)

test("`myList` should have 2 objects in it with at least one key-value pair in each object", () => {
    expect(myList).toBeInstanceOf(Array)
    myList.forEach(i => { isObjectAndNotArray(i) })
    myList.forEach(i => { shouldBeNonEmptyObject(i) })
})

test("Should modify one of the values in the first object in `myList`", function () {
    const firstObject = { ...myList[0] }
    const firstObjectValues = JSON.stringify([...Object.values({...firstObject})].sort())

    ex(myList)
    const updatedValues = JSON.stringify(Object.values(myList[0]).sort())

    expect(Object.keys(firstObject)).toEqual(Object.keys(myList[0]))
    expect(firstObjectValues).not.toBe(updatedValues)
})

test("Should remove the second item from `myList`", function () {
    const dummyValues = [{}, {}]
    ex(dummyValues)
    expect(dummyValues.length).toBe(1)
})