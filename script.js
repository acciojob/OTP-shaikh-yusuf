//your JS code here. If required.
  function focusNext(currentInput) {
            const maxLength = parseInt(currentInput.getAttribute('maxlength'));
            const nextInput = currentInput.nextElementSibling;

            if (currentInput.value.length === maxLength && nextInput) {
                nextInput.focus();
            }
        }

        function focusPrev(currentInput, event) {
            const prevInput = currentInput.previousElementSibling;

            if (event.key === 'Backspace' && !currentInput.value && prevInput) {
                prevInput.focus();
            }
        }