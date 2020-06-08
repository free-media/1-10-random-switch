'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const results = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    btn.textContent = results[Math.floor(Math.random() * results.length)];
  });
}