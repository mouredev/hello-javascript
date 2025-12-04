# 🚀 GUÍA DE IMPLEMENTACIÓN DEFINITIVA - NEXA WEB AUDITOR

## 📋 RESUMEN DEL SISTEMA

**Arquitectura completa:**
```
Widget Flotante (Lovable)
  → Webhook n8n
  → Google Sheets (Log)
  → Scraping Web
  → OpenAI Análisis (GPT-4o)
  → OpenAI Reporte HTML (GPT-4o)
  → Supabase Edge Function (Guardar Lead)
  → Resend (Enviar Email)
  → Response al Usuario
```

---

## 🔧 PASO 1: IMPORTAR WORKFLOW EN n8n

### 1.1. Accede a n8n
```bash
URL: https://n8n.srv1053021.hstgr.cloud/workflow/TdIPvjbCd5exDyNN
```

### 1.2. Importa el workflow corregido
1. Descarga: `/home/user/hello-javascript/n8n-workflow-definitivo.json`
2. En n8n: Menú (⋮) → **"Import from File"**
3. Selecciona `n8n-workflow-definitivo.json`
4. Confirma reemplazo

### 1.3. Verifica nodos críticos

| Nodo | Verificación | Valor correcto |
|------|-------------|----------------|
| **Supabase Edge Function** | URL | `https://hurdtyeloklqhfhskojy.supabase.co/functions/v1/save-audit-lead` |
| **Supabase Edge Function** | Header | `x-api-key: nexa_45b52...` |
| **Resend** | API Key | `Bearer re_PeNyaQ...` |
| **OpenAI x2** | Credential | `PteWUDrPjXrEfprX` |
| **Google Sheets** | Credential | `HxGSuzkxo6MIYkgO` |

---

## 🔐 PASO 2: VERIFICAR CONFIGURACIÓN DE LOVABLE

### 2.1. Confirma que el Edge Function está desplegado

**Pregunta a Lovable:**
```
¿El Edge Function save-audit-lead está desplegado y operativo?

Necesito confirmar:
1. URL: https://hurdtyeloklqhfhskojy.supabase.co/functions/v1/save-audit-lead
2. Header requerido: x-api-key
3. Secret configurado: AUDIT_API_KEY = nexa_45b52642066f47f2182bb0517905dab12626a82b68995704090354fb23cd34e4
```

### 2.2. Verifica en Supabase Dashboard

