Router.configure({
	layoutTemplate: 'layout',
	waitOn: function() { return Meteor.subscribe('tasks'); }
});

Router.route('/', {name: 'tasksList'});
Router.route('/tasks/:_id', 
						{name: 'taskPage',
						data: function() { return Tasks.findOne(this.params._id); }});
