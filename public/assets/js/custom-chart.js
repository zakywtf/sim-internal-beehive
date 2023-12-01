var kesejahteraanPendudukChart = document.getElementById('kesejahteraanPendudukChart').getContext('2d'),

var mykesejahteraanPendudukChart = new Chart(kesejahteraanPendudukChart, {
	type: 'bar',
	data: {
		labels: ["Pucung", "Caturharjo", "Kowang", "Dalem", "Kenaji"],
		datasets : [{
			label: "Total Data",
			backgroundColor: 'rgb(23, 125, 255)',
			borderColor: 'rgb(23, 125, 255)',
			data: [3, 2, 9, 5, 4],
		}],
	},
	options: {
		responsive: true, 
		maintainAspectRatio: false,
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true
				}
			}]
		},
	}
});