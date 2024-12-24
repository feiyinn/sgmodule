import Client from './client'

let $ 
if (typeof $rocket !== 'undefined') {
  $ = new ShadowrocketClient('YouTube')
} else {
  $ = new SurgeClient('YouTube') 
}

export { $ }
