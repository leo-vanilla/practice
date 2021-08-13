 const date = new Date();
let $year = date.getFullYear();
let $month = date.getMonth();
let $date = date.getDate();
let $day = date.getDay();
const year_month = document.getElementById("current-year-month");
const day_date = document.getElementById("current-day-date");

const monthNames =
  [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "August", "Sep", "Oct", "Nov", "Dec"
  ];

const dayNames =
  [
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
  ];



function showClickedDayInfo(event) {

}

  
function showBeforeMonthInfo(event) {


}

function showNextMonthInfo(event) {
  $month += 1;
  console.log($month);
 labelingCalendar($year, $month);
 showCurrentDate($year, $month, 1, 1);
}

function labelingCalendar(year, month) {
  const MAX_DAYS_OF_$month = new Date(year, month + 1, 0).getDate();
  let weeks = 1;
  for (let i = 1; i <= MAX_DAYS_OF_$month; i++) {
    if (new Date(year, month, i).getDay() == 6) {
      document.getElementsByTagName("tr")[weeks].getElementsByTagName("td")[new Date(year, month, i).getDay()].innerText = i;
      document.getElementsByTagName("tr")[weeks].getElementsByTagName("td")[new Date(year, month, i).getDay()].style.color = "black";
      weeks += 1;
      // console.log(weeks); // 왜 7까지 반복?
    } else {
      document.getElementsByTagName("tr")[weeks].getElementsByTagName("td")[new Date(year, month, i).getDay()].innerText = i;
      document.getElementsByTagName("tr")[weeks].getElementsByTagName("td")[new Date(year, month, i).getDay()].style.color = "black";
    }
  }
}

function showCurrentDate(year, month, date, day) {
  day_date.innerText = `${date} / ${dayNames[day]}`;
  year_month.innerText = `${year} - ${monthNames[month]}`;
}

function init () {
  labelingCalendar($year, $month);
  showCurrentDate($year, $month, $date, $day);
  document.getElementById("right-arrow").addEventListener("click", showNextMonthInfo);
  document.getElementById("left-arrow").addEventListener("click", showBeforeMonthInfo);
  addEventListener("click", showClickedDayInfo)
}

init();