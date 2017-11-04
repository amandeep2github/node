# node

package.json
npm init

mongoose.connect("mongodb://localhost/mydb");

var myscehm = new mongoose.Schema({title: String, created: {type: Date, default: Date.now}});


var Cat = mongoose.model("Cat", myschem);

mongo cmd line
show dbs
show collections
db.cats.find()

Cat.create({}, function(err, newlyCreated){
});

rest
get /dogs
get /dogs/new
post /dogs
get /dogs/:id

Cat.findById(req.params.id, function(err, cat){}

bootstrap class form-group, form-control

semantic-ui

name="blog[name]" 
name ="blog[title]"
this way u can call mongoose api as 
Blog.create(req.body.blog, function(err, blog)

<%- evaluate script %>

method-override modules
app.use(methodOverride("_method")

grails like finders findByIdAndUpdated

findByIdAndRemove

in mongo embedded association u can give ids for associated objects

blogs{
posts: [id1, id2]
}

modules.export("name", name)

__dirname

tag inside a class css
.class tag {}

https://www.google.co.in/amp/s/check4spam.com/interne
https://c9.io/signin.html?redirect=https%3A%2F%2Fc9.io%2Fapi%2Fnc%2Fauth%3Fresponse_type%3Dtoken%26client_id%3Dide%26login_hint%3D&login_hint=&style=
mt-rumours/one-ring-hangup-new-trick-terrorists-access-sim-card-spam/amp/

passport.js
passport-local
passport-local-mongoose
express-session
app.use(

connect-flash
