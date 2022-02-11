import React from 'react';
import { NavLink } from 'react-router-dom';

import { Search } from './Search';

export const Navigation = () => {
  return (
    <nav className="topnav">
      <NavLink to="/tonny">Chazki Docs</NavLink>
      <NavLink to="/maximo">Maximo API</NavLink>
      <NavLink to="/aventon">Aventon API</NavLink>
      <NavLink to="/chile">Chile Legacy API</NavLink>
      <NavLink to="/tonny">Tonny API</NavLink>
      {/*<Search projectIds={['chazki-docs']} />*/}
    </nav>
  );
};
