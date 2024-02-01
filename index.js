const text = "қҴ\xa4ӃӂӅҹӍҹӁҼҹ\xa4ӅҴҽӆҴ\xa4Ӆ\xa4ӃӂӁҹҸҹҿӐӁҼҾҴ\xa4Ӄӂ\xa4ҶӂӅҾӄҹӅҹӁӐҹ"

const banList = ["￘","￝","ﾰ"]
document.querySelector("button").addEventListener("click", (e)=>{
    const text = document.querySelector(".kakTak").value
    const code = document.querySelector(".MakSimAndrevich").value
    let newText = ""
    for (let index = 0; index < text.length; index++) {
        const char = String.fromCharCode(text.charCodeAt(index)-code)
        newText+=banList.indexOf(char) == -1 ? char: " "
        console.log(newText);
    }
    document.querySelector(".translate").innerHTML = newText
})

