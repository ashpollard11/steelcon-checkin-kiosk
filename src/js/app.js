var app = new Vue({
	el: "#app",
	data: {
		newName: "",
		newEmail: "",
		guests: []
	},
	methods: {
		addGuest: function() {
			console.log("add guest")
			let newGuest = {
			image: "https://www.gravatar.com/avatar/" + md5(this.newEmail),
			name: this.newName,
			email: this.newEmail,
			timeStamp: new Date().getTime()
	 		}
	 		this.guests.push(newGuest)
	 		this.newName = ""
	 		this.newEmail = ""
		}
	}
})
