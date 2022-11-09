'use strict';

const tagged = (pref, str) => `[${pref}] ${str}`;

const tagDate = (str) => {
  const date = new Date().toISOString().slice(0, 10);
  return tagged(date, str);
};

module.exports = { tagDate };
