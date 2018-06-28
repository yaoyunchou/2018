import {action, mutation} from '@/store/base'

describe('vuex store action base', () => {
  console.log(action)
  it('should action decorator work correctly', () => {
    // var action = new Action()
    expect(action.actions.getList).toBeInstanceOf(Function)
    expect(action.actions.removeItem).toBeInstanceOf(Function)
    expect(action.actions.createItem).toBeInstanceOf(Function)
    expect(action.actions.clear).toBeInstanceOf(Function)

    expect(action.extend).toBeInstanceOf(Function)
  })
})
describe('vuex store mutation base', () => {
  it('should mutation decorator work correctly', () => {
    expect(mutation.mutations.ITEMS).toBeInstanceOf(Function)
    expect(mutation.mutations.PAGE_NUM).toBeInstanceOf(Function)
    expect(mutation.mutations.PAGE_SIZE).toBeInstanceOf(Function)
    expect(mutation.mutations.REMOVE_ITEM).toBeInstanceOf(Function)
    expect(mutation.mutations.CLEAR).toBeInstanceOf(Function)

    expect(mutation.extend).toBeInstanceOf(Function)
  })
})
describe('vuex store action extend', () => {
  it('should action extend work correctly', () => {
    expect(mutation.mutations.ITEMS).toBeInstanceOf(Function)
    expect(mutation.mutations.PAGE_NUM).toBeInstanceOf(Function)
    expect(mutation.mutations.PAGE_SIZE).toBeInstanceOf(Function)
    expect(mutation.mutations.REMOVE_ITEM).toBeInstanceOf(Function)
    expect(mutation.mutations.CLEAR).toBeInstanceOf(Function)

    expect(mutation.extend).toBeInstanceOf(Function)
  })
})
