const fs = require("fs")

const { getTrainsFromInput } = require("./trainController");

const filename = process.argv[2]

fs.readFile(filename, "utf8", (err, data) => {
    if (err) throw err

    // console.log(data);
    var inputLines = data.toString().split("\n")
    // Add your code here to process input commands

    getTrainsFromInput(inputLines);
    
})
