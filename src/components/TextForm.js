import React, { useState } from "react";

export default function TextForm(props) {

  const OnUpperCase = () => {
    let newText=text.toUpperCase()
    setText(newText);
    props.showAlert("Convert To UpperCase","success");
  };
  const setTextValue = (event) => {
    setText(event.target.value);
  };
  const OnLowerCase = () => {
    let newText=text.toLowerCase()
    setText(newText);
    props.showAlert("Convert To LowerCase","success");
  };
  const ClearText=()=>{
    setText("");
    props.showAlert("Text Cleared","success");
  }
  const CopyText=()=>{
// let cptext=document.getElementById("myBox");
    // cptext.select();
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied","success");
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'#023f40':'white'}}>
      <h1>enter your text to be analyazed </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={setTextValue}
          id="myBox"
          rows="3"
          style={{backgroundColor:props.mode==='dark'?'#023f40':'white',color:props.mode==='light'?'#023f40':'white'}}
        ></textarea>
      </div>
      <button disabled={text.length===0}className="btn btn-primary m-1" onClick={OnUpperCase}>
        UPPER CASE
      </button>
      <button disabled={text.length===0} className="btn btn-primary m-1" onClick={OnLowerCase}>lower CASE</button>
      <button disabled={text.length===0} className="btn btn-primary m-1" onClick={ClearText}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary m-1" onClick={CopyText}>Copy Text</button>
      <div className="container">
      <h4>Text Summary</h4>
      <p>***no. of words in string ={text.split(' ').filter((element)=>{ return element.length!==0}).length}.*** no. of character ={text.length}***</p>
      <h4>Preview</h4>
      <p>{text.length>0?text:"enter your text to preview"}</p>

    </div>
    </div>
   
    </>
  );
}
