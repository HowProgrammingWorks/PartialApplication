'use strict';

const tagged = (pref, str) => `[${pref}] ${str}`;

// Define function tagDate that prepends current date to the string.
// E.g. tagDate('My String') === '[2019-11-14] My String'
// Use function tagged to implement tagDate.

const tagDate = (str) => {
  const today = new Date().toISOString().split('T')[0];
  return tagged(today, str);
};

module.exports = { tagDate };
