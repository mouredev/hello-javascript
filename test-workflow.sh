#!/bin/bash

echo "🧪 PROBANDO WORKFLOW DE AUDITORÍA WEB..."
echo ""

# Test 1: Petición al webhook
echo "1️⃣ Enviando petición al webhook de n8n..."
RESPONSE=$(curl -s -w "\nHTTP_CODE:%{http_code}" -X POST https://n8n.srv1053021.hstgr.cloud/webhook/auditoria-web \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example.com",
    "email": "test@nexa.com",
    "source": "test_manual"
  }')

HTTP_CODE=$(echo "$RESPONSE" | grep -o "HTTP_CODE:[0-9]*" | cut -d: -f2)
BODY=$(echo "$RESPONSE" | sed '/HTTP_CODE:/d')

echo ""
echo "Código HTTP: $HTTP_CODE"
echo "Respuesta: $BODY"
echo ""

if [ "$HTTP_CODE" = "200" ]; then
  echo "✅ ÉXITO: El workflow se ejecutó correctamente"
  echo ""
  echo "🔍 Verifica ahora:"
  echo "  1. Google Sheets → Debe aparecer una nueva fila con test@nexa.com"
  echo "  2. Tu email → Revisa la bandeja de test@nexa.com"
  echo "  3. Lovable Admin Panel → /admin/audits debe mostrar el lead"
  echo ""
else
  echo "❌ ERROR: El workflow falló"
  echo ""
  echo "Posibles causas:"
  echo "  - El workflow no está activo en n8n"
  echo "  - Alguna credencial está mal configurada"
  echo "  - El Edge Function de Supabase no está desplegado"
  echo ""
fi
