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

## 2. Mem0 AI Entegrasyonu
Yapay zeka (LLM) projeleri için kullanıcı belleği (memory) sağlayan `mem0` kütüphanesinin temel kurulumu. 
- **Klasör:** Kök dizin (`MRVL/`)
- **Teknolojiler:** Python, mem0ai, python-dotenv
- **Durum:** Sanal ortam (`venv`) oluşturuldu, paketler kuruldu, örnek bir `main.py` dosyası ve `.env.example` hazırlandı.
- **Nasıl Çalıştırılır?**
  1. `.env.example` dosyasının adını `.env` olarak değiştirin ve içine `OPENAI_API_KEY` ekleyin.
  2. Sanal ortamı aktif edip script'i çalıştırın:
  ```powershell
  .\venv\Scripts\Activate.ps1
  python main.py
  ```

---
*Not: İleride projeye devam ettiğinizde, bu README dosyasından yola çıkarak nerede kaldığımızı kolayca hatırlayabilirsiniz.*
