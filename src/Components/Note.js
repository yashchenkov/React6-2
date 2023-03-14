import React from 'react';
import { useState } from 'react';

export default function Note(props) {
  const {id, content, remove} = props;

  return(
    <div className="note">
      <div className="area">
        {content}
      </div>
      <button type="submit" onclick={(evt) => {
        evt.preventDefault();
        remove();
      }}></button>
    </div>
    )
}