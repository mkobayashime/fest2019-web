export const state = () => ({
  opened: false,
})

export const getters = {
  opened: (state) => state.opened,
}

export const mutations = {
  toggle(state) {
    state.opened = !state.opened
  },
}
