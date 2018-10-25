const { people, ex1 } = require('./ex-1')

test('`p1` and `p2` should be objects with the properties: `name` - a string, `age` - a number, and `city` - a string.', () => {
    people.forEach(p => {
        expect(p).toBeInstanceOf(Object)
        expect(p).not.toBeInstanceOf(Array)

        expect(Object.keys(p).sort()).toEqual(["name", "age", "city"].sort())

        for (let k of [p.name, p.city]) { expect(typeof k).toBe("string") }
        expect(typeof p.age).toBe("number")
    })
})

let outputData = "";
storeLog = inputs => (outputData += inputs);

test("Matching age and city should print '... wanted to date ...'", () => {
    console["log"] = jest.fn(storeLog);

    ex1({ name: "p1name", age: 23, city: "Sherman" },
        { name: "p2name", age: 23, city: "Sherman" })

    expect(outputData.trim()).toBe("p1name wanted to date p2name")
    expect(outputData.includes("but couldn't")).toBeFalsy()
});

test("Matching age but not city should print '... wanted to date ..., but couldn't'", () => {
    outputData = "";
    console["log"] = jest.fn(storeLog);

    ex1({ name: "p1name", age: 23, city: "Sherman" },
        { name: "p2name", age: 23, city: "Mansher" })

    expect(outputData.trim()).toBe("p1name wanted to date p2name, but couldn't")
});

test("No match on age should print nothing", () => {
    outputData = "";
    console["log"] = jest.fn(storeLog);

    ex1({ name: "p1name", age: 22, city: "Sherman" },
        { name: "p2name", age: 23, city: "Sherman" })

    expect(outputData.trim()).toBe("")
});



