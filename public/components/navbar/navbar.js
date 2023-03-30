
console.log("hello");


async function fetchLessons(){
    const response = await fetch("/api/notes")
    const data =  await response.json()
    console.log(data)
    const notes = document.getElementById("notes")

    data.data.lessons.forEach(note => {
        const lesson = document.createElement("div")
        lesson.className = "wrapper"
        lesson.id = note.id
        lesson.innerText = note.title
        notes.appendChild(lesson)

        lesson.addEventListener('click', () => {
            location.href = note.href
        })


    });

}

fetchLessons()