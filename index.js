const lista = document.querySelector('#lista');
const form = document.querySelector('form');
const searchTerm = document.querySelector('#search');//

// form.addEventListener('submit', e => {

//     e.preventDefault();

//     search-list.innerHTML = '';
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



 




     for (let index = 1; index < data.photos.pages.length; index++){


      
        const page = document.createElement('h2');
        form.appendChild(page);

        page.innerHTML = data.photos.page[index];

     }; 



    for (let index = 0; index < data.photos.photo.length; index++) {

        
        let SingePhotoObjectAdress = data.photos.photo[index]
        
        // let SinglePhotoUrl ="https://farm" + SingePhotoObjectAdress.farm-id + ".staticflickr.com/" + SingePhotoObjectAdress.server+"/" + SingePhotoObjectAdress.id + "_"+SingePhotoObjectAdress.secret + ".jpg";
        let SinglePhotoUrl = "https://live.staticflickr.com/" + SingePhotoObjectAdress.server + "/" + SingePhotoObjectAdress.id +"_" +SingePhotoObjectAdress.secret+".jpg";

        
        // "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ca370d51a054836007519a00ff4ce59e&photo_id="+data.photos.photo[index].id+"&format=json&nojsoncallback=1";


        const item = document.createElement('li');

        lista.appendChild(item);
        item.innerHTML = `
        <h2> Image Title:"${data.photos.photo[index].title}"</h2>
        <img src= ${SinglePhotoUrl} alt="${data.photos.photo[index].title}"/> `;


        // const element = array[index];

    };
    console.log(data);

};




async function getSearchData(query) {

    const response = await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8e13b136facec361d2037e0504bce3a1&per_page=10&format=json&nojsoncallback=1`,
        {

            //     headers:{

            //     'authorization':'Client-ID 8e13b136facec361d2037e0504bce3a1'
            // }

        });




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