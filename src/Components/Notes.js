//здесь происходит запрос на сервер при первоначальном рендеринге 
//и при нажатии на кнопку обновления записей

import React, { useState, useEffect } from 'react';
import Note from './Note';
import connector from '../API/Connector';


export default function Notes() {
  const [ notes, setNotes ] = useState([]);
  const [ elements, setElements] = useState([]);
  const fetchFunc = async () => {
      const response = await connector('GET');
      console.log(response)
      setNotes([...response]);
      console.log(notes)
      if(notes.length > 0) {
        setElements(notes.map((note) => {
          <li><Note key={note.id} {...note} remove={async (id) => {
            await connector('DELETE', id)
          }} /></li>
        }));
        console.log(elements);
      }
  }

  useEffect(() => {
    async function funcInit() {
      await fetchFunc();
    }
    funcInit();
    console.log(notes);
  }, []);
  
  if(notes.length > 0) {
    return(
      <React.Fragment >
      <div className="update">
        <span>Notes</span>
        <button type="submit" onClick={async (evt) => {
          evt.preventDefault();
          fetchFunc()
        }}>update</button>
      </div>
      <ul className="notes">
    	{elements}
    </ul>
    </React.Fragment>
    );
  } else {
    return(
      <div className="update">
        <span>Notes</span>
        <button type="submit" onClick={async (evt) => {
          evt.preventDefault();
          fetchFunc()
        }}>update</button>
        <div><span>записей нет</span></div>
      </div>
      )
  }
}
