function onClick(){
    alert('tombol telah di klik')
}

function onClick2() {
    alert('tombol interaktif telah di klik')
}

function button1() {
    for (let button1 = 0; button1 < 3; button1++) {
        alert("Tombol telah memunculkan nomor " + (button1 + 1));
    }
}

function button2() {
    for (let button1 = 0; button1 < 4; button1++) {
        alert("Tombol telah memunculkan nomor " + (button1 + 1));
    }
}

function button3() {
    for (let button1 = 0; button1 < 5; button1++) {
        alert("Tombol telah memunculkan nomor " + (button1 + 1));
    }
}

function onClick4(){
    alert('tombol telah di klik')
}

function tombolPenjumlahan() {
    let angkaYangInginDiTambahkan1 = prompt('masukkan angka ke 1')
    let angkaYangInginDiTambahkan2 = prompt('masukkan angka ke 1')

    let hasil = Number(angkaYangInginDiTambahkan1) + Number(angkaYangInginDiTambahkan2)

    alert("hasil perjumlahan adalah " + hasil)
}