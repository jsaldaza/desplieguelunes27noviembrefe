import "./Room.css"
const Room = ({
  descripcion,
  ciudad,
  costo,
  nombre,
  capacidad,
  imagen
}) => {
  const imagenUrl = imagen && `https://loremflickr.com/320/320?index=${Math.random()}`
  console.log(imagenUrl)
  return (
    <div className="room">
      <picture className="room_pic">
        {/* <button className="room_reservar">Reservar</button> */}
        <img src={imagen} loading="lazy"/>
        <svg className="room_loading" xmlns="http://www.w3.org/2000/svg" width="76" height="76" fill="#777777" viewBox="0 0 256 256"><path d="M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z"></path></svg>
      </picture >
      <div className="room_info">
        <div>
          <h2>{ciudad}</h2>
          <div>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M164.47,195.63a8,8,0,0,1-6.7,12.37H10.23a8,8,0,0,1-6.7-12.37,95.83,95.83,0,0,1,47.22-37.71,60,60,0,1,1,66.5,0A95.83,95.83,0,0,1,164.47,195.63Zm87.91-.15a95.87,95.87,0,0,0-47.13-37.56A60,60,0,0,0,144.7,54.59a4,4,0,0,0-1.33,6A75.83,75.83,0,0,1,147,150.53a4,4,0,0,0,1.07,5.53,112.32,112.32,0,0,1,29.85,30.83,23.92,23.92,0,0,1,3.65,16.47,4,4,0,0,0,3.95,4.64h60.3a8,8,0,0,0,7.73-5.93A8.22,8.22,0,0,0,252.38,195.48Z"></path></svg>
        <p>{capacidad}</p>
          </div>
        </div>
        <div>
          <p>{nombre}</p>
          <p>{descripcion}</p>
        </div>
        <div>
          <p><strong>{costo} COP</strong> noche</p>
        </div>
      </div>
    </div>
  )
}
 
export default Room;
