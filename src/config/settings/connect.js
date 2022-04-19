function connect(mongoose, uri) {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    mongoose.connection.on('open', () => {
        console.log("new database accesed on "+uri)
    })
}

module.exports = connect