import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Content from './Content';

export default function App () {

    return (
        <>
        <Router>
          <Content />
          </Router>
      </>
    );

}
