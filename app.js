let text = document.getElementById('text')
let btn = document.getElementsByClassName('actionBtn')
fontsoption = document.getElementById('fonts')
textoption = document.getElementById('heading')
// console.log(fontsoption)
// console.log('this>>', btn)
fontsoption.addEventListener('change' , function(){
    if(this.value === 'monospace'){
        text.style.fontFamily ='monospace'

    }
    if(this.value === 'Courier'){
        text.style.fontFamily = 'Courier New'

    }
    if(this.value === 'SansSarif'){
        text.style.fontFamily = 'sans-serif'

    }
})
textoption.addEventListener('change' , function(){
    if(this.value === 'Headings'){
        text.style.fontSize ='54px'

    }
    if(this.value === 'SubHeadings'){
        text.style.fontSize = '34px'

    }
    if(this.value === 'Paragraph'){
        text.style.fontSize = '17px'

    }
})
for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        console.log('this>>', this.innerText)
        switch (this.innerText) {
            case 'Bold':
                if (text.style.fontWeight ==='bold') { text.style.fontWeight = 'normal' }
                else { text.style.fontWeight = 'bold' }
                break;
            case 'italic':
                if (text.style.fontStyle === 'italic' ) 
                    { text.style.fontStyle = 'normal' }
                else { text.style.fontStyle = 'italic' }
                break;
            case 'undeline':
                if (text.style.textDecoration === 'underline' ) 
                    { text.style.textDecoration = 'none' }
                else { text.style.textDecoration = 'underline' }
                break;
            case 'Left':
                text.style.textAlign = 'left'
                break;
            case 'Right':
                text.style.textAlign = 'right'
                break;
            case 'Center':
                text.style.textAlign = 'center'
                break;
            case 'justify':
                text.style.textAlign = 'justify'
                break;

            default:
                break;
        }
    })
}