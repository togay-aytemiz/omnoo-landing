# AI Agent Guidelines

Bu proje üzerinde çalışan tüm AI ajanları aşağıdaki kurallara **kesinlikle** uymalıdır:

## İletişim Kuralları
- **Dil**: Tüm yanıtlar, açıklamalar ve iletişim **Türkçe** olmalıdır.
- **Format**: Yanıtlar her zaman **madde işaretli (bullet points)** liste formatında olmalıdır. Düz paragraf yazmaktan kaçının.
- **Üslup**: Net, kısa ve sonuç odaklı olun.

## Commit Kuralları
- **Mesaj Formatı**: Commit mesajları **tek satır** ve **İngilizce (English)** olmalıdır.
- **İçerik**: Yapılan değişikliği özetleyen kısa ve net bir ifade kullanın.
    - *Örnek*: "Update landing page hero title"
    - *Hatalı*: "Başlık değiştirildi çünkü kullanıcı istedi ve..." (Türkçe veya uzun açıklamalar yok)

## Kodlama Standartları
- **Styling**: Tailwind yerine **Vanilla CSS Modules** ve `src/theme/tokens.css` değişkenlerini kullanın.
- **i18n**: Tüm metinleri `src/i18n/dictionaries.ts` dosyasına ekleyin. Hardcode string kullanmayın.
