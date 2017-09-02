# Smooth scrolling to the top of page

scrollToPosition = (position, scrollDuration) ->
  body = document.body
  html = document.documentElement
  windowHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
  viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight or 0)
  topViewHeight = windowHeight - viewportHeight
  if position > topViewHeight
    position = topViewHeight

  currentScrollHeight = window.scrollY
  scrollStep = Math.PI / (scrollDuration / 15)
  goToScrollHeight = position
  scrollDifference = currentScrollHeight - goToScrollHeight
  cosParameter = scrollDifference / 2
  scrollCount = 0
  scrollMargin = undefined
  scrollInterval = setInterval((->
    if window.scrollY != goToScrollHeight
      scrollCount = scrollCount + 1
      scrollMargin = cosParameter - (cosParameter * Math.cos(scrollCount * scrollStep))
      window.scrollTo 0, currentScrollHeight - scrollMargin
    else
      clearInterval scrollInterval
    return
  ), 15)
  return

document.addEventListener("DOMContentLoaded", ->
  anchors = document.getElementsByTagName("a")
  for i in [0...anchors.length]
    href = anchors[i].getAttribute("href")
    if (href[0] == "#")
      anchors[i].addEventListener("click", scrollToListener)

  submit = document.getElementById("mail-signup-submit")

  submit.addEventListener("click", (e) ->
    e.preventDefault()
    document.getElementById("mail-signup").submit()
  )
)

scrollToListener = (event) ->
  event.preventDefault()
  attribute = this.getAttribute('href')
  element = document.getElementById(attribute.substring(1))
  rect = element.getBoundingClientRect()
  scrollToPosition(rect.top, 300)