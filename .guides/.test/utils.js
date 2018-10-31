const isObjectAndNotArray = function (item) {
    expect(item).toBeInstanceOf(Object)
    expect(item).not.toBeInstanceOf(Array)
}

module.exports = {
    isObjectAndNotArray
}