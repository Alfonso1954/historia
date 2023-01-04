const BlogPost = require('../models/BlogPost.js')
module.exports = async (req, res) => {
    const blogposts = await BlogPost.find({}).populate('userid');
    //hacemos log de la sesion
    //console.log(req.session)
    
    res.render('index', {
        blogposts
    });
}