function isFirstUnique(value, index, array) {
    return array.indexOf(value) === index;
}

// get the data to work with
const request = new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json', false);
request.send()
workingData = (JSON.parse(request.response));

// get the unique years from the data
var uniqueYears = workingData.map(d => d.Year).filter(isFirstUnique);

// define the dimensions and margins for the plot
const h = window.innerHeight;
const w = window.innerWidth;
const margin = {top: 10, right: 10, bottom: 25, left: 10};
const circle_radius = 5;

// define constant dummy day/month/year for time comparisons
dummyDate = {year: "2000", month: "00", day: "01"};

// create the svg
const svg = d3.select("#chart_container").append("svg")
    .attr("height", (h) + "px")
    .attr("width", (w) + "px");

// create the x-scale
const xScale = d3.scaleLinear()
    .domain([d3.min(uniqueYears), d3.max(uniqueYears)])
    .range([margin.left, w - margin.right]);

// create the x-axis
const xAxis = d3.axisBottom(xScale)
    .tickFormat(d3.format('d'));

svg.append("g")
    .attr("transform", "translate("+margin.left+","+(h - margin.bottom)+")")
    .attr("id", "x-axis")
    .call(xAxis);

// create the y-scale
const yScale = d3.scaleLinear()
    .domain()

d3.select("svg").selectAll("circle")
    .data(workingData)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("data-xvalue", (d) => d.Year)
    .attr("cx", (d) => xScale(d.Year))
    .attr("cy", (d) => ((h - (d.Seconds / 4)) + "px"))
    .attr("r", circle_radius + "px");

console.log(workingData.length);