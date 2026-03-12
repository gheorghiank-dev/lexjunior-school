import { supabase } from "./supabase-client.js";

export async function getCurrentUserId() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    throw error;
  }

  return user?.id ?? null;
}

export async function savePresentContinuousTheoryProgress(sectionId) {
  const userId = await getCurrentUserId();

  if (!userId) {
    return null;
  }

  if (!sectionId) {
    throw new Error("sectionId is required.");
  }

  const payload = {
    user_id: userId,
    module_slug: "present-continuous",
    section_slug: sectionId,
    is_completed: true,
    completed_at: new Date().toISOString(),
  };

  const { data, error } = await supabase
    .from("theory_progress")
    .upsert(payload, {
      onConflict: "user_id,module_slug,section_slug",
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}
