import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("tools");

  const tools = [
    {
      icon: "Sparkles",
      title: "Particle Systems",
      description: "Создавайте реалистичные симуляции частиц - огонь, дым, пыль, снег",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "Droplets",
      title: "Fluid Simulation",
      description: "Продвинутая симуляция жидкостей с реалистичной физикой",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: "Zap",
      title: "Destruction FX",
      description: "Разрушения, взрывы и деформации объектов",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "Wind",
      title: "Atmosphere & Fog",
      description: "Объёмные атмосферные эффекты и туман",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: "Layers",
      title: "Node Compositing",
      description: "Профессиональный нодовый композитинг как в Nuke",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: "Cpu",
      title: "GPU Rendering",
      description: "Real-time рендеринг с аппаратным ускорением",
      color: "from-violet-500 to-purple-500"
    }
  ];

  const features = [
    {
      title: "Real-time Preview",
      description: "Мгновенный просмотр изменений без ожидания рендера",
      icon: "Play"
    },
    {
      title: "AI-Powered",
      description: "ИИ-помощник для автоматизации рутинных задач",
      icon: "Brain"
    },
    {
      title: "Cloud Rendering",
      description: "Рендеринг в облаке на мощных GPU серверах",
      icon: "Cloud"
    },
    {
      title: "Team Collaboration",
      description: "Совместная работа над проектами в реальном времени",
      icon: "Users"
    }
  ];

  const showcaseProjects = [
    {
      title: "Explosion VFX",
      type: "Particle System",
      image: "https://cdn.poehali.dev/projects/418252ed-7475-421a-b329-f9ceef5180e6/files/53ecf964-095c-414f-8bb6-100b2040c65f.jpg"
    },
    {
      title: "Water Simulation",
      type: "Fluid Dynamics",
      image: "https://cdn.poehali.dev/projects/418252ed-7475-421a-b329-f9ceef5180e6/files/37b0a772-bf6c-4562-8c31-c4727f29cc22.jpg"
    },
    {
      title: "Magic Particles",
      type: "Energy Effects",
      image: "https://cdn.poehali.dev/projects/418252ed-7475-421a-b329-f9ceef5180e6/files/fa33746f-5130-4aa7-a59a-93a5b5dbe2d9.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Icon name="Sparkles" className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              LuminaGraphix
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#tools" className="text-muted-foreground hover:text-foreground transition-colors">Инструменты</a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Возможности</a>
            <a href="#showcase" className="text-muted-foreground hover:text-foreground transition-colors">Галерея</a>
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Начать бесплатно
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 animate-fade-in">
            🎬 Революция в CGI и VFX
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
            Создавайте VFX эффекты
            <br />
            для кино будущего
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in">
            Профессиональная платформа для создания визуальных эффектов с real-time рендерингом, 
            нодовым композитингом и AI-ассистентом. Мощнее Maya, быстрее Houdini.
          </p>
          <div className="flex gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8">
              <Icon name="Play" className="mr-2" size={20} />
              Начать создавать
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10 text-lg px-8">
              <Icon name="Video" className="mr-2" size={20} />
              Смотреть демо
            </Button>
          </div>

          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-3xl animate-glow" />
            <div className="relative bg-card border border-border rounded-2xl p-4 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Play" className="mx-auto mb-4 text-primary animate-float" size={64} />
                  <p className="text-2xl font-semibold">Интерактивный 3D Viewport</p>
                  <p className="text-muted-foreground mt-2">Real-time рендеринг и предпросмотр</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tools" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              Профессиональные инструменты
            </Badge>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Всё для создания VFX
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный набор инструментов для создания визуальных эффектов киноуровня
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon name={tool.icon} className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-semibold mb-2">{tool.title}</h4>
                <p className="text-muted-foreground">{tool.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                Революционные технологии
              </Badge>
              <h3 className="text-4xl font-bold mb-6">
                Превосходим индустриальные стандарты
              </h3>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={feature.icon} className="text-primary" size={24} />
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold mb-1">{feature.title}</h5>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <div className="text-4xl font-bold text-primary mb-2">10x</div>
                <div className="text-sm text-muted-foreground">Быстрее рендеринг</div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
                <div className="text-4xl font-bold text-secondary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">VFX инструментов</div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">GPU acceleration</div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Cloud рендеринг</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="showcase" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Портфолио эффектов
            </Badge>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Созданные в LuminaGraphix
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Примеры профессиональных VFX эффектов, созданных на нашей платформе
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {showcaseProjects.map((project, index) => (
              <Card 
                key={index}
                className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <Badge className="mb-2 bg-primary/10 text-primary border-primary/20 text-xs">
                    {project.type}
                  </Badge>
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <Card className="p-12 text-center bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-3xl animate-glow" />
            <div className="relative">
              <h3 className="text-4xl font-bold mb-4">
                Готовы создать VFX будущего?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Присоединяйтесь к революции в индустрии визуальных эффектов
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  <Icon name="Rocket" className="mr-2" size={20} />
                  Начать бесплатно
                </Button>
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Связаться с нами
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={20} />
              </div>
              <span className="font-semibold">LuminaGraphix</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 LuminaGraphix. Революция в CGI и VFX.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Github" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
