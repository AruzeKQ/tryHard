var postApi = 'https://jsonplaceholder.typicode.com/posts';

fetch(postApi)
    .then(function(response){
        return response.json();
        // JSON.parse: JSON -> JScript Type
    })
    .then(function(posts){
        var htmls = posts.map(function(post){
            return `<li>
            <h2>${post.title}</h2>
            <p>${post.body}</p> 
            </li>`
        })
        var html = htmls.join('')
        document.getElementById('post-blocks').innerHTML = html;
        // console.log(posts)
    })
    .catch(function(err){
        console.log(err)
    })