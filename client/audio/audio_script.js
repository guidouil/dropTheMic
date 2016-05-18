Template.audioBtn.onRendered(function(){
  if (!Session.get('muted')) {
    Session.set('muted', true);
  }
});

Template.audio.onRendered(function () {
  if (Session.equals('muted', false)) {
    document.getElementById('audioPlayer').play();
  }
});

Template.audio.helpers({
  isSoundMuted: function () {
    return Session.equals('muted', true);
  }
});

Template.audioBtn.helpers({
  audioBtnImg: function () {
    if (Session.equals('muted', false)) {
      return 'mute.png';
    } else {
      return 'unmute.png';
    }
  }
});

Template.audioBtn.events({
  'click .audioBtn': function () {
    if (Session.equals('muted', true)) {
      Session.set('muted', false);
      setTimeout(function () {
        document.getElementById('audioPlayer').play();
      }, 100);
    } else {
      Session.set('muted', true);
    }
  }
});

Template.audioBtn.onRendered(function () {

});
