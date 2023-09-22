import React from "react"; 
import ReactPlayer from 'react-player';
import Row from "./Row";
 
function App() { 
 
  const bird1 = new Audio( 
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3" 
  ); 
 
  const bird2 = new Audio( 
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3" 
  ); 
 
  function toggle1() { 
    if (bird1.paused) { 
      bird1.play(); 
    } else { 
      bird1.pause(); 
    } 
  }
 
  function toggle2() { 
    if (bird2.paused) { 
      bird2.play(); 
    } else { 
      bird2.pause(); 
    } 
  }

  let formInput = React.useRef();

  let foucsInput = () => {
    console.log(formInput.current.focus());
  }

  let cancelFocus = () => {
    console.log(formInput.current.blur());
  }
 
  return ( 
    <>
    <Row>
      <div className="free-parent-1">
        <div className="free-parent-2-1">
          <h1 className="free-child">Child - 1</h1>
        </div>
      </div>
      <div className="free-parent-2">
        <div className="free-parent-2-2">
          <h1 className="free-child">Child - 2</h1>
        </div>
      </div>
      <div className="free-parent-3">
        <div className="free-parent-2-3">
          <h1 className="free-child">Child - 3</h1>
        </div>
      </div>
      <div className="free-parent-4">
        <div className="free-parent-2-4">
          <h1 className="free-child">Child - 4</h1>
        </div>
      </div>
      <div className="free-parent-5">
        <div className="free-parent-2-5">
          <h1 className="free-child">Child - 5</h1>
        </div>
      </div>
    </Row>
    <div>
      <ReactPlayer
        url={'https://www.youtube.com/watch?v=Gru4IfbKlfU&list=RDGru4IfbKlfU&start_radio=1'}
        playing={true}
        light={true}
        volume={1}
        controls={true}
      />
    </div>
    <div> 
      <button onClick={toggle1}>Caspian Tern 1</button> 
      <button onClick={toggle2}>Caspian Tern 2</button> 
    </div>
    <div>
      <input type="text" ref={formInput} />
      <button onClick={foucsInput}>Focus Input</button>
      <button onClick={cancelFocus}>Cancel Focus Input</button>
    </div>
    </>
  ); 
} 
 
export default App;