import { useState } from 'react';
import './App.css';
import Swal from 'sweetalert2';

function App() {
  const [pointOfChracterA, setPointOfCharacterA] = useState(1)
  const [pointOfChracterB, setPointOfCharacterB] = useState(1)
  const ramdomPlusPointForCharacter = () => {
    let a = Math.floor(Math.random() * 10)
    if (a < 5) {
      setPointOfCharacterA(pointOfChracterA + 1)
    } else {
      setPointOfCharacterB(pointOfChracterB + 1)
    }
  }
  const resetCharacterPoint = () => {
    setPointOfCharacterA(1)
    setPointOfCharacterB(1)
  }
  if (pointOfChracterA >= 10) {
    Swal.fire({
      title: 'Character A win',
      icon: "success"
    });
    resetCharacterPoint()
  } else if (pointOfChracterB >= 10) {
    Swal.fire({
      title: 'Character B win',
      icon: "success"
    });
    resetCharacterPoint()
  }
  return (
    <div className="container ">
      <div>
        {
          pointOfChracterA > pointOfChracterB ?
            <h4>A is Winner</h4> : pointOfChracterA === pointOfChracterB ?
              <h4>Same point</h4> : <h4>B is Winner</h4>
        }
      </div>
      <div>
        <p>character A</p>
        {new Array(pointOfChracterA).fill(1).map((point, index) => (
          <button className='btn btn-primary me-1' key={index}></button>
        ))}
        <p>character B</p>
        {new Array(pointOfChracterB).fill(1).map((point, index) => (
          <button className='btn btn-primary me-1' key={index}></button>
        ))}
      </div>
      <div>
        <button className='btn btn-sm btn-success me-2' onClick={ramdomPlusPointForCharacter}>race</button>
        {pointOfChracterA >= 2 || pointOfChracterB >= 2 ? <button className='btn btn-sm btn-warning md-2' onClick={resetCharacterPoint}>reset</button> : ''}
      </div>

    </div>
  );
}

export default App;
