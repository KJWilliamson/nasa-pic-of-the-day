//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
// feb 3 2021 has video instead of pic
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const choice = document.querySelector('input').value
    console.log(choice)
    
    const url = `https://api.nasa.gov/planetary/apod?api_key=glLovVQuabGKADi1e5NyksvOk63RyXx66Yl2VGv3&date=${choice}`


    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.media_type === "image") {
                document.querySelector('img').src = data.hdurl
            } else if(data.media_type === "video") {
                document.querySelector('iframe').src = data.url 
            } 
            
            document.querySelector('h2').innerText = data.title   
document.querySelector('h4').innerText = data.date
            document.querySelector('h5').innerText = data.copyright
document.querySelector('h3').innerText = data.explanation

        })
        .catch(err => {
            console.log(`error ${err}`)
        })

}

