
function start(){
    addJob();
    deleteJob();
}

start();

function addJob() { 
    const submitForm = document.querySelector("#addButton");
    submitForm.onclick = () => {
        var jobs = document.querySelector("#taskInput").value;
        // console.log(jobs);
        if(jobs !== ''){
            const ulNode = document.querySelector("#taskList");
            var ulHTML = `<li>${jobs}
            <button class="btn-delete">Xóa</button>
            </li>   
                    `
            ulNode.insertAdjacentHTML('beforeend', ulHTML);
            document.querySelector("#taskInput").value = '';
        }
    }
}

function deleteJob(){
    const taskList = document.querySelector('#taskList');
    taskList.addEventListener("click", function(e){
        if(e.target.classList.contains("btn-delete")){
            e.target.parentElement.remove();
        }
    })
}   

