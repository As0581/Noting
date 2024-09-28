const notesElement = document.querySelector('.notes')
const addBtn = document.querySelector('.note-add__btn')

let noteIndex = 0
const notes = []
function createNote(title, text){
    const note = document.createElement('div')
    note.classList.add('note')
    note.setAttribute('id', `${noteIndex += 1}`)
    note.innerHTML = `
        <div class='note-header'>
            <h3 id='note-title'>${title}</h3>
            <input class='hidden' id='note-title-input' type='text'>
            <div class='note-buttons'>
                <button class='note-edit'><i class="fa-solid fa-pen-to-square"></i></button>
                <button class='note-delete'><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
        <p id='note-text'>${text}</p>
        <textarea class='hidden' id='note-text-input'></textarea>
    `
    // notesArray.push(note)
    const deleteBtn = note.querySelector('.note-delete')
    const editBtn = note.querySelector('.note-edit')
    const titleElement = note.querySelector('#note-title')
    const textElement = note.querySelector('#note-text')
    const inputTitleElement = note.querySelector('#note-title-input')
    const inputTextElement = note.querySelector('#note-text-input')

    editBtn.addEventListener('click' , ()=>{
        titleElement.classList.toggle('hidden')
        textElement.classList.toggle('hidden')
        inputTitleElement.classList.toggle('hidden')
        inputTextElement.classList.toggle('hidden')

    })
    inputTitleElement.addEventListener('input', ()=>{
        titleElement.innerText = inputTitleElement.value
    })
    inputTextElement.addEventListener('input', ()=>{
        textElement.innerText = inputTextElement.value
    })

    deleteBtn.addEventListener('click' , ()=>{
        note.remove()
    })

    return note
}

addBtn.addEventListener('click', (e)=>{

    const el = createNote('Название' , 'Text')
    notesElement.appendChild(el )
})

