const vehicle = [
    {
      vehicleNumber: "KL 01 BT 2525",
      ownerName: "owner1",
      vehicleStatus: "active",
      registrationDate: "020202"
    },
    {
      vehicleNumber: "MZ 01 T 5186",
      ownerName: "owner2",
      vehicleStatus: "inactive",
      registrationDate: "030301"
    },
    {
      vehicleNumber: "HR 26 BR 9044",
      ownerName: "owner3",
      vehicleStatus: "active",
      registrationDate: "040405"
    },
    {
      vehicleNumber: "KL 02 BM 4659",
      ownerName: "owner4",
      vehicleStatus: "active",
      registrationDate: "050505"
    }
  ];


  const form  = document.getElementById('search');

form.addEventListener('submit', (event) => {
  let id = document.getElementById("num").value;
  console.log(id);
  event.preventDefault();

  let length = Object.keys(vehicle).length;
  let flag = false;

  for (let i=0; i < length; i++) {
    //console.log(vehicle[i].vehicleNumber);

    if(id == vehicle[i].vehicleNumber) {
      console.log("found");
      flag=true;
    }
  }

  if(!flag){
    console.log("not found!");
  }
});

