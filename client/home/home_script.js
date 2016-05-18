Template.home.helpers({
});

Template.home.events({
  'click .iWannaDropIt': function () {
    Router.go('microphone');
  }
});

Template.home.onRendered(function () {
  if (!Session.get('dropDuration') && !Session.get('winZoneHeight')) {
    Session.set('dropCount', 0);
    Session.set('failCount', 0);
    Session.set('dropDuration', 1000);
    Session.set('winZoneHeight', 200);
  }
  $('body').css({'background-image': 'url(\'captain-drop.gif\')', 'background-repeat': 'repeat'});
});
