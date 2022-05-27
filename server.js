const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet') 

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('student' in params){
      if(params['student']== 'leon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "leon",
          grade: 12,
          accomodations: ["Notetakers and/or audiotaped class sessions", "captioned films", "Extra exam time"]
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['student'] == 'luis'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "luis",
          grade: 7,
          accomodations: ["More food, I get Hangry!", "captioned films", "Extra exam time"]
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['student'] == 'laurel'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "laurel",
          grade: 10,
          accomodations: ["Notetaker or copy of another student’s notes",
"Flexible attendance requirements", "extra exam time",
"Assignments made available in electronic format"]
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['student'] = 'christina'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "christina",
          grade: "7",
          accomodations: ["Flexible attendance", "extra exam time", "A non-distracting, quiet setting for assignments and tests"]
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['student'] == 'eduardo'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Eduardo",
          grade: "3",
          accomodations: ["Extra exam time"]
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['student'] == 'luis'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "luis",
          grade: "42",
          accomodations: ["Notetakers and/or audiotaped class sessions", "captioned films", "Extra exam time"]
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['student'] == 'maxwell'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "maxwell",
          grade: "42",
          accomodations: ["A non-distracting, quiet setting for assignments and tests", "copy of another student’s notes, or recording of lectures", "Assignments made available in electronic format"]
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['student'] == 'cecil') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "cecil",
          grade: "42",
          accomodations: ["Flexible attendance requirements", "captioned films", "Extra exam time"]
        }
        res.end(JSON.stringify(objToJson));
      }
      else {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "New Student, Please enter student's info.",
          grade: "unknown",
          accomodations: []
        }
        res.end(JSON.stringify(objToJson));
      }
      
    }
  }
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(7000);



//example
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
