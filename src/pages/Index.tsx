import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [prompt, setPrompt] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Симуляция генерации видео
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  const videoExamples = [
    {
      id: 1,
      title: "Космический пейзаж",
      description: "Плавное движение через звездное небо",
      thumbnail: "/img/c1a3a3ba-9704-41c3-983a-cba82d6aa450.jpg",
      duration: "15 сек",
      views: "12.5k"
    },
    {
      id: 2,
      title: "Городской закат",
      description: "Таймлапс заката над мегаполисом",
      thumbnail: "/img/7da23ad9-b4b9-4324-8c7f-1121d3fb8dc5.jpg",
      duration: "20 сек",
      views: "8.2k"
    },
    {
      id: 3,
      title: "Океанские волны",
      description: "Медитативное движение волн",
      thumbnail: "/img/c1a3a3ba-9704-41c3-983a-cba82d6aa450.jpg",
      duration: "12 сек",
      views: "15.7k"
    },
    {
      id: 4,
      title: "Лесная магия",
      description: "Мистическое свечение в лесу",
      thumbnail: "/img/7da23ad9-b4b9-4324-8c7f-1121d3fb8dc5.jpg",
      duration: "18 сек",
      views: "9.1k"
    },
    {
      id: 5,
      title: "Абстрактные формы",
      description: "Плавные трансформации цветов",
      thumbnail: "/img/c1a3a3ba-9704-41c3-983a-cba82d6aa450.jpg",
      duration: "25 сек",
      views: "6.8k"
    },
    {
      id: 6,
      title: "Цветочный сад",
      description: "Распускающиеся цветы весной",
      thumbnail: "/img/7da23ad9-b4b9-4324-8c7f-1121d3fb8dc5.jpg",
      duration: "22 сек",
      views: "11.3k"
    }
  ];

  const features = [
    {
      icon: "Camera",
      title: "Из фото в видео",
      description: "Загрузите фотографию и получите анимированное видео"
    },
    {
      icon: "Type",
      title: "Текст-в-видео",
      description: "Опишите желаемое видео текстом - AI создаст его"
    },
    {
      icon: "Sparkles",
      title: "AI-магия",
      description: "Современные нейросети для реалистичных результатов"
    },
    {
      icon: "Download",
      title: "Бесплатно",
      description: "Генерируйте видео без ограничений и подписок"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b border-white/20 backdrop-blur-md bg-white/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#FF6B6B] to-[#4EQDC4] rounded-lg flex items-center justify-center">
                <Icon name="Play" className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4EQDC4] bg-clip-text text-transparent">
                PIKA
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#generator" className="text-gray-600 hover:text-[#FF6B6B] transition-colors">
                Генератор
              </a>
              <a href="#gallery" className="text-gray-600 hover:text-[#FF6B6B] transition-colors">
                Галерея
              </a>
              <a href="#features" className="text-gray-600 hover:text-[#FF6B6B] transition-colors">
                Возможности
              </a>
            </nav>
            <Button className="bg-gradient-to-r from-[#FF6B6B] to-[#4EQDC4] hover:from-[#ff5252] hover:to-[#42a5f5] text-white border-0">
              Начать создавать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#FF6B6B] via-[#4EQDC4] to-[#45B7D1] bg-clip-text text-transparent animate-fade-in">
              Создавай видео силой AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Превращай фотографии и текст в потрясающие видео за секунды. Бесплатно и без ограничений.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#FF6B6B] to-[#4EQDC4] hover:from-[#ff5252] hover:to-[#42a5f5] text-white border-0 text-lg px-8 py-6 hover-scale"
                onClick={() => document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Play" className="mr-2" size={20} />
                Создать видео
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-[#FF6B6B] text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white text-lg px-8 py-6 hover-scale"
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Image" className="mr-2" size={20} />
                Посмотреть примеры
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Generator Section */}
      <section id="generator" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF6B6B] to-[#4EQDC4] bg-clip-text text-transparent">
              AI Генератор Видео
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Загрузите фотографию или опишите желаемое видео - наш AI создаст его за считанные секунды
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-md overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-[#FF6B6B]/10 to-[#4EQDC4]/10 border-b border-gray-100">
                <CardTitle className="text-2xl text-center text-gray-800">
                  Создайте свое видео
                </CardTitle>
                <CardDescription className="text-center text-gray-600">
                  Выберите способ создания видео
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Upload Photo */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Icon name="Camera" className="text-[#FF6B6B]" size={24} />
                      <h3 className="text-xl font-semibold text-gray-800">Загрузить фото</h3>
                    </div>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#FF6B6B] transition-colors cursor-pointer hover-scale">
                      <Icon name="Upload" className="mx-auto mb-4 text-gray-400" size={48} />
                      <p className="text-gray-600 mb-2">Перетащите фото сюда или кликните для выбора</p>
                      <p className="text-sm text-gray-400">PNG, JPG до 10MB</p>
                      <Input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                      />
                    </div>
                    {selectedFile && (
                      <div className="flex items-center gap-2 text-green-600 animate-fade-in">
                        <Icon name="CheckCircle" size={16} />
                        <span className="text-sm">{selectedFile.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Text Prompt */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Icon name="Type" className="text-[#4EQDC4]" size={24} />
                      <h3 className="text-xl font-semibold text-gray-800">Текстовое описание</h3>
                    </div>
                    <Textarea
                      placeholder="Опишите желаемое видео: 'Космический корабль летит через звездное небо с мерцающими звездами и туманностями'"
                      className="min-h-[120px] border-2 border-gray-200 focus:border-[#4EQDC4] resize-none"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                    />
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Icon name="Lightbulb" size={16} />
                      <span>Чем детальнее описание, тем лучше результат</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#FF6B6B] to-[#4EQDC4] hover:from-[#ff5252] hover:to-[#42a5f5] text-white border-0 text-lg px-12 py-6 hover-scale"
                    onClick={handleGenerate}
                    disabled={!prompt && !selectedFile}
                  >
                    {isGenerating ? (
                      <>
                        <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
                        Генерируется...
                      </>
                    ) : (
                      <>
                        <Icon name="Sparkles" className="mr-2" size={20} />
                        Создать видео
                      </>
                    )}
                  </Button>
                </div>

                {isGenerating && (
                  <div className="mt-6 animate-fade-in">
                    <div className="bg-gradient-to-r from-[#FF6B6B] to-[#4EQDC4] h-2 rounded-full overflow-hidden">
                      <div className="h-full bg-white/30 animate-pulse"></div>
                    </div>
                    <p className="text-center mt-2 text-gray-600">AI создает ваше видео...</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-r from-[#FF6B6B]/5 to-[#4EQDC4]/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF6B6B] to-[#4EQDC4] bg-clip-text text-transparent">
              Возможности платформы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мощные инструменты для создания профессиональных видео
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow hover-scale bg-white/80 backdrop-blur-md">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B6B] to-[#4EQDC4] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF6B6B] to-[#4EQDC4] bg-clip-text text-transparent">
              Галерея видео
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Посмотрите на потрясающие видео, созданные нашими пользователями
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoExamples.map((video, index) => (
              <Card key={video.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale bg-white/80 backdrop-blur-md overflow-hidden group">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Button 
                      size="lg" 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white text-gray-800 border-0"
                    >
                      <Icon name="Play" className="mr-2" size={20} />
                      Смотреть
                    </Button>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-black/60 text-white border-0">
                      {video.duration}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{video.title}</h3>
                  <p className="text-gray-600 mb-4">{video.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-gray-500">
                      <Icon name="Eye" size={16} />
                      <span className="text-sm">{video.views}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="ghost" className="hover:bg-[#FF6B6B]/10 hover:text-[#FF6B6B]">
                        <Icon name="Heart" size={16} />
                      </Button>
                      <Button size="sm" variant="ghost" className="hover:bg-[#4EQDC4]/10 hover:text-[#4EQDC4]">
                        <Icon name="Share" size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-[#FF6B6B] text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white text-lg px-8 py-6 hover-scale"
            >
              <Icon name="Plus" className="mr-2" size={20} />
              Загрузить больше
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-[#FF6B6B] to-[#4EQDC4] rounded-lg flex items-center justify-center">
                <Icon name="Play" className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4EQDC4] bg-clip-text text-transparent">
                PIKA
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Создавайте потрясающие видео с помощью искусственного интеллекта
            </p>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-gray-400 hover:text-[#FF6B6B] transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6B6B] transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6B6B] transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}