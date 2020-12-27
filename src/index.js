import React from 'react';
import ReactDom from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css'

ReactDom.render(
    <SpeechProvider appId="99f7fb1f-fb2f-4605-a1c2-7bebc62e7639" language="en-US">
        <Provider>
          <App /> 
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);