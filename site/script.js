var names=new array();
names[0]="Yaakov";
names[1]="John";
names[2]="Jen";
names[3]="Jason";
names[4]="Paul";
names[5]="Frank";
names[6]="Larry";
names[7]="Paula";
names[8]="Laura";
names[9]="Jim";


for (var i =0; i< names.length; i++) {
  if(names[i].chartAt(0)==='J'|| names[i].chartAt(0)==='j'){
    console.log("GoodBye" + Snames[i])
  }
  else {
    console.log("Hello"+names[i])
  }
}