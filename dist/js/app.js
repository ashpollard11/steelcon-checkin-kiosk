"use strict";

var app = new Vue({
	el: "#app",
	data: {
		newName: "",
		newEmail: "",
		guests: []
	},
	methods: {
		addGuest: function addGuest() {
			console.log("add guest");
			var newGuest = {
				image: "https://www.gravatar.com/avatar/" + md5(this.newEmail),
				name: this.newName,
				email: this.newEmail,
				timeStamp: moment().format('LTS')
			};
			this.guests.push(newGuest);
			this.newName = "";
			this.newEmail = "";

			if (this.guests.length > 3) {
				this.guests.shift();
			}
			this.$refs.newName.focus();
			// this.updateTime()
		}
		// updateTime: function() {
		// 	setInterval (() => {
		// 		let timeCounter = 1; timeCounter++
		// 		this.guests.timeStamp = timeCounter + "minutes ago"
		// 	}, 3000);
		// }
	}
});
//# sourceMappingURL=app.js.map
