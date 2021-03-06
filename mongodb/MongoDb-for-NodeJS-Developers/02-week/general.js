// Introduction to findOne

db.people.findOne({ "name" : "Jones", { "name" : "true", "_id" : false } })

// Querying using field selection
db.people.find({ "name" : "some", "other" : "bla" });
db.people.find({ "name" : "some", "other" : "bla" }, { "score" : true, "_id" : false });
// -> { score : 88 }

// Querying using $gt, $gte (inclusive), $lt, $lte (inclusive)
> var a = { score:50 }
> var b = {score:55}
> db.cool.insert(a,b)
WriteResult({ "nInserted" : 1 })
> db.cool.find()
{ "_id" : ObjectId("54516dcb1cdcaf405e5860d7"), "score" : 50 }
> db.cool.insert(b)
WriteResult({ "nInserted" : 1 })
> db.cool.find().pretty()
TypeError: undefined is not a function
> db.cool.find()
{ "_id" : ObjectId("54516dcb1cdcaf405e5860d7"), "score" : 50 }
{ "_id" : ObjectId("54516ddb1cdcaf405e5860da"), "score" : 55 }
> db.cool.find({score:{ $gt:50, $lt:55 }})
> db.cool.find({score:{ $gte:50, $lt:55 }})
{ "_id" : ObjectId("54516dcb1cdcaf405e5860d7"), "score" : 50 }
> db.cool.find({score:{ $gte:50, $lte:55 }})
{ "_id" : ObjectId("54516dcb1cdcaf405e5860d7"), "score" : 50 }
{ "_id" : ObjectId("54516ddb1cdcaf405e5860da"), "score" : 55 }

// Using $regex, $exists, $type
> db.users.insert({name:'q', email:'promise@email.com', age:31})
> db.users.find({ name : { $regex : "q" }, email : { $exists: true }, age : { $type: 1 } } );
{ "_id" : ObjectId("54517281e57758d285305a95"), "name" : "q", "email" : "promise@email.com", "age" : 31 }

// ps: In $type is used a number to represent a type of value
// http://docs.mongodb.org/manual/reference/operator/query/type/

// Using $or
db.scores.find({ $or: [{ score: { $lt : 50 }}, { score: { $gt : 90 }}]});

// Using $and
db.scores.find({ $and: [{ score: { $lt : 50 }}, { score: { $gt : 90 }}]});
// ps: $and is equal to normal operation db.scores.find({ score: { $lt:50, $gt:90 } })

// Queries with dot notation
db.catalog.find({ price : { $gt:10000 }, 'reviews.rating' : { $gte:5 } })

// Querying cursors
db.scores.find({type:'exam'}).sort({score:-1}).skip(50).limit(20)

// Couting Results
db.scores.count({type:'essay', score:{$gt:90}})

// WHOLESALE UPDATING OF A DOCUMENT
{ "_id" : "Texas", "population" : 2500000, "land_locked" : 1 }
db.foo.update({_id:"Texas"},{population:30000000})
// result -> { "_id" : "Texas", "population" : 30000000 }

// Using the $set and $inc command
{
  "_id" : "myrnarackham",
  "phone" : "301-512-7434",
  "country" : "US"
}
db.users.update({ '_id' : 'myrnarackham' }, { $set : { 'country' : 'RU' } })

// $inc example
{
  'name' : 'John',
  'age' : 31
}

db.users.update({ 'name' : 'John' }, { $inc : { 'age' : 13 } })

// Using the $unset command
{ 
    "_id" : "jimmy" , 
    "favorite_color" : "blue" , 
    "interests" : [ "debating" , "politics" ] 
}

db.users.update({ '_id' : 'jimmy' }, { $unset : { 'interests' : 1 } })

// Using $push, $pop, $pull, $pushAll, $pullAll, $addToSet
{ _id : "Mike", interests : [ "chess", "botany" ] }

