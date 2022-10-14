import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import ClassDemo from './ClassDemo';

import Demo1 from './Demo1';
import ReadInput from './ReadInput';
import StateExample from './StateExample';
import PropsExample from './PropsExample'
import LifeCycleMethods from './LifeCycleMethods';
import LifecycleDemo from './LifecycleDemo';
import UseEffectDemo from './UseEffectDemo';
import CallbackEvent from './CallbackEvent';
import ConditionalRender from './ConditionalRender';
import App1 from './App1';

// Where to render?
const root = ReactDOM.createRoot(document.getElementById('root'));

// WHat has to be rendered?
root.render(
  <div>
    <App1/>
    {/* <ClassDemo1/> */}
  </div> 
);
