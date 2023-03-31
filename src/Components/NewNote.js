import React, { useState, useRef, useEffect } from 'react';
import connector from '../API/Connector';
import {nanoid} from 'nanoid';

export default function NewNote() {
  const [ data, setData ] = useState({content: ''});
  const [ text, setText ] = useState('');
  

  const handleChange = (evt) => {
  	setText(evt.target.value);
    console.log(text);
  }

  const handleSubmit = async (evt) => {
  	evt.preventDefault();
    
    console.log(text);
  	setData({
  		content: text
  	});
    setText('')
  	console.log(data);
  	await connector('POST', data);
    
  }
  
  return(
  	<form onSubmit={handleSubmit} className="input-block">
  		<label>
  		New Note
  		  <textarea type='text'  
  		    className='input' 
  		    value={text}
  		    onChange={handleChange}/>
  		</label>
  		<button type="submit" onClick={handleSubmit}/>
  	</form>
  	)
}