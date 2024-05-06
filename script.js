const input = document.querySelector('.input_id');
const submit = document.querySelector('#submit'); 
const comments_btn = document.querySelector('#getComments');


submit.addEventListener('click', function(){
        const selectedId = input.value;
        if(selectedId >= 1 && selectedId <= 100 && !isNaN(selectedId)){
            const url = `https://jsonplaceholder.typicode.com/posts/${selectedId}`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    document.querySelector('.title').textContent = `Title: ${data.title}`;
                    document.querySelector('.body').textContent = `Body: ${data.body}`;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                })
            comments_btn.style.display = 'block';
            comments_btn.addEventListener('click', function() {
                commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${selectedId}`
                fetch(commentUrl)
                    .then(response => response.json())
                    .then(data => {
                        const formatedComments = JSON.stringify(data, null, 8);
                        document.querySelector('.comments').textContent = `Comments: ${formatedComments}`;
                    })
            })

        } else {
            document.querySelector('.validate').style.display = 'block';
        }
       
    
})
