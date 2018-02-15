function copyGPG(){
    let output = document.getElementById('gpg-public')

    output.select()

    /* Copy the text inside the text field */
    document.execCommand('Copy')
}

function img_create(src, alt, title) {
    var img = document.createElement('img');
    img.src = src;
    img.width = '100';
    if ( alt != null ) img.alt = alt;
    if ( title != null ) img.title = title;
    return img;
}

function populateTool(){
    tool_names = ['vue-js']
    PATH = './images/tools/'
    images = []
    tools = document.getElementById('tools')
    for(let i =0; i<tool_names.length; i++){
        console.log('in')
        img = img_create(PATH+'python'+'.png',null, 'python')
        tools.appendChild(img)
    }
}

window.onload = function() {
    populateTool()
}