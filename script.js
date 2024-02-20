document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('Input');
    const boxes = document.querySelectorAll('.container .box');


      boxes.forEach(box => {
      box.addEventListener('dragover', function(e) {
       e.preventDefault(); 
       box.classList.add('drag-over'); 
        });

    box.addEventListener('dragleave', function(e) {
            box.classList.remove('drag-over'); 
        });

        box.addEventListener('drop', function(e) {
            e.preventDefault(); 
            box.classList.remove('drag-over');

            const files = e.dataTransfer.files;
            if(files.length > 0 && files[0].type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    box.innerHTML = `<img src="${e.target.result}" alt="image" style="max-width: 100%; height: auto;">`; // Box içərisində şəkli göstəririk
                };
                reader.readAsDataURL(files[0]);
            } else {
                alert('yalniz sekil olsun');
            }
        });
    });

    
    input.addEventListener('change', function(e) {
        if(e.target.files.length > 0 && e.target.files[0].type.startsWith('image/')) {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
        }
    });
});
 