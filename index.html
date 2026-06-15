/*************************************************
 * INVENTORI RRI PURWOKERTO
 * DATABASE INITIALIZER
 *************************************************/

function setupDatabase() {

  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const configs = [
    {
      name: "USER",
      headers: [
        "ID","NAMA","USERNAME","PASSWORD",
        "ROLE","EMAIL","NO_HP","STATUS"
      ]
    },
    {
      name: "UNIT",
      headers: [
        "ID","KODE","NAMA_UNIT"
      ]
    },
    {
      name: "BARANG",
      headers: [
        "ID","KODE","BARCODE","NAMA_BARANG",
        "KATEGORI","UNIT","LOKASI",
        "STOK","KONDISI","STATUS",
        "QR_URL","FOTO","KETERANGAN"
      ]
    },
    {
      name: "RUANGAN",
      headers: [
        "ID","KODE","NAMA_RUANGAN",
        "LOKASI","KAPASITAS",
        "FASILITAS","STATUS",
        "QR_URL","FOTO","KETERANGAN"
      ]
    },
    {
      name: "PEMINJAMAN",
      headers: [
        "ID","TANGGAL","JAM_MULAI",
        "JAM_SELESAI","PEMINJAM",
        "JENIS","ITEM_ID",
        "ITEM_NAMA","STATUS",
        "APPROVAL","TGL_APPROVAL",
        "ADMIN","QR_CODE",
        "BAST","CATATAN"
      ]
    },
    {
      name: "PENGEMBALIAN",
      headers: [
        "ID","PEMINJAMAN_ID",
        "TANGGAL","KONDISI",
        "FOTO","STATUS",
        "PETUGAS","CATATAN",
        "LAT","LNG"
      ]
    },
    {
      name: "APPROVAL",
      headers: [
        "ID","PEMINJAMAN_ID",
        "ADMIN","STATUS",
        "TANGGAL","JAM",
        "CATATAN","NOTIFIKASI"
      ]
    },
    {
      name: "MUTASI",
      headers: [
        "ID","BARANG_ID",
        "DARI","KE",
        "TANGGAL","USER",
        "STATUS","KETERANGAN",
        "DOKUMEN"
      ]
    },
    {
      name: "AUDIT_LOG",
      headers: [
        "ID","WAKTU","USER",
        "ROLE","AKTIVITAS",
        "MODUL","DATA","IP"
      ]
    },
    {
      name: "FOTO",
      headers: [
        "ID","ITEM_ID",
        "SEBELUM","SESUDAH",
        "TANGGAL","USER",
        "DRIVE_URL"
      ]
    },
    {
      name: "BAST",
      headers: [
        "ID","NOMOR",
        "PEMINJAMAN_ID",
        "PDF_URL","TANGGAL",
        "PEMINJAM","PETUGAS",
        "STATUS"
      ]
    },
    {
      name: "SETTING",
      headers: [
        "KEY","VALUE"
      ]
    }
  ];

  configs.forEach(cfg => {

    let sh = ss.getSheetByName(cfg.name);

    if (!sh) {
      sh = ss.insertSheet(cfg.name);
    }

    sh.clear();

    sh.getRange(
      1,
      1,
      1,
      cfg.headers.length
    ).setValues([cfg.headers]);

    sh.getRange(
      1,
      1,
      1,
      cfg.headers.length
    ).setFontWeight("bold");

    sh.autoResizeColumns(
      1,
      cfg.headers.length
    );

  });

  createDefaultAdmin(ss);
  createDefaultSetting(ss);

  SpreadsheetApp.flush();

  Logger.log("DATABASE BERHASIL DIBUAT");

}


/*************************************************
 * ADMIN DEFAULT
 *************************************************/

function createDefaultAdmin(ss){

  const sh = ss.getSheetByName("USER");

  sh.getRange(2,1,1,8).setValues([[
    1,
    "Administrator",
    "admin",
    "admin123",
    "ADMIN",
    "admin@rri.go.id",
    "08123456789",
    "AKTIF"
  ]]);

}


/*************************************************
 * SETTING DEFAULT
 *************************************************/

function createDefaultSetting(ss){

  const sh = ss.getSheetByName("SETTING");

  sh.getRange(2,1,1,2).setValues([
    [
      "APP_NAME",
      "INVENTORI RRI PURWOKERTO"
    ]
  ]);

}


/*************************************************
 * TEST API
 *************************************************/

function doGet() {

  return ContentService
    .createTextOutput(
      JSON.stringify({
        success:true,
        app:"Inventori RRI",
        version:"1.0"
      })
    )
    .setMimeType(
      ContentService.MimeType.JSON
    );

}
