//здесь происходит запрос на сервер при первоначальном рендеринге 
//и при нажатии на кнопку обновления записей

import React, { useState, useEffect } from 'react';
import Note from './Note';
import connector from '../API/Connector';


export default function Notes() {
  const [ notes, setNotes ] = useState([]);
  useEffect(() => {
      setNotes(connector('GET'));
      console.log(notes);
    }, []);

  
  
  if(notes.length > 0) {
    return(

      <div className="notes">
    	{notes.map((note) => {
    		<Note {...note} remove={(id) => {
    			setNotes(() => {
            connector('DELETE', id);
          });
    		}} />
    	})}
    </div>
    );
  } else {
    return(
      <div className="update">
        <span>Notes</span>
        <button type="submit" onClick={(evt) => {
          evt.preventDefault();
          setNotes(connector('GET'))
        }}>update</button>
      </div>
      )
  }
}
