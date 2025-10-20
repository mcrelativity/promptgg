# 💰 Sistema de Monetización PromptGG

## 🚀 Implementación Completa

Sistema **Freemium** con cero costo de infraestructura y monetización **global** usando **Lemonsqueezy**.

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
- Link directo a Lemonsqueezy Checkout

### ✅ 3. Verificación de Licencia
- Sistema de activación automática con Lemonsqueezy order_id
- Persistencia en localStorage
- Auto-verificación al cargar la app

### ✅ 4. Página de Éxito
- `/[locale]/premium-success`
- Confirmación visual de upgrade
- Lista de beneficios desbloqueados
- Activación automática con order_id de Lemonsqueezy

### ✅ 5. Preparación para AdSense
- Componente `<AdSenseSlot />`
- Oculta ads a usuarios premium
- Slots listos para Google AdSense

### ✅ 6. Multiidioma Completo
- Todas las traducciones (ES/EN/HI)
- Textos de premium, límites, upgrade

---

## 🛠️ Configuración con Lemonsqueezy (3 Pasos)

### Paso 1: Crear Cuenta Lemonsqueezy

1. **Ve a [Lemonsqueezy.com](https://lemonsqueezy.com/)**
   - Crea una cuenta (gratis)
   - **🌍 Funciona en 135+ países** (Chile, EE.UU., Europa, Asia, etc.)

2. **Completa verificación de identidad**:
   - Email de confirmación
   - Información fiscal básica
   - Cuenta bancaria (acepta bancos de cualquier país)

3. **Costos de Lemonsqueezy**:
   - **5% + $0.50 USD** por transacción exitosa
   - **Sin costos mensuales fijos**
   - **Sin costos de setup**
   - Transferencias a tu banco: **GRATIS**
   - **Manejo automático de impuestos** (IVA, sales tax, GST, etc.)

---

### Paso 2: Crear Producto y Checkout (Sin código)

1. **Ve a Lemonsqueezy Dashboard → Products**
   - Click en "New Product"

2. **Configurar Producto**:
   ```
   Nombre: PromptGG Premium
   Descripción: Acceso ilimitado a generador de prompts profesional con IA
   Precio: $4.99 USD
   Tipo: Subscription (Recurring)
   Intervalo: Monthly
   ```

3. **Crear Variant** (Plan):
   - Name: "Monthly Premium"
   - Price: $4.99 USD
   - Billing interval: Every 1 month

4. **Configurar Checkout Settings**:
   - **Success URL**: `https://promptgg.app/{locale}/premium-success?order_id={order_id}`
   - **Cancel URL**: `https://promptgg.app/{locale}/generator`
   - **Email receipts**: Enabled ✅
   - **Multiple languages**: Enabled ✅ (Auto-detecta idioma del navegador)

5. **Copiar tu Checkout URL**:
   ```
   https://promptgg.lemonsqueezy.com/buy/12345678-abcd-1234-abcd-123456789abc
   ```

6. **Actualizar en el código**:
   ```tsx
   // src/components/UpgradeModal.tsx línea 22
   window.open("https://promptgg.lemonsqueezy.com/buy/TU_VARIANT_ID_AQUI", "_blank");
   ```

---

### Paso 3: Agregar tu Banco (Cualquier País)

1. **Ve a Settings → Payouts**

2. **Click en "Add payout method"**

3. **Completa información bancaria**:

#### 🇨🇱 Para Chile:
```
País: Chile
Banco: [Banco de Chile, Santander, BCI, Estado, etc.]
Tipo: Cuenta Corriente o Vista
Número de cuenta: [Tu número completo]
RUT: XX.XXX.XXX-X
Nombre del titular: [Debe coincidir con RUT]
```

#### 🇺🇸 Para EE.UU.:
```
Routing number: [9 dígitos]
Account number: [Tu número de cuenta]
Account type: Checking o Savings
```

#### 🇪🇺 Para Europa:
```
IBAN: [Tu IBAN completo]
BIC/SWIFT: [Código del banco]
```

#### 🌍 Para otros países:
- Lemonsqueezy soporta transferencias bancarias internacionales
- También acepta PayPal como método de pago

4. **Frecuencia de pagos**:
   - Mínimo: $50 USD acumulados
   - Automático: Semanal o mensual
   - Manual: Cuando tú quieras

---

### Paso 4: Google AdSense (Opcional)

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

## 🌍 Ventajas de Lemonsqueezy (Global)

| Característica | Lemonsqueezy | Stripe | Gumroad | Mercado Pago |
|---------------|--------------|--------|---------|--------------|
| **Países soportados** | 135+ 🌍 | ~45 | Global | Solo LATAM |
| **Live mode en Chile** | ✅ Sí | ❌ No | ✅ Sí | ✅ Sí |
| **Europa/Asia/África** | ✅ Sí | ✅ Sí | ✅ Sí | ❌ No |
| **Manejo de impuestos** | ✅ Automático | Manual | Básico | Solo LATAM |
| **Comisión** | 5% + $0.50 | 3.6%+ | 10% | 4.99%+ |
| **Checkout multiidioma** | ✅ Automático | Manual | Inglés | Español |
| **Setup tiempo** | 15 min | ❌ | 10 min | 30 min |
| **Profesionalismo** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Soporte 24/7** | ✅ Email | ✅ Chat | ✅ Email | ⚠️ Horario |

### 💡 Cálculo Real Global:

**Venta de $4.99 USD desde cualquier país**:

Con **Lemonsqueezy**:
```
$4.99 USD
- 5% comisión = $0.25
- Fee fijo = $0.50
= $4.24 USD neto ✅
(85% del total)

Conversión a tu moneda local:
Chile: $4.24 USD = ~$3,816 CLP
España: $4.24 USD = ~€3.90 EUR
México: $4.24 USD = ~$85 MXN
```

**💰 Lemonsqueezy maneja TODO**: IVA, sales tax, GST, impuestos locales

---

## 💵 Proyección de Ingresos Global

### Mes 1 (1,000 visitantes/día - tráfico global)
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
### Mes 1 (1,000 visitantes/día - tráfico global)
- **AdSense**: ~$150-300/mes
- **Premium Lemonsqueezy** (2% conversión): 20 usuarios × $4.24 = $84.80/mes
- **Total**: ~$235-385/mes

### Mes 6 (5,000 visitantes/día - escala global)
- **AdSense**: ~$750-1,500/mes
- **Premium Lemonsqueezy** (3% conversión): 150 usuarios × $4.24 = $636/mes
- **Total**: ~$1,386-2,136/mes

### Costos Fijos
- **Vercel**: $0 (Hobby tier gratuito)
- **Lemonsqueezy**: $0 (solo comisión por venta: 5% + $0.50)
- **Total infraestructura**: **$0/mes** ✅

---

## 🔧 Testing Local

### Simular Usuario Premium:
```javascript
// En consola del navegador
localStorage.setItem('promptgg_license', 'LEMON-TEST-LICENSE-KEY');
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
http://localhost:3000/es/premium-success?order_id=12345678
```

---

## � Configuración Multi-País

### 🇨🇱 Chile
**Documentos necesarios**:
- RUT (Rol Único Tributario)
- Cuenta bancaria (Corriente, Vista o RUT)
- Email de contacto

**Bancos compatibles**:
✅ Banco de Chile, Santander, BCI, Estado, Scotiabank, Itaú, Security, Falabella, Coopeuch, etc.

**Transferencias**:
- Frecuencia: Semanal/Mensual
- Costo: $0 (gratis)
- Tiempo: 2-5 días hábiles
- Moneda: USD → CLP (conversión automática)

---

### 🇺🇸 Estados Unidos
**Documentos necesarios**:
- SSN o EIN
- Cuenta bancaria o PayPal
- Address verification

**Bancos compatibles**:
✅ Chase, Bank of America, Wells Fargo, Citibank, Capital One, etc.

**Transferencias**:
- ACH directo
- 2-3 días hábiles
- $0 comisión

---

### 🇪🇺 Europa
**Documentos necesarios**:
- VAT ID (si aplica)
- IBAN
- Proof of address

**Bancos compatibles**:
✅ Todos los bancos SEPA (España, Francia, Alemania, Italia, etc.)

**Transferencias**:
- SEPA transfer
- 1-3 días hábiles
- €0 comisión

---

### 🌏 Asia / Resto del mundo
**Documentos necesarios**:
- Tax ID local
- Cuenta bancaria internacional
- PayPal (alternativa)

**Transferencias**:
- Wire transfer internacional
- 3-7 días hábiles
- Lemonsqueezy cubre fees en mayoría de casos

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
- `user_country` (trackear de dónde vienen tus usuarios)

### Métricas clave de Lemonsqueezy:
- MRR (Monthly Recurring Revenue)
- Churn rate
- Customer LTV
- Conversion rate por país
- Revenue por país

---

## 🎯 Próximos Pasos (Opcionales)

### Mes 2-3: Autenticación Real
- Clerk.com (gratis hasta 10k usuarios, global)
- Historial de prompts en nube
- Plantillas guardadas
- Lemonsqueezy Customer Portal (cancelaciones automáticas)

### Mes 4-6: Features Premium Adicionales
- **Tier Pro**: $19.99/mes con API access
- Plantillas premium exclusivas
- Exportar prompts a PDF/JSON
- Análisis de efectividad
- Workspace colaborativo
- Priority support

### Webhooks de Lemonsqueezy (Avanzado):
Si quieres validar subscripciones en tiempo real:

```typescript
// src/app/api/lemonsqueezy-webhook/route.ts
import { headers } from 'next/headers';
import crypto from 'crypto';

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get('x-signature');
  
  // Verificar firma del webhook
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET!;
  const hash = crypto
    .createHmac('sha256', secret)
    .update(body)
    .digest('hex');

  if (hash !== signature) {
    return new Response('Invalid signature', { status: 401 });
  }

  const event = JSON.parse(body);

  // Manejar eventos
  switch (event.meta.event_name) {
    case 'order_created':
      // Nueva compra
      const orderId = event.data.id;
      const customerEmail = event.data.attributes.user_email;
      // Guardar en base de datos
      break;
      
    case 'subscription_updated':
      // Actualización de subscripción
      break;
      
    case 'subscription_cancelled':
      // Cancelación
      break;
  }

  return new Response('Success', { status: 200 });
}
```

**Configurar en Lemonsqueezy**:
1. Dashboard → Settings → Webhooks
2. Add endpoint: `https://promptgg.app/api/lemonsqueezy-webhook`
3. Select events: `order_created`, `subscription_updated`, `subscription_cancelled`
4. Copy signing secret

---

## 💡 Tips para Maximizar Ingresos Globales

### 1. Precios regionalizados (PPP - Purchasing Power Parity)
Lemonsqueezy permite precios dinámicos por país:
```
EE.UU./Europa: $4.99/mes (precio base)
LATAM: $2.99/mes (40% descuento)
India/Asia: $1.99/mes (60% descuento)
```

### 2. Cupones de descuento
- First-time: 20% off
- Black Friday: 50% off
- Referral: 30% off

### 3. Trial period
- 7 días gratis (sin tarjeta)
- Incrementa conversión ~15-25%

### 4. Upsell anual
- Plan anual: $49.99/año (ahorra $9.89)
- Pago único, menos churn

---

## 📞 Soporte

Si necesitas ayuda:
1. **Lemonsqueezy Dashboard** → Help (chat/email)
2. Revisa este README completo
3. Verifica la consola del navegador (F12)
4. Prueba con `localStorage` manual

**Soporte Lemonsqueezy**:
- Email: hello@lemonsqueezy.com
- Docs: https://docs.lemonsqueezy.com
- Status: https://status.lemonsqueezy.com
- Community: Discord oficial

---

## ✨ Resultado Final

**Sistema de monetización global listo** con:
- ✅ Zero costo de infraestructura
- ✅ Dos fuentes de ingreso (Ads + Premium)
- ✅ **Funciona en 135+ países** 🌍
- ✅ **Depósitos directos a bancos locales** (Chile incluido)
- ✅ Sin intermediarios necesarios
- ✅ **Manejo automático de impuestos**
- ✅ Checkout multiidioma automático
- ✅ Escalable sin backend
- ✅ Implementación inmediata

**Tiempo total de setup**: 15-30 minutos
**Tiempo hasta primer ingreso**: 24-48 horas
**Comisión real**: 5% + $0.50 USD por venta
**Alcance**: Global (EE.UU., Europa, LATAM, Asia, África, Oceanía)

¡Buena suerte con tu proyecto global! 🚀💰�
