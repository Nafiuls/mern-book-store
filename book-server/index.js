const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const port = process.env.PORT || 5000;

// middle ware

app.use(cors());
app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
  res.send("The Server is Running");
});

// ----------------------------------------

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const { configDotenv } = require("dotenv");
const uri = `mongodb+srv://snafiul700:${process.env.DB_PASS}@cluster0.oeqsh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const booksCollection = client.db("BookInventory").collection("books");

    // insert a book data into the database
    app.post("/upload-book", async (req, res) => {
      const book = req.body;
      const result = await booksCollection.insertOne(book);
      res.send(result);
    });

    // get all books
    // app.get("/books", async (req, res) => {
    //   const result = await booksCollection.find().toArray();
    //   res.send(result);
    // });

    // filter books by category
    app.get("/books", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category };
      }
      const result = await booksCollection.find(query).toArray();
      res.send(result);
    });

    // update a book with PATCH or PUT
    app.patch("/update-book/:id", async (req, res) => {
      const id = req.params.id;
      const updateBook = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          ...updateBook,
        },
      };
      const result = await booksCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    // delete a book
    app.delete("/delete-book/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await booksCollection.deleteOne(query);
      res.send(result);
    });

    // find a book
    app.get("/find-book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await booksCollection.findOne(filter);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// ----------------------------------------

app.listen(port, () => {
  console.log("server is running on PORT : ", port);
});

// 30Hu0O1OpoPfcJQ3
