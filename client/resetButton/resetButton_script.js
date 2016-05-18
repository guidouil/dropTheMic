Template.resetButton.events({
  'click .resetDrop': function () {
    Session.set('dropCount', 0);
    Session.set('failCount', 0);
    Session.set('dropDuration', 1000);
    Session.set('winZoneHeight', 200);
    Router.go('home');
  }
});
