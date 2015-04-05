if (Tasks.find().count() == 0) {
	Tasks.insert({title: "Take dog for walk", content: "dog gotta walk"})
	Tasks.insert({title: "Take cat for walk", content: "cat gotta walk"})
	Tasks.insert({title: "Take honeybadger for walk", content: "honeybadger don't care"})
}