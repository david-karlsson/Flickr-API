const lista = document.querySelector('#lista');
const form = document.querySelector('form');
const searchTerm = document.querySelector('#search');//

// form.addEventListener('submit', e => {

//     e.preventDefault();

//     lista.innerHTML = '';
//     getData(searchTerm.value);


// });




async function getData(query) {

    const response = await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=8e13b136facec361d2037e0504bce3a1&per_page=10&format=json&nojsoncallback=1`,
        {

            //     headers:{

            //     'authorization':'Client-ID 8e13b136facec361d2037e0504bce3a1'
            // }

        });



    const data = await response.json();
    // showPhotos(data.results);



    console.log(data);




     for (let index = 1; index < data.photos.pages.length; index++){

        const page = document.createElement('h2');
        form.appendChild(page);

        page.innerHTML = data.photos.page[index];

     }; 



    for (let index = 0; index < data.photos.photo.length; index++) {


        const item = document.createElement('li');

        lista.appendChild(item);
        item.innerHTML = `
        <h2> Image Title:"${data.photos.photo[index].title}"</h2>
        <img src="${data.photos.photo[index]}" alt="${data.photos.photo[index].title}"> `;


        // const element = array[index];

    };


};


getData();

// const showPhotos = array => {


// array.forEach(photo => {
//     const item = document.createElement('li');
//     item.innerHTML = `<p>${photo.alt_description}</p><img src="${photo.urls.thumb}" alt="${photo.alt_description}">`;
//      lista.appendChild(item);
// });

// };





// console.log(array)
// getData();