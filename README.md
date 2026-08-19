# MRVL - Marvel Projeleri

Bu klasör (MRVL), Marvel Sinematik Evreni (MCU) ile ilgili geliştirilen yapay zeka destekli ve görsel projelerin ana merkezidir. Şu ana kadar iki farklı proje başlatılmıştır:

## 1. Marvel Cosmos (Sinaps Haritası)
MCU filmleri ve dizileri arasındaki tüm bağlantıları 3 boyutlu, interaktif ve gerçekçi bir galaksi/uzay simülasyonu içinde görselleştiren bir web uygulamasıdır. 
- **Klasör:** `marvel-cosmos/`
- **Teknolojiler:** HTML/CSS/JS, Three.js, 3D Force-Graph, three-spritetext
- **Nasıl Çalıştırılır?** 
  Terminalden `marvel-cosmos` dizinine girip yerel bir sunucu başlatarak çalıştırabilirsiniz:
  ```powershell
  cd marvel-cosmos
  python -m http.server 8282
  ```
  Daha sonra tarayıcıda `http://localhost:8282` adresine gidebilirsiniz.
- **Mevcut Özellikler:** Fazlara göre renklendirilmiş yıldızlar (düğümler), her düğümün üstünde yapım isimleri, bağlantı tiplerine göre hareketli enerji akışları (sinapslar) ve yavaşça dönen bir galaksi modeli.

---
## Sürüm Geçmişi (Changelog)

### v1.1.0 (Güncel)
- **Stan Lee Nebula (Easter Egg)** eklendi. Evrenden uzaklaşıldığında uzayın derinliklerinde beliren ve yavaşça parlayan devasa, maskelenmiş bir Stan Lee bulutsusu oluşturuldu.
- **Dinamik Arka Plan Yıldızları:** Arka plan yıldız sayısı (starField) 3000'den 12000'e çıkarılarak evrenin çok daha yoğun ve gerçekçi görünmesi sağlandı.

### v1.0.0
- **Canlı Arama (Live Search)** özelliği eklendi. Haritadaki filmler artık isimlerine göre aranıp anında bulunabiliyor.
- **Zaman Kodları (Timecodes)** eklendi. Kritik geçişler dakika/saniye olarak sağ alt panelde ve ipuçlarında gösteriliyor.
- **Lejant Tasarımı** yenilendi ve tıklanabilirlik sorunları (z-index çakışmaları) giderildi.
- Kullanılmayan eski Python/Mem0 dosyaları çalışma alanından temizlendi.

---
*Not: İleride projeye devam ettiğinizde, bu README dosyasından yola çıkarak nerede kaldığımızı kolayca hatırlayabilirsiniz.*
