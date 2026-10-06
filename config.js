// ตั้งค่าการเชื่อมต่อฐานข้อมูล Supabase
// ค่าสองตัวนี้หาได้ที่ Supabase Dashboard -> Project Settings -> API
//   supabaseUrl      เช่น https://abcdxyz.supabase.co
//   supabaseAnonKey  คีย์ชนิด "anon" / "publishable" (เปิดเผยในหน้าเว็บได้ ความปลอดภัยควบคุมโดย schema.sql)
// ห้ามใส่คีย์ชนิด service_role หรือ secret ในไฟล์นี้เด็ดขาด เพราะไฟล์นี้เป็นสาธารณะ
window.FLOOD_CONFIG = {
  supabaseUrl: "https://xjlpikgivnqizhqtuqvs.supabase.co/rest/v1/",
  supabaseAnonKey: "sb_publishable_0PRM9yFySfX72VQ9BMARpA_1OWIkM21"
};
