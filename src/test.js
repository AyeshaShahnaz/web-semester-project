const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/schedule")
  .then(() => console.log("connected"))
  .catch((err) => console.error("not connected to MongoDB...", err));

const StEntries = new mongoose.Schema({
  sName: String,
  cell: Number,
});

const Undergraduate = mongoose.model(Student, StEntries);



async function createEntries() {
    const sp19 = new Undergraduate({
      sName: "Ali",
      cell: "123",
    });
  await sp19.save();
}

createEntries();

// // // mongoose.connect("mongodb://localhost:3000/project_web");
// // // const MyModel = mongoose.model("Test", new Schema({ name: String }));
// // // // Works
// // // MyModel.findOne(function (error, result) {
// // //   /* ... */
// // // });
// // const a = new Band({
// //   name: "Ali' Ahmed",
// //   members: ["A1", "a2"],
// // });

// // const promise = a.save();
// // assert.ok(promise instanceof Promise);

// // promise.then(function (doc) {
// //   assert.equal(doc.name, "Ali' Ahmed");
// // });

// // const query = Band.findOne({ name: "Ali' Ahmed" });
// // assert.ok(!(query instanceof Promise));

// // query.then(function (doc) {

// // });

// // const promise = Band.findOne({ name: "Ali' Ahmed" }).exec();
// // assert.ok(promise instanceof Promise);

// // promise.then(function (doc) {

// // });
// // Band.findOne({ name: "Ali' Ahmed" }).then(function (doc) {

// // });

// // // const conn = await mongoose.createConnection('mongodb://localhost:27017/project_web').
// // //   asPromise();
// // // conn.readyState;
// // // let p = new promise ((resolve, reject) => {

// // //     let a=1+1
// // //     if(a==2){
// // //         resolve('Success')
// // //     }
// // //     else{
// // //         reject('Failed')
// // //     }
// // // })

// // // p.then((message) => {
// // //     console.log('This is in the then' +message)
// // // })
// // // p.catch((message)=> {

// // //     console.log('This is in the catch' +message)
// // // })
