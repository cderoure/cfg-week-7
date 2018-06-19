var YOUR_API_KEY = 'c0897b7307fc4acd9fbc1b7e957b491e'; // replace with your key
var BEST_SELLERS_URL = 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json';

// look for the element that has the id "results"
// create a new table row and cell
// set the innter html of the cell to the list_name from our results
// append the cell to the row we just created
// append the row to the results table
function addItemToTable(item) {
    var resultsTable = document.getElementById('results');
    var newRow = document.createElement("tr");
    var titleCell = document.createElement("td");
    var descriptionCell = document.createElement("td");

    titleCell.innerHTML = item.title;
    newRow.appendChild(titleCell);

    descriptionCell.innerHTML = item.description;
    newRow.appendChild(descriptionCell);
    
    resultsTable.appendChild(newRow);
}

function returnJSON(data) {
    return data.json();
}

// get the results from the response
// for every item in our result list, we want to do something
function handleResponse(response) {
    var results = response.results;

    for (i = 0; i < results.length; i++) {
        addItemToTable(results[i]);
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
    const searchValue = document.getElementById('search').value;

    const url = BEST_SELLERS_URL + "?api-key=" + YOUR_API_KEY + "&title=" + searchValue;

    clearResults();
    getData(url);
}

function onClearResultsClick() {
    clearResults();
}