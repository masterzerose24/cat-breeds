import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: {
    common: {
      Accept: 'application/json, *.*' ,
      'Content-Type': 'application/json',
      'x-api-key': 'ba362478-d804-4e85-8247-d40b5ca2dada',
    }
  }
});