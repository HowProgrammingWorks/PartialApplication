'use strict';

const tagged = (pref, str) => `[${pref}] ${str}`;

// Define function tagDate that prepends current date to the string.
// E.g. tagDate('My String') === '[2019-11-14] My String'
// Use function tagged to implement tagDate.

const tagDate = (str) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().substring(0, 10);
  return tagged(formattedDate, str);
};

module.exports = { tagDate };
