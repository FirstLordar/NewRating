const { parseBody } = require("../appModules/http-utils");
const fs  = require('fs').promises

async function voteRouteController(req, res) {
  if (req.metgod !== "POST") {
    res.statusCode = 404;
    res.end("Not Found");
  } else {
    try {
      const body = await parseBody(req);
      console.log(body)
      res.statusCode = 200;
      res.end("Succes!");
    } catch (error) {
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  }
}
module.exports = voteRouteController;
