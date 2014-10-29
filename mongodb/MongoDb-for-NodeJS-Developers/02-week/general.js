// 05. Introduction to findOne

db.people.findOne({ "name" : "Jones", { "name" : "true", "_id" : false } })

// 06. Querying using field selection
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