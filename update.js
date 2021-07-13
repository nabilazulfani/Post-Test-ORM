const { profile_books } = require('./models')

profile_books.update({
    judul:'Buku Jerome'
},{
    where:{
        id:1
    }
})
.then(Profile_Books =>{
    console.log(Profile_Books)
})
.catch(err =>{
    console.log(err)
})