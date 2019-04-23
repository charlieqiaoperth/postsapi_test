const posts=[];
let currentId = 1;

function addPost(post) {
    const newPost = {...post,id: currentId++};
    posts.push(newPost);
    return newPost;
}


function getAllPost() {
    return JSON.parse(JSON.stringify(posts));
}

function getPostById(id) {
    return posts.find(i => i.id===id);
}

function updatePostById(id,newPost) {
    const postIndex=getPostIndexById(id);
    // const post=posts[postIndex];
    // post.author=newPost.author;
    // post.name=newPost.name;
    const updatePost={...newPost,id};
    posts[postIndex]=updatePost;
    return updatePost;
}

function deletePostById(id) {
    const deletePostIndex=getPostIndexById(id);
    const deletePost=posts.splice(deletePostIndex,1);
    return deletePost;
}

function getPostIndexById(id) {
    return posts.findIndex(i =>i.id === id);
}

function doesIdExist(id) {
    return getPostIndexById(id) !== -1;
}


module.exports = {
    addPost,
    getAllPost,
    getPostById,
    updatePostById,
    deletePostById,
    doesIdExist
}