# 💰 Sistema de Monetización PromptGG

## 🚀 Implementación Completa

Sistema **Freemium** con cero costo de infraestructura y monetización inmediata usando **Stripe**.

---

## 📋 Características Implementadas

### ✅ 1. Sistema de Límites
- **Gratis**: 10 prompts por día
- **Premium**: Prompts ilimitados
- Contador visible en la interfaz
- Reset automático cada 24 horas
- Almacenamiento en localStorage

### ✅ 2. Modal de Upgrade
- Diseño profesional con gradientes
- Muestra beneficios premium:
  - ✨ Prompts ilimitados
  - 🚫 Sin anuncios
  - 💾 Historial guardado
- Precio: $4.99/mes
- Link directo a Stripe Payment Link

### ✅ 3. Verificación de Licencia
- Sistema de activación automática con Stripe session_id
- Persistencia en localStorage
- Auto-verificación al cargar la app

### ✅ 4. Página de Éxito
- `/[locale]/premium-success`
- Confirmación visual de upgrade
- Lista de beneficios desbloqueados
- Activación automática con session_id de Stripe

### ✅ 5. Preparación para AdSense
- Componente `<AdSenseSlot />`
- Oculta ads a usuarios premium
- Slots listos para Google AdSense

### ✅ 6. Multiidioma Completo
- Todas las traducciones (ES/EN/HI)
- Textos de premium, límites, upgrade

---

## 🛠️ Configuración con Stripe (3 Pasos)

### Paso 1: Crear Cuenta Stripe

