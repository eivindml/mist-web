# # Smooth scrolling to the top of page

# scrollToPosition = (position, scrollDuration) ->
#   body = document.body
#   html = document.documentElement
  
#   windowHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
#   console.log("windowHeight: " + windowHeight)
#   viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight or 0)
#   console.log("viewportHeight: " + viewportHeight)
#   topViewHeight = windowHeight - viewportHeight
#   console.log("topViewHeight: " + topViewHeight)
  
#   if position > topViewHeight
#     position = topViewHeight

#   currentScrollHeight = window.scrollY
#   scrollStep = Math.PI / (scrollDuration / 15)
#   goToScrollHeight = position
#   scrollDifference = currentScrollHeight - goToScrollHeight
#   cosParameter = scrollDifference / 2
#   scrollCount = 0
#   scrollMargin = undefined
#   scrollInterval = setInterval((->
#     if window.scrollY != goToScrollHeight
#       scrollCount = scrollCount + 1
#       scrollMargin = cosParameter - (cosParameter * Math.cos(scrollCount * scrollStep))
#       window.scrollTo 0, currentScrollHeight - scrollMargin
#     else
#       clearInterval scrollInterval
#     return
#   ), 15)
#   return

document.addEventListener("DOMContentLoaded", ->
  anchors = document.getElementsByTagName("a")
  for i in [0...anchors.length]
    href = anchors[i].getAttribute("href")
    if (href[0] == '/' && href.length == 1)
        anchors[i].addEventListener('click', (event) -> 
            event.preventDefault()
            window.scroll({ top: 0, left: 0, behavior: 'smooth' })
        )
    else if (href[0] == "#")
      anchors[i].addEventListener("click", scrollToListener)

)

scrollToListener = (event) ->
  event.preventDefault()
  attribute = this.getAttribute('href')
  #element = document.getElementById(attribute.substring(1))
  #rect = element.getBoundingClientRect()
  #console.log("rect.top: " + rect.top)
  #scrollToPosition(rect.top, 300)
  document.querySelector(attribute).scrollIntoView({ behavior: 'smooth' });
