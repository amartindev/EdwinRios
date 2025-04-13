
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  image02?: string;
  image03?: string;
  image04?: string;
  image05?: string;
};

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Armarioa Metálicos",
      category: "acabados",
      image: "/projects/yellow01.png",
      image02: "/projects/yellow02.png",
      image03: "/projects/yellow03.png"
    },
    {
      id: 2,
      title: "Puertas Metálicas",
      category: "acabados",
      image: "/projects/door01.png",
      image02: "/projects/door02.png",
      image03: "/projects/door03.png",
      image04: "/projects/door04.png"
    },
    {
      id: 3,
      title: "Escaleras",
      category: "acabados",
      image: "/projects/escalera01.png",
      image02: "/projects/escalera02.png"
    },
    {
      id: 4,
      title: "Estructuras de decoracion e interiores",
      category: "acabados",
      image: "/projects/interior01.jpeg",
      image02: "/projects/interior02.jpeg",
      image03: "/projects/interior03.jpeg",
      image04: "/projects/interior04.jpeg",
      image05: "/projects/interior05.jpeg"
    },
    {
      id: 5,
      title: "Mantenimiento de equipos industriales y maquinaria pesada",
      category: "maquinaria",
      image: "projects/industrial01.jpg",
      image02: "projects/industrial02.jpg",
      image03: "projects/industrial03.png"
    },
    {
      id: 6,
      title: "Mesas hidráulicas para perros y motos",
      category: "maquinaria",
      image: "projects/mesa01.jpg",
      image02: "projects/mesa02.jpg",
      image03: "projects/mesa03.jpg",
      image04: "projects/mesa04.jpg"
    },
    {
      id: 7,
      title: "Soldadura de precisión Industrial",
      category: "estructuras",
      image: "/projects/detalle01.png"
    },
    {
      id: 8,
      title: "Estructura Cerramiento",
      category: "estructuras",
      image: "/projects/cerramiento01.jpeg",
      image02: "/projects/cerramiento02.jpeg",
      image03: "/projects/cerramiento03.jpeg",
      image04: "/projects/cerramiento04.jpeg"
    },
    {
      id: 9,
      title: "Contenedores",
      category: "estructuras",
      image: "/projects/contenedor01.jpeg",
      image02: "/projects/contenedor02.jpeg"
    }
  ];

  // Función para abrir el modal con el proyecto seleccionado
  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  // Obtener todas las imágenes del proyecto seleccionado
  const getProjectImages = (project: Project): string[] => {
    const images = [project.image];
    if (project.image02) images.push(project.image02);
    if (project.image03) images.push(project.image03);
    if (project.image04) images.push(project.image04);
    if (project.image05) images.push(project.image05);
    return images;
  };

  // Navegar a la imagen anterior
  const prevImage = () => {
    if (selectedProject) {
      const images = getProjectImages(selectedProject);
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  // Navegar a la imagen siguiente
  const nextImage = () => {
    if (selectedProject) {
      const images = getProjectImages(selectedProject);
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Renderizar el componente de proyecto
  const renderProject = (project: Project) => (
    <div 
      key={project.id} 
      className="overflow-hidden rounded-lg shadow-md card-hover group cursor-pointer"
      onClick={() => openModal(project)}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <h3 className="text-white text-center font-bold px-4">{project.title}</h3>
        </div>
      </div>
    </div>
  );

  return (
    <section id="portafolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-welder-black mb-4">Nuestro Portafolio</h2>
          <p className="text-welder-gray-dark max-w-3xl mx-auto">
            Explora algunos de nuestros proyectos más destacados, donde la calidad y la precisión son nuestra carta de presentación.
          </p>
        </div>

        <Tabs defaultValue="todos" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-welder-gray-light">
              <TabsTrigger 
                value="todos" 
                className="data-[state=active]:bg-welder-yellow data-[state=active]:text-welder-black"
                onClick={() => setActiveTab("todos")}
              >
                Todos
              </TabsTrigger>
              <TabsTrigger 
                value="acabados" 
                className="data-[state=active]:bg-welder-yellow data-[state=active]:text-welder-black"
                onClick={() => setActiveTab("acabados")}
              >
                Acabados
              </TabsTrigger>
              <TabsTrigger 
                value="estructuras" 
                className="data-[state=active]:bg-welder-yellow data-[state=active]:text-welder-black"
                onClick={() => setActiveTab("estructuras")}
              >
                Estructuras
              </TabsTrigger>
              <TabsTrigger 
                value="maquinaria" 
                className="data-[state=active]:bg-welder-yellow data-[state=active]:text-welder-black"
                onClick={() => setActiveTab("maquinaria")}
              >
                Maquinaria
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="todos" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map(renderProject)}
            </div>
          </TabsContent>

          <TabsContent value="acabados" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter(project => project.category === "acabados")
                .map(renderProject)}
            </div>
          </TabsContent>

          <TabsContent value="estructuras" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter(project => project.category === "estructuras")
                .map(renderProject)}
            </div>
          </TabsContent>

          <TabsContent value="maquinaria" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter(project => project.category === "maquinaria")
                .map(renderProject)}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Modal de Galería */}
      <Dialog open={!!selectedProject} onOpenChange={() => closeModal()}>
        <DialogContent className="max-w-4xl p-0 bg-black overflow-hidden" onInteractOutside={(e) => e.preventDefault()}>
          {selectedProject && (
            <div className="relative">
              {/* Título y botón de cerrar */}
              <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-4 bg-gradient-to-b from-black/80 to-transparent">
                <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={closeModal}
                  className="text-white hover:bg-white/20 rounded-full"
                >
                  <X size={24} />
                </Button>
              </div>
              
              {/* Imagen principal */}
              <div className="w-full h-[70vh] flex items-center justify-center bg-black">
                <img 
                  src={getProjectImages(selectedProject)[currentImageIndex]} 
                  alt={`${selectedProject.title} - imagen ${currentImageIndex + 1}`} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              {/* Controles de navegación (solo si hay más de una imagen) */}
              {getProjectImages(selectedProject).length > 1 && (
                <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-4">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={prevImage}
                    className="text-white bg-black/40 hover:bg-black/60 rounded-full"
                  >
                    <ChevronLeft size={24} />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={nextImage}
                    className="text-white bg-black/40 hover:bg-black/60 rounded-full"
                  >
                    <ChevronRight size={24} />
                  </Button>
                </div>
              )}
              
              {/* Miniaturas (solo si hay más de una imagen) */}
              {getProjectImages(selectedProject).length > 1 && (
                <ScrollArea className="w-full h-24 bg-gray-900 py-4">
                  <div className="flex space-x-2 px-4">
                    {getProjectImages(selectedProject).map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-16 w-24 flex-shrink-0 rounded overflow-hidden ${
                          currentImageIndex === index 
                            ? "ring-2 ring-welder-yellow" 
                            : "opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img 
                          src={img} 
                          alt={`Miniatura ${index + 1}`} 
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </ScrollArea>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
