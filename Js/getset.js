// 1. Getter, Setter 사용이유
// Object 내의 함수들을 괄호없이 쓸 수 있게 만들어주는 키워드
// 데이터의 무결성 보존

// 2. object 데이터 꺼내는 방법
var People ={
    name : 'Kim',
    age : 30,
    nextAge(){
        return this.age+1
    }
}
People.nextAge()
// 이렇게 뽑는 이유
// 내부에 있는 name, age 변수를 건드리지 않아서 실수 방지
// object 안의 데이터가 복잡할 수 록 함수 만들어 놓는게 데이터 꺼내기 쉽다
// 매우 긴 object 안에 원하는 자료 몇개만 뽑고 싶을 때 기능 개발 유용

// 3 함수로 object 데이터를 수정하는 방법
var People ={
    name : 'Kim',
    age : 30,
    setAge(나이){
        this.age = 나이
    }
}
People.setAge(40)
// 실수로 setAge('40')을 쓴다면 기존 데이터가 오염됨(무결성을 보존할 수 없다)
// 이를 보완하고자 안전장치(get,set 키워드 이용)

//4 set 키워드
var People = {
    name : 'Kim',
    age : 30 ,
    set setAge(나이){
        this.age = paseInt(나이)
    }
}
People.setAge = 40
// set 키워드를 통해 등호로 데이터를 입력 가능, 직관적, set(수정하는)함수
// 수정해주는 함수기에 parameter가 한개 꼭 존재해야 함

//5 get 키워드
var People = {
    name : 'Kim',
    age : 30,
    get nextAge(){
        return this.age + 1
    }
}
People.nextAge
// 소괄호 없이 데이터 꺼낼 수 있음, 직관적, get(가져오는)함수
// parameter가 있으면 안되고 함수 내에 return을 가져야 함

// 6 class에서의 get set 키워드
class People{
    constructor(){
        this.name = 'Park'
        this.age = 20
    }
    get nextAge(){
        return this.age + 1 
    }
    set setAge(나이){
        this.age + 1
    }
}
var People1 = new People()

People1.nextAge
People1.setAge = 50
