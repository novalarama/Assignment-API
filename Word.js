const express = require ("express")

//inisialisasi
const app = express()

// set to read a request data from JSON format
app.use(express.json())
// JSON is String

app.post("/word",(request,response)=>{
    let word = request.body.word

    let jmlKata = 0

    if (word !== "") {
        for (let i = 0; i < word.length; i++) {
            if(word[i] == ' '){
                jmlKata += 1
            }
        }
        jmlKata += 1
    } else {
        jmlKata = 0
    }
    return response.json({
        "Jumlah Kata":jmlKata
    })
})


app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})