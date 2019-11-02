document.addEventListener("DOMContentLoaded", function(event) {
    
    var button = document.getElementById('post-button');
    var postList = document.getElementById('post-list');
    var author = 'Anon';

    button.addEventListener('click', function(event) {
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        var postContent = document.getElementById('post-content');

        var content = postContent.value;
        
        var basePost = document.getElementById('base-post');
        
        var newPost = basePost.cloneNode(true);
        newPost.removeAttribute('id');
        newPost.classList.remove('hide');

        newPost.getElementsByClassName('author')[0].innerHTML = author;
        newPost.getElementsByClassName('posted-at')[0].innerHTML = time;
        newPost.getElementsByClassName('content')[0].innerHTML = content;

        postList.appendChild(newPost);

        postContent.value = '';
    })
    
});