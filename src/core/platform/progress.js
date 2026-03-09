import { supabase } from "./supabase-client";

export async function getMyModuleProgress() {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    throw userError;
  }

  if (!user) {
    return [];
  }

  const { data, error } = await supabase
    .from("module_progress")
    .select("*")
    .eq("user_id", user.id);

  if (error) {
    throw error;
  }

  return data;
}

export async function upsertMyPresentSimpleProgress() {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    throw userError;
  }

  if (!user) {
    throw new Error("No authenticated user.");
  }

  const { data, error } = await supabase
    .from("module_progress")
    .upsert(
      {
        user_id: user.id,
        module_slug: "present-simple",
        status: "in_progress",
        progress_percent: 10,
        current_section: "affirmative",
        last_room_id: "ps-a-1",
        badge_earned: false,
      },
      {
        onConflict: "user_id,module_slug",
      },
    )
    .select();

  if (error) {
    throw error;
  }

  return data;
}
