import axios from 'axios'

const API_URL = "https://eroydmezaazgkvfwvjss.supabase.co/rest/v1/user"
const API_KEY = "sb_publishable_jvYPZPHtAzi4wQStenFNZw_aVZMf24q"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
    // "Prefer" ini wajib ada untuk UPDATE/DELETE di Supabase via REST API 
    // agar Supabase mau merespon balik data yang sudah diubah
    "Prefer": "return=representation"
}

export const authAPI = {
    // 1. CREATE (Register)
    async register(email, password, username) {
        const response = await axios.post(API_URL, { email, password, username }, { headers })
        return response.data
    },

    // 2. READ (Login)
    async login(email, password) {
        const response = await axios.get(`${API_URL}?email=eq.${email}&password=eq.${password}`, { headers })
        if (response.data.length === 0) {
            throw new Error("Email atau password salah!")
        }
        return response.data[0]
    },

    // 3. UPDATE (Fungsi yang tadi hilang dan bikin profil kamu error!)
    async updateUser(id, updatedData) {
        // Kita gunakan Number(id) untuk jaga-jaga kalau tipe data ID di Supabase kamu adalah Integer/Angka
        const targetId = isNaN(id) ? id : Number(id);
        
        const response = await axios.patch(`${API_URL}?id=eq.${targetId}`, updatedData, { headers })
        return response.data
    },

    // 4. READ ALL (Opsional - Bagus untuk kelengkapan nilai tugas dosen)
    async getAllUsers() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    // 5. DELETE (Opsional - Bagus untuk kelengkapan nilai tugas dosen)
    async deleteUser(id) {
        const targetId = isNaN(id) ? id : Number(id);
        const response = await axios.delete(`${API_URL}?id=eq.${targetId}`, { headers })
        return response.data
    }
}