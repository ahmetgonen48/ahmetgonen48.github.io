import React, { useState } from 'react';
import { Phone, MessageCircle, Car, Droplets, Shield, Star, MapPin, Clock, CheckCircle, Menu, X, ChevronDown, Users, Award, Zap } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open('https://wa.me/905064478430?text=Merhaba, mobil oto yıkama hizmeti hakkında bilgi almak istiyorum.', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+905064478430', '_self');
  };

  const services = [
    {
      title: 'Dış Yıkama',
      price: '₺1000',
      description: 'Aracınızın dış yüzeyinin profesyonel temizliği',
      features: ['Köpük yıkama', 'Jant temizliği', 'Lastik parlatma', 'Cam temizliği', 'Kurutma'],
      popular: false
    },
    {
      title: 'İç + Dış Yıkama',
      price: '₺1500',
      description: 'Komple araç temizliği hizmeti',
      features: ['Dış yıkama', 'İç vakumlama', 'Gösterge paneli', 'Cam temizliği', 'Hava spreyi', 'Paspas temizliği'],
      popular: true
    },
    {
      title: 'Detay Yıkama',
      price: '₺2000',
      description: 'En kapsamlı temizlik hizmeti',
      features: ['Komple yıkama', 'Motor temizliği', 'Wax koruma', 'İç döşeme', 'Deri bakımı', 'Oto parfümü'],
      popular: false
    }
  ];

  const features = [
    {
      icon: MapPin,
      title: 'Kapınıza Kadar',
      description: 'Fethiye merkez ve çevresinde istediğiniz yere geliyoruz'
    },
    {
      icon: Clock,
      title: '7/24 Hizmet',
      description: 'Hafta içi ve hafta sonu esnek saatlerde hizmet veriyoruz'
    },
    {
      icon: Users,
      title: 'Deneyimli Ekip',
      description: 'Alanında uzman ve deneyimli personelimizle hizmet'
    },
    {
      icon: Award,
      title: 'Kalite Garantisi',
      description: 'Memnun kalmazsanız tekrar ücretsiz hizmet'
    },
    {
      icon: Zap,
      title: 'Hızlı Servis',
      description: '30-60 dakika içinde işlem tamamlanır'
    },
    {
      icon: Shield,
      title: 'Güvenli Ürünler',
      description: 'Çevre dostu ve araç boyasına zarar vermeyen ürünler'
    }
  ];

  const testimonials = [
    {
      name: 'Mehmet Kaya',
      location: 'Fethiye Merkez',
      rating: 5,
      comment: 'Harika bir hizmet! Arabam tertemiz oldu, işçilik gerçekten kaliteli. Kesinlikle tavsiye ederim.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Ayşe Demir',
      location: 'Çalış',
      rating: 5,
      comment: 'Kapıma kadar gelmeleri çok pratik. Fiyatları da çok uygun. Premium paketi aldım, mükemmeldi!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Kemal Şahin',
      location: 'Kayaköy',
      rating: 5,
      comment: 'Detay yıkama hizmeti aldım, arabam showroom gibi oldu! Personel çok kibar ve profesyonel.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-xl">
                <Car className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Fethiye Mobil</h1>
                <p className="text-sm text-blue-600 font-medium">Oto Yıkama</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#anasayfa" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Ana Sayfa</a>
              <a href="#hizmetler" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Hizmetler</a>
              <a href="#hakkimizda" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Hakkımızda</a>
              <a href="#yorumlar" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Yorumlar</a>
              <a href="#iletisim" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">İletişim</a>
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={handleCall}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Phone className="h-4 w-4" />
                <span>Ara</span>
              </button>
              <button
                onClick={handleWhatsApp}
                className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors font-medium"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="#anasayfa" className="text-gray-700 hover:text-blue-600 font-medium">Ana Sayfa</a>
                <a href="#hizmetler" className="text-gray-700 hover:text-blue-600 font-medium">Hizmetler</a>
                <a href="#hakkimizda" className="text-gray-700 hover:text-blue-600 font-medium">Hakkımızda</a>
                <a href="#yorumlar" className="text-gray-700 hover:text-blue-600 font-medium">Yorumlar</a>
                <a href="#iletisim" className="text-gray-700 hover:text-blue-600 font-medium">İletişim</a>
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                  <button
                    onClick={handleCall}
                    className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    <Phone className="h-4 w-4" />
                    <span>0506 447 84 30</span>
                  </button>
                  <button
                    onClick={handleWhatsApp}
                    className="flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors font-medium"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="anasayfa" className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="h-4 w-4 mr-2" />
                Fethiye'nin En Hızlı Mobil Oto Yıkama
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-blue-600">Kapınıza</span> Kadar<br />
                Gelen <span className="text-blue-600">Oto Yıkama</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Fethiye'de profesyonel mobil oto yıkama hizmeti. Aracınızı istediğiniz yerde, istediğiniz zamanda tertemiz yapıyoruz!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleWhatsApp}
                  className="bg-green-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp ile Rezervasyon</span>
                </button>
                <button
                  onClick={handleCall}
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>0506 447 84 30</span>
                </button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>7/24 Hizmet</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Ücretsiz Keşif</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Garanti</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-8 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                  alt="Mobil Oto Yıkama" 
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">4.9/5</p>
                    <p className="text-sm text-gray-600">Müşteri Memnuniyeti</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Neden Fethiye Mobil Oto Yıkama?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesyonel hizmet, uygun fiyat ve müşteri memnuniyeti odaklı yaklaşımımızla Fethiye'nin tercih edilen mobil oto yıkama hizmeti
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Hizmet Paketlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İhtiyacınıza uygun paketi seçin, profesyonel ekibimiz aracınızı tertemiz yapsın
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 relative ${service.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      En Popüler
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{service.price}</div>
                  <p className="text-sm text-gray-500">Başlangıç fiyatı</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleWhatsApp}
                  className={`w-full py-4 rounded-xl font-semibold transition-all ${
                    service.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Rezervasyon Yap
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimizda" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Fethiye'nin En Güvenilir <span className="text-blue-600">Mobil Oto Yıkama</span> Hizmeti
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                2020 yılından beri Fethiye ve çevresinde mobil oto yıkama hizmeti veren deneyimli ekibimizle, 
                aracınızı istediğiniz yerde profesyonel şekilde temizliyoruz.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Çevre dostu ürünler kullanarak, aracınızın boyasına zarar vermeden en iyi temizlik hizmetini sunuyoruz. 
                Müşteri memnuniyeti bizim için öncelik.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <p className="text-gray-600">Mutlu Müşteri</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5 Yıl</div>
                  <p className="text-gray-600">Deneyim</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">7/24</div>
                  <p className="text-gray-600">Hizmet</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">%100</div>
                  <p className="text-gray-600">Memnuniyet</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6872149/pexels-photo-6872149.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop" 
                alt="Profesyonel Ekip" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="yorumlar" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Müşterilerimiz Ne Diyor?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hizmetimizden memnun kalan müşterilerimizin gerçek yorumları
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Hemen Rezervasyon Yapın</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Aracınızı tertemiz yapmak için bugün bizimle iletişime geçin
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Telefon</p>
                    <p className="text-blue-100">0506 447 84 30</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-blue-100">7/24 Mesaj Atabilirsiniz</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Hizmet Alanı</p>
                    <p className="text-blue-100">Fethiye Merkez ve Çevresi</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Çalışma Saatleri</p>
                    <p className="text-blue-100">7/24 Hizmet Veriyoruz</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Hızlı Rezervasyon</h3>
              <div className="space-y-4">
                <p className="text-blue-100 mb-6">
                  WhatsApp üzerinden hızlı rezervasyon yapabilir, fiyat teklifi alabilirsiniz.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleWhatsApp}
                    className="flex-1 bg-green-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp ile Rezervasyon</span>
                  </button>
                  <button
                    onClick={handleCall}
                    className="flex-1 bg-white text-blue-600 px-6 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all flex items-center justify-center space-x-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Hemen Ara</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 z-50 animate-pulse"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-600 p-2 rounded-xl">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Fethiye Mobil</h3>
                  <p className="text-blue-400">Oto Yıkama</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Fethiye'de kapınıza kadar gelen profesyonel mobil oto yıkama hizmeti. 
                Aracınızı istediğiniz yerde, istediğiniz zamanda tertemiz yapıyoruz.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={handleWhatsApp}
                  className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                </button>
                <button
                  onClick={handleCall}
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Hizmetler</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Dış Yıkama</li>
                <li>İç + Dış Yıkama</li>
                <li>Detay Yıkama</li>
                <li>Motor Temizliği</li>
                <li>Wax Koruma</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">İletişim</h4>
              <ul className="space-y-2 text-gray-400">
                <li>0506 447 84 30</li>
                <li>Fethiye Merkez</li>
                <li>7/24 Hizmet</li>
                <li>WhatsApp Destek</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Fethiye Mobil Oto Yıkama. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;