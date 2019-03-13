const http = require('http');
const net = require('net');
const url = require('url');

const proxy = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('okay');
  });