document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  $('#menu').click(function(){
    var elem = document.querySelector('.sidenav');
  var instance = new M.Sidenav(elem);
  instance.open();
   })

   document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });
