// var fullName = "Nguyen Quang Khai";
// alert(fullName);

// console.log('123')
// console.log(fullName)

// confirm('May du trinh khong')

// prompt('May du trinh khong')

// setTimeout(function() {
//     alert('Skibidi')
// }, 1000)

// var a = 2;
// var b = 10;
// var c = a + b

// console.log(c)

// var age = 20
// var nextAge = age + 1
// console.log(nextAge)

// var myObject = {
//     name: 'Quang Khai',
//     age: 20,
//     address: 'Bac Giang'
// }

// function showDialog() {
//     alert('Hi xin chao may con vk!!!')
// }
// showDialog();

// var coursesStr = 'HTML & CSS, JavaScript, ReactJS';
// console.log(coursesStr.split(', '))
// function strToArray(str) {
//     var a = str.split(', ');
//     return a;
// }
// console.log(strToArray(coursesStr));

// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby',
//     'Dart',
// ]
// languages.splice(1, 2)

// console.log(languages)

// var countries = new Array(
//     'Javascript',
//     'PHP',
//     'Ruby',
//     'Dart',
// )
// console.log(countries.length)

// function joinWithCharacter(array, charactor) {
//     var a = array.join(charactor)
//     return a
// }

// // Ví dụ khi sử dụng
// var cars = ['Honda', 'Mazda', 'Mercedes'];

// var result = joinWithCharacter(cars, ' - ');

// console.log(result); // Expected: "Honda - Mazda - Mercedes"

// Viết hàm tại đây
// function getLastElement(skibidi){
//     var a = skibidi[skibidi.length]
//     return a
// }



// // Ví dụ sử dụng
// var animals = ['Monkey', 'Tiger', 'Elephant'];
// console.log(animals.length)
// var result = getLastElement(animals);

// console.log(result); // Expected: "Elephant"
// console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

// var myObject = {
//     name: 'Khai',
//     age: 18,
//     address: 'HaNoi, VN',
//     getName: function(){
//         return this.name;
//     }
// }

// myObject.email = 'moelaurelev193@gmail.com'

// console.log(myObject.getName())

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return this.firstName + this.lastName;
    }
}

var author = new User('Khai', 'Quang', 'Avatar');
author.title = 'Dep trai vl'
var user = new User('Vu', 'Nguyen', 'Avatar');
user.comment = 'ok say hi'
console.log(author.getName());
console.log(user);
