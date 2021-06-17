import './App.css';
import myImageSource from "./imageinSrc.png"
import myVideo from"./videoplayback.mp4" 

function App() {
  return (
    <div className="App">

<div className ="stylediv" >

  <h1 className="title red">Chadi Seifeddine</h1>
  <p>This image is from the public folder </p>
  <img src="/ImageInPublic.png" alt="imgpublic" />
  <p>This image is from the src folder that we needed to import in order to see it :</p>
  <img src={myImageSource} alt="imgsrc" />
</div>
<h2> A video about ReactJs</h2>
<video src={myVideo} type ="video/mp4" width="320" height="240" controls/>

    </div>
  );
}

export default App;
