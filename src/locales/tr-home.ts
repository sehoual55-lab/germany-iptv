/**
 * Turkish-only content blocks for the /tr/ landing page.
 * Kept separate from the shared dictionary because the Turkish page has an
 * informational structure that the German commercial homepage does not share.
 */

const trHome = {
  watching: {
    heading: "Türkiye'den Almanya Yayınları Nasıl İzlenir?",
    intro:
      "Almanya'da yaşayan bir yakınınız olabilir, Almanca öğreniyor olabilirsiniz ya da iş gereği Almanya gündemini takip ediyor olabilirsiniz. Sebebi ne olursa olsun, yurt dışından Almanya yayınlarına bakarken üç şeyi netleştirmek işinizi kolaylaştırır: hangi içeriğe erişme hakkınız var, hangi cihazı kullanacaksınız ve bağlantınız bu işi kaldırıyor mu.",
    blocks: [
      {
        title: "1. Yasal erişim hakkınızı netleştirin",
        body: "Almanya'daki kamu yayıncılarının bir bölümü kendi resmi uygulamaları üzerinden ücretsiz yayın sunar; bazı içerikler ise yalnızca Almanya sınırları içinde ya da abonelik ile açıktır. Özel kanalların ve spor içeriklerinin büyük kısmı lisans korumalıdır. Bir hizmet, lisansını gösteremediği premium içerikleri sunuyorsa bu bir uyarı işaretidir. Yalnızca izlemeye yetkili olduğunuz içeriklere erişin.",
      },
      {
        title: "2. Uyumlu bir cihaz seçin",
        body: "Samsung ve LG Smart TV'ler, Android TV kutuları, Fire TV çubukları, telefonlar, tabletler ve bilgisayarlar en sık kullanılan seçeneklerdir. Belirleyici olan cihazın markası değil, üzerinde çalışabilecek bir oynatıcı uygulamasının bulunmasıdır. Eski model bir televizyonda mağaza desteği kalkmış olabilir; bu durumda küçük bir Android TV kutusu genellikle en pratik çözümdür.",
      },
      {
        title: "3. Bağlantınızı kontrol edin",
        body: "HD bir yayın için pratikte 15–25 Mbit/s arası kararlı bir bağlantı rahat bir deneyim sağlar; 4K içerikte bu ihtiyaç belirgin şekilde artar. Hızdan çok kararlılık önemlidir: dalgalanan bir bağlantı, yüksek hızlı ama düzensiz bir hattan daha çok takılmaya yol açar. Mümkünse televizyonu kablo ile bağlayın.",
      },
      {
        title: "4. Kurulumu tamamlayın",
        body: "Uyumlu oynatıcı uygulamasını kurun, size iletilen erişim bilgilerini (M3U bağlantısı ya da portal girişi) girin, listeyi yükleyin ve bir kanalı test edin. Çoğu cihazda bu adımlar birkaç dakika sürer. Ayrıntılı anlatım için kurulum rehberimize bakabilirsiniz.",
      },
    ],
    serversHeading: "germany servers iptv ne anlama gelir?",
    serversBody:
      "Bu ifade genellikle yayın altyapısının Almanya'da barındırılan sunucular üzerinden dağıtıldığını anlatır. Coğrafi olarak yakın sunucular gecikmeyi azaltabilir ve akışın daha kararlı olmasına yardımcı olabilir. Ancak sunucu konumu bir içeriğin lisanslı olup olmadığını değiştirmez; teknik altyapı ile yayın hakları birbirinden bağımsız iki konudur.",
    legalHeading: "iptv germany legal — kısa özet",
    legalBody:
      "IPTV'nin kendisi yasal bir aktarım teknolojisidir; internet üzerinden video dağıtan pek çok tanınmış hizmet de aynı mantıkla çalışır. Tartışmalı olan nokta teknoloji değil, sunulan içeriğin lisanslı olup olmadığıdır. Almanya'da telif hakkı mevzuatı korumalı içeriklerin izinsiz dağıtımını yasaklar ve bu kural yurt dışından erişim için de geçerlidir. Bu sayfadaki bilgiler genel niteliktedir ve hukuki danışmanlık yerine geçmez.",
    ctaNote:
      "Emin olmadığınız bir nokta varsa sipariş öncesinde bize yazın; cihazınızın ve beklentinizin uygun olup olmadığını birlikte değerlendirelim.",
  },

  comparison: {
    heading: "Almanya IPTV mi, klasik yayın mı?",
    subheading:
      "Hangi yöntemin size uygun olduğunu belirlemek için birkaç pratik ölçüt.",
    rows: [
      {
        label: "Kurulum",
        iptv: "İnternet bağlantısı ve uyumlu bir cihaz yeterli; anten ya da çanak gerekmez.",
        classic: "Uydu veya kablo altyapısı, fiziksel kurulum ve genellikle teknisyen desteği gerekir.",
      },
      {
        label: "Taşınabilirlik",
        iptv: "Aynı hesabı farklı cihazlarda kullanabilirsiniz (paket kapsamı dahilinde).",
        classic: "Kurulum yapılan adrese bağlıdır.",
      },
      {
        label: "Kararlılık",
        iptv: "İnternet bağlantısının kalitesine doğrudan bağlıdır.",
        classic: "Hava koşullarından etkilenebilir, ancak internetten bağımsızdır.",
      },
      {
        label: "İçerik hakları",
        iptv: "Sağlayıcının lisanslarına bağlıdır; mutlaka kontrol edilmelidir.",
        classic: "Yayıncının kendi lisans kapsamıyla sınırlıdır.",
      },
    ],
  },
};

export default trHome;
