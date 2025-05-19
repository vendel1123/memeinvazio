const fileUpload = document.querySelector('#fileUpload')



fileUpload.addEventListener('change', selectPic)

async function selectPic(){
    const file = fileUpload.files[0]
    if(file){
        meme = file;
        const reader = new FileReader();
        reader.onload =(e) => {
            const newMeme = document.querySelector('.newMeme')
            newMeme.style.backgroundImage= `url('${e.target.result}')`
        }
        reader.readAsDataURL(file)
    }
}













