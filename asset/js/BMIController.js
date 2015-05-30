var BMIController = {

    init: function () {
        BMIController.setForm();
    },
    
    setForm: function () {
        var form = document.querySelector('Form');
        form.addEventListener('submit', function(event) {
            BMIController.calculateBMI(form);
            event.preventDefault();
        });
    },
    
    calculateBMI: function (form) {
        var 
            weight = parseFloat(form.weight.value),
            height = parseFloat(form.height.value),
            result = 0;
        
            result = BMIService.getIndex(weight, height);
        
            BMIController.showResult(result);
    },
    
    showResult: function (result) {
        var spanResult = document.querySelector('.result');
        spanResult.innerHTML = result.toFixed(2);
    },
};


// initialization

BMIController.init();