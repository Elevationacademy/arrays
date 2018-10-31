const Exercise5_2 = require('../../ex-5-2')

let outputData = "";
storeLog = inputs => (outputData += inputs);
console["log"] = jest.fn(storeLog)

test("Should welcome Bob or BOB or any casing", function () {
    ["Bob", "BOB", "bOb", "BOb", "bOB"].forEach(n => {
        outputData = ""
        global.prompt = () => n

        let { ex } = Exercise5_2() //for these tests did it a bit differently because of the prompt
        ex()

        expect(outputData.trim()).toBe("Welcome, " + n)
    })
})

test("Should tell Ted or TED or any casing that the reservation has been claimed", function () {
    ["Ted", "TED", "teD", "TEd", "tED", "TeD", "tEd"].forEach(n => {
        outputData = "" //reset the data in the console log
        global.prompt = () => n //reset what `prompt` returns

        let { ex } = Exercise5_2()
        ex()

        expect(outputData.trim()).toBe("Hmm, someone already claimed this reservation")
    })
})