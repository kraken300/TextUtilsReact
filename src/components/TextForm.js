import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const handleUpClick = () =>{
        //console.log("Uppercase was clicked" + text);
        //setText("You have clicked on handleUpClick");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Uppercase is executed.","success");

    }

    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Lowercase is executed.","success");

    }

    const handleClearClick = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Clear text is executed.","success");

    }

    const handleCopy =()=>{
        let cpyText = document.getElementById("myBox");
        cpyText.select();
        navigator.clipboard.writeText(cpyText.value);
        props.showAlert("Copied to clipboard","success");

    }

    const handleExtraSpaces =()=>{
        // eslint-disable-next-line
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are executed.","success");

    }
    



    const handleInverseClick = () =>{
        let splittedText = text.split(" ");
        let revresedText = splittedText.reverse();
        let joinedText = revresedText.join(" ");
        setText(joinedText);
        props.showAlert("Inverse of text is executed.","success");

    }

    const handleOnChange = (event) =>{
        //console.log("Onchange");
        setText(event.target.value);
    }

    // const [text,setText] = useState("Enter text here");
    const [text,setText] = useState("");
    // text = "New text"; //Wrong way to set text
    //setText("New text");//Right way to set text
    return (
    <>
    <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value ={text}  onChange={handleOnChange} style = {{backgroundColor : props.mode==="dark"?"grey":"white", color:props.mode==="dark"?"white":"dark"}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LoweCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleInverseClick}>Inverse text</button>
    </div>

    <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above space to preview it here"}</p>
    </div>

    </>
  )
}

TextForm.prototype = {
    heading: PropTypes.string.isRequired
}