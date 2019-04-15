//--- Fires first ---
$(document).on('init', function(event) {
  var page = event.target;
  if (page.id === 'page1') {
    $('#push-button').on('click', function() {
      $('#myNavigator')[0]
        .pushPage('page2.html', {
          data: { message: 'it works' }
        })
        .then(function() {
          //ons.notification.alert('page pushed');
        });
    });
  }

  if (page.id === 'page2') {
    $('#push-button-2').on('click', function() {
      ons.notification.alert('page2 button pushed');
    });
  }
});

//--- Fires second after document init above ---
ons.ready(function() {
  ons.notification.alert('i am ready');
  changeAnimation();
  getTopPage();
  //pushApage();
});

//--- called directly from page2.html div inline ---
//--- receives the data passed by navigator pushPage ---
function getMessage() {
  var msg = $('#myNavigator')[0].topPage.data.message;
  $('#pageMessage').html(msg);
}

//--- changes an attribute of the navigator ---
function changeAnimation() {
  $('#myNavigator').attr('animation', 'lift');
}

//--- gets a property of the navigator ---
function getTopPage() {
  var myNavigator = $('ons-navigator')[0];
  console.log(myNavigator.topPage);
}

//--- calls a method of the navigator ---
function pushApage() {
  var myNavigator = $('ons-navigator')[0];
  myNavigator.pushPage('page2.html');
}

//--- listen to an event of the navigator ---
var myNavigator = $('ons-navigator');
myNavigator.on('postpush', function(event) {
  console.log('pushPage is completed: ', event);
});

// myNavigator.addEventListener('postpush', function(event) {
//   console.log('pushPage is completed: ', event);
// });
