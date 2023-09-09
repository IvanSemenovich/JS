const button = document.getElementById('button');
const image = document.getElementById('img');
const URL = 'https://api.thecatapi.com/v1/images/search';


async function fetchHandler(){
    try{
        let response = await fetch(URL);
     
        let data = await response.json();
        console.log(data[0].url);
        image.src = data[0].url;
    }
    catch(error){
        console.log(error);
    }
}


button.addEventListener('click', () =>{
    fetchHandler();
})



