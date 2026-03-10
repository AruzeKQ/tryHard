var skibidiApi = 'http://localhost:3000/member';
// Khởi tạo ban đầu: Load web

function start(){
    // Cải thiện 
    getSkibidi(function(member){
        renderData(member);
        deleteMemberHandle();
        updateMemberForm();
    })




    // Lấy dữ liệu để hiển thị ra form
    // getSkibidi(renderData);
    // Thêm thành viên vào trong danh sách
    addMemberHandle();
    // Sửa thông tin thành viên trong danh sách
    updateMemberHandle();
    // Xóa thành viên khỏi danh sách
    // getSkibidi(deleteMemberHandle);
    // Hiển thị thông tin thành viên sửa trong danh sách
    // getSkibidi(updateMemberForm);

}

start(); // Chạy web lần đầu tiên 

// Lấy data từ json server (Fake API)

function getSkibidi(callback){
    fetch(skibidiApi)
        .then(function(response){
            return response.json();
        })
        .then(callback);
}
        
// Lấy 1 member từ trong list

function getMemberById(id, callback){
    fetch(skibidiApi + '/' + id)
        .then(function(response){
            return response.json();
        })
        .then(callback)
}

// Thêm thành viên mới 

function addMember(data, callback){
    var settings = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }
    fetch(skibidiApi, settings)
        .then(function(response){
            return response.json();
        })
        .then(callback)
}

// Xóa thành viên ra khỏi danh sách

function deleteMember(id){
    var settings = {
        method: 'DELETE',
    };
    fetch(skibidiApi + '/' + id, settings)
        .then(function(response){
            return response.json();
        })
        .then(function(){
            getSkibidi(renderData);
        })
    }

// Update thông tin thành viên vào trong DB

function updateMember(id, data){
    var settings = {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(skibidiApi + '/' + id, settings)
        .then(function(response){
            return response.json();
        })
        .then(function(){
            getSkibidi(renderData);
        })
}


// Hiển thị members ra form

function renderData(members){
    // console.log(members)
    var memberList = document.querySelector('#members-list');
    var memberHTML = members.map(function(member){
        return `
                <li>
                    <h4>${member.name}</h4>
                    <p>Age: ${member.age}</p>
                    <p>Role: ${member.role}</p>
                    <button class="btn-delete" id="${member.id}">Xóa</button>
                    <button class="btn-update" id="${member.id}">Sửa</button>
                </li>`;
    }); 
    memberList.innerHTML = memberHTML.join('');
}

// Xử lí data từ form thêm thành viên

function addMemberHandle(){
    var btnAdd = document.querySelector('#create');
    btnAdd.onclick = function(){
        var name = document.querySelector('input[name="name"]').value;
        var age = document.querySelector('input[name="age"]').value;
        var role = document.querySelector('input[name="role"]').value;

        var formData = {
        name: name,
        age: age,
        role: role
    };
    // Thêm thành viên sau khi lấy được data từ form
    addMember(formData);
    };
}

// Hiển thị form edit
var idCurrent = ''; // ID toàn cục để lưu id cần chỉnh sửa
function updateMemberForm(){
    var btnUpdate = document.querySelectorAll('.btn-update');
    // console.log(btnUpdate);
    var btnShow = document.querySelector('#edit-form')
    btnUpdate.forEach(function(btn){
        btn.onclick = function(){
            btnShow.style.display = 'block'; // Hiển thị ra form edit
                getMemberById(this.id, function(member){
                    // Lấy dữ liệu từ chính member để đổ vào trong form
                    document.querySelector('input[name="edit-name"]').value = member.name;
                    document.querySelector('input[name="edit-age"]').value = member.age;
                    document.querySelector('input[name="edit-role"]').value = member.role;
                })
        idCurrent = this.id;   // Lưu id vào trong biến toàn cục 
        }
    })
}

// Cập nhật thông tin cho from edit

function updateMemberHandle(){
    var btnSubmit = document.querySelector('#update-member');
    btnSubmit.onclick = function(){
        var name = document.querySelector('input[name="edit-name"]').value;
        var age = document.querySelector('input[name="edit-age"]').value;
        var role = document.querySelector('input[name="edit-role"]').value;

        var formData = {
            name: name,
            age: age,
            role: role
        }
        updateMember(idCurrent, formData);
    }
}
// Xử lí data từ form để xóa thành viên 

function deleteMemberHandle(){
    var btnDelete = document.querySelectorAll('.btn-delete');
    // console.log(btnDelete);
    btnDelete.forEach(function(btn){
        btn.onclick = function(){
            var deleteIndex = this.id;
            // console.log(deleteIndex);
            deleteMember(deleteIndex);
        }
    })
}
 





