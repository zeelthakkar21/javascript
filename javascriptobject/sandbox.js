//object literals 

/*let user ={
    name :'zeel',
    age:26,
    email:'zeelthakkar2111@gamil.com',
    location: 'vadodara',
    blog: ['why mac & cheese rules','10  things to make it']
};
console.log(user);
console.log(user.name);
user.age=35;
console.log(user.age);
console.log(user['email']);
user['name']='isha';
console.log(user['name']);
console.log(typeof user);*/


//object methods

const blogs =[
    { title: 'why mac and cheese rules', likes:30},
    { title: '10 things to make it', likes:60}
];
//console.log(blogs);
let user ={
    name :'zeel',
    age:26,
    email:'zeelthakkar2111@gamil.com',
    location: 'vadodara',
    blogs: [{ title: 'why mac and cheese rules', likes:30},
    { title: '10 things to make it', likes:60}],

    //blogs: ['why mac & cheese rules','10  things to make it'],
    login: function(){
        console.log('the user logged in:');
    },
    logout: function(){
        console.log('the user logout:');
    },
    logBlogs:function(){
        //this.blogs;
        console.log('this user has written teh following blogs:');
        this.blogs.forEach(blog=>{
            console.log(blog.title,blog.likes);
        });
          }
            
        }; 


 
user.logBlogs();
console.log(this);
user.login();
user.logout();
const name='mario';
name.toUpperCase();