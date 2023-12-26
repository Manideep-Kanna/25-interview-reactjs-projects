import { useEffect, useState } from "react";

export default function RandomColorGenerator() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    if(typeOfColor === 'rgb') generateRandomRgbColor()
    else generateRandomHexColor()
  },[typeOfColor])

  function randomSelection(length){
    return Math.floor(Math.random()*length)
  }

  function generateRandomHexColor(){
    let hexColor = "#"
    const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']


    for(let i = 0 ; i<6 ; i++){
        hexColor += hex[randomSelection(hex.length)] 
    }
    setColor(hexColor)
  }

  function generateRandomRgbColor(){
    const r = randomSelection(256)
    const g = randomSelection(256)
    const b = randomSelection(256)

    console.log("Came here")
    setColor(`rgb(${r},${g}, ${b})`)
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor('hex')}>Generate Hex Color</button>
      <button onClick={() => setTypeOfColor('rgb')}>Generate RGB Color</button>
      <button onClick={typeOfColor === 'hex'? generateRandomHexColor : generateRandomRgbColor}>Generate Random Color</button>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        flexDirection: "column",
        gap: "20px"
      }}>
        <h3>{typeOfColor === 'rgb' ? "RGB Color" : "Hex Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
