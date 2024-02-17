import { createClient } from '@supabase/supabase-js';

const API_KEY = import.meta.env.VITE_SUPABASE_API_KEY;
const url = 'https://cocmrlpyomggokmehadt.supabase.co';

const supabase = createClient(url, API_KEY);

export const createCrewmate = async (crewmate: unknown) => {
  const { data, error } = await supabase.from('crewmates').insert(crewmate);
  if (error) {
    console.error(error);
  }
  return {
    data,
    error,
  };
};

export type Crewmate = {
  color: string;
  name: string;
  speed: string;
};
export const getCrewmates = async () => {
  const { data, error } = await supabase
    .from('crewmates')
    .select<string, Crewmate>();
  if (error) {
    console.error(error);
    throw error;
  }
  return data;
};
