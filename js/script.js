//Cached Variables
const $form = $('form')
const $collection = $('#collection')

//Event Listners
$form.on('submit', handleGetData)

//Functions

function handleGetData(event) {
    event.preventDefault();

    const searchText = $('#search').val()
    $.ajax({url: `https://api.openbrewerydb.org/breweries?by_city=${searchText}`})
    .then((breweries) => {
            console.log(breweries);
            const htmlArray = breweries.map(brewery => {
                return `<article class="brewery flex-ctr outline">
                <h4>${brewery.name}</h4>
                    <p class="address">${brewery.street}</p>
                    <a href="${brewery.website_url}" target="_blank">Website</a>
                </article>
                `
            })
            $collection.html(htmlArray);
            $collection.hide().fadeIn(2000);
        })
    } 


