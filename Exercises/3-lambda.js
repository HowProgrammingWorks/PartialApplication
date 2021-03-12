'use strict';

const tagged = (pref, str) => `[${pref}] ${str}`;

const tagDate = str => {
  const date = new Date();
  let month = '' + (date.getMonth() + 1);
  let day = '' + date.getDate();
  const year = date.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  const cdate = [year, month, day].join('-');
  return tagged(cdate, str);
};

module.exports = { tagDate };
