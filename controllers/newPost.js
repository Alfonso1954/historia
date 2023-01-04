module.exports = (req, res) => {
    if (req.session.userId) {
        var title = ""
        var body = ""
        var username =""
        var image = ""
        const data = req.flash('data')[0];
        if (typeof data != "undefined") {
            title = data.title
            body = data.body
            username = data.username
            image = data.image  // revisar
        }
        return res.render('create', {
            createPost: true,
            errors: req.flash('validationErrors'),
            title: title,
            body: body,
            username: username,
            image: image
        } );
    }
    res.redirect('/auth/login')
}