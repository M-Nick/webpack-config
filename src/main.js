/* global document */
/* eslint no-undef: "error" */

import '@/scss/index.scss';

const f = async () => {
  const el = document.createElement('p');
  el.textContent = 'this string is added with js';
  document.body.appendChild(el);
  return 'Promises Works!';
};

f().then(console.log);
