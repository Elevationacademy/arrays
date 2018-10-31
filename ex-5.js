// - DO NOT modify/delete *any* starter code (you can remove the comments though)

function Exercise5() {
    const reservations = {
        Bob: { claimed: false },
        Ted: { claimed: true }
    }

    //!IMPORTANT! Uncomment this line to work on this exercise
    // const name = prompt('Please enter the name for your reservation');

    const ex = function () {

    }

    return { ex, reservations }
}

//feel free to ignore this:
var x = Exercise5
typeof module == 'undefined' ? x().ex() : module.exports = x