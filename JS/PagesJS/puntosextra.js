console.log("Funcionando");

const randomDogButton = document.getElementById('random-dog-button');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const showAllDogsButton = document.getElementById('show-all-dogs');
const dogsContainer = document.getElementById('dogs-container');

async function fetchRandomDog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    const breed = data.message.split('/')[4];
    displayDog([{ image: data.message, breed }]);
}

async function fetchDogByName(name) {
    const response = await fetch(`https://dog.ceo/api/breed/${name}/images/random`);
    const data = await response.json();
    if (data.status === 'success') {
        displayDog([{ image: data.message, breed: name }]);
    } else {
        alert('No se encontró un perro con ese nombre.');
    }
}

async function fetchAllDogs() {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();
    const breeds = Object.keys(data.message);
    const dogImages = await Promise.all(breeds.map(async (breed) => {
        const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        const imgData = await res.json();
        return { image: imgData.message, breed };
    }));
    displayDog(dogImages);
}

function displayDog(dogs) {
    dogsContainer.innerHTML = dogs
        .map(dog => `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${dog.image}" class="card-img-top" alt="${dog.breed}">
                    <div class="card-body">
                        <h5 class="card-title">${dog.breed}</h5>
                    </div>
                </div>
            </div>
        `)
        .join('');
}

randomDogButton.addEventListener('click', fetchRandomDog);
searchButton.addEventListener('click', () => {
    const name = searchInput.value.toLowerCase();
    fetchDogByName(name);
});
showAllDogsButton.addEventListener('click', fetchAllDogs);