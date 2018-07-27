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
		updateTime: function() {
			console.log(this.guests[this.guests.length-1])
			let guest = this.guests[this.guests.length-1]
			setInterval (() => {
			guest.timeSinceCheckin++
			}, 60*1000);
		},
		addGuest: function() {
			console.log("add guest")
			let newGuest = {
				image: "https://www.gravatar.com/avatar/" + md5(this.newEmail),
				name: this.newName,
				email: this.newEmail,
				timeStamp: moment().format('LTS'),
				timeSinceCheckin: 0
	 		}
	 		this.guests.push(newGuest)
	 		this.newName = ""
	 		this.newEmail = ""

	 		if (this.guests.length > 3) {
				this.guests.shift()
			}
			this.$refs.newName.focus()
			this.updateTime()
		}
	}
})
