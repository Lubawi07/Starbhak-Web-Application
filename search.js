function checkEnter(event) {
  if (event.keyCode === 13) {
    // Mendapatkan teks yang diinputkan
    var text = document.getElementById("search").value;

    // Menampilkan hasil pencarian
    alert("Hasil pencarian untuk " + text)

    }
}