const { ex } = require('../../ex-3')

let outputData = ""
storeLog = inputs => (outputData += inputs)
console["log"] = jest.fn(storeLog)

test("Should create an empty array, add `Katlin` and `Kotlin` using *one* push, then remove the second item, then print the array", function () {
    outputData = ""
    const pushSpy = jest.spyOn(Array.prototype, 'push')
    const spliceSpy = jest.spyOn(Array.prototype, 'splice')
    ex()
    expect(pushSpy).toHaveBeenCalledTimes(1)
    expect(pushSpy).toHaveBeenLastCalledWith('Katlin', 'Kotlin')
    expect(spliceSpy).toHaveBeenCalledTimes(1)
    expect(outputData).toBe("Katlin") //prints content of array as joined string
})
