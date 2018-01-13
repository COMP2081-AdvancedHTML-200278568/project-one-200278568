 // carousel functions
 $('.carousel').carousel({
    interval: 2000
  })

// scrollspy function
// $('aside').scrollspy({ target: '#model-info' })

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})