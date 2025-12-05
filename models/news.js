// Supabase ilə işləyərkən, model tərifi lazım deyil
// Supabase avtomatik cədvəlləri və sütunları idarə edir
// Bunun əvəzinə, cədvəl strukturunun validasiyası üçün tip tərifi edə bilərik

const newsSchema = {
  id: 'number',
  name: 'string',
  content: 'string',
  status: 'number',
  source: 'string',
  created_at: 'string',
  updated_at: 'string'
}

module.exports = newsSchema