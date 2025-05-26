const iconPLus = document.querySelector('.fixed')
//console.log(iconPLus);

window.addEventListener('DOMContentLoaded', getMemes)
iconPLus.addEventListener('click',()=>{
    window.location.href='../html/newMeme.html'
});

async function getMemes(){
    const response = await fetch('http://127.0.0.1:3000/api/memes/getMemes', {
        method:'GET',
        credentials:'include'
    })


    const memes = await response.json();
    render(memes)
}
 row.innerHTML=''
function render(memes){
    const row = document.querySelector('.row')

   
    row.innerHTML=`
        <div class="card">
            <div class="card-header">
                <img src="http://127.0.0.1:3000/uploads/${meme.profile_pic}" alt="${meme.name}">
                ${meme.name}
            </div>

            <div class="card-body">
                <div class="card-piv">
                    <img src="http://127.0.0.1:3000/uploads/${meme.meme}" alt="${meme.meme}">
                </div>
            </div>
            <div class="card-footer">
                <span>54</span>
                <i class="fa-solid fa-thumbs-up"></i>
            </div>

        </div>`

}


