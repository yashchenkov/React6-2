//здесь происходит запрос на сервер при первоначальном рендеринге 
//и при нажатии на кнопку обновления записей

import React, { useState, useEffect } from 'react';
import Note from './Note';
import connector from '../API/Connector';


export default function Notes() {
  const [ notes, setNotes ] = useState([]);
  const fetchFunc = async (method, data = '') => {
      const response = await connector(method, data);
      setNotes(response);
  }
  useEffect(() => {
    const funcInit = async () => {
      await fetchFunc('GET');
    }
    funcInit();
    console.log(notes);
  }, []);

  
  
  if(notes.length > 0) {
    return(

      <div className="notes">
    	{notes.map((note) => {
    		<Note {...note} remove={async (id) => {
          await fetchFunc('DELETE', id)
    		}} />
    	})}
    </div>
    );
  } else {
    return(
      <div className="update">
        <span>Notes</span>
        <button type="submit" onClick={async (evt) => {
          evt.preventDefault();
          fetchFunc('GET')
        }}>update</button>
      </div>
      )
  }
}
