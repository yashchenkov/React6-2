import React from 'react';
import { useState } from 'react';

export default function Note(props) {
  const {content, id, remove} = props;
  console.log(props);

  return(
    <div className="note">
      <div className="area">
        content
      </div>
      <button type="submit" onClick={(evt) => {
        evt.preventDefault();
        remove(id);
      }}>del</button>
    </div>
    )
}