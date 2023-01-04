const BlogPost = require('../models/BlogPost.js')
const path = require('path')
module.exports = (req, res) => {
    console.log('antes de guardar')
    let image = req.files.image;

    image.mv(path.resolve(__dirname, '..', 'public/img', image.name), async (error) => {
        await BlogPost.create({
            ...req.body,
            image: '/img/' + image.name,
            userid: req.session.userId

        })
        console.log('Store Post')
        res.redirect('/')
    })
}
