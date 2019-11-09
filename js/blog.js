document.addEventListener("DOMContentLoaded", function(event) {
    
    var button = document.getElementById('post-button');
    var postList = document.getElementById('post-list');
    var postContent = document.getElementById('post-content');

    var author = 'Rafael Resende';

    var likeDislikePost = function(event) {
        event.preventDefault();
        
        if (this.classList.contains('pressed')) {
            this.classList.remove('pressed');
        } else {
            this.classList.add('pressed');
        }
    };
    
    var fakePost = document.getElementById('fake-post');
    fakePost.getElementsByClassName('like')[0].addEventListener('click', likeDislikePost);
    fakePost.getElementsByClassName('dislike')[0].addEventListener('click', likeDislikePost);

    var addPost = function() {
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
        newPost.getElementsByClassName('like')[0].addEventListener('click', likeDislikePost);
        newPost.getElementsByClassName('dislike')[0].addEventListener('click', likeDislikePost);
        
        postList.appendChild(newPost);

        postContent.value = '';
    }

    postContent.addEventListener('keypress', function(event) {

        if (event.keyCode == 13) {
            event.preventDefault();
            
            addPost();
        }
    });

    button.addEventListener('click', addPost);
    
});