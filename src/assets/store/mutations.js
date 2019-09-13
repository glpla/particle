/* eslint-disable */
export default {
  changeState(state, num) {
    window.console.log("mutations: ", num);
    state.city = num;
    try {
      localStorage.city = num
    } catch (e) {}
  },
  changeName(state, num) {
    window.console.log("mutations name: ", num);
    state.name = num;
    try {
      localStorage.name = num
    } catch (e) {}
  },
  onGet(state) {
    state.name = '544147571675660glboyglplacnplaman';
    try {
      localStorage.name = '544147571675660glboyglplacnplaman'
    } catch (e) {}
  }
}
