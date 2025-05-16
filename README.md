# Firefox Bookmark Organizer

Firefox yer imlerinizi (bookmarks) otomatik olarak yedekleyen ve içeriklerine göre yeniden organize eden bir tarayıcı eklentisi.

## Özellikler

- Mevcut yer imlerini JSON formatında yedekleme
- Her yer iminin içeriğini otomatik analiz etme
- İçerik analizine göre yer imlerini kategorilere ayırma
- Orijinal yapı ile yeni organizasyon arasındaki farkları raporlama
- Tüm işlem sonuçlarını detaylı raporlama

## Kurulum

1. Firefox tarayıcınızda `about:debugging` sayfasını açın
2. "This Firefox" sekmesine tıklayın
3. "Load Temporary Add-on" butonuna tıklayın
4. Projedeki `manifest.json` dosyasını seçin

## Kullanım

1. Eklenti yüklendikten sonra Firefox araç çubuğunda görünecektir
2. Eklenti ikonuna tıklayın
3. "Bookmarkları Yedekle ve Düzenle" butonuna tıklayın
4. İşlem tamamlandığında:
   - Orijinal yer imleri `bookmarks-backup-[tarih].json` dosyasına kaydedilir
   - Yeni organizasyon raporu `bookmarks-report-[tarih].json` dosyasına kaydedilir

## Teknik Detaylar

### Proje Yapısı

```
firebookmark/
├── manifest.json        # Eklenti manifest dosyası
├── popup.html          # Eklenti arayüzü
├── popup.js           # Arayüz etkileşimleri
└── background.js      # Ana işlem mantığı
```

### Kullanılan Teknolojiler

- Firefox WebExtensions API
- JavaScript (ES6+)
- HTML/CSS

### Kategori Sistemi

Varsayılan kategoriler:
- Teknoloji
- Haber
- Eğlence
- Diğer

## Geliştirme

### Gereksinimler

- Firefox Browser
- Temel web geliştirme bilgisi

### Yerel Geliştirme

1. Projeyi klonlayın:
```bash
git clone https://github.com/[kullanıcı-adı]/firebookmark.git
cd firebookmark
```

2. Firefox'ta geliştirici modunda test edin:
   - `about:debugging` sayfasını açın
   - "This Firefox" > "Load Temporary Add-on"
   - `manifest.json` dosyasını seçin

## Katkıda Bulunma

1. Bu repository'yi fork edin
2. Feature branch'i oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## İletişim

[İletişim bilgileriniz]

## Teşekkürler

Bu projeye katkıda bulunan herkese teşekkürler! 