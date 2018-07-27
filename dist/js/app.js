"use strict";

var app = new Vue({
	el: "#app",
	data: {
		newName: "",
		newEmail: "",
		guests: []
	},
	// created: function() {
	// 	setInterval(this.updateTime, 5*1000)
	// },
	methods: {
		updateTime: function updateTime() {
			console.log(this.guests[this.guests.length - 1]);
			var guest = this.guests[this.guests.length - 1];
			setInterval(function () {
				guest.timeSinceCheckin++;
			}, 60 * 1000);
		},
		addGuest: function addGuest() {
			console.log("add guest");
			var newGuest = {
				image: "https://www.gravatar.com/avatar/" + md5(this.newEmail),
				name: this.newName,
				email: this.newEmail,
				timeStamp: moment().format('LTS'),
				timeSinceCheckin: 0
			};
			this.guests.push(newGuest);
			this.newName = "";
			this.newEmail = "";

			if (this.guests.length > 3) {
				this.guests.shift();
			}
			this.$refs.newName.focus();
			this.updateTime();
		}
	}
});
//# sourceMappingURL=app.js.map
