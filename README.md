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

Cat.create({}, function(err){
});

