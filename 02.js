const first = ['Behind', 'every', 'great', 'man']
const second = ['is', 'a', 'woman']
const third = ['rolling', 'her', 'eyes']

// Fungsi untuk kombinasi array menjadi 1 kalimat
function Combine(){
    kalimat = '';
    for(let i = 0; i < arguments.length; i++){
        kalimat += arguments[i].join(' ') + " ";
    }

    return kalimat;
}

kalimat = Combine(first,second,third);
console.log(kalimat);