const Exercise5_1 = require('../../ex-5-1')

let outputData = "";
storeLog = inputs => (outputData += inputs);
console["log"] = jest.fn(storeLog)

test("If `name` is not in the `reservations` object, `name` should be added to `reservations` with `claimed` set to `true`", function () {
    const newName = "Shoobertidoobapom@#!"
    outputData = ""
    global.prompt = () => newName

    let { ex, reservations } = Exercise5_1()
    ex()
    expect(reservations).toHaveProperty(newName)
    expect(reservations[newName]).toHaveProperty("claimed")
    expect(reservations[newName].claimed).toBe(true)
})