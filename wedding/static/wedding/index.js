document.addEventListener('DOMContentLoaded', () => {
    const formTask = document.getElementById('formTask');

    if (formTask) {
        formTask.addEventListener("submit", function (e) {
            e.preventDefault()
            const formData = new FormData(e.target)
    
            const taskContent = {
                content:  {
                    title: formData.get('title'),
                    budget: formData.get('budget'),
                    content: formData.get('content')
                }
            }
            /** Save form data */
            addTask(taskContent).then(() => window.location.replace(`${window.location.origin}/tasks`));
            $('#addTasks').modal('hide');
        });
    }

    /**
     * Save task API
     * @param {*} taskData 
     */
    async function addTask (taskData) {
        debugger;
        const  response = await fetch('/saveTask', {
            method: 'POST',
            body: JSON.stringify(taskData)
        });

        return await response.json(); 
    }
});