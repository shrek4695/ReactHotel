import React from 'react';
import ReactDOM from 'react-dom';
import Parent from './parent.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Parent  />, document.getElementById('root'));
registerServiceWorker();
