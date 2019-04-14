// document.addEventListener('init', function(event) {
//   var page = event.target;

//   if (page.id === 'page1') {
//     page.querySelector('#push-button').onclick = function() {
//       document
//         .querySelector('#myNavigator')
//         .pushPage('page2.html', { data: { title: 'Page 2' } });
//     };
//   } else if (page.id === 'page2') {
//     page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
//   }
// });

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
  // else if (page.id === 'page2') {
  //   $('.center').html(page.data.title);
  // }
  // if (page.matches('#page1')) {
  //   $('.center').html('Page 1');
  // }

  // $('#myNavigator').on('postpush', function() {
  //   if (page.matches('#page1')) $('.center').html('Page 1');
  //   else $('.center').html('Page 2');
  // });
});

// function pushPage() {
//   $('#myNavigator')[0].pushPage('page2.html', { data: { title: 'Page 2' } });
//   // $('ons-toolbar.center').html('Page 2');
// }

// $('#myNavigator').on('postpush', function() {
//   $('.center').html('Page 2');
// });
