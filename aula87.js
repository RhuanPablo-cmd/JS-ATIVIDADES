const url=document.getElementById("url")
const btn_url=document.getElementById("btn_url")

btn_url.addEventListener("click", (evt)=>{
    window.location=url
    // window.location.reload()
    // window.location.reload()
    // window.location.replace()
    // window.history.back()
    // window.history.forward()
    // console.log(window.history.length)
    window.location=url.value  
})