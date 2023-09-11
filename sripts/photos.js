let photos = [
    'photo_2023-09-10_16-58-52',
    'photo_2023-09-10_16-58-58',
    'photo_2023-09-10_16-59-02',
    'photo_2023-09-10_16-59-07',
    'photo_2023-09-10_16-59-10',
    'photo_2023-09-10_16-59-13',
    'photo_2023-09-10_16-59-16',
    'photo_2023-09-10_16-59-19',
    'photo_2023-09-10_16-59-24',
    'photo_2023-09-10_16-59-27',
    'photo_2023-09-10_16-59-42',
    'photo_2023-09-10_16-59-46',
    'photo_2023-09-10_16-59-48',
    'photo_2023-09-10_16-59-53',
    'photo_2023-09-10_16-59-57',
    'photo_2023-09-10_17-00-17',
    'photo_2023-09-10_17-00-21',
    'photo_2023-09-10_17-00-25',
    'photo_2023-09-10_17-00-29',
    'photo_2023-09-10_17-00-32',
    'photo_2023-09-10_17-00-39'
]

photos = photos.sort(() => Math.random() - 0.5)


let ph = document.querySelector('.photos')
let phLeft = document.querySelector('.photos-left')
let phRight = document.querySelector('.photos-right')

ph.style.cssText = `--width: ${window.innerWidth}px;`

let getRandomInt = (max)=> {
    return Math.floor(Math.random() * max);
}

photos.forEach(photo => {
    let img = document.createElement('img')
    img.src = `img/photos/${photo}.jpg`
    img.classList.add('photo')
    setTimeout(()=>{
        img.style.cssText = `top: ${getRandomInt(70)}%; left: ${getRandomInt(70)}%; transform: scale(${getRandomInt(50) + 50}%) rotate(${getRandomInt(2) ? getRandomInt(10) : -getRandomInt(10)}deg);`
    }, getRandomInt(1000))
    if(getRandomInt(2)){
        phLeft.appendChild(img)
    }
    else{
        phRight.appendChild(img)
    }
});

