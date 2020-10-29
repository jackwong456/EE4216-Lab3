var app = new Vue({
	el: '#app',
	data: {
		columns: {
			id: 'ID',
			name: 'Full Name',
			phone: 'Phone',
		},
		rows: []
	},
	created:function() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then (json => {
			this.rows = json;
		})
	}
});


