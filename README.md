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

