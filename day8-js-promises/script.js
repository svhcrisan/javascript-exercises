/*
var promise = new Promise(function(resolve, reject){
    resolve(5);
});

promise.then(
    function(val) {
        console.log(val);
        
        return val + 2; //break point
    }
).then(
    function(val) {
        console.log(val+5);
        
    }
).then(
    function(val) {
        console.log(val);
        
    }
) //eatch then uses last returned value

*/

async function getFirstUserData() {
    try{
        let response = await fetch('https://my-json-server.typicode.com/typicode/demo/comments'); //OK!
        
        let comments = await response.json();
        
        const comment = comments[0];

        const firstComment = await fetch(`https://my-json-server.typicode.com/typicode/demo/comments/${comment.id}`);
        console.log(firstComment.json());
    } catch(err) {
        console.log(err);
    }
//


}

getFirstUserData();