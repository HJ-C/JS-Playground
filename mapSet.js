Map : 자료간의 연관성을 표현하기 위해 사용
object 자료형은 자료 이름으로 글자만 가능했지만 Map은 다 가능
Set : 중복자료를 허용하지 않는 Array 비슷한 것

//Map 자료형
//자료 저장 (set)
var person = new Map()
person.set('name', 'Kim')
person.set(100, '나이') // 자료 이름(key값)이 숫자도 가능
person.set([1,2,3], '나이') // 자료이름이 배열도 가능
person.set('age', '20')

//자료 추출 (get)
var person = new Map()
person.get('age')

//자료 삭제 (delete)
var person = new Map()
person.delete('age')

//자료 갯수 세는 법 (size)
var person = new Map()
person.size ('age')

//반복문으로 Map에서 자료 꺼내는법
for ( var key of person.keys() ) {
    console.log(key)
}

//Map 자료형에 직접 자료를 집어넣을 때
var person = new Map([
    ['name', 'Kim'],
    ['age', 20]
])


//Set 자료형
//중복자료를 허용하지 않는 Array 비슷한 것 (결과는 객체로 나옴)
var 출석부 = ['John', 'tom', 'andy', 'tom']
var 출석부2 = new Set(['John', 'tom', 'andy', 'tom']) //결과는 객체안 중복이 제거된 결과

출석부2.add('sally') //추가
출석부2.delete('sally') //제거
출석부2.has('sally') // 있는지 확인
출석부2.size('sally') // 개수 확인

// 결과가 객체로 나오는데 배열로 변경하고 싶다면?
var 출석부 = ['John', 'tom', 'andy', 'tom']
var 출석부2 = new Set(['John', 'tom', 'andy', 'tom'])
출석부 = [...출석부2]