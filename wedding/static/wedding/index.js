document.addEventListener('DOMContentLoaded', () => {
    const formTask = document.getElementById('formTask');

    if (formTask) {
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
    }
});