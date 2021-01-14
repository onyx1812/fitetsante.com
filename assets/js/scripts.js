(function(){

  const trackClick = document.getElementById('trackClick'),
    trackLink = 'https://sakmtracker.com/click',
    queryLink = window.location.search,
    newTrackLink = trackLink + queryLink;

  trackClick.addEventListener('click', e => {
    e.preventDefault();
    window.location.href = newTrackLink;
  });


})();