
import React,{useState} from 'react'



export default function TextForm(props) {
    
    const handleUpClick = () =>
    {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () =>
    {
      let newText =text.toLowerCase();
      setText(newText);
    }
    const handleClearClick =()=>
    {
      let newText="";
      setText(newText);
    }
    const handleOnChange = (event) =>
    {
        console.log("Handlen");
        setText(event.target.value)
    }
    const handleCopy =()=>
    {
      var text =document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }


    const[text, setText]= useState('');

  return (
    <div className="container" style={{color : props.mode==='dark'?'white':'black'}}  >
     <h1>{props.heading}</h1>
     <div className="mb-3">
     <textarea className="form-control" style={{backgroundColor : props.mode==='dark'?'grey':'white' ,color : props.mode==='dark'?'white':'grey'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
     </div>
     <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
     <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
     <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
     <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>


     <div className="container my-2">
      <h2>Text Summary </h2>
      <p>{text.split(" ").length} words and {text.length} Characters</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter data in Textbox to preview here"}</p>
     </div>
    </div>
  )
}
