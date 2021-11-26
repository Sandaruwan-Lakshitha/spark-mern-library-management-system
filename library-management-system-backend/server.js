const express = require("express");
const mongoose = require("mongoose");

const Book = require("./models/book");
const Member = require("./models/member");

const server = express();

const dataBaseURL =
  "mongodb+srv://testUser:testUser123@cluster0.xaraf.mongodb.net/lms?retryWrites=true&w=majority";

const PORT = process.env.port || 3000;

mongoose
  .connect(dataBaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("Connected to DB");
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

/*================================Book Controllers============================================*/

server.get("/book", async (req, res) => {
  const books = await Book.find();
  res.send(books);
});

server.get("/book/:id", async (req, res) => {
  const id = req.params.id;
  const book = await Book.findById(id);
  res.send(book);
});

server.post("/book", async (req, res) => {
  const { title, author } = req.body;
  const book = new Book({ title, author });
  const response = await book.save();
  res.send(response);
});

server.put("/book/:id", async (req, res) => {
  const id = req.params.id;
  const { title, author } = req.body;
  const book = await Book.findByIdAndUpdate(id, {
    title,
    author,
  });
  res.send(book);
});

server.put("/book/:id/burrow", async (req, res) => {
  const id = req.params.id;
  const { burrowedMemberId, burrowedDate } = req.body;
  const book = await Book.findByIdAndUpdate(id, {
    isAvailable: false,
    burrowedMemberId,
    burrowedDate,
  });
  res.send(book);
});

server.put("/book/:id/return", async (req, res) => {
  const id = req.params.id;
  const book = await Book.findByIdAndUpdate(id, {
    isAvailable: true,
    burrowedMemberId: "",
    burrowedDate: "",
  });
  res.send(book);
});

server.delete("/book/:id", async (req, res) => {
  const id = req.params.id;
  const book = await Book.findByIdAndDelete(id);
  res.send(book);
});
/*================================End of book controllers============================================*/


/*================================Member Controllers============================================*/

server.post("/member", async (req, res) => {
  const {
    nic,
    firstName,
    middleName,
    lastName,
    contactNumber,
    address,
    userType,
  } = req.body;
  const member = new Member({
    nic,
    firstName,
    middleName,
    lastName,
    contactNumber,
    address,
    userType,
  });

  const response = await member.save();
  res.send(response);
});

server.put("/member/:id", async (req, res) => {
  const id = req.params.id;
  const {
    nic,
    firstName,
    middleName,
    lastName,
    contactNumber,
    address,
    userType,
  } = req.body;

  const member = await Member.findByIdAndUpdate(id, {
    nic,
    firstName,
    middleName,
    lastName,
    contactNumber,
    address,
    userType,
  });
  res.send(member);
});

server.get("/member", async (req, res) => {
  const members = await Member.find();
  res.send(members);
});

server.get("/member/:id", async (req, res) => {
  const id = req.params.id;
  const member = await Member.findById(id);
  res.send(member);
});

server.delete("/member/:id", async (req, res) => {
  const id = req.params.id;
  const member = await Member.findByIdAndDelete(id);
  res.send(member);
});
/*================================End of member controllers============================================*/
server.use((req, res) => {
  res.type("txt");
  res.send("404 not found");
});
