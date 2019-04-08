
console.log('before');

getUser(1, getRepos2);

console.log('after');

function getRepos2(user){ 
  getRepos(user.name, getComments2) 
}

function getComments2(repos){ 
  getComments(repos, displayComments) 
}

function displayComments(comment){ 
  console.log(`This is reading from ${comment}`); 
}

function getUser(id,callback){
  setTimeout(()=>{
    console.log(`This is reading from db`);
    if(callback) callback({id:id, name : 'xing'});
  },3000)
}

function getRepos(username, callback){ 
  setTimeout(()=>{
    console.log(`This is reading from repo ${username}`);
    if(callback) callback(['repo1','repo2','repo3']);
  },2000) 
}

function getComments(repos, callback){ 
  setTimeout(()=>{
    console.log(`This is reading from comment`);
    if(callback) callback('a good  comment');
  },1000) 
}
 

/* this is callback hell, hard to read, nest tree */
/*
console.log('before');

getUser(1, (user)=>{ 
  getRepos(user.name,(repos)=>{
    getComments(repos, (comment)=>{
      console.log(comment);
    })
  })
})

console.log('after');

function getUser(id,callback){
  setTimeout(()=>{
    console.log(`This is reading from db`);
    callback({id:id, name : 'xing'});
  },2000)
}

function getRepos(username, callback){ 
  setTimeout(()=>{
    console.log(`This is reading from repo`);
    callback(['repo1','repo2','repo3']);
  },2000) 
}

function getComments(repos, callback){ 
  setTimeout(()=>{
    console.log(`This is reading from comment`);
    callback('a good  comment');
  },2000) 
}
*/
