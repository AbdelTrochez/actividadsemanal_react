export default function apiCall(url,method){
     return fetch(url,{
         method
     }).then(response=>response.json())
 }