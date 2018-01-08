'use strict'

const agent = {
  id: 1,
  uuid: 'yyy-yyy-yyy',
  name: 'fixture',
  username: 'universe',
  hostname: 'host.test',
  pid: 0,
  connected: true,
  createdAt: new Date(),
  updatedAt: new Date()
}

function extend (obj, values) {
  const clone = Object.assign({}, obj)
  return Object.assign(clone, values)
}

const agents = [
  agent,
  extend(agent, {id: 2, uuid: 'yyy-yyy-rty', connected: false, username: 'test'}),
  extend(agent, {id: 3, uuid: 'yyy-yyy-yyx'}),
  extend(agent, {id: 4, uuid: 'yyy-yyy-yyz', username: 'test'})
]

module.exports = {
  single: agent,
  all: agents,
  connected: agents.filter(a => a.connected),
  universe: agents.filter(a => a.username === 'universe'),
  byUuid: id => agents.filter(a => a.uuid === id).shift(),
  findById: id => agents.filter(a => a.id === id).shift()
}
