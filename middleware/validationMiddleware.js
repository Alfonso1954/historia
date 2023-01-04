
module.exports = (req, res, next) => {
    console.log('··············')
    console.log(req.files)
    console.log('··············')
    if (req.files == null || req.body.title == null || req.body.body == null) {
        console.log('validationMidleware')
        //const data =req.flash('title', 'Flash is back!')
        return res.redirect('/post/new')
    }
    next()
}