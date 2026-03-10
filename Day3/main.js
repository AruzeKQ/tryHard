// Array.prototype.myMap= function(callBack){
//     var lengthValue = this.length;
//     for (var i = 0; i < lengthValue; ++i){
//         callBack(this[i]);
//     }
// }



// var courses = [
//     'Java',
//     'Ruby',
//     'C++'
// ];

// courses.myMap(function(course, index){
//     console.log(course)
// });


// Array.prototype.myFilter = function(cb) {
//     var output = [], lengthValue = this.length
//     for(var i = 0; i < lengthValue; ++i){
//        var results = cb(this[i], i, this) // Tra ve true hoac false
//        if(results){
//         output.push(this[i]);
//        }
//     }
//     return output;
// }


// const numbers = [1, 2, 3, 4];

// console.log(numbers.myFilter(function (number) {
//     return number % 2 === 0;
// })); // Output: [2, 4]

// console.log(numbers.myFilter(function (number, index) {
//     return index % 2 === 0;
// })); // Output: [1, 3]

// console.log(numbers.myFilter(function (number, index, array) {
//     return array.length % 2 === 0;
// })); // Output: [1, 2, 3, 4]

// var headingNodes = document.querySelector('h1');
// headingNodes.title = 'skibidi'

// console.log(headingNodes.getAttribute('title'))

// function render(html) {
//     var htmlNode = document.querySelector('ul');
//     htmlNode.innerHTML = html;
//     return htmlNode
// }

//  render(`
//     <li>Khóa học HTML</li>
//     <li>Khóa học JS</li>
//      <li>Khóa học PHP</li>
//  `)


var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var stringNode = courses.map(function(course){
        return `<li>${course}</li>`
    })
    stringNode.join("")
}