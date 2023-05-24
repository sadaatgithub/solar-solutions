export const submitContactForm = async (data)=>
fetch("/api/contact",{
    method:"POST",
    body:JSON.stringify(data),
    headers:{"Content-Type": "application/json",Accept:"application/json"},

}).then((res) =>{
    if(!res.ok) throw new Error("Failed to send Message");
    return res.json()
    
})