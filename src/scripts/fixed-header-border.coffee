last_known_scroll_position = 0

window.addEventListener 'scroll', ((event) ->
  last_known_scroll_position = window.scrollY
  header_element = document.getElementsByClassName("header")[0]

  if (last_known_scroll_position > 10) 
    if (header_element.classList.contains('header__bottom-border')) 
    else
      header_element.classList.add('header__bottom-border')
  else
    header_element.classList.remove('header__bottom-border')
    
  return
)