$( document ).ready(function() {
  
  $('.modal-link').click(function() {
    $('.modal-wraper').show();
    $(document).on('click.modal', function(e) {
      if (e.target.className == 'modal-wraper' || e.target.className == 'modal_close') {
        $('.modal-wraper').hide();
        $(document).off('click.modal');
      }
    });
  });

  $('.select').selectmenu();

  $('.form-control').focus(function() {
    $(this).siblings('label').css({'top': '3px', 'font-size': '10px', 'line-height': '10px'});
  });

  $('.form-control').blur(function() {
    if ($(this).val().length === 0) {
      $(this).siblings('label').css({'top': '0', 'font-size': '16px', 'line-height': '50px'});
    }
  });

  $('#email-field').blur(function() {
    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if (testEmail.test(this.value) || $(this).val().length === 0) {
      $(this).parent().removeClass('has-error');
    } else {
      $(this).parent().addClass('has-error');
    }
  });

});