function route(handle, pathname, response, request) { //創建一個route模組，並且有一個pathname參數
  console.log("About to route a request for " + pathname); //單純印出參數
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, request);
  }else {
    console.log("No request handle found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not found");
    response.end();
  }
}

exports.route = route; //發佈參數