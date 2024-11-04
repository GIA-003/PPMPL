const { expect } = require('chai');
const { tambah, kali, kurang, bagi } = require('./math');

describe('Pengujian Fungsi Matematika - Kasus Negatif', function() {
    // Kasus negatif untuk pengurangan
    it('seharusnya mengembalikan hasil yang benar saat mengurangkan angka negatif', function() {
        expect(kurang(-2, -2)).to.equal(0);
        expect(kurang(-5, -3)).to.equal(-2);
    });

    // Kasus negatif untuk pembagian
    it('seharusnya mengembalikan error saat membagi dengan 0', function() {
        expect(() => bagi(6, 0)).to.throw('Tidak bisa membagi dengan nol');
    });

    // Kasus negatif untuk penjumlahan
    it('seharusnya mengembalikan error saat menerima input bukan angka', function() {
        expect(() => tambah('2', 2)).to.throw();
        expect(() => tambah(null, 2)).to.throw();
        expect(() => tambah(undefined, 2)).to.throw();
    });

    // Kasus negatif untuk perkalian
    it('seharusnya mengembalikan error saat menerima input bukan angka', function() {
        expect(() => kali('2', 3)).to.throw();
        expect(() => kali(null, 3)).to.throw();
        expect(() => kali(undefined, 3)).to.throw();
    });
});
