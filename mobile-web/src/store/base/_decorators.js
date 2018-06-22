export function mutation (target, name, descriptor) {
  let method = descriptor.value
  target.mutations = target.mutations || {}
  if (target.mutations[name]) {
    console.warn(`vuex Mutation 声明重名===>${name}`)
  }
  target.mutations[name] = (state, playload, cb) => {
    return method.call(target, state, playload, this, cb)
  }
}

export function action (target, name, descriptor) {
  let method = descriptor.value
  target.actions = target.actions || {}
  if (target.actions[name]) {
    console.warn(`vuex Action 声明重名===>${name}`)
  }
  target.actions[name] = (context, playload, cb) => {
    return method.call(target, context, playload, this, cb)
  }
}

export function getter (target, name, descriptor) {
  let method = descriptor.value
  target.getters = target.getters || {}
  if (target.getters[name]) {
    console.warn(`vuex Getter 声明重名===>${name}`)
  }
  target.getters[name] = method
}
