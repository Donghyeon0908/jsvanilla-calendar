// 오늘의 현재 요일 표기 v
// 오늘의 현재 날짜 표기 v
// 오늘의 현재 월 표기 v
// 오늘의 현재 연도 표기 v
// 일,월,화,수,목,금,토 요일 라벨링 표기v
// 현재 월의 1일이 무슨 요일인지 판별하고, 해당 요일 라벨링에 1일 표기하기v
// 현재 월의 마지막 날짜까지 달력에 표기하기v
// 우측 화살표를 클릭 했을때, 다음 달의 요일 및 날짜 표기v
// 좌측 화살표를 클릭 했을때, 이전 달의 요일 및 날짜 표기v
// 특정 날짜를 클릭 했을때, 상단의 요일 및 날짜 반영하기

const Time =document.getElementById("nowtime");
const calendarDate = document.getElementById("calendar-row")
const left = document.getElementById("left")
const right = document.getElementById("right")
let today = new Date();
let weekday = ["일","월","화","수","목","금","토"]
let toyear = today.getFullYear();
let toDay = today.getDay();
let todate = today.getDate();
let toMonth = today.getMonth();

function NowDate (){
   Time.textContent = `${toyear}년 ${toMonth+1}월 ${todate}일 ${weekday[toDay]}요일`;
}
left.addEventListener("click",lastmonth)
right.addEventListener("click",nextmonth)
function addDay(){
   let row = null;
   let cell = null;
   let cnt = 0; 
   let firstDay = new Date(toyear,toMonth,1).getDay(); //월의 1일 위치
   let lastDay = new Date(toyear,toMonth+1,0).getDate(); // 월의 마지막날 위치
while(calendarDate.rows.length >1){
   calendarDate.deleteRow(calendarDate.rows.length -1);
}
  row = calendarDate.insertRow();
   for(let i=0;i<firstDay;i++){
      cell = row.insertCell();
      cnt += 1;
   }
   for( i=1;i<=lastDay;i++){
       cell = row.insertCell();
      cnt += 1;
      cell.setAttribute('id',i);
      cell.textContent = i
      if(cnt % 7 == 0){
         row = calendarDate.insertRow();
      }
      }
}

function lastmonth(){
   let first = new Date(toyear,toMonth,1)
   let premonth = new Date(first.setDate(first.getDate()-1));
   toMonth = premonth.getMonth();

   addDay();
}


function nextmonth(){
   let last= new Date(toyear,toMonth+1,0)
   let aftermonth = new Date(last.setDate(last.getDate()+1));
   toMonth = aftermonth.getMonth();

   addDay();
}

NowDate ();
addDay();