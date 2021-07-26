const loadPosts = document.getElementById('btn');
const box = document.getElementById('post');
const uList = document.createElement('ul');

loadPosts.addEventListener('click', function() {
   const request = new XMLHttpRequest();
   request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
   request.send();


   request.onreadystatechange = function handleRequest(){
      if(request.readyState === 4 && request.status === 200) {
         const data = JSON.parse(request.responseText);
         data.forEach(function(singleData) {
           const list = document.createElement('li');
           list.textContent = singleData.title;
           uList.appendChild(list)
         })
         box.insertAdjacentElement('beforeend', uList);
      }
   }
});
