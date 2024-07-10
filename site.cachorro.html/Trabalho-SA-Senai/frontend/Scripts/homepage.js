var dropbtn = document.querySelector('.dropbtn');

dropbtn.addEventListener('click', function() {
    var dropdownContent = document.querySelector('.dropdown-content');

    if (dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show');
    } else {
        dropdownContent.classList.add('show');
    }
});

window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdownContent = document.querySelector('.dropdown-content');

        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
});
