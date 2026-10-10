// Practical 3: MongoDB Operations
// Name: Vedant Vinod Rakshe | Roll No. 37 | Student ID 5176220
// Run in mongosh:   mongosh --file practical_03_mongodb.js     (or paste line by line)

// Step 1: Insert a single document
db.items.insertOne({ name: "laptop", price: 999 });

// Step 2: View the inserted document
db.items.find();

// Step 3: Insert multiple documents
db.products.insertMany([
  { name: "phone", price: 500, stock: 10 },
  { name: "tablet", price: 300, stock: 5 },
  { name: "watch", price: 150, stock: 0 }
]);

// Step 4: View products in formatted JSON
db.products.find().pretty();
