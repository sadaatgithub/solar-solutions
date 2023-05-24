import { transporter, mailOption } from "@/config/nodemailer";



import { NextResponse } from 'next/server';
 
export async function POST(request) {
    console.log("received")

    // console.log(request)

 
const data = await request.json();
        if(!data || !data.name || !data.email || !data.contact || !data.message ){
             return NextResponse.json({status:400,message:"Bad request"})  
          }
    try {
            await transporter.sendMail({
        ...mailOption,
        subject:`Received request from ${data.name}`,
        text:"This is a text string",
        html:`<h3>Hello Solar Solutions,</h3> <br>
        <p>${data.message}</p> <br>
        <p>${data.contact}</p> <br>
        <p>${data.email}</p>`
    })
    return NextResponse.json({status:200, msg:"email sent" }); 
        
    } catch (error) {
        return NextResponse.json({status:400,message:error.message})
    }



}