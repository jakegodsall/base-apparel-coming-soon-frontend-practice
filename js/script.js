const form = document.querySelector('form');

const isEmail = testStr => {
	var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	return pattern.test(String(testStr).toLowerCase());
};

const onSumbitHandler = event => {
	event.preventDefault();

	const emailAddress = event.target.elements.email.value;

	const errorMsg = document.querySelector('.error-message');
	const errorIcon = document.querySelector('.error-icon');

	// if email is not valid, render error message
	if (!isEmail(emailAddress)) {
		// show error message
		errorMsg.innerText = 'Please provide a valid email';
		errorMsg.style.display = 'block';

		// show error icon
		errorIcon.style.display = 'block';

		console.log(errorMsg);
	} else {
		if (errorMsg.style.display == 'block') {
			errorMsg.style.display = 'none';
			errorIcon.style.display = 'none';
		}
	}
};

form.addEventListener('submit', onSumbitHandler);
