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

// {
//     "barang":[
//         {"id":1,"nama":"Beras","bruto":100,"harga":15000,"pack":"Karung"},
//         {"id":2,"nama":"Gula","bruto":150,"harga":11000,"pack":"Karung"},
//         {"id":3,"nama":"Minyak","bruto":50,"harga":20000,"pack":"Plastik"},
//         {"id":4,"nama":"Telur","bruto":200,"harga":25000,"pack":"Kayu"}
//     ],
//     "pack":[
//         {"id_pack":1,"nama_pack":"Karung","berat":1},
//         {"id_pack":2,"nama_pack":"Plastik","berat":0.5},
//         {"id_pack":3,"nama_pack":"Kayu","berat":2}
//     ]
// }