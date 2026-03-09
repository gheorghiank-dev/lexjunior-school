import { supabase } from "./supabase-client";

export async function getActiveTenseModules() {
  const { data, error } = await supabase
    .from("tense_modules")
    .select("*")
    .eq("is_active", true)
    .order("order_index", { ascending: true });

  if (error) {
    throw error;
  }

  return data;
}
