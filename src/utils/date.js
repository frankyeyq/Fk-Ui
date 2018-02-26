function getMonthBeginDay(year, month) {
  return new Date(year, month, 1).getDay();
}

function getMonthDays(year, month) {
  return new Date(year, month, 0).getDate()
}

export {
  getMonthBeginDay,
  getMonthDays
}
