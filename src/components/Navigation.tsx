import React from 'react';
import { NavLink } from 'react-router-dom';

import { Search } from './Search';

export const Navigation = () => {
  return (
    <nav className="topnav">
      <NavLink to="/stoplight-docs">Chazki Docs</NavLink>
      <NavLink to="/maximo">Maximo API</NavLink>
      <NavLink to="/aventon">Aventon API</NavLink>
      {/*<Search projectIds={['chazki-docs']} />*/}
    </nav>
  );
};
