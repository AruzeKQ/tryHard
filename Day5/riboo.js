var users = [
    {
        id: 1,
        name: 'Ng Quang Khai',
    },
    {
        id: 2,
        name: 'Ng Phuc Long',
    },
    {
        id: 3,
        name: 'Ng Gia Hieu',
    },
    {
        id: 4,
        name: 'Ng Van Nam',
    },
]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'GG MR Beast anh oi',
    },
    {
        id: 2,
        user_id: 2,
        content: 'Thankiu em',
    },
    {
        id: 3,
        user_id: 3,
        content: 'Xin Aimroutine',
    },
    {
        id: 4,
        user_id: 1,
        content: 'Day nhe em',
    },
]

// Fake API

var getComments = function(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comments)
        }, 1000);
    })
}

var getUsers = function(usersID){
    return new Promise(function(resolve){
        setTimeout(function(){
            var results = users.filter(function(user){
                return usersID.includes(user.id)
            });
            resolve(results);
        }, 1000);
    })
}

getComments()
    .then(function(comments){
        var usersID = comments.map(function(comment){
            return comment.user_id;
        }) 
        return getUsers(usersID)
                .then(function(users){
                    return {
                        users: users,
                        comments: comments,
                    }
                }) 
    })
    .then(function(data){
        var commentBlock = document.querySelector('ul')

        var html = '';

        data.comments.forEach(function(comment){
            var user = data.users.find(function(user){
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`
        });

        commentBlock.innerHTML = html;
    })

