export function lset(key, i, value) {
  if (!this.data.has(key)) {
    throw new Error('no such key')
  }

  if (this.data.has(key) && !(this.data.get(key) instanceof Array)) {
    throw new Error(`Key ${key} does not contain a list`)
  }

  const index = parseInt(i, 10)
  const list = this.data.get(key) || []
  list[index < 0 ? list.length + index : index] = value
  this.data.set(key, list)

  return 'OK'
}

export function lsetBuffer(...args) {
  const val = lset.apply(this, args)
  return Buffer.from(val)
}
