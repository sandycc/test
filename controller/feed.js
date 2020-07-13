exports.getPosts = (req, res, next) => {
    res.status(200).json({
    posts: [{title: 'First Post', content: 'This is the firstpost',desc:'test'}]
    });
   };
exports.createPosts = (req, res, next) =>{
    const title = req.body.title;
    const content = req.body.content;
    const desc = req.body.desc;
    const detailbuku = req.body.content;
    res.status(201).json({
        message: ' Post created successfully!',
        post: {id: new Date().toISOString(), title: title,content: content,desc:desc,detailbuku:diisi}
    });
};
exports.deletePosts = (req, res, next) => {
    res.status(200).json({
    posts: [{title: 'First Post', content: 'This is the firstpost',desc:'test',deleteposts:'delete-buku'}]
    });
   };