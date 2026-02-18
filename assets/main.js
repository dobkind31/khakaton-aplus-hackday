document.addEventListener('DOMContentLoaded', function() {
	document.querySelectorAll('.faq details').forEach(function(details) {
		details.addEventListener('click', function(e) {
			// If the click came from the <summary> (or inside it), allow the default toggle
			if (e.target.closest('summary')) return;
			// Otherwise toggle the open state when clicking the details area/text
			details.open = !details.open;
		});
	});
});