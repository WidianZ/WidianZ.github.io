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
    $(this).parent().addClass('is-active');
  });

  $('.form-control').blur(function() {
    if ($(this).val().length === 0) {
      $(this).parent().removeClass('is-active');
    }
  });

  $('#email-field').blur(function() {
    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if ($(this).val().length === 0) {

    } else if (testEmail.test(this.value)) {
      $(this).parent().addClass('has-success');
    } else {
      $(this).parent().addClass('has-error');
    }
  });

  $('#name-field').blur(function() {
    var testName = /^[a-zA-Zа-яА-Я]+$/;
    if ($(this).val().length === 0) {

    } else if (testName.test(this.value)) {
      $(this).parent().addClass('has-success');
    } else {
      $(this).parent().addClass('has-error');
    }
  });

  $('#name-field, #email-field').focus(function() {
    $(this).parent().removeClass('has-success');
    $(this).parent().removeClass('has-error');
  });

  $('.banner-form_accept').click(function() {
    if ($(this).siblings('.form-group').hasClass('has-error') || !$('#terms-checkbox').is(':checked') || $('.select').val() == null || $(this).siblings('.form-group').children('input').val().length === 0) {
      alert('Форма заполнена не верно!');
    }
  });
});