// Lấy ra các Element trong DOM để tránh việc gọi lại
const taskInput = document.querySelector("#taskInput")
const taskList = document.querySelector("#taskList")
const addBtn = document.querySelector("#addButton")

let editTarget = null;
let lastArray = [];
// Hàm khởi tạo
function Start(){
    
    handleEvent();
}

Start(); // Chạy lần đầu tiên

function handleEvent(){
    // Xử lí khi bấm submitForm
    firstStart();
    addBtn.onclick = () => {
        const jobName = taskInput.value.trim();
        if(!jobName){
            return;
        }

        if(editTarget){
            editTarget.querySelector("span").textContent = jobName;

            editTarget = null;
            addBtn.textContent = "Thêm";
        } else {
            lastArray.push(jobName);
            renderView(jobName);
            saveJobs();
        }

        taskInput.value = '';
        taskInput.focus(); // Trỏ chuột lại vị trí ô nhập
        
    }

    // Dùng method nổi bọt
    taskList.addEventListener("click", (e) => {
        if(e.target.matches(".btn-delete")){
            const li = e.target.closest("li") // lấy ra thẻ li gần nhất
            li.remove();
        }

        if(e.target.matches(".btn-fix")){
            const li = e.target.closest("li") // lấy ra thẻ li gần nhất
            const text = li.querySelector("span").textContent;

            taskInput.value = text;
            addBtn.textContent = "Sửa"
            editTarget = li;
        }

        if(e.target.matches(".task-check")){
            
            const li = e.target.closest("li") // lấy ra thẻ li gần nhất
            const span = li.querySelector("span")
            const check = li.querySelector(".task-check")
            if(check.checked){
                span.style.textDecoration = "line-through";
            } else {
                span.style.textDecoration = "";
            }

        }
    })

    taskInput.onkeypress = (e) => {
        if(e.key === 'Enter') {
            addBtn.click();
        }
    }
}

function renderView(job) {
    // Tạo thẻ Li mỗi khi render ra một công việc
    const li = document.createElement("li");
    li.innerHTML = `<span>${job}</span>
                    <button class="btn-delete" >xóa</button>
                    <button class="btn-fix" >sửa</button>
                    <input type="checkbox" class="task-check">`;

    taskList.appendChild(li);

}

function saveJobs(){
    localStorage.setItem("jobs", JSON.stringify(lastArray));
}

function firstStart(){
    let array = JSON.parse(localStorage.getItem("jobs"));

    if(!Array.isArray(array)){
        array = [];
    }

    array.forEach(job => {
        lastArray.push(job);
        renderView(job);
    });;
}