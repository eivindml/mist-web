element = document.getElementById('clicked-menu-item')

navWidth = document.getElementById('nav').offsetWidth
logoWidth = document.getElementsByClassName('header--logo')[0].offsetWidth

document.getElementById('nav').style.width = '0'

element.onclick = (obj) ->
    if (obj.srcElement.classList.contains('clicked'))
        document.getElementById("nav").style.width = '0'
        #document.getElementsByClassName('header--logo')[0].style.width = logoWidth + 'px'
    else
        document.getElementById("nav").style.width = navWidth + 'px'
        document.getElementById("nav").style.overflowX = 'auto'
        #document.getElementsByClassName('header--logo')[0].style.width = '0'
    obj.srcElement.classList.toggle('clicked')
    false
