import {Connection } from './index';
import { resolve } from 'path';

export const all = async() => {
return  new Promise((resolve, reject) => {
    
    Connection.query('SELECT * from employees',(err, results) =>{
      if(err){
           return reject (err);
      }
        resolve(results);
    })
    
    })
}

export default {
    all
}