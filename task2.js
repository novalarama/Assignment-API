const {request, response} = require("express")
let express = require ("express")

//inisialisasi
let app = express()

//endpoint pertama (convert celcius)
app.get("/konversi/celcius/:c",(request, response) => {
    let c = request.params.c

    let r = c*0.8
    let f = c*1.8+32
    let k = c*1+273.15


    return response.json({
        Celcius : c,
        result : `Reamur = ${r}, Fahrenheit = ${f}, Kelvin = ${k}`
    })


})

//endpoint kedua (convert reamur)
app.get("/konversi/reamur/:r",(request, response) => {
    let r = request.params.r

    let c = (5*r)/4
    let f = r*2.25+32
    let k = (r/0.8)+273.15


    return response.json({
        Reamur : r,
        result : `Celcius = ${c}, Fahrenheit = ${f}, Kelvin = ${k}`
    })


})

//endpoint ketiga (convert kelvin)
app.get("/konversi/kelvin/:k",(request, response) => {
    let k = request.params.k

    let r = (k-273.15)*0.8
    let f = k*1.8-459.67
    let c = k*1-273.15


    return response.json({
        Kelvin : k,
        result : `Celcius = ${c}, Fahrenheit = ${f}, Reamur = ${r}`
    })


})

//endpoint keempat (convert fahrenheit)
app.get("/konversi/fahrenheit/:f",(request, response) => {
    let f = request.params.f

    let r = (f-32)*0.44
    let k = (f+459,67)/1.8
    let c = (f-32)/1.8


    return response.json({
        Fahrenheit : f,
        result : `Celcius = ${c}, Kelvin = ${k}, Reamur = ${r}`
    })


})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})