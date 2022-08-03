const logic = require('../js/logic');

describe("Testing Data Clone",  () =>  {

    test("cloneData() should clone an object",  () => {
      let obj = {id: 1, name: "USD", price: "20$"};
      let actual = logic.cloneData(obj);
      expect(actual).toEqual({id: 1, name: "USD", price: "20$"});
    });


}); 

