const express = require ("express")

//inisialisasi
const app = express()

// set to read a request data from JSON format
app.use(express.json())
// JSON is String

app.post("/alphabet",(request,response)=>{
    let word = request.body.word
    word = word.toLowerCase()

    let vokal = 0
    let konsonan = 0

    for (let i = 0; i < word.length; i++) {
        if (word[i] === "a" || word[i] === "i" || word[i] === "u" || word[i] === "e" || word[i] === "o") {
            vokal += 1
        }
        if (word[i] !== "a" && word[i] !== "i" && word[i] !== "u" && word[i] !== "e" && word[i] !== "o") {
            konsonan += 1
        }
        
    }
    return response.json({
        "Jumlah Huruf Vokal" : vokal,
        "Jumlah Huruf Konsonan" : konsonan
    })
})


app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})