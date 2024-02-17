import { createClient } from '@supabase/supabase-js';

const API_KEY = import.meta.env.VITE_SUPABASE_API_KEY;
const url = 'https://cocmrlpyomggokmehadt.supabase.co';

const supabase = createClient(url, API_KEY);

export type Crewmate = {
  color: string;
  name: string;
  speed: string;
};

export const createCrewmate = async (crewmate: unknown) => {
  const { error } = await supabase.from('crewmates').insert(crewmate);
  if (error) {
    console.error(error);
  }
  return {
    error,
  };
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

export const deleteCrewmate = async (id: string) => {
  const { error } = await supabase.from('crewmates').delete().eq('id', id);
  if (error) {
    console.error(error);
  }

  return { error };
};
