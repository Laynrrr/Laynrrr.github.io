document.body.addEventListener('mousemove', function () {
    console.log(event.clientX);
    let target = document.querySelector('.mouse-follower');
    target.style.left = event.clientX + 'px' ;
    target.style.top = event.clientY + 'px' ;
})