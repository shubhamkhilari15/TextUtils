import React, { useState } from "react";

export default function TextForm(props) {

  const OnUpperCase = () => {
    let newText=text.toUpperCase()
    setText(newText);
    console.log('hello clicked me');
    
  };
  const setTextValue = (event) => {
    setText(event.target.value);
  };
  const OnLowerCase = () => {
    let newText=text.toLowerCase()
    setText(newText);
    console.log('hello clicked me');
  };
  const ClearText=()=>{
    setText("");
  }
  const CopyText=()=>{
    console.log('value from text state='+text);
let cptext=document.getElementById("myBox");
console.log('cptext='+cptext);
let cctext=cptext;
console.log('cctext'+cctext);
   // cptext.select();
text.select();
    navigator.clipboard.writeText(cptext.value);

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
      <button className="btn btn-primary" onClick={OnUpperCase}>
        UPPER CASE
      </button>
      <button className="btn btn-primary m-3" onClick={OnLowerCase}>lower CASE</button>
      <button className="btn btn-primary m-3" onClick={ClearText}>Clear Text</button>
      <button className="btn btn-primary m-3" onClick={CopyText}>Copy Text</button>
      <div className="container">
      <h4>Text Summary</h4>
      <p>***no. of words in string ={text.split(' ').length}.*** no. of character ={text.length}***</p>
      <h4>Preview</h4>
      <p>{text.length>0?text:"enter your text to preview"}</p>

    </div>
    </div>
   
    </>
  );
}
