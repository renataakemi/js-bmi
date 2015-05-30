var BMIController = {

    init: function () {
        BMIController.setForm();
    },
    
    setForm: function () {
        var form = document.querySelector('Form');
        form.addEventListener('submit', function(event) {
            alert('Form submitted');
            event.preventDefault();
        });
    },
    
    calculateBMI: function () {
        
    },
    
    showResult: function () {
        
    },
};


// initialization

BMIController.init();