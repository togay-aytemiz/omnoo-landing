# AI Agent Guidelines

Bu proje üzerinde çalışan tüm AI ajanları aşağıdaki kurallara **kesinlikle** uymalıdır:

## İletişim Kuralları
- **Dil**: Tüm yanıtlar, açıklamalar ve iletişim **Türkçe** olmalıdır.
- **Format**: Yanıtlar her zaman **madde işaretli (bullet points)** liste formatında olmalıdır. Düz paragraf yazmaktan kaçının.
- **Üslup**: Net, kısa ve sonuç odaklı olun.

## Commit Kuralları
- **Mesaj Formatı**: Commit mesajları **tek satır** olmalıdır.
- **İçerik**: Yapılan değişikliği özetleyen kısa ve net bir ifade kullanın.
    - *Örnek*: "Landing page hero başlığı güncellendi"
    - *Hatalı*: "Başlık değiştirildi çünkü kullanıcı istedi ve..." (uzun açıklamalar yok)

## Kodlama Standartları
- **Styling**: Tailwind yerine **Vanilla CSS Modules** ve `src/theme/tokens.css` değişkenlerini kullanın.
- **i18n**: Tüm metinleri `src/i18n/dictionaries.ts` dosyasına ekleyin. Hardcode string kullanmayın.
