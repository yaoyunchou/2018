export function indexOf (items, key, val) {
  let index = 0
  const notFound = -1

  if (!items || !items.length || !key) {
    return notFound
  }
  for (let item of items) {
    if (item[key] === val) {
      return index
    }
    index++
  }
  return notFound
}

export function remove (items, key, val) {
  const index = indexOf(items, key, val)
  if (index === -1) {
    return null
  }

  return items.splice(index, 1)
}

export function find (items, key, val) {
  const index = indexOf(items, key, val)
  if (index === -1) {
    return null
  }

  return items[index]
}
