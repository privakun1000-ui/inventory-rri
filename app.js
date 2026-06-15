const API_URL='https://script.google.com/macros/s/AKfycbxvtMJ5CW8dGSmu6Wp5JiRuZuP0hfRRE9BPmyd5dohR2PL_iBvc_-3Nhkfx6m8WBksTbQ/exec';

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
