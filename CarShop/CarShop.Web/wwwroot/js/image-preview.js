(function () {
    function setupPostPreview() {
        const preview = document.getElementById('image-preview');
        const input = document.getElementById('image-upload');

        if (input && preview) {
            input.addEventListener('change', (event) => {
                preview.src = input.value;
            });
        }
    }

    window.addEventListener('load', setupPostPreview)
})();
