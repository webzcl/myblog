import React from 'react';
import {render} from 'react-dom';

import Routers from './routers.js';
import 'highlight.js/styles/arta.css';
import './main.css';
import './post.css';

render(<Routers />,document.getElementById('root'));
