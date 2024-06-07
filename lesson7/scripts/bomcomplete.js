const favchap = document.querySelector("#favchap")
const addbutton = document.querySelector("#addbutton")
const mylist = document.querySelector("#list")
const CHAPTER_KEY = "chapters"

let chapterList = getChapterListFromStorage()
chapterList.forEach(addItem)


function getChapterListFromStorage(){
    let chapterString = localStorage.getItem(CHAPTER_KEY)
    if (chapterString == null){
        return []
    }
    return JSON.parse(chapterString)
}

function updateLocalStorage(){
    localStorage.setItem(CHAPTER_KEY, JSON.stringify(chapterList))
}

function addItem(item){
    let newitem = document.createElement("li")

    let deletebutton = document.createElement("button")

    newitem.innerText = item
    newitem.setAttribute("chapter", item)

    deletebutton.innerText = "❌"

    newitem.append(deletebutton)

    mylist.append(newitem)

    deletebutton.addEventListener("click", () => {
        let chapter = newitem.getAttribute("chapter")
        chapterList = chapterList.filter(x => x != chapter)
        updateLocalStorage()
        newitem.remove()
        favchap.focus()
    })




}

addbutton.addEventListener("click", () => {
    if (favchap.value == ""){
        console.log("You didn't type anything")
        favchap.focus()
        return
    }

    
    addItem(favchap.value)
    chapterList.push(favchap.value)
    updateLocalStorage()

    favchap.value = ""
   
    
})

