const request = new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json', false);
request.send();
console.log(JSON.parse(request.response));