// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("Check that the property 'organization' value is 'nonprofit'" ,()=>{
    expect(launchcode.organization).toBe("nonprofit");
  });

  test("Check that the property 'executiveDirector' value is 'Jeff'" ,()=>{
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("Check that the property 'percentageCoolEmployees' value is '100'" ,()=>{
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("Check that the value of property 'programsOffered' at index 0" ,()=>{
    expect(launchcode.programsOffered[0]).toBe("Web Development");
  });

  test("Check that the value of property 'programsOffered' at index 1" ,()=>{
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
  });

  test("Check that the value of property 'programsOffered' at index 2" ,()=>{
    expect(launchcode.programsOffered[2]).toBe( "Liftoff");
  });

  test("Check that the size of property 'programsOffered'" ,()=>{
    expect(launchcode.programsOffered.length).toBe(3);
  });

  test("Check that the value of property 'programsOffered'" ,()=>{
    let result = launchcode.launchOutput(4);
    expect(result).toBe('Launch!');
  });

  test("Check that the value of property 'programsOffered'" ,()=>{
    let result = launchcode.launchOutput(9);
    expect(result).toBe('Code!');
  });

  test("Check that the value of property 'programsOffered'" ,()=>{
    let result = launchcode.launchOutput(25);
    expect(result).toBe('Rocks!');
  });

  test("Check that the value of launchoutput " ,()=>{
    let result = launchcode.launchOutput(6);
    expect(result).toBe('LaunchCode!');
  });

  test("Check that the value of launchoutput " ,()=>{
    let result = launchcode.launchOutput(15);
    expect(result).toBe('Code Rocks!');
  });

  test("Check that the value of launchoutput " ,()=>{
    let result = launchcode.launchOutput(10);
    expect(result).toBe('Launch Rocks! (CRASH!!!!)');
  });

  test("Check that the value of launchoutput " ,()=>{
    let result = launchcode.launchOutput(30);
    expect(result).toBe('LaunchCode Rocks!');
  });

  test("Check that the value of launchoutput " ,()=>{
    let result = launchcode.launchOutput(1);
    expect(result).toBe("Rutabagas! That doesn't work.");
  });
  
});