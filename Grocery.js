const express = require ("express")

//inisialisasi
const app = express()

// set to read a request data from JSON format
app.use(express.json())
// JSON is String

app.post("/grocery",(request,response)=>{
    let barang = request.body.barang
    let pack = request.body.pack

    let netto = 0
    let totalharga = 0

    let total = []

    for (let i = 0; i < barang.length; i++) {
        for (let j = 0; j < pack.length; j++) {
            if (barang[i].pack == pack[j].nama_pack) {
                netto = barang[i].bruto - pack[j].berat
                totalharga = netto * barang[i].harga
            }          
        }
        total.push({
            ID : barang[i].id,
            Nama : barang[i].nama,
            Bruto : barang[i].bruto,
            Harga : barang[i].harga,
            Pack : barang[i].pack,
            Netto : netto,
            Total : totalharga
        })
        
    }
    return response.json({
        "Barang" : total
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})