//your JS code here. If required.
function firstnrc(str)
	{
		for(let i=0; i<str.length ; i++)
		{
			if(str.indexOf(str[i])===str.lastIndexOf(str[i]))
			{
				return str[i];
			}
		}
	}
 
let inputStr=prompt("Enter a string");
let result=firstnrc(inputStr);
alert(result? result : null);