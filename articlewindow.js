const openWindows = document.querySelectorAll('.openPopup');

openWindows.forEach((item) => {
    item.addEventListener('click', function () {
        document.getElementById('overlay').classList.remove('hidden');
        document.getElementById('popup').classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
    });

    document.getElementById('closePopup').addEventListener('click', function () {
        document.getElementById('overlay').classList.add('hidden');
        document.getElementById('popup').classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    });
});
