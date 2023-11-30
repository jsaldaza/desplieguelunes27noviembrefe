import { useEffect, useState } from "react";
import Header from "../components/Header";
import Room from "../components/Room";
import "./Main.css";

function Main () {
 
  const [habitaciones, setHabitaciones] = useState(null)
  useEffect(()=>{

    async function getHabitaciones(){
      const res= await fetch ("https://desplieguelunes27noviembre.vercel.app/api/habitaciones")
      const data= await res.json()
      console.log(data)
      setHabitaciones (data.datos)
    }
    getHabitaciones()
  },[])
  return (
    <>
      <Header />
      <section className="room-grid">
        {habitaciones && habitaciones.map((habitacion) => {
          return (
            <Room 
              descripcion={habitacion.descripcion}
              ciudad={habitacion.ciudad}
              costo={habitacion.costo}
              nombre={habitacion.nombre}
              capacidad={habitacion.capacidad}
              imagen={habitacion.foto}
            />
          )
        })}
      </section>
    </>
  )
}

export default Main;
