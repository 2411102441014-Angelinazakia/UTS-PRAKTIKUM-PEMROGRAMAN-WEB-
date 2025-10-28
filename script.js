// Array global untuk menyimpan semua data mahasiswa
let dataMahasiswa = [];

document.getElementById('mahasiswaForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value;
  const nim = document.getElementById('nim').value;
  const semester = document.getElementById('semester').value;
  const prodi = document.getElementById('prodi').value;
  const email = document.getElementById('email').value;

  if (!nama || !nim || !semester || !prodi || !email) {
    document.getElementById('infoText').textContent = 'Harap lengkapi semua data.';
    document.getElementById('infoText').style.color = 'red';
    return;
  }

  // Buat singkatan Program Studi
  const singkatanProdi = prodi
    .split(" ")
    .map(kata => kata[0].toUpperCase())
    .join("");

  // Buat objek data mahasiswa baru
  const dataBaru = {
    nama: nama,
    nim: nim,
    semester: semester,
    prodi: prodi,
    email: email,
    singkatan: singkatanProdi
  };

  // Simpan ke array global
  dataMahasiswa.push(dataBaru);

  // Tambahkan ke tabel
  const tabel = document.getElementById('tabelMahasiswa').querySelector('tbody');
  const barisBaru = tabel.insertRow();
  const no = tabel.rows.length;

  barisBaru.insertCell(0).textContent = no;
  barisBaru.insertCell(1).textContent = nama;
  const infoCell = barisBaru.insertCell(2);
  infoCell.innerHTML = `<strong>${singkatanProdi}</strong><br>Semester ${semester}`;

  // Tampilkan pesan sukses
  document.getElementById('infoText').textContent = `Data mahasiswa ${nama} berhasil dikirim!`;
  document.getElementById('infoText').style.color = 'green';

  // Tampilkan data ke console
  console.log("=== Data Mahasiswa Baru ===");
  console.log("Nama Lengkap :", nama);
  console.log("NIM          :", nim);
  console.log("Semester     :", semester);
  console.log("Program Studi:", prodi);
  console.log("Email        :", email);
  console.log("----------------------------------");
  console.log("Jumlah total data saat ini:", dataMahasiswa.length);
  console.log("Semua data mahasiswa:", dataMahasiswa);
  console.log("==================================\n");

  // Reset form
  this.reset();
});

