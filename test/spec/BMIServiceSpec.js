describe('BMIService', function(){
    it('Should calculate the BMI given a height and weight', function(){    
        expect(BMIService.getIndex(75, 1.71)).toBe(25.64891761567662);
    });

    it('Should return null for a non valid number', function(){
        expect(BMIService.getIndex('1', '')).toBe(null);
    });    
});