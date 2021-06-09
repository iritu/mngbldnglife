import {createContext} from 'react';

let pathPreTemp="";

if ( (window.location.href).includes('localhost')  ){
    pathPreTemp = process.env.PUBLIC_URL;
    pathPreTemp += "/";  
}

const pathPreContext = createContext( pathPreTemp ) ; 

export default pathPreContext;