import { supabase } from "./db"

export const publicUrl = 'https://skhevpypuwkwmcbddbfh.supabase.co/storage/v1/object/public/avatars/'

export const getCurrentUser = async (userId) => {

    const { data, error } = await supabase.from('profiles').select().eq('id', userId).single()

    return {
        data, error
    }
}