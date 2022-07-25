const vehicle = [
  {
      vehicleNumber: "KL43B2344",
      ownerName: "owner1",
      vehicleStatus: "active",
      registrationDate: "020202",
  },
  {
      vehicleNumber: "KL16J3636",
      ownerName: "owner2",
      vehicleStatus: "inactive",
      registrationDate: "030301",
  },
  {
      vehicleNumber: "KL55R2473",
      ownerName: "owner3",
      vehicleStatus: "active",
      registrationDate: "040405",
  },
  {
      vehicleNumber: "KL 02 BM 4659",
      ownerName: "owner4",
      vehicleStatus: "active",
      registrationDate: "050505",
  },
]

const form = document.getElementById("search")

form.addEventListener("submit", (event) => {
  let id = document.getElementById("num").value
  let result = document.getElementById("result")
  console.log(id)
  event.preventDefault()

  let length = Object.keys(vehicle).length
  let flag = false

  for (let i = 0; i < length; i++) {
      //console.log(vehicle[i].vehicleNumber);

      if (id == vehicle[i].vehicleNumber) {
          flag = true
          result.innerText = "Found 👍🏾"
      }
  }

  if (!flag) {
      console.log("not found!")
      result.innerText = "not found! 🌚"
  }
})
