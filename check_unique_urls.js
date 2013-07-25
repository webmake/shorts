var a=Array();a1=Array();j=0;
for(i=0;i<document.links.length;i++){
  if(document.links[i].rel=="")
    a[j++]=document.links[i].href;
  a1[i]=document.links[i].href;
}
a.sort;
a1.sort;
var b=Array();j=0;
for(i=0;i<a.length;i++)
  if(j==0 || b[j-1]!=a[i])
    b[j++]=a[i];
var b1=Array();j=0;
for(i=0;i<a1.length;i++)
  if(j==0 || b1[j-1]!=a1[i])
    b1[j++]=a1[i];
console.log(a1.length+" - url");
console.log(b1.length+" - unikalių");
console.log(a.length+" - viso be no follow");
console.log(b.length+" - unikalių be no follow");
