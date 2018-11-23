$(document).ready(function(){
    $('.menu').click(function(){
        $('ul').toggleClass('active');
    })
})
window.addEventListener('mouseup', function(event){
    var box = document.getElementById('box1');
    if(this.event.target !=box && event.targe.parentNode !=box){
        box.style.display='none';
    }
})