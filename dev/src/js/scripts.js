(function(){

  const trackClick = document.getElementById('trackClick'),
    trackLink = 'https://sakmtracker.com/click',
    queryLink = window.location.search,
    newTrackLink = trackLink + queryLink;

  trackClick.addEventListener('click', e => {
    e.preventDefault();
    window.location.href = newTrackLink;
  });

  const popups = document.querySelectorAll('[data-popup]');
  popups.forEach(popup => {
    popup.addEventListener('click', e => {
      e.preventDefault();
      const popupContent = document.getElementById(e.target.dataset.popup).innerHTML;
      document.querySelector('.popup').classList.add('popup-active');
      document.querySelector('.popup-content').innerHTML = popupContent;
      document.body.style.overflowY = 'hidden';
      document.body.style.marginRight = '17px';
    });
  });

  const popupClose = document.querySelectorAll('.popup-close');
  popupClose.forEach(close => {
    close.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector('.popup').classList.remove('popup-active');
      document.body.style.overflowY = 'auto';
      document.body.style.marginRight = '0';
    });
  });

})();