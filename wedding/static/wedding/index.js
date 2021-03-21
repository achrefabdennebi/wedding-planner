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
        const deleteTask = function(msg, target) {
            console.log(msg, target);
        }
    
        const editTask = function(msg, target) {
            console.log(msg, target);
        }

        buttons.forEach(node => {
            const { id } = node;
            if (id === `deleteBtn` || id === `editBtn` ) {
                node.addEventListener('click', (event) => {
                    const { target } = event;
                    const { id } = target;

                    if (id === `deleteBtn` ) {
                       deleteTask(`Delete task`, target);
                    }

                    if (id === `editBtn` ) {
                        editTask(`Edit task`, target);
                    }
                });
            }
        });
    }
});