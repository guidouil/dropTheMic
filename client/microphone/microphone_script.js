Template.microphone.helpers({
});

Template.microphone.events({
  'click .dropIt': function (event, instance) {
    var dropZoneHeight = Session.get('dropZoneHeight');
    var winDrop = Session.get('winDrop');
    if (Session.equals('isMicMoving', true)) {
      Session.set('isMicMoving', false);
      $('.mic-icon').velocity('stop');
      var micPosition = $('.mic-icon').position();
      if (micPosition.top >= winDrop && micPosition.top <= winDrop + Session.get('winZoneHeight')-87) {
        Session.set('dropResult', 'Dropped');
        Session.set('dropCount', Session.get('dropCount') + 1);
        if (Session.get('dropDuration') > 500) {
          Session.set('dropDuration', Session.get('dropDuration') - 25);
        }
        if (Session.get('winZoneHeight') > 100) {
          console.log(Session.get('winZoneHeight') > 100);
          Session.set('winZoneHeight', Session.get('winZoneHeight') - 5);
        }
        setTimeout(function () {
          Router.go('dropped');
        }, 300);
      } else {
        Session.set('dropResult', 'Failed');
        Session.set('failCount', Session.get('failCount') + 1);
        setTimeout(function () {
          Router.go('failed');
        }, 300);
      }
    }
  },
});

Template.microphone.onRendered(function () {
  $('body').css({'background-image': 'url(\'speaker.gif\')', 'background-repeat': 'repeat'});
  var dropZoneHeight = $(document).height();
  Session.set('dropZoneHeight', dropZoneHeight);
  Session.set('winDrop', getRandomInt(0, dropZoneHeight-Session.get('winZoneHeight')-88));
  $('.winZone').css({top: Session.get('winDrop'), height: Session.get('winZoneHeight')});
  $('.dropZone').css({height: dropZoneHeight});
  setTimeout(function () {
    $('.mic-icon').velocity({
      translateY: dropZoneHeight-88 + 'px'
    }, {
      loop: true,
      duration: Session.get('dropDuration')
    });
  }, 200);
  Session.set('isMicMoving', true);
});

getRandomInt = function (min, max) {
  min = min || 0;
  max = max || Session.get('dropZoneHeight')-88;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

$(window).resize(function () {
  Router.go('home');
  Meteor._reload.reload();
});

$(window).keyup(function (evt) {
  if (evt.which === 32) {
    $('.dropIt').click();
  }
});
