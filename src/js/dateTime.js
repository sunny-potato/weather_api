const months = [
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
const date = "2023-02-05 17:41";

export function getLocalDate(date) {
  const localYear = date.slice(0, 4);
  const slicedMonth = Number(date.slice(5, 7));
  const localMonth = months[slicedMonth - 1];
  const localDate = Number(date.slice(8, 10));
  let localDay;
  //   console.log(localYear, slicedMonth, localMonth, localDate);
  const clientLocalDate = new Date();
  //   console.log("clientlocaldate : ");
  const dateDifference = localDate - clientLocalDate.getDate();
  console.log(
    dateDifference,
    localDate,
    clientLocalDate.getDate(),
    clientLocalDate.getDay() + 1
  );
  if (dateDifference == 0) {
    localDay = daysOftheWeek[clientLocalDate.getDay()];
  } else if (dateDifference == -1) {
    localDay = daysOftheWeek[clientLocalDate.getDay() - 1];
  } else if (dateDifference == 1) {
    localDay = daysOftheWeek[clientLocalDate.getDay() + 1];
  }
  //   console.log(localDay);
  const completeLocalDate = `${localDay}, ${localDate} ${localMonth} ${localYear}`;
  //   console.log(completeLocalDate);
  return completeLocalDate;
}

export function getLocalTime(time) {
  const localHour = Number(time.slice(11, 13));
  const localMinute = Number(time.slice(14, 16));
  const completeLocalTime = `${localHour} : ${localMinute}`;
  //   console.log(completeLocalTime);
  return completeLocalTime;
}
