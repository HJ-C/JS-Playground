// this
// 1. 그냥쓰기, 일반함수 안에서 쓰면 this는 window

// 2. Object 자료형 내에 this는 부모를 뜻함

function Object() {
    data: 'Kim',
    fn : function () {
        console.log('안녕')
    }
}
Object.fn()
// ()=> 사용 시, this값을 전역변수로 취급

// 3. constructor 안에서 쓰면 constructor로 새로 생성되는 오브젝트
function 기계(){
    this.이름='kim'
}

var 오브젝트 = new 기계()

// 4. eventListener 안에서 쓰면 this는 else.currentTarget이라는 의미

// (1)
document.getElementById('버튼').addEventListener('click', function(e)=> {
    console.log(this)
})

// 여기서 this  = 버튼

// (2)
document.getElementById('버튼').addEventListener('click', function(e)=> {
    var 배열=[1,2,3];
    배열.forEach( function(){
        console.log(this) 
    })
})
// 이벤트 리스너안에 쓴건맞지만 fucntion 안에 또 fucntion은 다른의미로 변한다
// 썡으로 있는 콜백함수는 그냥 일반함수랑 똑같기 때문에 window가 출력된다

// (3) 오브젝트 안에서 콜백함수를 쓴다면?
var 오브젝트 = {
    이름 : ['김', '이', '박']
    함수 : fucntion() {
        오브젝트.이름.forEach(function() {
            console.log(this)
        })
    }
}
// (2)번과 동일하게 window가 나옴



// ()=> 사용시 this값을 함수밖에 있던거(전역변수)를 그대로 씀
// 첨부터 arrow function 쓰거나 this를 사용하지 말기

