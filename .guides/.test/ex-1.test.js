const { people, ex } = require('../../ex-1')

let outputData = ""
storeLog = inputs => (outputData += inputs)
console["log"] = jest.fn(storeLog)

test('Should print the userID at the index of `userPosition`, using the variable itself', () => {
    outputData = ""
    let userIDs = ["user_19921231111", "user_0119381334178887", "user_01193842221237", "user_732999218401", "user_872341"]
    ex(3)
    expect(outputData.trim()).toBe(userIDs[3])
    outputData = ""
    ex(1)
    expect(outputData.trim()).toBe(userIDs[1])
})