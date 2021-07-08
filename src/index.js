const url = 'http://localhost:3000/pups'

// Fetch function
function fetchData(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => data.forEach(dogBar))
}

// Callback function
function dogBar(data) {
    // Create the spans in the #dog-bar
    let span = document.createElement('span')
    span.textContent = data.name;
    document.querySelector('#dog-bar').append(span);  

    // Event listener whenever someone clicks on a span
    span.addEventListener('click', () => {
        // Creating new elements to show on click
        let img = document.createElement('img')
        let h2 = document.createElement('h2')
        let button = document.createElement('button')

        // Assigning content to the created elements
        img.src = data.image;
        h2.textContent = data.name;
        goodOrBadDog();

        // Logic for button text saying either "Good Dog!" or "Bad Dog!"
        function goodOrBadDog() {
            if (data.isGoodDog){
                button.textContent = "Good Dog!"
            } else {
                button.textContent = "Bad Dog!"
            }
        }

        // Appending new elements to existing container; refreshing page on action
        let mainContainer = document.querySelector('#dog-info');
        mainContainer.innerHTML = "";
        mainContainer.append(img, h2, button);

        // Button click identifies and switches the copy within
        button.addEventListener('click', () => {
            if (data.isGoodDog){
                data.isGoodDog = "false";
                button.textContent = "Bad Dog!";
            } else {
                data.isGoodDog = "true";
                button.textContent = "Good Dog!";
            }

            // dogFilter.textContent = 'Filter good dogs: ON'
        })            
    })
}

// Dog Filter Feature
let dogFilter = document.querySelector('#good-dog-filter');  
function dogFilterFunction() {
    if (dogFilter.textContent === 'Filter good dogs: ON') {
        dogFilter.innerHTML = 'Filter good dogs: OFF'

        // Remove filter here
    } else if (dogFilter.textContent === 'Filter good dogs: OFF') {
        dogFilter.innerHTML = 'Filter good dogs: ON';
        // console.log('hello from the filter');
        // const dogsFiltered = document.querySelector('#dog-bar').filter(data => data.length > 6);
        function fetchDataFilter(url) {
            fetch(url)
                .then(res => res.json())
                .then(data => console.log(Object.entries(data)))
                    // const filteredDog = data.filter(ISGOODDOGDATA => ISGOODDOGDATA === TRUE)
                    // filteredDog.forEach(dogBar);

                    // console.log('hi')
        }
        fetchDataFilter(url)
    }
}

dogFilter.addEventListener('click', dogFilterFunction)
fetchData(url);


// QUESTIONS: 
// 1. Why do the event listeners only work once. The buttons only click and activate once. 