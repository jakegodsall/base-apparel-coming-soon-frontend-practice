const form = document.querySelector('form');

const isEmail = testStr => {
	var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	return pattern.test(String(testStr).toLowerCase());
};

const onSumbitHandler = event => {
	event.preventDefault();

	const emailAddress = event.target.elements.email.value;

	if (!isEmail(emailAddress)) {
		// show error message
		const errorMsg = document.querySelector('.error-message');
		errorMsg.innerText = 'Please provide a valid email';
		errorMsg.style.display = 'block';

		// show error icon
		const errorIcon = document.querySelector('.error-icon');
		errorIcon.style.display = 'block';

		console.log(errorMsg);
	}
};

form.addEventListener('submit', onSumbitHandler);
