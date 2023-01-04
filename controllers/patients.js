module.exports = (req, res) => {
    if (req.session.userId) {
        console.log('patients controller')
                
        return res.render('createPatient', {
            //createPost: true, //Se envia para que en la plantilla los scripts se incluyan y se muestre el editor
            errors: req.flash('validationErrors'),
            /*title: title,
            body: body,
            username: username,
            image: image*/
        } );
    }
    res.redirect('/auth/login')
}