// Daftar produk
daftar_produk = [
    {
        kodeProduk : '01',
        namaProduk : 'Nestle Nan PH Pro 1 800 gram',
        harga : 300000,
    },
    {
        kodeProduk : '02',
        namaProduk : 'Nestle Nan PH Pro 1 400 gram',
        harga : 170000,
    },
];

// Insialisasi cart
cart = [];

// Fungsi untuk tambah item ke cart
function tambahItemKeCart(kode_produk){
    produk = cariItem(kode_produk, daftar_produk);

    if(Object.keys(produk).length === 0){
        console.log("Produk tidak ditemukan...");

    }else{
        cart.push({
            kode_produk: produk.kodeProduk,
            nama_produk: produk.namaProduk,
            harga: produk.harga
        });
    }
}

// Fungsi pencarian item
function cariItem(kode_produk, daftar_produk){
    for(let i = 0; i < daftar_produk.length; i++){
        if(daftar_produk[i].kodeProduk === kode_produk){
            return daftar_produk[i];
        }
    }

    return {};
}

// Fungsi hitung total belanja
function totalBelanja(){

    if(this.cart.length === 0){
        return 0;
    }

    total = 0;

    for(let i = 0; i < this.cart.length; i++){
        total += this.cart[i].harga;
    }

    return total;
}

// Fungsi menampilkan isi cart
function lihatCart(){

    total_belanja = totalBelanja();
    total_item = this.cart.length;

    return {
        totalBelanja: total_belanja,
        totalItem: total_item,
        items: this.cart
    }
}

tambahItemKeCart('01');
tambahItemKeCart('02');
console.log(lihatCart());