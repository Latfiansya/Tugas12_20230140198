document.getElementById('ticketBookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Mengambil nilai dari form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const tiket = document.querySelector('input[name="tiket"]:checked').value;
    const film = document.getElementById('film').value;
    const tanggal = document.getElementById('tanggal').value;
    const specialRequest = document.getElementById('specialRequest').value;
    
    // Format tanggal untuk ditampilkan
    const formattedDate = formatDate(tanggal);
    
    // Menampilkan alert dengan data form
    alert(
        `Nama : ${name}\n` +
        `Email : ${email}\n` +
        `Jenis Tiket : ${tiket}\n` +
        `Judul Film : ${film}\n` +
        `Tanggal : ${formattedDate}\n` +
        `Permintaan Khusus : ${specialRequest}`
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