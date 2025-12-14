import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedEffect, setSelectedEffect] = useState("particles");
  const [intensity, setIntensity] = useState([50]);
  const [speed, setSpeed] = useState([75]);
  const [density, setDensity] = useState([60]);
  const [projectName, setProjectName] = useState("Film_Scene_01");
  const [activeTool, setActiveTool] = useState("move");
  const [layers, setLayers] = useState([
    { id: 1, name: "Particle System", visible: true, locked: false },
    { id: 2, name: "Explosion FX", visible: true, locked: false },
    { id: 3, name: "Smoke Trail", visible: false, locked: false },
    { id: 4, name: "Background", visible: true, locked: true },
  ]);

  const vfxEffects = [
    { id: "particles", name: "Particle System", icon: "Sparkles", color: "from-purple-500 to-pink-500" },
    { id: "fluid", name: "Fluid Simulation", icon: "Droplets", color: "from-cyan-500 to-blue-500" },
    { id: "explosion", name: "Explosion FX", icon: "Zap", color: "from-orange-500 to-red-500" },
    { id: "smoke", name: "Smoke & Fog", icon: "Wind", color: "from-gray-500 to-slate-500" },
    { id: "fire", name: "Fire Effect", icon: "Flame", color: "from-red-500 to-yellow-500" },
    { id: "magic", name: "Magic Particles", icon: "Wand2", color: "from-indigo-500 to-purple-500" },
    { id: "destruction", name: "Destruction", icon: "Skull", color: "from-red-600 to-orange-600" },
    { id: "energy", name: "Energy Beam", icon: "Zap", color: "from-blue-400 to-cyan-400" },
  ];

  const templates = [
    { name: "Explosion Scene", type: "Action", preview: "https://cdn.poehali.dev/projects/418252ed-7475-421a-b329-f9ceef5180e6/files/53ecf964-095c-414f-8bb6-100b2040c65f.jpg" },
    { name: "Water Splash", type: "Nature", preview: "https://cdn.poehali.dev/projects/418252ed-7475-421a-b329-f9ceef5180e6/files/37b0a772-bf6c-4562-8c31-c4727f29cc22.jpg" },
    { name: "Magic Portal", type: "Fantasy", preview: "https://cdn.poehali.dev/projects/418252ed-7475-421a-b329-f9ceef5180e6/files/fa33746f-5130-4aa7-a59a-93a5b5dbe2d9.jpg" },
  ];

  const tools = [
    { id: "move", name: "Move", icon: "Move" },
    { id: "rotate", name: "Rotate", icon: "RotateCw" },
    { id: "scale", name: "Scale", icon: "Maximize2" },
    { id: "paint", name: "Paint", icon: "Brush" },
  ];

  const projects = [
    { name: "Film Scene 01", date: "14.12.2024", effects: 12 },
    { name: "Action Sequence", date: "13.12.2024", effects: 8 },
    { name: "Magic Combat", date: "12.12.2024", effects: 15 },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <nav className="border-b border-border bg-card/50 backdrop-blur-xl flex-shrink-0">
        <div className="px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={18} />
              </div>
              <span className="font-bold text-lg">КиноГрафикс CGI</span>
              <Badge className="ml-2 bg-primary/10 text-primary text-xs">ЭффектМастер VFX</Badge>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm">
                <Icon name="FileVideo" className="mr-1.5" size={14} />
                Файл
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Edit3" className="mr-1.5" size={14} />
                Редактор
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Layers" className="mr-1.5" size={14} />
                Композитинг
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Settings" className="mr-1.5" size={14} />
                Настройки
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Input 
              value={projectName} 
              onChange={(e) => setProjectName(e.target.value)}
              className="w-40 h-8 text-xs"
            />
            <Button size="sm" variant="outline" className="h-8">
              <Icon name="Save" className="mr-1.5" size={14} />
              Сохранить
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent h-8">
              <Icon name="Download" className="mr-1.5" size={14} />
              Экспорт
            </Button>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-60 border-r border-border bg-card/30 overflow-y-auto flex-shrink-0">
          <Tabs defaultValue="effects" className="w-full">
            <TabsList className="w-full grid grid-cols-3 m-2">
              <TabsTrigger value="effects" className="text-xs">Эффекты</TabsTrigger>
              <TabsTrigger value="projects" className="text-xs">Проекты</TabsTrigger>
              <TabsTrigger value="layers" className="text-xs">Слои</TabsTrigger>
            </TabsList>
            
            <TabsContent value="effects" className="px-3 pb-3">
              <div className="space-y-2 mb-4">
                <Label className="text-xs text-muted-foreground font-semibold">VFX БИБЛИОТЕКА</Label>
                {vfxEffects.map((effect) => (
                  <Card 
                    key={effect.id}
                    onClick={() => setSelectedEffect(effect.id)}
                    className={`p-2.5 cursor-pointer transition-all hover:scale-102 ${
                      selectedEffect === effect.id ? 'border-primary bg-primary/5 shadow-sm' : 'border-border'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${effect.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon name={effect.icon} className="text-white" size={18} />
                      </div>
                      <span className="text-xs font-medium">{effect.name}</span>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground font-semibold">ШАБЛОНЫ</Label>
                {templates.map((template, idx) => (
                  <Card key={idx} className="p-2 cursor-pointer hover:border-primary/50 transition-all">
                    <div className="flex gap-2 items-center">
                      <img src={template.preview} alt={template.name} className="w-10 h-10 rounded object-cover" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium truncate">{template.name}</p>
                        <Badge variant="outline" className="text-[10px] mt-0.5 h-4">{template.type}</Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="projects" className="px-3 pb-3">
              <Button className="w-full mb-3 h-8" size="sm">
                <Icon name="Plus" className="mr-1.5" size={14} />
                Новый проект
              </Button>
              <div className="space-y-2">
                {projects.map((project, idx) => (
                  <Card key={idx} className="p-2.5 cursor-pointer hover:border-primary/50 transition-all">
                    <p className="font-medium text-xs mb-1">{project.name}</p>
                    <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                      <span>{project.date}</span>
                      <span>{project.effects} эффектов</span>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="layers" className="px-3 pb-3">
              <Button className="w-full mb-3 h-8" size="sm">
                <Icon name="Plus" className="mr-1.5" size={14} />
                Добавить слой
              </Button>
              <div className="space-y-1">
                {layers.map((layer) => (
                  <Card key={layer.id} className="p-2 cursor-pointer hover:border-primary/50 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-6 w-6 p-0"
                          onClick={() => {
                            const updated = layers.map(l => 
                              l.id === layer.id ? {...l, visible: !l.visible} : l
                            );
                            setLayers(updated);
                          }}
                        >
                          <Icon name={layer.visible ? "Eye" : "EyeOff"} size={12} className={!layer.visible ? "text-muted-foreground" : ""} />
                        </Button>
                        <span className="text-xs truncate">{layer.name}</span>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-6 w-6 p-0"
                        onClick={() => {
                          const updated = layers.map(l => 
                            l.id === layer.id ? {...l, locked: !l.locked} : l
                          );
                          setLayers(updated);
                        }}
                      >
                        <Icon name={layer.locked ? "Lock" : "Unlock"} size={12} className={layer.locked ? "text-muted-foreground" : ""} />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="border-b border-border bg-card/30 px-4 py-2 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2">
              {tools.map((tool) => (
                <Button 
                  key={tool.id}
                  variant={activeTool === tool.id ? "default" : "ghost"} 
                  size="sm"
                  onClick={() => setActiveTool(tool.id)}
                  className={`h-8 ${activeTool === tool.id ? "bg-primary" : ""}`}
                >
                  <Icon name={tool.icon} size={14} />
                </Button>
              ))}
              <div className="w-px h-6 bg-border mx-2" />
              <Select defaultValue="1080p">
                <SelectTrigger className="w-28 h-8 text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="720p">720p</SelectItem>
                  <SelectItem value="1080p">1080p</SelectItem>
                  <SelectItem value="4k">4K</SelectItem>
                  <SelectItem value="8k">8K</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Icon name="Layers" size={14} className="text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Слои: {layers.filter(l => l.visible).length}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={14} className="text-muted-foreground" />
                <span className="text-xs text-muted-foreground">00:00:12</span>
              </div>
              <Badge className="bg-primary/10 text-primary text-xs">60 FPS</Badge>
            </div>
          </div>

          <div className="flex-1 bg-gradient-to-br from-background via-card/20 to-background relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(155,135,245,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(155,135,245,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-secondary/30 blur-3xl animate-glow" />
                  <div className="relative w-80 h-64 border-2 border-dashed border-primary/30 rounded-2xl flex items-center justify-center bg-card/50 backdrop-blur">
                    <div className="text-center">
                      <div className="mb-4 flex justify-center">
                        <div className="relative">
                          <div className="absolute inset-0 bg-primary/20 blur-xl animate-pulse" />
                          <Icon name="Box" size={56} className="relative text-primary animate-float" />
                        </div>
                      </div>
                      <p className="text-xl font-semibold mb-2">3D Viewport</p>
                      <p className="text-sm text-muted-foreground mb-4">Real-time рендеринг активен</p>
                      <div className="flex gap-2 justify-center">
                        <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
                          <Icon name="Play" className="mr-1.5" size={14} />
                          Превью
                        </Button>
                        <Button size="sm" variant="outline">
                          <Icon name="Plus" className="mr-1.5" size={14} />
                          Объект
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 justify-center">
                  <Card className="p-3 bg-card/80 backdrop-blur">
                    <div className="flex items-center gap-2 text-xs">
                      <Icon name="Cpu" size={14} className="text-primary" />
                      <span className="text-muted-foreground">GPU:</span>
                      <span className="font-semibold text-primary">Active</span>
                    </div>
                  </Card>
                  <Card className="p-3 bg-card/80 backdrop-blur">
                    <div className="flex items-center gap-2 text-xs">
                      <Icon name="Activity" size={14} className="text-secondary" />
                      <span className="text-muted-foreground">Render:</span>
                      <span className="font-semibold text-secondary">Ready</span>
                    </div>
                  </Card>
                  <Card className="p-3 bg-card/80 backdrop-blur">
                    <div className="flex items-center gap-2 text-xs">
                      <Icon name="Zap" size={14} className="text-accent" />
                      <span className="text-muted-foreground">Quality:</span>
                      <span className="font-semibold text-accent">Ultra</span>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              <Button size="sm" variant="outline" className="bg-card/80 backdrop-blur h-8">
                <Icon name="SkipBack" size={14} />
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-primary to-accent w-16 h-8">
                <Icon name="Play" size={14} />
              </Button>
              <Button size="sm" variant="outline" className="bg-card/80 backdrop-blur h-8">
                <Icon name="SkipForward" size={14} />
              </Button>
            </div>
          </div>

          <div className="border-t border-border bg-card/30 p-2 flex-shrink-0">
            <div className="h-14 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded flex items-center px-4">
              <div className="flex gap-2 items-center flex-1">
                <Icon name="Film" size={14} className="text-muted-foreground" />
                <div className="flex-1 h-2 bg-background rounded relative overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-primary to-accent rounded" />
                </div>
                <span className="text-xs text-muted-foreground">00:04 / 00:12</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-72 border-l border-border bg-card/30 overflow-y-auto flex-shrink-0">
          <div className="p-3 space-y-5">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-sm">Параметры эффекта</h3>
                <Badge className="bg-primary/10 text-primary text-xs">{selectedEffect}</Badge>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label className="text-xs mb-2 block">Интенсивность</Label>
                  <Slider 
                    value={intensity} 
                    onValueChange={setIntensity}
                    max={100}
                    step={1}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground">
                    <span>0</span>
                    <span className="text-primary font-semibold">{intensity}%</span>
                    <span>100</span>
                  </div>
                </div>

                <div>
                  <Label className="text-xs mb-2 block">Скорость</Label>
                  <Slider 
                    value={speed} 
                    onValueChange={setSpeed}
                    max={100}
                    step={1}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground">
                    <span>Медленно</span>
                    <span className="text-secondary font-semibold">{speed}%</span>
                    <span>Быстро</span>
                  </div>
                </div>

                <div>
                  <Label className="text-xs mb-2 block">Плотность</Label>
                  <Slider 
                    value={density} 
                    onValueChange={setDensity}
                    max={100}
                    step={1}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground">
                    <span>Низкая</span>
                    <span className="text-accent font-semibold">{density}%</span>
                    <span>Высокая</span>
                  </div>
                </div>

                <div>
                  <Label className="text-xs mb-2 block">Цвет</Label>
                  <div className="grid grid-cols-6 gap-1.5">
                    {['#9b87f5', '#D946EF', '#0EA5E9', '#F97316', '#10B981', '#EAB308'].map((color) => (
                      <button 
                        key={color}
                        className="w-full aspect-square rounded-md border-2 border-border hover:border-primary transition-colors"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-xs mb-2 block">Режим смешивания</Label>
                  <Select defaultValue="additive">
                    <SelectTrigger className="h-8 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="normal">Normal</SelectItem>
                      <SelectItem value="additive">Additive</SelectItem>
                      <SelectItem value="multiply">Multiply</SelectItem>
                      <SelectItem value="screen">Screen</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-2">
                  <Button className="w-full bg-gradient-to-r from-primary to-accent h-8 text-xs">
                    <Icon name="Wand2" className="mr-1.5" size={14} />
                    Применить эффект
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <h3 className="font-semibold mb-3 text-sm">Рендеринг</h3>
              <div className="space-y-2">
                <Card className="p-2.5 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium">Quality</span>
                    <Badge variant="outline" className="text-[10px] h-4">Ultra</Badge>
                  </div>
                  <div className="text-[10px] text-muted-foreground">GPU Accelerated</div>
                </Card>

                <Card className="p-2.5 bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium">Samples</span>
                    <Badge variant="outline" className="text-[10px] h-4">512</Badge>
                  </div>
                  <div className="text-[10px] text-muted-foreground">Ray Tracing</div>
                </Card>

                <Button variant="outline" className="w-full h-8 text-xs">
                  <Icon name="Settings2" className="mr-1.5" size={14} />
                  Настройки рендера
                </Button>
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <h3 className="font-semibold mb-3 text-sm">Экспорт</h3>
              <div className="space-y-1.5">
                <Button variant="outline" className="w-full justify-start h-8 text-xs">
                  <Icon name="FileVideo" className="mr-1.5" size={14} />
                  MP4 Video
                </Button>
                <Button variant="outline" className="w-full justify-start h-8 text-xs">
                  <Icon name="Image" className="mr-1.5" size={14} />
                  Image Sequence
                </Button>
                <Button variant="outline" className="w-full justify-start h-8 text-xs">
                  <Icon name="Code" className="mr-1.5" size={14} />
                  Project File
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;