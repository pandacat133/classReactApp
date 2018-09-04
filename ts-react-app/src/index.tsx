import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Hello from './components/hello/Hello'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root') as HTMLElement
// );

ReactDOM.render(
    <Hello name="Samwise" enthusiasmLevel={3} />,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