> db.friends.update( { _id : "Mike" }, { $push : { interests : "skydiving" } } );
> db.friends.update( { _id : "Mike" }, { $pop : { interests : -1 } } );
> db.friends.update( { _id : "Mike" }, { $addToSet : { interests : "skydiving" } } );
> db.friends.update( { _id : "Mike" }, { $pushAll: { interests : [ "skydiving" , "skiing" ] } } );

/* result */ { _id : "Mike", interests : [ "botany", "skydiving", "skydiving", "skiing" ] }

// Upserts
db.foo.update( { username : 'bar' }, { '$set' : { 'interests': [ 'cat' , 'dog' ] } } , { upsert : true } );
/* results */ { "_id" : ObjectId("507b78232e8dfde94c149949"), "interests" : [ "cat", "dog" ], "username" : "bar" }

// Multi-update
{
  "_id" : ObjectId("50844162cb4cf4564b4694f8"),
  "student" : 0,
  "type" : "exam",
  "score" : 75
}
/* Give every document with a score less than 70 an extra 20 points. */
db.scores.update({ 'score' : { $lt : 70 } }, { $inc : { 'score':20 } }, { multi: true })

// Removing data
{
  "_id" : ObjectId("50844162cb4cf4564b4694f8"),
  "student" : 0,
  "type" : "exam",
  "score" : 75
}
/* Delete every document with a score of less than 60. */
db.scores.remove({ 'score' : { $lt : 60 } }, { multi : true })

// NODE.JS DRIVER: FIND, FINDONE, AND CURSORS
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) 
{
     if(err) throw err;

     var query = { 'grade' : 100};

     function callback(err, doc) {
          if(err) throw err;

          console.dir(doc);

          db.close();
     } 
     /* TODO */
});

/* answer */ db.collection( 'grades' ).findOne( query, callback );

// NODE.JS DRIVER: USING FIELD PROJECTION
// Which of the following queries will cause only the 'grade' field to be returned?
db.collection('grades')find({}, {'grade':1, '_id':0}, callback);

// NODE.JS DRIVER: USING $GT AND $LT
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
    if(err) throw err;

    /* TODO - Get all documents with a grade between 69 and 80 */

    db.collection('grades').find(query).each(function(err, doc){
        if(err) throw err;
        if(doc == null) {
            return db.close();
        }
        console.dir(doc);
    });
});

/* answer */ var query = { 'grade' : { $lt : 80, $gt : 69 } };

// NODE.JS DRIVER: USING DOT NOTATION
Use dot notation to construct a query that selects for a document with a 'name' of 'Steve' in the 'students' array.

{
    'course' : 'M101JS',
    'students' : [
        {
            'name' : 'Susan'
        },
        {
            'name' : 'Steve'
        }
    ]
}

/* answer */ { "students.name" : "Steve" }

// NODE.JS DRIVER: INSERTING, _ID
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
    if(err) throw err;

    var docs = [ { '_id' : 'George', 'age' : 6 },
                 { '_id' : 'george', 'age' : 7 } ];

    db.collection('students').insert(docs, function(err, inserted) {
        if(err) throw err;

        console.dir("Successfully inserted: " + JSON.stringify(inserted));

        return db.close();
    });
});

/* answer */ Both documents will be inserted successfully

// NODE.JS DRIVER: UPSERTS
db.collection('grades').save({'_id': 'email@example.com', 'name': 'Joe'}, callback);
// Assuming the necessary variables are defined, what is the result of calling this function?
/* answer */ Upsert to insert or replace the document

// NODE.JS DRIVER: FINDANDMODIFY
db.collection('homeworks').findAndModify({}, [[ 'grade' , 1 ]], { '$set' : { 'dropped' : true } }, { 'new' : true }, callback);

// NODE.JS DRIVER: REMOVE
db.collection('foo').remove(callback);
db.collection('foo').remove({ 'x' : { '$nin' : [] } }, callback);
db.collection('foo').remove({}, callback);