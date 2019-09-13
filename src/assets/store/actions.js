/* eslint-disable */
export default {
  change(ctx, sum) {
    window.console.log("actions: ", sum);
    ctx.commit('changeState', sum)
  }
}
