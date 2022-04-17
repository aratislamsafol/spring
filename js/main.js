// $(document).ready(function(){
//     $('#bar').click(function(){
//         $('#mobile_nav').toggle(120);
//         $('#bar').hide();
//         $('#close').show();
//     })
// });

// $(document).ready(function(){
//     $('#close').click(function(){
//       $('#mobile_nav').toggle(120);
//       $('#bar').show();
//       $('#close').hide();
//     });
//   });

$(document).ready(function(){
    $('#drop').click(function(){
        $('#nav_drop').toggle();
        // $('#nav_drop').hide();
        // $('#drop').show();
    })
});

$(document).ready(function(){
    $('#nav_drop').click(function(){
      $('#drop').toggle();
      // $('#nav_drop').show();
      // $('#drop').hide();
    });
  });

  $(document).ready(function(){
    $('#drop_btn').click(function(){
        $('#nav_drop_btn').toggle();
        // $('#nav_drop').hide();
        // $('#drop').show();
    })
});

$(document).ready(function(){
    $('#nav_drop_btn').click(function(){
      $('#drop_btn').toggle();
      // $('#nav_drop').show();
      // $('#drop').hide();
    });
  });