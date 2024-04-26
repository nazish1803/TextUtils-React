import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was Clicked" + text);
        if(text.length>0){
            const newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to uppercase","success")
        }
        else{
            props.showAlert("Enter text first","warning")
        }
    }
    const handleLowClick = () =>{
        if(text.length>0){
            const newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to lowercase","success")
        }
        else{
            props.showAlert("Enter text first","warning")
        }
    }
    const handleCapClick =() =>{
        if(text.length>0){
            const newText = text.toLowerCase().split(" ");
            for (let i = 0; i < newText.length; i++) {
                newText[i] = newText[i][0].toUpperCase() + newText[i].substring(1);
            }
            setText(newText.join(" "));
            props.showAlert("Converted to Capitalize","success")
        }
        else{
            props.showAlert("Enter text first","warning")
        }
    }
    const handleUlterClick = () =>{
        if(text.length>0){
            var newText = text.toLowerCase().split("");
            for (var i = 0; i < newText.length; i += 2) {
                newText[i] = newText[i].toUpperCase();
            }
            setText(newText.join(""));
            props.showAlert("Converted to UlterCase","success")
        }
        else{
            props.showAlert("Enter text first","warning")
        }
    }
    const handleExtraSpace = ()=>{
        if(text.length>0){
            var newText = text.replace(/\s+/g,' ').trim();
            setText(newText)
            props.showAlert("Removed Extra Space","success")
        }
        else{
            props.showAlert("Enter text first","warning")
        }
    }
    const handleCopyClick =() =>{
        if(text.length>0){
            navigator.clipboard.writeText(text)
            props.showAlert("Text Copied","success")
        }
        else{
            props.showAlert("Enter text first","warning")
        }
    }
    const handleDownloadClick=()=>{
        if(text.length>0){
            fetch('text.txt').then((response) => {
                response.blob().then(() => {
                
                    // Creating new object of PDF file
                    let file = new Blob([document.getElementById('myBox').value], {type: 'text/plain'});
                    const fileURL = URL.createObjectURL(file);
                        
                    // Setting various property values
                    let alink = document.createElement("a");
                    alink.href = fileURL;
                    alink.download = 'text.txt';
                    alink.click();
                });
            });
            props.showAlert("Text downloaded in txt format","success")
        }
        else{
            alert("enter something in textbox first to download!!")
        }
    }
    const handleClearClick =() =>{
        const newText = "";
        setText(newText);
        props.showAlert("Textfield Cleared","success")
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
        props.showAlert("Text ultered","success")
    }
    const [text,setText] = useState('enter text here');
   
    return (
        <>
        <div className='container my-3'>
        <h1 style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" style={{
                    backgroundColor: props.mode==='light'?'white':'rgb(0 7 20)',
                    color: props.mode==='light'?'black':'white'
                    }}></textarea>
            </div>
                <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
                <button className='btn btn-primary' onClick={handleCapClick}>Capitalizecase</button>
                <button className='btn btn-primary mx-2' onClick={handleUlterClick}>aLtErNaTiNg cAsE</button>
                <button className='btn btn-primary' onClick={handleExtraSpace}>Remove Extra Space</button>
                <button className='btn btn-primary mx-2' onClick={handleCopyClick}>Copy Text</button>
                <button className='btn btn-primary' onClick={handleDownloadClick}>Download Text</button>
                <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className='container my-3' style={{color: props.mode==='light'?'black':'white'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read </p>
            <p>{ text.split(/[.?!]/g).length } Number of sentences </p>
            {/* <p>Syllabal Count : {text.length>0?text.match(/[aeiouy]{1,2}/gi).length:0} </p> */}
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in textbox above to preview it here"}</p>
        </div>
        </>
    )
}
