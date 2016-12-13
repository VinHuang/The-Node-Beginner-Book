var http = require('http'); //引入http模組
var url = require('url'); //引入url模組

function start(route, handle) { //start() 為要被公開出去的模組函數，這是自建模組
  //新增一個route callback函數
  function onRequest(request, response) { //建立的一個createServer()需要用的callback函數
    var pathname = url.parse(request.url).pathname; //應用url.parse() 取得pathname
    console.log("Request for " + pathname + " received."); //印出pathname
    route(handle, pathname, response, request); //callback函數吃進pathname
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start; //發佈自建模組start()