const http = new easyHttp();

http.get('https://jsonplaceholder.typicode.com/posts', function (error, response) {
    if(error) {
        console.log(error);
    } else {
        console.log(response);
    }
});

const data = {
    title: 'Custom post',
    body: 'This is a custom post'
};

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