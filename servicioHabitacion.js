export async function consultarHabitaciones(){
// 1 pa onde voy
let url= "https://desplieguelunes27noviembre.vercel.app/api/habitaciones"
let peticion={
    method: "GET"
}

//2. Vaya pues
let respuesta =await fetch(url,peticion)
let habitaciones=respuesta.json()


//3. muestre que trajo
return habitaciones




}