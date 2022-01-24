const {request, response} = require("express")
let express = require ("express")

//inisialisasi
let app = express()

//endpoint pertama (kubus)
app.get("/hitungkubus/:sisi",(request, response) => {
    let sisi = request.params.sisi

    let luas = 6*sisi
    let volume = sisi*sisi*sisi

    return response.json({
        LuasPermukaan : `${luas}`,
        Volume : `${volume}`
    })


})

//endpoint kedua (Balok)
app.get("/hitungbalok/:panjang/:lebar/:tinggi",(request, response) => {
    let panjang = request.params.panjang
    let lebar = request.params.lebar
    let tinggi = request.params.tinggi

    let luas = 2*((panjang*lebar)+(panjang*tinggi)+(lebar*tinggi))
    let volume = panjang*lebar*tinggi

    return response.json({
        LuasPermukaan : luas,
        Volume : volume
    })


})

//endpoint ketiga (Bola)
app.get("/hitungbola/:jari",(request, response) => {
    let jari = request.params.jari

    let volume = (4*3.14*(jari*jari*jari))/3
    let luas = 4*3.14*(jari*jari)

    return response.json({
        LuasPermukaan : luas,
        Volume : volume
    })


})

//endpoint keempat (Limas persegi)
app.get("/hitunglimas/:alas/:tinggi/:sisi",(request, response) => {
    let alas = request.params.alas
    let tinggi = request.params.tinggi
    let sisi = request.params.sisi

    let luas = 4*((1*alas*tinggi)/2)+(sisi*sisi)
    let volume = (1*(4*sisi)*tinggi)/3

    return response.json({
        LuasPermukaan : luas,
        Volume : volume
    })


})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})