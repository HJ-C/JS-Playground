// constructor & prototype 활용

// 1. 주어진 오브젝트 자료 constructor로 만들기
// var student1 = {name:'Kim', age :20}
// var student2 = {name:'Park', age :21}
// var student3 = {name:'Lee', age :22}

function Student(이름, 나이){
    this.name = 이름
    this.age = 나이
    sayHi = function(){
        console.log(`안녕 나는 ${this.name} 이야`)
    }
}

var 학생1 = new Student('Kim',20)
var 학생2 = new Student('Park',21)
var 학생3 = new Student('Lee',22)

// 2. 다음 코드의 출력 결과
function Parent(){
    this.name = 'Kim'
}
var a = new Parent()

a.__proto__.name = 'Park' //prototype에 {name : 'Park'}을 추가하라는 것 
console.log(a.name) // 기존에 값이 저장 되어있던 'Kim'출력

//3. 오류 원인
function Student(이름, 나이){
    this.name = 이름;
    this.age = 나이;
  }
  
  Student.prototype.sayHi = () => {
      console.log('안녕 나는 ' + this.name + '이야');
    }
  var 학생1 = new Student('Kim', 20);
  
  학생1.sayHi(); 
// 원인 : arrow function의 this는 전역변수 이므로 this가 다른걸 참조함

// 4. array 내에 있는 3이라는 값을 제거하는 함수

Array.prototype.remove3 = function(){
    for (var i = 0; i < this.length; i++) {
      if ( this[i] === 3 ) {
        this.splice(i,1);
      }
    }
  };
  
  var arr = [1,2,3,4];
  arr.remove3();
  
  console.log(arr); //[1,2,4]