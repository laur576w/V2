//--------------------------------------------------------
//- NOT OPTIMIZED JUST DID WHAT THE TASK WANTED US TO DO--
//--------------------------------------------------------
const gallery = document.getElementById("gallery")
gallery.addEventListener('click', overlay)

function overlay(e) {
    if (e.target.nodeName == "IMG" ) {
        const div = document.createElement("div")
        div.setAttribute("class", "overlay")
        const img = document.createElement("img")
        img.src = "img/" + e.target.src.split('_')[1]
        div.appendChild(img)
        div.addEventListener('click', function(e) {
            div.remove()
        })
        document.body.appendChild(div)
    }
    
}



