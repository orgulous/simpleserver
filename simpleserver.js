var http = require('http');
var url = require('url');
var fs = require('fs');


var server = http.createServer(function (request, response) {
    var path = url.parse(request.url).pathname;
    switch (path) {
        case "/buttontest.js":
            fs.readFile(__dirname + path, function (error, data) {
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'text/javascript'
                    });
                    response.write(data);
                    response.end();
                }
            });
            break;
        case "/page.css":
            fs.readFile(__dirname + path, function (error, data) {
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'text/css'
                    });
                    response.write(data);
                    response.end();
                }
            });
            break;

        case "/chen_index.html":
            fs.readFile(__dirname + '/chen_index.html', function (error, data) {
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    response.write(data);
                    response.end();
                }
            });
            break;

        case '/':
            fs.readFile(__dirname + '/HtmlPage1.html', function (error, data) {
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    response.write(data);
                    response.end();
                }
            });
            break;
        case '/googleab7766f1571a92f3.html':
            fs.readFile(__dirname + '/googleab7766f1571a92f3.html', function (error, data) {
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    response.write(data);
                    response.end();
                }
            });
            break;


        /* old code that just sends a simple message
        response.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        response.write("This is Test Message. Hello everyone");
        response.end();
        break;
        
        ------------- Deprecated
        case '/HtmlPage1.html':
            fs.readFile(__dirname + path, function (error, data) {
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    response.write(data);
                    response.end();
                }
            });
            break;

        ------------- Deprecated
        case '/HtmlPage2.html':
            fs.readFile(__dirname + path, function (error, data) {
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    response.write(data);
                    response.end();
                }
            });
            break;
        */

        default:
            response.writeHead(404);
            response.write("opps this doesn't exist - 404");
            response.end();
            break;
    }

});
server.listen(8082);
