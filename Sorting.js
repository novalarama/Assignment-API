const { request } = require("express")
const express = require ("express")

//inisialisasi
const app = express()

// set to read a request data from JSON format
app.use(express.json())
// JSON is String

app.post("/sorting",(request,response)=>{
    let data = request.body.data
    let key = request.body.key
    let type = request.body.type


    for (let i = 0; i < data.length; i++) {
        if (type === "ascending") {
            for (let j = i; j < data.length; j++) {
                if (key === "nis") {
                    if (data[j].nis < data[i].nis) {
    
                        let bantu = data[i]
                        data[i] = data[j]
                        data[j] = bantu
                    }
                } else if(key === "nama"){
                    if (data[j].nama < data[i].nama) {
    
                        let bantu = data[i]
                        data[i] = data[j]
                        data[j] = bantu
                    }
                } else if(key === "umur"){
                    if (data[j].umur < data[i].umur) {
    
                        let bantu = data[i]
                        data[i] = data[j]
                        data[j] = bantu
                    }
                }
            }
        } else if(type === "descending"){
            for (let j = i; j < data.length; j++) {
                if (key === "nis") {
                    if (data[j].nis > data[i].nis) {
    
                        let bantu = data[i]
                        data[i] = data[j]
                        data[j] = bantu
                    }
                } else if(key === "nama"){
                    if (data[j].nama > data[i].nama) {
    
                        let bantu = data[i]
                        data[i] = data[j]
                        data[j] = bantu
                    }
                } else if(key === "umur"){
                    if (data[j].umur > data[i].umur) {
    
                        let bantu = data[i]
                        data[i] = data[j]
                        data[j] = bantu
                    }
                }
            }
        }
    }
    return response.json({
        "Data": data
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})