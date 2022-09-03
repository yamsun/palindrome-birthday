const dobEl = document.querySelector("#dob");
const showBtn = document.querySelectorAll("button")[0];
const msg = document.querySelector("#message");

const getAllFormatDate = (dateText) => {
  let res = {};
  [yyyy, mm, dd] = dateText.split("-");
  console.log(yyyy);
  console.log(mm);
  console.log(dd);

  var ddmmyyyy = dd + mm + yyyy;
  var mmddyyyy = mm + dd + yyyy;
  var yyyymmdd = yyyy + mm + dd;
  var ddmmyy = dd + mm + yyyy.slice(-2);
  var mmddyy = mm + dd + yyyy.slice(-2);
  var yymmdd = yyyy.slice(-2) + mm + dd;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
};

const checkPalindrome = (str) => {
  return str == str.split("").reverse().join("");
};

showBtn.addEventListener("click", () => {
  var allFormatDates = getAllFormatDate(dobEl.value);
  var res = allFormatDates.map((i) => checkPalindrome(i)).includes(true);
  if (!res) {
    msg.innerHTML = "Not a Plaindrome !";
  } else {
    msg.innerHTML = "Its a Plaindrome !";
  }
});
