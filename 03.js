class simpleEncrypt{
    
    // Insialisasi Key enkripsi
    constructor(key){
        this.key = key;
    }

    // fungsi untuk enkripsi
    encrypt(unencrypt){

        let str_encrypt = "";
        
        for(let i = 0; i < unencrypt.length; i++){
            str_encrypt += unencrypt[i] + this.key;
        }

        return str_encrypt;
    }

    // Fungsi untuk dekripsi
    decrypt(undecrypt){

        if(undecrypt.indexOf(this.key) === -1){
            return "kata yang anda masukkan tidak cocok untuk sistem enkripsi ini";
        }
        
        return undecrypt.split(this.key).join("");
    }
}

let simple = new simpleEncrypt("!2ar34");
word = "refactory";
console.log("kata : "+word);

encrypt = simple.encrypt(word);
console.log("Hasil enkripsi : "+encrypt);

decrypt = simple.decrypt(encrypt);
console.log('Hasil dekripsi : '+decrypt);