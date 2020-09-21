var floatAge, floatDays, floatWeeks, floatFortnights, floatMonths;
    floatAge = parseFloat(prompt("Enter age in years"));
    
     floatDays = parseFloat(floatAge*365.25).toFixed(3);    
      floatWeeks = parseFloat(floatDays/7).toFixed(3);  
     floatFortnights = parseFloat(floatDays/14).toFixed(3);
     floatMonths = parseFloat(floatAge*12).toFixed(3);
    
 alert("Since you are " + floatAge + " years old," +
       " you have also lived " + floatDays + " days" +
       ", " + floatWeeks + " weeks" +
       ", " + floatFortnights + " fortnights" +
       ", or " + floatMonths + " months in your lifetime.");