1. **Ve a [Stripe.com](https://stripe.com/)**
   - Crea una cuenta (gratis)
   - **✅ Stripe acepta bancos chilenos directamente** (Banco de Chile, Santander, BCI, etc.)

2. **Completa verificación de identidad**:
   - RUT chileno
   - Información fiscal
   - Cuenta bancaria chilena (cuenta corriente o vista)

3. **Costos de Stripe**:
   - 3.6% + $100 CLP por transacción exitosa
   - **Sin costos mensuales fijos**
   - **Sin costos de setup**
   - Transferencias a banco chileno: **GRATIS**

---

### Paso 2: Crear Payment Link (Sin código)

1. **Ve a Stripe Dashboard → Products**
   - Click en "Add Product"

2. **Configurar Producto**:
   ```
   Nombre: PromptGG Premium
   Descripción: Acceso ilimitado a generador de prompts profesional
   Precio: $4.99 USD
   Tipo: Recurring (mensual)
   ```

3. **Crear Payment Link**:
   - Click en "Create Payment Link"
   - Success URL: `https://promptgg.app/es/premium-success?session_id={CHECKOUT_SESSION_ID}`
   - Cancel URL: `https://promptgg.app/es/generator`

4. **Copiar tu Payment Link**:
   ```
   https://buy.stripe.com/XXXXXXXXXXXXXX
   ```

5. **Actualizar en el código**:
   ```tsx
   // src/components/UpgradeModal.tsx línea 22
   window.open("https://buy.stripe.com/TU_PAYMENT_LINK_AQUI", "_blank");
   ```

---

### Paso 3: Google AdSense (Opcional)

1. **Aplicar a AdSense**:
   - Ve a [Google AdSense](https://www.google.com/adsense/)
   - Aplica con tu dominio `promptgg.app`
   - Espera aprobación (1-2 semanas)

2. **Obtener tu ID de AdSense**:
   ```
   ca-pub-XXXXXXXXXXXXXXXX
   ```

3. **Actualizar en el código**:
   ```tsx
   // src/components/AdSenseSlot.tsx línea 36
   data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
   ```

4. **Agregar slots en las páginas**:
   ```tsx
   // Ejemplo: src/app/[locale]/generator/page.tsx
   import AdSenseSlot from "@/components/AdSenseSlot";
   
   // Arriba del generador
   <AdSenseSlot slot="1234567890" format="rectangle" />
   
   // Al final de la página
   <AdSenseSlot slot="0987654321" format="horizontal" />
   ```

---

## 💰 Ventajas de Stripe vs Gumroad para Chile

| Característica | Stripe | Gumroad |
|---------------|--------|---------|
| **Acepta bancos chilenos** | ✅ Sí, directo | ❌ No (necesita Wise) |
| **Comisión por venta** | 3.6% + $100 CLP | 10% + $0.30 USD |
| **Costo mensual** | $0 | $0 |
| **Transferencias a Chile** | Gratis | N/A (necesita intermediario) |
| **Tiempo de transferencia** | 2-7 días | N/A |
| **Setup requerido** | RUT + cuenta bancaria | Wise/Payoneer |
| **Profesionalismo** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

### 💡 Cálculo Real para Chile:

**Venta de $4.99 USD (~$4,490 CLP)**

Con **Stripe**:
```
$4.99 USD = $4,490 CLP
- 3.6% = $162 CLP
- Fee fijo = $100 CLP
= $4,228 CLP en tu banco chileno ✅
(Recibes 94.2% del total)
```

Con **Gumroad** (requiere Wise):
```
$4.99 USD
- 10% Gumroad = $0.50
= $4.49 USD en Wise
- 0.7% Wise → Chile = $0.03
= $4.46 USD = $4,014 CLP en tu banco ❌
(Recibes 89.4% del total)
```

**💰 Stripe te da ~$214 CLP más por cada venta**

---

## 💵 Proyección de Ingresos

### Mes 1 (1,000 visitantes/día)
- **AdSense**: ~$150-300/mes (~$135K-270K CLP)
- **Premium Stripe** (2% conversión): 20 usuarios × $4.99 = $99.80/mes (~$89.8K CLP)
  - Después de comisiones: ~$84.5K CLP
- **Total**: ~$220K-355K CLP/mes

### Mes 6 (5,000 visitantes/día)
- **AdSense**: ~$750-1,500/mes (~$675K-1.35M CLP)
- **Premium Stripe** (3% conversión): 150 usuarios × $4.99 = $748.50/mes (~$673K CLP)
  - Después de comisiones: ~$634K CLP
- **Total**: ~$1.31M-1.98M CLP/mes

### Costos Fijos
- **Vercel**: $0
- **Stripe**: $0 (solo comisión por venta)
- **Total infraestructura**: **$0 CLP/mes** ✅

---
   - Ve a [Google AdSense](https://www.google.com/adsense/)
   - Aplica con tu dominio `promptgg.app`
   - Espera aprobación (1-2 semanas)

2. **Obtener tu ID de AdSense**:
   ```
   ca-pub-XXXXXXXXXXXXXXXX
   ```

3. **Actualizar en el código**:
   ```tsx
   // src/components/AdSenseSlot.tsx línea 36
   data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
   ```

4. **Agregar slots en las páginas**:
   ```tsx
   // Ejemplo: src/app/[locale]/generator/page.tsx
   import AdSenseSlot from "@/components/AdSenseSlot";
   
   // Arriba del generador
   <AdSenseSlot slot="1234567890" format="rectangle" />
   
   // Al final de la página
   <AdSenseSlot slot="0987654321" format="horizontal" />
   ```

---

## 💵 Proyección de Ingresos

### Mes 1 (1,000 visitantes/día)
- **AdSense**: ~$150-300/mes
- **Premium** (2% conversión): 20 usuarios × $4.99 = $99.80/mes
- **Total**: ~$250-400/mes

### Mes 6 (5,000 visitantes/día)
- **AdSense**: ~$750-1,500/mes
- **Premium** (3% conversión): 150 usuarios × $4.99 = $748.50/mes
- **Total**: ~$1,500-2,250/mes

### Costos
- **Vercel**: $0 (Hobby tier gratuito)
- **Gumroad**: 10% + $0.30 por transacción
- **Total**: $0 infraestructura fija

---

## 🔧 Testing Local

### Simular Usuario Premium:
```javascript
// En consola del navegador
localStorage.setItem('promptgg_license', 'STRIPE-TEST-LICENSE-KEY');
location.reload();
```

### Ver contador de uso:
```javascript
const usage = localStorage.getItem('promptgg_usage');
console.log(JSON.parse(usage));
```

### Reset límite diario:
```javascript
localStorage.removeItem('promptgg_usage');
location.reload();
```

### Simular compra exitosa (desarrollo):
```
http://localhost:3000/es/premium-success?session_id=cs_test_a1b2c3d4e5f6
```

---

## 🇨🇱 Configuración Específica para Chile

### Bancos Compatibles con Stripe:
✅ Banco de Chile
✅ Banco Santander
✅ BCI (Banco de Crédito e Inversiones)
✅ Banco Estado
✅ Scotiabank
✅ Itaú
✅ Banco Security
✅ Banco Falabella
✅ Coopeuch
✅ Y todos los demás bancos chilenos

### Documentos Necesarios:
1. **RUT** (Rol Único Tributario)
2. **Cuenta bancaria** (corriente o vista)
3. **Dirección fiscal** en Chile
4. **Email de contacto**

### Tipos de Cuenta Bancaria:
- ✅ **Cuenta Corriente** (recomendado)
- ✅ **Cuenta Vista**
- ✅ **Cuenta RUT** (Banco Estado)

### Transferencias a tu Banco:
- **Frecuencia**: Semanal (puedes cambiar a diaria)
- **Costo**: $0 CLP (gratis)
- **Tiempo**: 2-7 días hábiles
- **Moneda**: CLP (conversión automática desde USD)

---

## 📊 Analytics Recomendados

### Google Analytics
```tsx
// src/app/layout.tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
```

### Eventos importantes:
- `generate_prompt` (free vs premium)
- `upgrade_click` 
- `upgrade_complete`
- `daily_limit_reached`

---

## 🎯 Próximos Pasos (Opcionales)

### Mes 2-3: Autenticación Real
- Clerk.com (gratis hasta 10k usuarios)
- Historial de prompts en nube
- Plantillas guardadas
- Stripe Customer Portal (cancelaciones automáticas)

### Mes 4-6: Features Premium Adicionales
- **Tier Pro**: $19.99/mes con API access
- Plantillas premium exclusivas
- Exportar prompts a PDF/JSON
- Análisis de efectividad
- Workspace colaborativo

### Webhooks de Stripe (Avanzado):
Si quieres validar subscripciones en tiempo real:

```typescript
// src/app/api/stripe-webhook/route.ts
import { headers } from 'next/headers';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    return new Response('Webhook error', { status: 400 });
  }

  // Manejar eventos
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    // Guardar subscripción en base de datos
  }

  return new Response('Success', { status: 200 });
}
```

---

## 📞 Soporte

Si necesitas ayuda:
1. **Stripe Dashboard** → Support (chat en vivo)
2. Revisa este README completo
3. Verifica la consola del navegador (F12)
4. Prueba con `localStorage` manual

**Soporte Stripe Chile**:
- Email: support@stripe.com
- Documentación: https://stripe.com/docs
- Status: https://status.stripe.com

---

## ✨ Resultado Final

**Sistema de monetización listo** con:
- ✅ Zero costo de infraestructura
- ✅ Dos fuentes de ingreso (Ads + Premium)
- ✅ **Depósitos directos a bancos chilenos** 🇨🇱
- ✅ Sin intermediarios (Wise/Payoneer)
- ✅ Comisiones más bajas (3.6% vs 10%)
- ✅ Escalable sin backend
- ✅ Implementación inmediata

**Tiempo total de setup**: 1-2 horas
**Tiempo hasta primer ingreso**: 24-48 horas
**Comisión real**: 3.6% + $100 CLP por venta

¡Buena suerte! 🚀💰🇨🇱
