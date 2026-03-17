// ============================================================
//  UNICAMPO — BIBLIOTECA TÉCNICA
//  Archivo de configuración
//  Editá este archivo para personalizar la app
// ============================================================

window.UNICAMPO_CONFIG = {

  // ----------------------------------------------------------
  // 1. GOOGLE SHEET ID
  //    Pegá aquí el ID de tu Google Sheet (ver INSTRUCCIONES.md)
  //    Ejemplo: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms'
  // ----------------------------------------------------------
  sheetId: '2PACX-1vQiArg1HQU34LhuC7ipxe2KKU4xf8Xv14hbxy9t4Ml9ofdlIPRAeAGzcKRDeF78Eobe3mNHimwhtKzB',

  // ----------------------------------------------------------
  // 2. NOMBRE DE LA HOJA
  //    Nombre de la pestaña dentro del Google Sheet
  //    Por defecto: 'Biblioteca'
  // ----------------------------------------------------------
  sheetName: 'Biblioteca',

  // ----------------------------------------------------------
  // 3. USUARIOS AUTORIZADOS
  //    Formato: 'usuario': { pass: 'contraseña', nombre: 'Nombre que aparece' }
  //    IMPORTANTE: Cambiá las contraseñas antes de publicar
  // ----------------------------------------------------------
  usuarios: {
    'admin':     { pass: 'Unicampo2024!', nombre: 'Administrador' },
    'tecnico1':  { pass: 'Campo2024!',    nombre: 'Técnico 1' },
    'tecnico2':  { pass: 'Campo2024!',    nombre: 'Técnico 2' },
    'consultor': { pass: 'Consulta2024!', nombre: 'Consultor' },
  }

};
