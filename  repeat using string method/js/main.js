var string = "I am jayasri from neyveli.I have an completed master of computer application from cuddalore",
split = string.split(" "),
obj = {};
for ( i = 0; i < split.length; i++) 
{
  if (obj[split[i]] === undefined) 
  {
    obj[split[i]] = 1;
  } 
  else 
  {
    obj[split[i]]++;
  }
}

console.log(obj);