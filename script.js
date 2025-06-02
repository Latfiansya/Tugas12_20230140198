document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Mengambil nilai dari form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const peminatan = document.querySelector('input[name="peminatan"]:checked').value;
    const angkatan = document.getElementById('angkatan').value;
    const tanggal = document.getElementById('tanggal').value;
    const alamat = document.getElementById('alamat').value;
    
    // Format tanggal untuk ditampilkan
    const formattedDate = formatDate(tanggal);
    
    // Menampilkan alert dengan data form
    alert(
        `Nama : ${name}\n` +
        `Email : ${email}\n` +
        `Jenis Tiket : ${peminatan}\n` +
        `Judul Film : ${angkatan}\n` +
        `Tanggal : ${formattedDate}\n` +
        `Alamat : ${alamat}`
    );
});

// Fungsi untuk memformat tanggal
function formatDate(dateString) {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
}

// Set tanggal default ke hari ini
document.getElementById('tanggal').valueAsDate = new Date();