const API_URL='https://script.google.com/macros/s/AKfycbw7u1xSxfG8AWNYrw0zp22gGIzFfPdnVWHzOD_lc9tzqojzi4K8uJXEKgQfzrSnogXzsA/exec';

async function cekApi(){

 const status=document.getElementById('status');

 try{

   const response = await fetch(API_URL);

   const text = await response.text();

   console.log(text);

   status.innerHTML =
     '<pre>'+text+'</pre>';

 }catch(error){

   console.error(error);

   status.innerHTML =
     'ERROR : '+error;

 }

}

window.onload=cekApi;
