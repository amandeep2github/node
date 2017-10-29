# node

package.json
npm init

mongoose.connect("mongodb://localhost/mydb");

var myscehm = new mongoose.Schema({});


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

bootstrap class form-group
