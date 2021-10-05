const fs = require('fs')
const path = "./Logs"

if (!fs.existsSync(path)) {
    // Create Log files
    fs.mkdirSync(path)
    process.chdir(path)
    console.log("------------------------------Question 3-----------------------------")
    for (let i = 0; i < 10; i++) {
        var name = `log${i}.txt`
        fs.writeFileSync(name, name)
        console.log("create files...", name)
    }
    console.log("----------------------------------------------------------------------")

} else if(fs.existsSync(path)){
    // Remove Log files
    const file = fs.readdirSync(path)
    console.log("------------------------------Question 3-----------------------------")
    for (name of file) {
        fs.unlinkSync(`${path}/${name}`)
        console.log("delete files...", name)
    }
    console.log("----------------------------------------------------------------------")
    fs.rmdirSync(path)
   
}