var http = require('http'),
    httpProxy = require('http-proxy');

var options = {
  router: {
    '/api/solicitations.json': 'www.sbir.gov'
  }
};

var proxyServer = httpProxy.createServer(options);
proxyServer.listen(8000);
