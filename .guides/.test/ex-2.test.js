const { leaders, ex } = require('../../ex-2')

test("Should add 'Emperor' to end of `leaders` and `Lord` to beginning", () => {
    ex(leaders)
    expect(leaders[0]).toBe("Lord")
    expect(leaders[leaders.length - 1]).toBe("Emperor")
})