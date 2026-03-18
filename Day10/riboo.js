// Object Validator
function Validator(options){
    var formElement = document.querySelector(options.form)

    function validate(inputElement, rule){
        // lấy ra giá trị input 
        const errorMessage = rule.test(inputElement.value);
        const errorElement = inputElement.parentElement.querySelector('.error');

        if(errorMessage){
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }

    if(formElement){
        options.rules.forEach(rule => {
            // từ formElement lấy ra trường được chọn
            let inputElement = formElement.querySelector(rule.selector)
            const errorElement = inputElement.parentElement.querySelector('.error');
            
            if(inputElement){
                // Truong hop blur khoi input
                inputElement.addEventListener('blur',() => {
                    validate(inputElement, rule)
                })
                // 
                inputElement.addEventListener('input',() =>{
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                })
            }

        });
    }
}



// Dinh nghia cac rules
Validator.isRequired = function(selector){
    return {
        selector: selector,
        test: function(value){
            return value.trim() ? undefined : 'Vui long nhap truong nay!!'
        }
    }
}

Validator.isEmail = function(selector){
    return {
        selector: selector,
        test: function(value){
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Truong nay phai la email!!!'
        }
    }
}

Validator.minLength = function(selector, min){
    return {
        selector: selector,
        test: function(value){
            return value.length >= min ? undefined : 'Vui long nhap toi thieu 6 ki tu!!!'
        }
    }
}

Validator.isConfirm = function(selector, getConfirmValue){
    return {
        selector: selector,
        test: function(value){
            return value === getConfirmValue() ? undefined : 'Mật khẩu nhập lại không đúng!!!';
        }
    }
}