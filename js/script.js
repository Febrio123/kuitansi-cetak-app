const btnSubmit = document.querySelector('.form-submit')

let carts = []

btnSubmit.addEventListener('click', function () {
    let id;

    if (carts.length === 0) {
        id = 1
    }
    else {
        id = carts[carts.length - 1].id + 1
    }
    let barangValue = document.getElementById('barang').value
    let hargaValue = document.getElementById('harga').value
    let namaValue = document.getElementById('nama').value
    if (barangValue === '') {
        alert('nama barang kosong harap diisi refresh halaman !!')
        id = ''
    }
    let tempObject = {
        id,
        nama: barangValue,
        harga: +hargaValue
    }

    document.getElementById('nama-cart').innerHTML = namaValue
    carts.push(tempObject)
    getCarts()
    //console.log(carts)
})

let btnPrint = document.getElementById('btn-print')
btnPrint.addEventListener('click', function () {
    document.querySelector('.form-box').style.display = 'none'
    btnPrint.style.display = 'none'
    window.print()
})

function getCarts() {
    let tBody = document.getElementById('tbody')
    tBody.innerHTML = ''
    carts.forEach(cart => {
        tBody.innerHTML += `<tr>
        <td>${cart.id}</td>
        <td>${cart.nama}</td>
        <td>Rp. ${cart.harga}</td>
        </tr>`
    })
}



