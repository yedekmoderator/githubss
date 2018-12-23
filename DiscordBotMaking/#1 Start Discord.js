//İlk Öncelikle güzel code center üyelerim ve yetkililerim bizim sunucumuzdaki gibi bir bot yapmak istiyorsanız
//Bazı programları kullanmanız gerekmektedir , Node.js indirmeniz gerekmekte ve Visual studio code veya Atom'u da indirmeniz gerekmekte
//Şimdi İlk Öncelikle bir dosya açıyoruz adı önemli değil , botun dosyasına ctrlnin üst tuşununa basarak fareyle sağ'a tıklamanız gerekmekte
//Tıklatık'dan sonra orada komut penceresini burada aç var ona tıklayın ve size bir cmd sayfası açılması gerekmekte , açıldıktan sonra
//O cmd sayfasına 'npm init' yazmanız gerekiyor , yazdıktan sonra size botun adını vesaire gibi bazı şeyleri istiyicek.
//Doldurun orayı , doldurduktan sonra ise size package dosyası gelicek , bu dosya sizin botunuzun bazı bilgilerin taşımakta.
//Sonra ise yine o cmd sayfasına 'npm install discord.js' yazın biz discord.js kullanmaktayız siz başka yazılım dillerini öğrenmek istiyorsanız
//Başka bir yerde öğrenmeniz gerekmekte malesef :( , gelelim konumuza yazdıktan sonra indirmesi biraz sürücek 1 dakika civarı , yüklendikten sonra
//'Nodule Modules' diye dosya gelmesi gerekmekte o dosya yazılım dillerinin toplandığı bir yeridir.
//Siz şimdi yeni bir not defteri açın adını index yapın , sonra ise not defterine birşey yazmıyıcaksanız orda yukarıya doğru gittiğinizde
//'Dosya' yerine tıklayıp farklı kaydet diyorsunuz aşşağıdaki bölümden yani 'Kayıt Türünden' Tüm Dosyalar tıklayıp index yerine index.js yazın
//Sonra js dosyası gelicek ve siz o dosyayı visual studio code ya da atom ile açıcaksınız. 

Bot'umuzu Şuan Temellerini atmış bulunmaktayız.

2.KISIM

//İndex.js açtıkdan sonra visual studio code'a yada Atom'a Aşağıda vereceğim kodu girin.

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('Bunu biraz sonra giricez.');

//Yapıştırdıktan sonra\\

-Google Tarayıcımıza Discord Developer yazın.

-İlk yere tıklayın ve geldiğiniz sayfada botumuzu oluşturmak için

-Create an Appicilation tıklayın.

-Gelen sayfada bir botunuz olmuş olucak.

1.DOSYA BİTMİŞTİR , 2.DOSYAYA GEÇİNİZ.
