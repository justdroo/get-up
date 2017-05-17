###
============================
Register the Service Worker
============================
###

navigator.serviceWorker.register './sw.js'

###
============================
Instant Gratification/ Testing
============================
###

button = document.getElementById 'test-notification'

button.addEventListener('click', () ->
  Notification.requestPermission( () ->
    navigator.serviceWorker.ready.then( (registration) ->
      options = {
        body: 'shake yo hands, stretch those thighs, take a walk, get some water, take a break',
        icon: '../../media/grow.png',
        badge: '../../media/grow.png',
        silent: true
      }
      registration.active.postMessage(
        {title: 'Move dat body', options: options}
      )
    )
  )
)
###
============================
45 minute interval pushes
============================
###

window.setInterval(
  () ->
    Notification.requestPermission( () ->
      navigator.serviceWorker.ready.then( (registration) ->
        options = {
          body: 'shake yo hands, stretch those thighs, take a walk, get some water, take a break',
          icon: '../../media/grow.png',
          badge: '../../media/grow.png',
          silent: true
        }

        registration.active.postMessage({title: 'Move dat Body', options: options})
        )
    )
, 2.7e+6)