1. Ve a: [Supabase Project](https://supabase.com/dashboard/project/hurdtyeloklqhfhskojy)
2. **Edge Functions** (menú lateral)
3. Busca: `save-audit-lead`
4. Status debe ser: **🟢 Deployed**

### 2.3. Verifica las tablas

En Supabase → **Table Editor**:

**Tabla: `audit_leads`**
- ✅ Debe existir
- ✅ Columnas: `id`, `created_at`, `email`, `target_url`, `ai_analysis`, `source`, `analysis_status`, `topic`

**Tabla: `audit_topics`** (opcional)
- ✅ Debe existir
- ✅ Columnas: `id`, `name`, `description`, `color`, `created_at`

---

## 🧪 PASO 3: PROBAR EL WORKFLOW

### 3.1. Activa el workflow
1. En n8n, abre el workflow
2. Toggle **"Active"** → ON (verde) ✅

### 3.2. Ejecuta el script de prueba

```bash
cd /home/user/hello-javascript
./test-workflow.sh
```

**Resultado esperado:**
```
✅ ÉXITO: El workflow se ejecutó correctamente

Código HTTP: 200
Respuesta: {"success":true,"message":"Auditoría enviada..."}
```

### 3.3. Verificación manual (Plan B)

Si no tienes el script, usa cURL:

```bash
curl -X POST https://n8n.srv1053021.hstgr.cloud/webhook/auditoria-web \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example.com",
    "email": "tu-email@gmail.com",
    "source": "test_manual"
  }'
```

**Respuesta esperada:**
```json
{
  "success": true,
  "message": "Auditoría enviada correctamente a tu-email@gmail.com",
  "url": "https://example.com",
  "saved_to_database": true
}
```

---

## ✅ PASO 4: VERIFICAR QUE TODO FUNCIONÓ

### 4.1. Google Sheets ✅
1. Abre: [Leads Auditoría Web](https://docs.google.com/spreadsheets/d/15xOhTjsxiD2OJCvr253ChOzK3N0PxlpJc8Cw9GNc4NI)
2. Debe aparecer una nueva fila con:
   - Email: `tu-email@gmail.com`
   - URL: `https://example.com`
   - Fecha: timestamp actual
   - Estado: `Procesando`

### 4.2. Supabase (audit_leads) ✅
1. Ve a Supabase → **Table Editor** → `audit_leads`
2. Debe aparecer un nuevo registro con:
   - `email`: `tu-email@gmail.com`
   - `target_url`: `https://example.com`
   - `ai_analysis`: JSON con el análisis CRO
   - `source`: `test_manual`
   - `analysis_status`: `completed`

### 4.3. Email (Resend) ✅
1. Revisa tu bandeja de entrada: `tu-email@gmail.com`
2. Debe llegar un email:
   - **Subject:** 🚀 Tu Auditoría Web CRO - Nexa
   - **From:** hola@nexaweblaunch.com
   - **Contenido:** HTML con diseño profesional, scores, errores críticos

### 4.4. Panel Admin de Lovable ✅
1. Ve a: `https://nexa-weblaunch.lovable.app/admin/audits`
2. Debe aparecer el lead en la tabla
3. Click en el lead → Ver análisis completo

---

## 🔗 PASO 5: INTEGRAR EL WIDGET EN LOVABLE

### 5.1. Verifica que el widget existe

Pregunta a Lovable:
```
¿El widget flotante de auditoría está implementado en todas las páginas?

Verifica:
1. FAB flotante visible en bottom-right
2. Modal glassmorphism al hacer click
3. Formulario con inputs de URL y Email
4. Botón "Escanear mi web ahora"
```

### 5.2. Configura la URL del webhook en el widget

**Archivo a verificar en Lovable:** (probablemente `src/components/AuditWidget.tsx` o similar)

Busca esta línea:
```typescript
const WEBHOOK_URL = 'https://n8n.srv1053021.hstgr.cloud/webhook/auditoria-web';
```

Confirma que la URL sea exactamente esa.

### 5.3. Prueba desde el frontend

1. Abre tu web de Lovable en el navegador
2. Verifica que aparece el **botón flotante** en la esquina inferior derecha
3. Click en el botón → Se abre el modal
4. Completa el formulario:
   - **URL:** `https://example.com`
   - **Email:** `tu-email@gmail.com`
5. Click en **"Escanear mi web ahora"**
6. Espera el toast de éxito: "¡Informe generado! Revisa tu bandeja de entrada 📧"

---

## 🐛 TROUBLESHOOTING

### ❌ Error: "Invalid API key" (401)

**Causa:** El header `x-api-key` no coincide o no se envía.

**Solución:**
1. Verifica en n8n que el nodo **"Supabase Edge Function"** tiene:
   ```
   Header: x-api-key
   Value: nexa_45b52642066f47f2182bb0517905dab12626a82b68995704090354fb23cd34e4
   ```
2. Verifica en Lovable que el secret `AUDIT_API_KEY` tiene el mismo valor

---

### ❌ Error: "Workflow execution failed"

**Causa:** Algún nodo falló (OpenAI, Resend, etc.).

**Solución:**
1. Ve a n8n → **Executions** (menú lateral)
2. Click en la ejecución fallida
3. Identifica el nodo con error (aparece en rojo)
4. Verifica la credencial de ese nodo
5. Re-ejecuta: Click en **"Retry Execution"**

**Errores comunes:**
- **OpenAI:** Verifica que la API Key de OpenAI sea válida
- **Resend:** Verifica que la API Key de Resend sea válida
- **Google Sheets:** Verifica que tengas permisos de escritura en el Sheet

---

### ❌ Error: "CORS blocked"

**Causa:** El widget frontend no puede llamar al webhook de n8n por CORS.

**Solución:**
1. En n8n, edita el nodo **"Webhook"**
2. Ve a **Options** → **CORS**
3. Activa: **"Webhook CORS"** = `*` (todos los orígenes)
4. Guarda y reactiva el workflow

---

### ❌ Error: "Email not received"

**Causa:** Resend no pudo enviar el email.

**Solución:**
1. Verifica que el dominio `nexaweblaunch.com` está verificado en Resend
2. Si usas un email de prueba, verifica que Resend permite enviar a ese dominio
3. Revisa logs en [Resend Dashboard](https://resend.com/emails)

---

## 📊 PASO 6: MONITOREO Y ANALYTICS

### 6.1. Crea un dashboard de seguimiento

**Google Sheets Dashboard:**
- Abre: [Leads Auditoría Web](https://docs.google.com/spreadsheets/d/15xOhTjsxiD2OJCvr253ChOzK3N0PxlpJc8Cw9GNc4NI)
- Crea una nueva hoja "Dashboard"
- Métricas sugeridas:
  - Total de leads capturados
  - Leads por fuente (widget, plan_one, plan_pro, etc.)
  - Tasa de conversión (leads → llamadas agendadas)
  - URLs más auditadas

**Lovable Admin Panel:**
- Ve a: `/admin/audits`
- Verás estadísticas automáticas:
  - Total de auditorías
  - Por estado (New, Contacted, Converted)
  - Por fuente/topic

### 6.2. Alertas y notificaciones

**n8n Workflow adicional (opcional):**
Crea un workflow que:
1. Se ejecuta cada día a las 9 AM
2. Lee los leads del día anterior
3. Envía un resumen por email al equipo de ventas

---

## 🎯 CHECKLIST FINAL

Marca cada item cuando esté completado:

### Configuración n8n
- [ ] Workflow importado correctamente
- [ ] Workflow activado (toggle verde)
- [ ] Credenciales de Google Sheets configuradas
- [ ] Credenciales de OpenAI configuradas
- [ ] API Key de Resend configurada
- [ ] URL del Edge Function correcta
- [ ] Header `x-api-key` configurado

### Configuración Lovable
- [ ] Widget flotante visible en todas las páginas
- [ ] Modal se abre al hacer click
- [ ] Formulario valida URL y Email
- [ ] URL del webhook configurada en el código
- [ ] Edge Function desplegado en Supabase
- [ ] Secret `AUDIT_API_KEY` configurado
- [ ] Tablas `audit_leads` y `audit_topics` creadas
- [ ] Panel admin `/admin/audits` funcionando

### Pruebas
- [ ] Test manual con cURL exitoso (HTTP 200)
- [ ] Lead aparece en Google Sheets
- [ ] Lead aparece en Supabase
- [ ] Email recibido correctamente
- [ ] Lead visible en panel admin
- [ ] Test desde el widget frontend exitoso

### Producción
- [ ] Workflow activado permanentemente
- [ ] Webhook URL pública y accesible
- [ ] CORS configurado correctamente
- [ ] Dominio de email verificado en Resend
- [ ] Sistema de alertas configurado (opcional)
- [ ] Dashboard de analytics creado (opcional)

---

## 📞 SOPORTE

**Si algo no funciona:**

1. **Revisa logs de n8n:**
   - n8n → Executions → Click en la ejecución fallida

2. **Revisa logs de Supabase:**
   - Supabase Dashboard → Edge Functions → `save-audit-lead` → Logs

3. **Revisa logs de Resend:**
   - [Resend Dashboard](https://resend.com/emails)

4. **Pregunta a Lovable:**
   - Describe el error exacto que ves
   - Copia el mensaje de error completo

---

## 🎉 ¡SISTEMA LISTO!

Una vez completados todos los pasos del checklist, tu sistema de auditorías automáticas estará **100% operativo**.

**Próximos pasos sugeridos:**
1. Publicar el widget en producción
2. Crear campañas de ads apuntando a tu web
3. Monitorear conversiones diariamente
4. Iterar sobre el copy del email según resultados
5. Agregar más topics para segmentar mejor los leads

**ROI esperado:**
- Costo por lead capturado: ~$0.07 (OpenAI + Resend)
- Tasa de conversión típica: 5-10% (leads → llamadas)
- Tiempo de setup: ~1 hora
- Tiempo de operación: 100% automático

---

**¡Éxito con Nexa Web Auditor! 🚀**
