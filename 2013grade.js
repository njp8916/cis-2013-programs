var floatHwPts, floatMidPts, floatFinPts, floatTotalPts, intGradeOption, stringMessage;

floatHwPts = parseFloat(prompt("Enter Total Homework pts"));
while(floatHwPts<0 || floatHwPts>200)
    {
      alert("Value has to be between 0 and 200");
      floatHwPts = parseFloat(prompt("Enter Total Homework pts"));
    }

floatMidPts = parseFloat(prompt("Enter Midterm Exam pts"));
floatFinPts = parseFloat(prompt("Enter Final Exam pts"));

floatTotalPts =(floatHwPts + floatMidPts + floatFinPts);

intGradeOption = prompt("Enter 0 if grade Pass/Fail and 1 otherwise");
{
if(intGradeOption==0)
    {
     if (floatTotalPts >= 80)
         {
             alert("You have Passed");
        }
     else
         {
       alert("You have Failed");
         }
    }
else
    {
        if (floatTotalPts>=90)
        {
           stringMessage = ("A");
        }
        else
            if (floatTotalPts>=80 && floatTotalPts<90)
            {
                stringMessage= ("B");
            }
            else
                if (floatTotalPts>=70 &&floatTotalPts<80)
                {
                    stringMessage = ("C");
                }
                else
                    if (floatTotalPts>=60 && floatTotalPts<70)
                    {
                       stringMessage = ("D"); 
                    }
                    else
                        if (floatTotalPts>=50 && floatTotalPts<60)
                        {
                            stringMessage = ("F");
                        }
    }
alert(stringMessage)
}