module.exports = (req, res) => {
    var username = ""
    var password = ""
    var profile = ""
    const data = req.flash('data')[0];
    if (typeof data != "undefined") {
        username = data.username
        password = data.password
        profile = data.profile
    }

    res.render('register', {
        //errors: req.session.validationErrors
        errors: req.flash('validationErrors'),
        username: username,
        password: password,
        profile: profile

    })
}