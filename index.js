function $(el) {
	return document.querySelector(el);
}

// EMAIL
$('#email').setCustomValidity('Invalid field.');
$('#email').addEventListener('input', () => {
	if (
		$('#email').value.includes('@gmail.com') ||
		$('#email').value.includes('@outlook.com') ||
		$('#email').value.includes('@yahoo.com') ||
		$('#email').value.includes('@hotmail.com') ||
		$('#email').value.includes('@icloud.com')
	) {
		$('#email').setCustomValidity('');
	} else {
		$('#email').setCustomValidity('Invalid field.');
	}
});

// COUNTRY

$('.form-select').style.color = 'rgb(110, 110, 110)';
$('.form-select').setCustomValidity('Invalid field.');
$('#country').addEventListener('input', () => {
	if ($('.form-select').value == 'select country') {
		$('.form-select').setCustomValidity('Invalid field.');
		$('.form-select').style.color = 'rgb(110, 110, 110)';
	} else {
		$('.form-select').style.color = 'white';
		$('.form-select').setCustomValidity('');
	}
});

// ZIPCODE
$('#zipCode').setCustomValidity('Invalid field.');
$('#zipCode').addEventListener('input', () => {
	if ($('#zipCode').value.length > 5 || $('#zipCode').value.length == 0) {
		$('#zipCode').setCustomValidity('Invalid field.');
	} else {
		$('#zipCode').setCustomValidity('');
	}
});

// PASSWORD

$('#password').setCustomValidity('Invalid field.');
$('#password').addEventListener('input', () => {
	$('#password').value.length > 5
		? $('#password').setCustomValidity('')
		: $('#password').setCustomValidity('Invalid field.');
});

// VERIFY PASSWORD

$('#verify-password').setCustomValidity('Invalid field.');
$('#verify-password').addEventListener('input', () => {
	if ($('#password').value != $('#verify-password').value) {
		$('#password').setCustomValidity('Invalid field.');
		$('#verify-password').setCustomValidity('Invalid field.');
	} else {
		$('#password').setCustomValidity('');
		$('#verify-password').setCustomValidity('');
	}
});
