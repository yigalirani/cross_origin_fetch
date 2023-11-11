function call_fetch(){
  console.log('now calling fetch')
  fetch('https://symbolclick.com/demo/').then(res=>res.text()).then(console.log)
}
document.getElementById('clicker').onclick=call_fetch