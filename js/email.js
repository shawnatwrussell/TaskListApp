const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_3mvuphl';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                Swal.fire({
                    title: 'Email Sent',
                    text: 'Your Email Was Sent Sucessfully. I will respond within 24 hours.',
                    icon: 'success',
                    confirmButtonText: 'Awesome'
                })
                myForm.reset()
            }, (err) => {
                btn.value = 'Send Email';
                Swal.fire({
                    title: 'Error!',
                    text: 'Looks like something went wrong!',
                    icon: 'error',
                    confirmButtonText: 'Please Try Again'
                })
            });
    });
