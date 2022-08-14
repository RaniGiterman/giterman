const fs = require("fs");

function main(filePath, fields) {
  let HTML;
  try {
    HTML = fs.readFileSync(filePath, { encoding: "utf8", flag: "r" });
  } catch (error) {
    console.log(error);
    return false;
  }

  for (let [key, value] of Object.entries(fields)) {
    while (HTML != HTML.replace(`{{${key}}}`, value)) {
      HTML = HTML.replace(`{{${key}}}`, value);
    }
  }

  return HTML;
}

module.exports = main;
