const closest = require('closest');

const formValidate = () => {
  const forms = Array.from(document.querySelectorAll('form[data-check-form]'));
  const fieldsText = Array.from(document.querySelectorAll('input[data-check-pattern]'));

  if (forms) {
    forms.forEach(function(form){
      form.addEventListener('submit', function(e){
        let valid = true;
        const fieldsText = Array.from(form.querySelectorAll('input[data-check-pattern]'));

        fieldsText.forEach(function(input){
          if(!checkFieldText(input)) valid = false;
        });

        if(!valid) e.preventDefault();
      });
    });

    fieldsText.forEach(function(input){
      let hasBeenAlreadyBlured = false;
      input.addEventListener('blur', function(){
        checkFieldText(input);
        if(!hasBeenAlreadyBlured) hasBeenAlreadyBlured = true;
      });

      input.addEventListener('input', function(){ if(hasBeenAlreadyBlured) checkFieldText(input); });
    });

    function checkFieldText(input) {
      const regExp = new RegExp(input.dataset.checkPattern, 'gi');
      const result = regExp.test(input.value);
      const errorClass = 'field-text--error';
      const parent = closest(input, '.field-text');
      result ? parent.classList.remove(errorClass) : parent.classList.add(errorClass);
      return result;
    }
  }
};

export {formValidate};
