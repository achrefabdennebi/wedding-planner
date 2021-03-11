document.addEventListener('DOMContentLoaded', () => {
    const calendarEl = document.getElementById('calendar');
    const pieChartEl = document.getElementById('pieChart');
    const formTask = document.getElementById('formTask');

    if (calendarEl) {
        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            initialDate: '2021-02-07',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            events: [{
                    title: 'All Day Event',
                    start: '2021-02-01'
                },
                {
                    title: 'Long Event',
                    start: '2021-02-07',
                    end: '2021-02-10'
                },
                {
                    groupId: '999',
                    title: 'Repeating Event',
                    start: '2021-02-09T16:00:00'
                },
                {
                    groupId: '999',
                    title: 'Repeating Event',
                    start: '2021-02-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: '2021-02-11',
                    end: '2021-02-13'
                },
                {
                    title: 'Meeting',
                    start: '2021-02-12T10:30:00',
                    end: '2021-02-12T12:30:00'
                },
                {
                    title: 'Lunch',
                    start: '2021-02-12T12:00:00'
                },
                {
                    title: 'Meeting',
                    start: '2021-02-12T14:30:00'
                },
                {
                    title: 'Birthday Party',
                    start: '2021-02-13T07:00:00'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2021-02-28'
                }
            ]
        });

        calendar.render();
    }

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

        const myPieChart = new Chart(pieChartEl, {
            type: 'pie',
            data: dataPieChart,
            options: {}
        });

    }



    formTask.addEventListener("submit", function (e) {
        e.preventDefault()
        const formData = new FormData(e.target)

        const taskData = {
            title: formData.get('title'),
            budget: formData.get('budget'),
            content: formData.get('content')
        }

        $('#addTasks').hide();
        console.log(taskData)
    });

});