import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import ClassDemo from './ClassDemo';

import Demo1 from './Demo1';
import ReadInput from './ReadInput';
import StateExample from './StateExample';

// Where to render?
const root = ReactDOM.createRoot(document.getElementById('root'));

// WHat has to be rendered?
root.render(
  <div>
    <StateExample/>
    {/* <ClassDemo1/> */}
  </div> 
);
