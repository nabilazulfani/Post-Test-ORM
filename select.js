const { profile_books } = require('./models')

profile_books.findOne({
    where: {
        penulis: 'Jerome Polin'
    }
})
.then(Profile_Books =>{
    console.log(Profile_Books)
})
.catch(err =>{
    console.log(err)
})