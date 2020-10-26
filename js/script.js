//Cached Variables
const $form = $('form')


//Event Listners
$form.on('submit', handleGetData)

//Functions

function handleGetData(event) {
    event.preventDefault();

const searchText = $('#search').val()
$.ajax({url: `https://api.openbrewerydb.org/breweries?by_city=${searchText}`})
    .then(
        (data) => {
            console.log(data);
        },
        (error) => {
            console.log('bad request: ', error)
        }
    )

}
