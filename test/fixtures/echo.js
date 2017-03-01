'use strict'

function echo () {
  console.log('{"foo":"bar"}')
  setTimeout(echo, 500)
}

echo()
