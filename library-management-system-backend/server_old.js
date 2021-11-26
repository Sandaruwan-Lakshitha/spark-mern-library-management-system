import { createServer } from "http";

const server = createServer((req, res) => {
   console.log("Hello from server");
   console.log(req.url);

   res.setHeader("content-type", "text/plain");
   //    res.write("<h1>Hello response</h1>");
   //    res.write("<p>This is my node app</p>");
   //    res.end();

   switch (req.url) {
      case "/home":
         res.write("Home page data");
         res.end();
         break;

      case "/about":
         res.write("About page data");
         res.end();
         break;
        default : 
            res.write("404 Not Found");
            res.end();
   }
});

server.listen(3000, "localhost", () => {
   console.log("Server running on port 3000");
});
