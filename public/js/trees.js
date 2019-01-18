let scene = document.querySelector('a-scene');

function generateNumber()
{
    return(Math.floor(Math.random()*20));
}
function generatePostionVector()
{
    return(generateNumber()+" " +generateNumber()+" " +generateNumber());
}

document.addEventListener('keyup', function(k) {
    let entity = document.createElement('a-entity');
     entity.setAttribute('position', generatePostionVector());
     entity.setAttribute('obj-model', 'obj: #model');
     entity.setAttribute('material', 'src: #texture')

     scene.appendChild(entity);

     console.log(generatePostionVector());

    
});