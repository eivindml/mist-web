var scrollToPosition;

scrollToPosition = function(position, scrollDuration) {
  var body, cosParameter, currentScrollHeight, goToScrollHeight, html, scrollCount, scrollDifference, scrollInterval, scrollMargin, scrollStep, topViewHeight, viewportHeight, windowHeight;
  body = document.body;
  html = document.documentElement;
  windowHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  topViewHeight = windowHeight - viewportHeight;
  if (position > topViewHeight) {
    position = topViewHeight;
  }
  currentScrollHeight = window.scrollY;
  scrollStep = Math.PI / (scrollDuration / 15);
  goToScrollHeight = position;
  scrollDifference = currentScrollHeight - goToScrollHeight;
  cosParameter = scrollDifference / 2;
  scrollCount = 0;
  scrollMargin = void 0;
  scrollInterval = setInterval((function() {
    if (window.scrollY !== goToScrollHeight) {
      scrollCount = scrollCount + 1;
      scrollMargin = cosParameter - (cosParameter * Math.cos(scrollCount * scrollStep));
      window.scrollTo(0, currentScrollHeight - scrollMargin);
    } else {
      clearInterval(scrollInterval);
    }
  }), 15);
};
