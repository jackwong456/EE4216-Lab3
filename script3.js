var app = new Vue({
	el: '#app',
	data: {
		arrow: {
			'arrow-up': false,
			'arrow-down': false
		},
		columns: {
			id: 'ID',
			name: 'Full Name',
			phone: 'Phone'
		},
		rows: [],
		sortedColBy: ''
	},
	created:function() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then (json => {
			this.rows = json;
		})
	},
	methods: {
		sortRow:function(key) {
			if(key != this.sortedColBy || !this.arrow["arrow-up"]) {
				sorted = this.rows.sort(function(a, b) {
					return a[key] > b[key] ? 1 : -1;
				})
				this.sortedColBy = key
				this.arrow["arrow-up"] = true
				this.arrow["arrow-down"] = false
			} else {
				sorted = this.rows.sort(function(a, b) {
					return a[key] > b[key] ? -1 : 1;
				})
				this.sortedColBy = key
				this.arrow["arrow-up"] = false
				this.arrow["arrow-down"] = true
			}
		}
	}
});


