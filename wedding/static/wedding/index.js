document.addEventListener('DOMContentLoaded', () => {
    const formTask = document.getElementById('formTask');
    const buttons  = document.querySelectorAll('button');

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
        const  response = await fetch('/saveTask', {
            method: 'POST',
            body: JSON.stringify(taskData)
        });

        return await response.json(); 
    }

    if (buttons) {
        const deleteTask = async function(msg, target) {
            const {  dataset } = target;
            const { id } = dataset;
            const  response = await fetch(`/delete/${id}`, {
                method: 'POST'
            });
            
            // Get result response
            const result = await response.json();

            if (result) {
                window.location.replace(`${window.location.origin}/tasks`)
            }

        }
    
        const editTask = async function(msg, target) {
            const {  dataset } = target;
            const { id } = dataset;

            const response = await fetch(`/task/${id}`, {method:'GET'});
            const task = await response.json();
            const { title , budget, content } = task;

            // display values in input forms
            document.querySelector('#title').value = title;
            document.querySelector('#budget').value = budget;
            document.querySelector('#description').value = content;
        }

        buttons.forEach(node => {
            const { id } = node;
    
            // Listen to click on tasks btns clicks
            if (id === `deleteBtn` || id === `editBtn` ) {
                node.addEventListener('click', (event) => {
                    const { target } = event;
                    
                    if (target.closest(`#deleteBtn`)) {
                        deleteTask('Delete', target.closest(`#deleteBtn`));
                    }

                    if (target.closest(`#editBtn`)) {
                        editTask('Edit', target.closest(`#editBtn`));
                    }
                    
                });
            }
        });
    }
});