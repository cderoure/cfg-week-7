var YOUR_API_KEY = 'c0897b7307fc4acd9fbc1b7e957b491e'; // replace with your key
var API_ENDPOINT = 'https://api.nytimes.com/svc/books/v3/lists/overview.json'; // replace with the api url

// look for the element that has the id "results"
// create a new table row and cell
// set the innter html of the cell to the list_name from our results
// append the cell to the row we just created
// append the row to the results table
function addItemToTable(item) {
    var resultsTable = document.getElementById('results');
    var newRow = document.createElement("tr");
    var newCell = document.createElement("td");

    newCell.innerHTML = item.list_name;
    newRow.appendChild(newCell);
    
    resultsTable.appendChild(newRow);
}

function returnJSON(data) {
    return data.json();
}

// get the results from the response
// get the lists from the results;
// for every item in our lists, we want to do something
function handleResponse(response) {
    var results = response.results;
    var lists = results.lists;

    for (i = 0; i < lists.length; i++) {
        addItemToTable(lists[i]);
    }
}

function handleError(error) {
    // TODO: we could show an error message here
}

// delete all rows in the results table
function clearResults() {
    var resultsTable = document.getElementById('results');
    resultsTable.innerHTML = "";
}

// go and grab the data from the url and handle it
function getData(url) {
    fetch(url).then(returnJSON).then(handleResponse).catch(handleError);
}

// whenever someone clicks the button, this is what we want to do!
function onButtonClick() {
    var url = API_ENDPOINT + '?api-key=' + YOUR_API_KEY;

    clearResults();
    getData(url);
}

function onClearResultsClick() {
    clearResults();
}