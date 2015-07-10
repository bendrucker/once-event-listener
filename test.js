'use strict'

var test = require('tape')
var EventTarget = require('dom-event-target')
var once = require('./')

test(function (t) {
  t.plan(2)
  var target = new EventTarget()
  once(target, 'load', function (a) {
    t.equal(this, target)
    t.equal(a, 1)
  })
  target.send('load', 1)
  target.send('load', 2)
})
