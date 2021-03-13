document.addEventListener('DOMContentLoaded', () => {
    const pieChartEl = document.getElementById('pieChart');

    if (pieChartEl) {
        const dataPieChart = {
            datasets: [{
                data: [10, 20, 30],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }],
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Red',
                'Yellow',
                'Blue'
            ]
        }

        new Chart(pieChartEl, {
            type: 'pie',
            data: dataPieChart,
            options: {}
        });
    }
});