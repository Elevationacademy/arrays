// - DO NOT modify/delete *any* starter code (you can remove the comments though)

function Exercise1() {
    let userPosition = 3
    let userIDs = ["user_19921231111", "user_0119381334178887", "user_01193842221237", "user_732999218401", "user_872341"]
    const ex = function (userPosition) {
        console.log(userIDs[userPosition]);
    }

    return { ex, userPosition }
}

//feel free to ignore this:
var x = Exercise1()
typeof module == 'undefined' ? x.ex(x.userPosition) : module.exports = x