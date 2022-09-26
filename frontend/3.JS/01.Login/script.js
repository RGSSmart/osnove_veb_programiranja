const a = window.location.search;
urlParams = new URLSearchParams(a);
console.log(urlParams.get('name'));
console.log(urlParams.get('surname'));
