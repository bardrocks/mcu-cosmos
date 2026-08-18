import os
from dotenv import load_dotenv
from mem0 import MemoryClient

# .env dosyasını yükle
load_dotenv()

# Mem0 API anahtarının yüklendiğini kontrol et
if not os.environ.get("MEM0_API_KEY"):
    print("UYARI: MEM0_API_KEY ortam değişkeni bulunamadı. Lütfen .env dosyanızı ayarlayın.")
    print("Bulut bağlantısı hata verebilir.")

# Mem0 Bulut İstemcisini (MemoryClient) başlat
# Bu sayede kendi bilgisayarınızda LLM çalıştırmak yerine doğrudan Mem0'nun bulut sunucusunu (ve onun kendi yapay zekasını) kullanırsınız.
m = MemoryClient(api_key=os.environ.get("MEM0_API_KEY", "dummy-key-if-not-set"))

def main():
    user_id = "kullanici_123"

    print("--- Mem0'a bilgi ekleniyor ---")
    # Mem0'a veri ekle
    result = m.add("Hafta sonları tenis oynamayı ve bilim kurgu kitapları okumayı severim.", user_id=user_id)
    print("Ekleme sonucu:", result)
    print("\n")

    print("\n--- Mem0'dan bilgi aranıyor ---")
    # Mem0'da arama yap
    query_result = m.search("Kullanıcının hobileri nelerdir?", filters={"user_id": user_id})
    print("Arama sonuçları:")
    for memory in query_result:
        print("-", memory)

if __name__ == "__main__":
    main()
