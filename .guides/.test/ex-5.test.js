const Exercise5 = require('../../ex-5')

let outputData = "";
storeLog = inputs => (outputData += inputs);
console["log"] = jest.fn(storeLog)

test("Should welcome Bob", function () {
    outputData = ""
    global.prompt = () => "Bob"

    let { ex } = Exercise5() //for these tests did it a bit differently because of the prompt
    ex()

    expect(outputData.trim()).toBe("Welcome, Bob")
})

test("Should tell Ted that reservation has been claimed", function () {
    outputData = "" //reset the data in the console log
    global.prompt = () => "Ted" //reset what `prompt` returns

    let { ex } = Exercise5()
    ex()

    expect(outputData.trim()).toBe("Hmm, someone already claimed this reservation")
})

test("Should print *only* 'You have no reservation' when the `name` is not in the `reservations` object", function () {
    outputData = ""
    global.prompt = () => "Shoobertidoobapom@#!"

    let { ex } = Exercise5()
    ex()

    expect(outputData.trim()).toBe("You have no reservation")
})