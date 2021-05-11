$(document).ready(function () {
    pagenum = 1;
    function AutoRotate() {
      var myele = null;
      var allElements = document.getElementsByTagName("label");
      for (var i = 0, n = allElements.length; i < n; i++) {
        var myfor = allElements[i].getAttribute("for");
        if (myfor !== null && myfor == "slide_2_" + pagenum) {
          allElements[i].click();
          break;
        }
      }
      if (pagenum == 4) {
        pagenum = 1;
      } else {
        pagenum++;
      }
    }
    setInterval(AutoRotate, 5000);
  });
  

  // Contact Form
  $(function()
{
    function after_form_submitted(data)
    {
        if(data.result == 'success')
        {
            $('form#reused_form').hide();
            $('#success_message').show();
            $('#error_message').hide();
        }
        else
        {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val)
            {
                $('#error_message ul').append('<li>'+key+':'+val+'</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function()
            {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' );
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });

        }//else
    }

	$('#reused_form').submit(function(e)
      {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function()
        {
            $btn = $(this);
            $btn.prop('type','button' );
            $btn.prop('orig_label',$btn.text());
            $btn.text('Sending ...');
        });


                    $.ajax({
                type: "POST",
                url: 'handler.php',
                data: $form.serialize(),
                success: after_form_submitted,
                dataType: 'json'
            });

      });
});

// Generating Copyright Year Dynamically
let getYear = new Date().getFullYear();
let yearID = document.getElementById('copyrightYear').textContent= getYear;