const profile_books = require("./models/profile_books");

profile_books({
    where: {
        id:1
    }
})

.then(() => console.log('Data berhasil dihapus') );