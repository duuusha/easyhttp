const http = new EasyHTTP();

// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

const data = {
    name: 'Andrew',
    username: 'duuusha',
    email: 'a@a.com'
}

// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(error => console.log(error));




// const http = new easyHttp();
//
// http.get('https://jsonplaceholder.typicode.com/posts', function (error, response) {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(response);
//     }
// });
//
// const data = {
//     title: 'Custom post',
//     body: 'This is a custom post'
// };

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post) {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(post);
//     }
// });

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (error, post) {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(post);
//     }
// });

// http.delete('https://jsonplaceholder.typicode.com/posts/1', function (error, response) {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(response);
//     }
// });