var app = angular.module('notesApp', []);

app.controller('MainCtrl', function () {
    var self = this;
    self.submit1 = function() {
        console.log('User clicked submit1 with ', self.user);
    };
    self.submit2 = function() {
        console.log('User clicked submit2 with ', self.emp);
    };
});