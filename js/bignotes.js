
function editing(){

    const editBtn = document.querySelector('#edit')
    const titleElement = document.querySelector('#bignote-title')
    const textElement = document.querySelector('#bignote-text')
    const inputTitleElement = document.querySelector('#bignote-input-title')
    const inputTextElement = document.querySelector('#bignote-input-text')

    function toggle(){
        titleElement.classList.toggle('hidden')
        textElement.classList.toggle('hidden')
        inputTitleElement.classList.toggle('hidden')
        inputTextElement.classList.toggle('hidden')
    
    }

    textElement.addEventListener('click' , ()=>{
       toggle()
       
    })
    titleElement.addEventListener('click' , ()=>{
       toggle()
    })
    editBtn.addEventListener('click', ()=>{
        toggle()
        //Хотел добавить сохранение на нажатие ALT/ Wanted to add savung on Alt button
        // document.addEventListener( 'keyup', event => {
        //     if( event.code === 'AltLeft' ) console.log('alt was pressed');
        // });
    })
    

    inputTitleElement.addEventListener('input', ()=>{
        titleElement.innerText = inputTitleElement.value
    })

    inputTextElement.addEventListener('input', ()=>{
        textElement.innerText = inputTextElement.value
    })
}
editing()
document.addEventListener( 'keyup', event => {
    if( event.code === 'AltLeft' ) console.log('alt was pressed');
});