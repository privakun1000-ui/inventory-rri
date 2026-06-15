const API_URL =
"https://script.google.com/macros/s/AKfycbzxT3Eyl6GEQ3ryD5JlnI_bKSZ-yPmqdAIGXfwspQCHM5vHMahsHbValpMgW6n0uzpG/exec";

async function cekApi(){

  const status =
  document.getElementById("status");

  status.innerHTML =
  "Menghubungi server...";

  try{

    const response =
    await fetch(API_URL);

    const data =
    await response.json();

    status.innerHTML =

    `
    <div class="alert alert-success">

      <b>Server Aktif</b>

      <br>

      App :
      ${data.app}

      <br>

      Version :
      ${data.version}

    </div>
    `;

  }catch(err){

    status.innerHTML =

    `
    <div class="alert alert-danger">

      Koneksi gagal

      <br>

      ${err}

    </div>
    `;

  }

}

cekApi();
