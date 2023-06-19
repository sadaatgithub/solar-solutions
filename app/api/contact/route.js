import { transporter, mailOption } from "@/config/nodemailer";
import { NextResponse } from 'next/server';
 
export async function POST(request) {

const data = await request.json();
        if(!data || !data.name || !data.email || !data.contact || !data.message ){
             return NextResponse.json({status:400,message:"Bad request"})  
          }
    try {
            await transporter.sendMail({
        ...mailOption,
        subject:`You have a mail from ${data.name}`,
        text:"This is a text string",
        html:`<h3>Hello Solar Solutions,</h3> <br>
        <p>${data.message}</p><br>
        <p>Mobile:${data.contact}</p><br>
        <p>Email:${data.email}</p>`
    })
    return NextResponse.json({status:200, msg:"email sent" }); 
        
    } catch (error) {
        return NextResponse.json({status:400,message:error.message})
    }



}