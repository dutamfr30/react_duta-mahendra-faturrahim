import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Notound() {
  let history = useHistory();
  return (
    <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>Oops!</h1>
            <h2>404 - The Page can't be found</h2>
          </div>
          <button onClick={() => history.goBack()}>Go To Home</button>
        </div>
      </div>
  );
}