const supabase = require('../config/database.js')

const News = {
  // Bütün haberləri al
  getAll: async () => {
    const { data, error } = await supabase
      .from('news')
      .select('*')
    
    if (error) throw error
    return data
  },

  // ID-yə görə haber al
  getById: async (id) => {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    return data
  },

  // Yeni haber əlavə et
  create: async (newsData) => {
    const { data, error } = await supabase
      .from('news')
      .insert([newsData])
      .select()
    
    if (error) throw error
    return data[0]
  },

  // Haberi güncəllə
  update: async (id, newsData) => {
    const { data, error } = await supabase
      .from('news')
      .update(newsData)
      .eq('id', id)
      .select()
    
    if (error) throw error
    return data[0]
  },

  // Haberi sil
  delete: async (id) => {
    const { data, error } = await supabase
      .from('news')
      .delete()
      .eq('id', id)
    
    if (error) throw error
    return data
  }
}

module.exports = News