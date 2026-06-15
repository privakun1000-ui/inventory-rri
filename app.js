const API_URL='https://script.google.com/macros/s/AKfycbw7u1xSxfG8AWNYrw0zp22gGIzFfPdnVWHzOD_lc9tzqojzi4K8uJXEKgQfzrSnogXzsA/exec';

async function cekApi(){
 const status=document.getElementById('status');
 status.className='alert alert-warning';
 status.innerHTML='Menghubungi server...';

 try{
   const response=await fetch(API_URL);
   const data=await response.json();

   status.className='alert alert-success';
   status.innerHTML=`<strong>Server Aktif</strong><br>App : ${data.app||'-'}<br>Version : ${data.version||'-'}`;
 }catch(error){
   status.className='alert alert-danger';
   status.innerHTML='Gagal terhubung ke Apps Script<br>'+error;
 }
}

window.onload=cekApi;
