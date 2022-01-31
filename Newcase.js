const express = require ("express")

//inisialisasi
const app = express()

// set to read a request data from JSON format
app.use(express.json())
// JSON is String

app.post("/newcase",(request,response)=>{
    let keyword = request.body.keyword
    let data = [
        {nis:101, nama:"Andika", alamat:"Araya"},
        {nis:102, nama:"Adinda", alamat:"Sawojajar"},
        {nis:103, nama:"Jagdish", alamat:"Blimbing"},
        {nis:104, nama:"Anandi", alamat:"Klojen"},
        {nis:105, nama:"Aca", alamat:"Klojen"},
        {nis:106, nama:"Kurdi", alamat:"Araya"},
        {nis:107, nama:"Kari", alamat:"Sawojajar"},
        {nis:108, nama:"Rina", alamat:"Blimbing"},
        {nis:109, nama:"Gauri", alamat:"Klojen"},
        {nis:110, nama:"Gopal", alamat:"Klojen"}
    ]
    let data2 = []
    let jml = 0

    for (let i = 0; i < data.length; i++) {
        if (keyword == data[i].nama || keyword == data[i].nis || keyword == data[i].alamat) {
            jml += 1

            data2.push({
                Nis : data[i].nis,
                Nama : data[i].nama,
                Alamat : data[i].alamat
            })
        }
        
    }
    return response.json({
        "Jumlah data" : jml,
        "Data": data2
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})