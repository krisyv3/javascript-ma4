function connectApi() {

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      return response.json()
    })
    .then(data => {
        for ( i = 0; i < data.length; i++) {
            
            var userId = data[i].userId;
            var id = data[i].id;
            var title = data[i].title;
            var completed = data[i].completed;

            var createNew = document.createElement("ul");
            var node = document.createTextNode(`UserId: ${userId} ID: ${id} Title: ${title} Completed: ${completed}`);
            var element = document.getElementById("list");
            
            createNew.appendChild(node);
            element.appendChild(createNew);
        }
    })
};

document.getElementById("myButton").addEventListener("click", function(e) {
    connectApi();
}, false);

