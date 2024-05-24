// pages/api/show-key.js
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    // Access the OPENAI_API_KEY environment variable
    const openAIKey = process.env.OPENAI_API_KEY;
  
    // Check if the environment variable is defined
    if (!openAIKey) {
      return NextResponse.json({ error: 'OPENAI_API_KEY is not defined' }, { status: 500 });
    }
  
    // Return the environment variable in the response
    return NextResponse.json({ api: "openAIKey" }, { status: 200 });
  }
  