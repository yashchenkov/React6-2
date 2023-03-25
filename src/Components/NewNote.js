import React, { useState } from 'react';
import connector from '../API/Connector';
import {nanoid} from 'nanoid';

export default function NewNote() {
  const [ data, setData ] = useState({});
  const [ text, setText ] = useState('');
  const handleChange = (evt) => {
  	console.log(evt);
  	setText(evt.target.value);
  }
  const handleSubmit = async (evt) => {
  	evt.preventDefault();
  	setData({
  		id: nanoid(),
  		content: text
  	});
  	console.log(data);
  	await connector('POST', data);
    await connector('GET', data);
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