document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=${userName}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#name").textContent = data.name
  document.querySelector("#grade").textContent = data.grade
  document.querySelector("#accomodations").textContent = data.accomodations
}