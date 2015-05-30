describe('BMIService', function(){
    it('Should calculate the BMI given a height and weight' function(){
       var
        weight = 75,
        height = 1,71;
    
        expect(BMIService.getIndex(weight, height)).toBe(25,64891761567662);
    });

    it('Should return null for a non valid number' function(){
        expect(BMIService.getIndex('1', '').toBe(null);
    });    
});