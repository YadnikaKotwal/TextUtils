import React, {useState} from 'react'

export default function Textform(props) {
    // set default text="Enter Text here"
    <h2>props.heading</h2>
        const [text, NewText ] = useState("") 
        
        const handleUPClick=()=>{
            console.log("uppercase was clicked" + text); //text var is updated
            let uprtext=text.toUpperCase();
            NewText(uprtext) //that will display on web app
            {props.showAlert("SUCCESSS"," Converted to uppercase!")}
            
        }
        const handleLOClick=()=>{
            let lotext=text.toLowerCase();
        NewText(lotext);
        {props.showAlert("SUCCESSS"," Converted to Lowercase!")}
        }
        const cleartext=()=>{
            let lotext='';
        NewText(lotext);
        {props.showAlert("SUCCESSS"," Text Cleared!")}
        }
        const removespaces=()=>{
            let noxspacetext=text.split(/[ ]+/);
        NewText(noxspacetext.join(" "))
        {props.showAlert("SUCCESSS"," Extra spaces removed!")} 
    }
        const handleonChange=(event)=>{
            console.log("On change")
            NewText(event.target.value); //text can now be changed in web app
        }
        return (
            <>
            <div style={{margin:'20px'}}>
       <div className="mb-3">
           <h2 id="h2Try">{props.heading}</h2>
      <textarea style={{backgroundColor:"#233a4c", color:'white'}} className="form-control" value={text} onChange={handleonChange} id="mybox" rows="5"></textarea>
    </div>
    <button id="btn1" style={{backgroundColor:'#000b20'}} disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUPClick}>Convert to UpperCase</button>
    <button id="btn2" style={{backgroundColor:'#000b20'}} disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLOClick}>Convert to LowerCase</button>
    <button id="btn3" style={{backgroundColor:'#000b20'}} disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={cleartext}>Clear Text</button>
    <button id="btn4" style={{backgroundColor:'#000b20'}} disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={removespaces}>Remove extra space</button>
            </div>
            <h3 id="h3sum">Text summary</h3>
            <ul>
            <li>Your text has {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</li>
            <li>{0.008*text.split(" ").length} mins read </li>
            </ul>
            <h3 id="h3pre">Preview:</h3>
            <ul>
            <li>{text.length>0?text:"Nothing to preview!"}</li>
            </ul>
            </>
        )
    }

