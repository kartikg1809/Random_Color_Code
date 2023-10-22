const getColor=()=>{
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    randomColor='#'+randomColor;
    document.body.style.backgroundColor=randomColor;
    document.getElementById('color-code').innerHTML=randomColor.toUpperCase();

    //to copy the color code to clipboard
    message=()=>{
        navigator.clipboard.writeText(randomColor);
        const colorCodeElement = document.getElementById('color-code');
        colorCodeElement.textContent = 'Copied to clipboard';
        colorCodeElement.classList.add('copied');
        colorCodeElement.style.backgroundColor = randomColor;
        setTimeout(() => {
            colorCodeElement.textContent = randomColor.toUpperCase();
            colorCodeElement.style.backgroundColor = 'white';
            colorCodeElement.classList.remove('copied'); 
        }, 1000);
    }
    document.getElementById('color-code').addEventListener("click", message);
}

document.getElementById('btn').addEventListener('click',getColor);

getColor();