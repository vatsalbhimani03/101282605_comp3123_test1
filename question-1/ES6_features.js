function lowerCaseWords(array){
    return new Promise((resolve, reject) => {
        try {
            var strArray = array.filter(item => typeof item == "string") // this only filter string type from array
            
            var lowerStrArray = strArray.map(
                x => x.toLowerCase()) // map function convert str to lower case

            resolve(lowerStrArray)
        } catch (e) {
            reject(e.message)
        }
    })
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
const output = async() => {
    var out = await lowerCaseWords(mixedArray)
    console.log("------------------------------Question 1-----------------------------")
    console.log(out)
    console.log("---------------------------------------------------------------------")
}
output()

