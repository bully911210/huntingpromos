import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  email: string;
  name?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, name }: EmailRequest = await req.json();

    console.log("Sending confirmation email to:", email);

    const emailResponse = await resend.emails.send({
      from: "Hunting Promos SA <noreply@huntingpromossa.co.za>",
      to: [email],
      subject: "Welcome to Hunting Promos SA - Weekly Deals Await!",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #2B2B2B; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #556B2F; padding: 30px 20px; text-align: center; }
              .header h1 { color: #ffffff; margin: 0; font-size: 28px; }
              .content { background: #ffffff; padding: 30px 20px; }
              .cta-button { 
                display: inline-block; 
                background: #E67E22; 
                color: #ffffff; 
                padding: 12px 30px; 
                text-decoration: none; 
                border-radius: 5px;
                font-weight: bold;
                margin: 20px 0;
              }
              .footer { background: #f4f4f4; padding: 20px; text-align: center; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🎯 Welcome to Hunting Promos SA!</h1>
              </div>
              <div class="content">
                <p>Hi ${name || 'Hunter'}!</p>
                
                <p><strong>Thanks for joining the crew!</strong> You're now part of thousands of South African hunters who get exclusive deals on gear, promotions, and giveaways before anyone else.</p>
                
                <p>Here's what you can expect:</p>
                <ul>
                  <li>🔔 <strong>Weekly Deal Alerts</strong> – The best hunting gear promos delivered to your inbox</li>
                  <li>🏆 <strong>Exclusive Giveaways</strong> – Enter to win premium hunting equipment</li>
                  <li>🎯 <strong>Early Access</strong> – Be first in line for limited-time offers</li>
                </ul>
                
                <p>Your first deals email is on its way. Keep an eye out!</p>
                
                <p style="margin-top: 30px;">
                  <strong>Good hunting,</strong><br>
                  The Hunting Promos SA Team
                </p>
              </div>
              <div class="footer">
                <p>Hunting Promos SA | Exclusive Hunting Deals • Gear • Giveaways</p>
                <p>You're receiving this because you signed up at huntingpromossa.co.za</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, ...emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message, success: false }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
