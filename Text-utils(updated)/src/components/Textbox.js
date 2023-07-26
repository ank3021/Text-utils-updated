import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Textbox(props) {
    const[text, setText] = useState("Enter the text here");


    const handleclick = ()=> {
        console.log("The first button was clicked.")
        let bigText = text.toUpperCase();
        setText(bigText)
    }

    const handleclick2 = ()=>{
        console.log("The second button was clicked.")
        let lowerText = text.toLowerCase();
        setText(lowerText)
    }

    const handleclick3 = ()=>{
      console.log("The text has been cleared.")
      setText("")
    }

    const handleclick4 = ()=>{
      console.log("The text has been trimmed.")
      let a = text.trim();
      setText(a);
    }

    const handleclick5 = ()=>{
      console.log("This text has been subscripted.")
      let b = text.sub();
      setText(b);

    }

    const handleclick6 = ()=>{
      console.log("This text has been superscripted.")
      let c = text.sup();
      setText(c); 
    }

    const handlechange = (event)=>{
        console.log("It has been changed.")
        setText(event.target.value)
    }

//setText("The text should be here");
  return (
    <>
    <h1 className = "heading">{props.heading}</h1>
    <div>
<div className = "mb-3">
  <textarea className = "form-control" value  = {text} onChange = {handlechange} id="exampleFormControlTextarea1" rows="10"></textarea>
</div>
    </div>
    <button className = "primary" onClick={handleclick}>{props.button1}</button>
    <button className = "Secondary" onClick = {handleclick2}>{props.button2}</button>
    <button className = "Tertiary" onClick={handleclick3}>{props.button3}</button>
    <button className = "four" onClick={handleclick4}>{props.button4}</button>
    <button className = "five" onClick={handleclick5}>{props.button5}</button>
    <button className = "six" onClick={handleclick6}>{props.button6}</button>
    <h3>Text Summary - </h3>
    <p><b><i>Number of words:</i></b> {(text.split(" ").length) - 1}</p>
    <p><b><i>Number of characters:</i></b> {text.length}</p>
    <p><b><i>Time required for reading the text:</i></b> {0.01*((text.split(" ").length) - 1)} minutes which is {0.6*((text.split(" ").length) - 1)} seconds.</p>
    <h4>Text Preview - </h4>
    <p>{text}</p>
    </>
  )
}

Textbox.propTypes = {
    button1:PropTypes.string.isRequired ,
    button2:PropTypes.string.isRequired ,
    button3:PropTypes.string.isRequired ,
    button4:PropTypes.string.isRequired

}
