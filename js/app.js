// Add foundation dynamic functionality on page
$(document).foundation();

// Set the API base url
var API_URL = "https://loopback-rest-api-demo-ziad-saab.c9.io/api";

// Get a reference to the <div id="app">. This is where we will output our stuff
var $app = $('#app');

// Data retrieval functions
function getAddressBooks() {
    return $.getJSON(API_URL + '/AddressBooks');
}

function getAddressBook(id) {
    return $.getJSON(API_URL + '/AddressBooks/' + id);
}

function getEntries(addressBookId) {
    // TODO...
}

function getEntry(entryId) {
    // TODO..
}
// End data retrieval functions

// Functions that display things on the screen (views)
function displayAddressBooksList() {
    getAddressBooks().then(
        function(addressBooks) {
            
            $app.html(''); // Clear the #app div
            $app.append('<h2>Address Books List</h2>');
            $app.append('<ul>');
            
            addressBooks.forEach(function(ab) {
                $app.find('ul').append('<li data-id="' + ab.id + '">' + ab.name + '</li>');
            });
            
            $app.find('li').on('click', function() {
                var addressBookId = $(this).data('id');
                displayAddressBook(addressBookId);
            });
        }
    )
}

function displayAddressBook(addressBookId) {
    getEntries(addressBookId).then(
        function(entries) {
            $app.html('');
            $app.append('<h2>Address Books Entries</h2>');
            $app.append('<ul>');
            entries.forEach(function(entry){
                $app.find('ul').append('<li data-id="' + entry.id + '">' + entry.lastName + entry.firstName +'</li>');
            });
            
            $app.find('li').on('click', function() {
                var entryId = $(this).data('id');
                displayEntry(entryId);
            });
        }
    )
}

function displayEntry() {
    
}
// End functions that display views


// Start the app by displaying all the addressbooks
displayAddressBooksList();