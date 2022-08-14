<p align="center">
  <img width="600" src="https://heise.cloudimg.io/width/960/q75.png-lossy-75.webp-lossy-75.foil1/_www-heise-de_/tipps-tricks/imgs/96/2/3/1/5/3/7/7/pixabay_html_cc0-0ae70badc783a872.jpeg" alt="Logo"/>
  <br>

</p>

<h1>
 ⚪ About the package ⚪
</h1>
<p style="color: yellow;">
  This package offers a very simple HTML template engine. <br>
  The goal of this package is to replace certain text of your HTML markup with text chosen from your Node.js backend application. <br>
  
  Happy coding!
</p>

<h1>
 ⬜ Get started ⬜
</h1>
<p style="color: yellow;">
  
```js
const renderHTML = require("giterman")

const finalHTML = renderHTML("./index.html", {firstName: "rani", lastName: "giterman"})

```
</p>

<h1>
  🤍 Installation 🤍
</h1>
<p style="color: yellow;">

```
$ npm i giterman
```

</p>

<h1>
 ❔ <b>Documentation</b> ❔
</h1>

<p>
You can call the main function with whatever name you'd like. As long as you install the package and require it in your code. <br>

The main function receives two paramaters. First one being `pathFile` and second one being `fields`.

- <h3>pathFile</h3> - The path to the HTML file.
- <h3>fields</h3> - An object documenting the text being replaced inside the HTML file. Each key stands for the field's name inside the HTML, 
    and it's value is the text which the HTML will be replaced with.
</p>

<h1>Example</h1>
<p>
Example HTML file (index.html):

```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Title</title>
    </head>
    <body>
      <div>{{firstName}} {{lastName}}</div>
    </body>
  </html>
```

Example node.js express route which will send the HTML:

```js
const express = require("express");
const PORT = 3000
const app = express();

const http = require("http").Server(app);

const renderHTML = require("giterman");

const finalHTML = renderHTML("./index.html", {
  firstName: "rani",
  lastName: "giterman",
});

app.get("/", (req, res) => {
  res.send(finalHTML);
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
```
The result is the following:
![res](https://github.com/RaniGiterman/giterman/blob/main/res.png)
</p>
