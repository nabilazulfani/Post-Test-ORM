const Profile_Books = require('./models/profile_books')
const { profile_books } = require('./models')

profile_books.create({
    judul: 'Buku Mantappu Jiwa',
    sinopsis: 'Mengisahkan perjuangan Jerome mendapatkan beasiswa kuliah di Jepang',
    penulis: 'Jerome Polin',
    genre: 'Novel'
})
.then(Profile_Books =>{
    console.log(Profile_Books)
})
.catch(err =>{
    console.log(err)
})