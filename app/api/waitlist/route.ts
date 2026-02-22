import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { waitlistSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = waitlistSchema.parse(body);

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        { error: "Database not configured" },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase.from("waitlist").insert({
      email: validated.email,
      name: validated.name,
      neighborhood: validated.neighborhood,
      pass_type: validated.passType,
      trips_last_season: validated.tripsLastSeason,
      deposit_intent: validated.depositIntent,
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "This email is already on the waitlist." },
          { status: 409 }
        );
      }
      return NextResponse.json({ error: "Failed to join waitlist" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
