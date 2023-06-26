import { createServer } from "http";
import { readFile } from "fs/promises";
import escapeHtml from "escape-html";

const sendHtml = (response, html) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end(html);
};

const server = createServer(async (request, response) => {
  const author = "Shan";
  const file = await readFile("./exercise1/posts/hello-world.txt", "utf-8");
  sendHtml(
    response,
    `
    <html>
        <head>
            <title>My first web server</title>
        </head>
        <body>
            <h1>Hello from my first web server!</h1>
            <p>Author: ${escapeHtml(author)}</p>
            <p>Post: ${escapeHtml(file)}</p>
        </body>
    </html>
  `
  );
});

server.listen(8000);
