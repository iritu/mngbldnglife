import {createContext} from 'react';

let pathPreTemp="";

if ( (window.location.href).includes('localhost')  ){
    pathPreTemp = process.env.PUBLIC_URL;
}

const pathPreContext = createContext( pathPreTemp ) ; 

export default pathPreContext;