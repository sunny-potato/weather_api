export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const daysOftheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function getLocalDate(date) {
  const localYear = date.slice(0, 4);
  const slicedMonth = Number(date.slice(5, 7));
  const localMonth = months[slicedMonth - 1];
  const localDate = Number(date.slice(8, 10));
  let localDay;
  const clientLocal = new Date();
  const clientLocalDate = clientLocal.getDate();
  const clientLocalDay = clientLocal.getDay();

  if (localDate == clientLocalDate) {
    localDay = daysOftheWeek[clientLocalDay];
  } else if (localDate > clientLocalDate) {
    localDay = daysOftheWeek[clientLocalDay + 1];
    if (clientLocalDay == 6) {
      localDay = daysOftheWeek[0];
    }
  } else {
    localDay = daysOftheWeek[clientLocalDay - 1];
    if (clientLocalDay == 0) {
      local = daysOftheWeek[6];
    }
  }
  const completeLocalDate = `${localDay}, ${localMonth}  ${localDate} ${localYear}`;
  displayLocalDate(completeLocalDate);
}

function displayLocalDate(data) {
  const localFullDate = document.querySelector(".localDate");
  localFullDate.innerHTML = `${data}`;
}

let localTimeZone = undefined;
export function setTimeZone(timeZone) {
  localTimeZone = timeZone;
}

export function getLocalTime() {
  const searchedTimezone = new Date().toLocaleString("en-GB", {
    timeZone: localTimeZone,
  });
  let localHours = Number(searchedTimezone.slice(12, 14));
  let localMinutes = Number(searchedTimezone.slice(15, 17));
  let localSeconds = Number(searchedTimezone.slice(18, 20));
  let amORpm = "AM";

  if (localHours > 12) {
    localHours = localHours - 12;
    amORpm = "PM";
  }
  if (localHours < 10) {
    localHours = `0${localHours}`;
  }
  if (localMinutes < 10) {
    localMinutes = `0${localMinutes}`;
  }
  if (localSeconds < 10) {
    localSeconds = `0${localSeconds}`;
  }

  const completeLocalTime = `${localHours} : ${localMinutes} : ${localSeconds} ${amORpm}`;
  const localFullTime = document.querySelector(".localTime");
  localFullTime.innerHTML = `${completeLocalTime}`;
}
setInterval(getLocalTime, 1000);
