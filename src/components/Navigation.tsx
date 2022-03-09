import React from 'react';
import { NavLink } from 'react-router-dom';

import { Search } from './Search';

export const Navigation = () => {
  return (
    <nav className="topnav">
      <NavLink to="/tonny"><img src={"https://raw.githubusercontent.com/Chazki/chazki-api-bucket/main/src/resources/logo.png"} style={{width:"95px"}}></img></NavLink>
      <NavLink to="/maximo">Maximo API</NavLink>
      <NavLink to="/aventon">Aventon API</NavLink>
      <NavLink to="/chile">Chile Legacy API</NavLink>
      <NavLink to="/fifo">Chile Fifo API</NavLink>
      <NavLink to="/tonny">Tonny API</NavLink>
      <NavLink to="/peru">Perú Legacy API</NavLink>
      {/*<Search projectIds={['chazki-docs']} />*/}
    </nav>
  );
};
