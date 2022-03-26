// object는 reference type(화살표)라 그냥 복사하면 안된다 = constructor를 사용하자

// 1. 오브젝트 수정/복사
// 오브젝트를 복사할 땐 function 이용

function Push(){
    this.name = 'Kim'
    this.age = 15
}
var student1 = new Push()
var student2 = new Push()

// 2. 오브젝트에 함수 추가
var 학생1 = {
    name : "Kim",
    age : 15,
    sayHi : function() {
        console.log(`안녕하세요 ${학생1.name}입니다`)
    }
}
학생1.sayHi()

// 3. 오브젝트를 뽑을 때 각각 다른 파라미터 값을 부여할 때 
function Fun(이름) {
    this.name = 이름
    this.age = 15
    this.sayHi = function(){
        console.log(`안녕하세요 ${this.name}입니다`)
    }
}
var student1 = new Fun('Park')
var student2 = new Fun('Kim')

//3.5 constructor 활용
// 주석에 있는 상품 오브젝트를 뽑아낼 수 있는 constructor 제작
// 상품마다 부가세() 라는 내부 함수를 실행하면 콘솔창에 * 10% 만큼 부가세금액 출력
// var product1 = {name : 'shirts', price : 50000}
// var product2 = {name : 'pants', price : 60000}

function Products(이름,가격) {
    this.name = 이름
    this.price = 가격
    this.vat = function(){
        console.log(this.price * 0.1)
    }
}

var Product1 = new Products('shirts',50000)
var Product2 = new Products('pants',60000)

Product1.vat()
