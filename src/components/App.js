import video from "../data/video.js";
import Part from "./Part.jsx";


function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Part video={video}
      />
    </div>
  ); 
}

export default App;
