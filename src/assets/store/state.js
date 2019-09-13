/* eslint-disable */
let defaultCity = '桂林',
  defaultName = 'glpla54414';
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

try {
  if (localStorage.name) {
    defaultName = localStorage.name
  }
} catch (e) {}

export default {
  city: defaultCity,
  name: defaultName
}
