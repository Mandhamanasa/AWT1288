const person = {
    name: 'John',
    age: 30,
    country: 'USA',
    address: {
      city: 'New York',
      zip: '10001'
    },
    hobbies: ['reading', 'coding', 'traveling']
  }; 
  const { name: fullName, age, country = 'Unknown', address: { city, zip }, hobbies: [firstHobby, ...otherHobbies] } = person;
  
  console.log(fullName);       
  console.log(age);           
  console.log(country);       
  console.log(city);          
  console.log(zip);          
  console.log(firstHobby);  
  console.log(otherHobbies);  
  const numbers = [1, 2, 3, 4, 5];
  const [first, , third = 0, ...rest] = numbers;
  console.log(first); 
  console.log(third);  
  console.log(rest);  
  const company = {
    name: 'TechCo',
    location: {
      city: 'San Francisco',
      country: 'USA'
    },
    employees: ['Alice', 'Bob', 'Charlie']
  };
  const { name: companyName, location: { city: companyCity, country: companyCountry }, employees: [firstEmployee, ...otherEmployees] } = company;
  console.log(companyName);  
  console.log(companyCity); 
  console.log(companyCountry); 
  console.log(firstEmployee); 
  console.log(otherEmployees);

  

  