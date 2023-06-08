document.addEventListener('DOMContentLoaded', function() {
    var infoSeconds = document.querySelectorAll('.info_main_second');
    var infoThirds = document.querySelectorAll('.info_main_third');

    infoSeconds.forEach(function(infoSecond, index) {
        infoSecond.addEventListener('click', function() {
            var infoThird = this.nextElementSibling;
            var img = infoSecond.querySelector('.arrow_block');

            if (infoThird.classList.contains('visible')) {
                infoThird.classList.remove('visible');
                img.classList.remove('reverse_arrow_block');
            } else {
                infoThirds.forEach(function(infoThird) {
                    infoThird.classList.remove('visible');
                });
                var activeImg = document.querySelector('.arrow_block.reverse_arrow_block');
                if (activeImg) {
                    activeImg.classList.remove('reverse_arrow_block');
                }
                infoThird.classList.add('visible');
                img.classList.add('reverse_arrow_block');
            }
        });
    });
});

function goToLink(link) {
    window.location.href = link;
}
function toggleDropdown(element) {
    if (window.innerWidth > 1370) {
        return;
    }
    var dropdownContent = element.nextElementSibling;
    var dropdownTrigger = element;

    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        dropdownTrigger.classList.remove("active");
    } else {
        dropdownContent.style.display = "block";
        dropdownTrigger.classList.add("active");
    }
}
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('myForm');
    var inputs = form.querySelectorAll('input[required], textarea[required]');

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', function() {
            if (this.validity.valid) {
                this.classList.remove('invalid');
            } else {
                this.classList.add('invalid');
            }

            var label = this.parentNode.querySelector('label');
            var span = this.parentNode.querySelector('span');

            if (this.value !== '') {
                label.classList.add('active');
                span.classList.add('active');
            } else {
                label.classList.remove('active');
                span.classList.remove('active');
            }
        });

        inputs[i].addEventListener('focus', function() {
            var label = this.parentNode.querySelector('label');
            if (label) {
                label.classList.add('active');
            }
        });

        inputs[i].addEventListener('blur', function() {
            var label = this.parentNode.querySelector('label');
            if (label && this.value === '') {
                label.classList.remove('active');
            }
        });
    }

    var phoneNumberInput = document.getElementById('phoneNumber');
    phoneNumberInput.addEventListener('input', function() {
        var phoneNumberValue = this.value.replace(/\D/g, ''); // Удаляем все нецифровые символы из номера телефона
        var phoneNumberRegex = /^[78]\d{10}$/; // Проверяем на соответствие формату 7XXXXXXXXXX или 8XXXXXXXXXX

        if (phoneNumberRegex.test(phoneNumberValue)) {
            this.setCustomValidity(''); // Сбросить пользовательское сообщение об ошибке
            this.classList.remove('invalid');
        } else {
            this.setCustomValidity('Неверный формат номера'); // Установить пользовательское сообщение об ошибке
            this.classList.add('invalid');
        }
    });

    form.addEventListener('submit', function(event) {
        var isValid = true;
        for (var i = 0; i < inputs.length; i++) {
            if (!inputs[i].validity.valid) {
                inputs[i].classList.add('invalid');
                isValid = false;
            }
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});
