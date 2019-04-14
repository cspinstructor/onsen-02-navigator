$(document).on('init', function(event) {
  //ons.notification.alert('Button is tapped!');
  var page = event.target;
  if (page.id === 'page1') {
    $('#push-button').on('click', function() {
      $('#myNavigator')[0].pushPage('page2.html', {
        data: { title: 'Page 2' }
      });
    });
  }
});
