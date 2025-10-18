import { Church, Music, PartyPopper, Star, Heart, Users, Sparkles } from 'lucide-react';

export const programacionData = [
  {
    fecha: '18 de Octubre',
    color: '#A13E46',
    eventos: [
      { hora: '12:30 p.m.', actividad: 'Convocatoria al grupo', icon: Users },
      { hora: '2:00 p.m.', actividad: 'Convocatoria general', icon: Users },
      { hora: '2:30 - 4:30 p.m.', actividad: "Desfile con banda, 'Los Viejos' y móvil", icon: Music },
      { hora: '5:00 - 6:30 p.m.', actividad: 'Coronación de la Reina y show artístico', icon: Sparkles },
      { hora: '5:30 p.m.', actividad: 'Cena (Venta de Comida)', icon: Heart },
      { hora: '7:00 - 8:00 p.m.', actividad: 'Rosario', icon: Church },
      { hora: '8:00 - 10:00 p.m.', actividad: 'Baile', icon: Music }
    ]
  },
  {
    fecha: '25 de Octubre',
    color: '#518488',
    eventos: [
      { hora: '2:30 p.m.', actividad: 'Show infantil', icon: PartyPopper },
      { hora: '3:00 p.m.', actividad: 'Piñata', icon: Star },
      { hora: '3:30 p.m.', actividad: 'Show infantil', icon: PartyPopper },
      { hora: '4:30 p.m.', actividad: 'Finalización de actividades infantiles', icon: Heart },
      { hora: '5:00 - 6:30 p.m.', actividad: 'Procesión', icon: Church },
      { hora: '7:00 - 8:00 p.m.', actividad: 'Rosario', icon: Church },
      { hora: '8:00 - 10:00 p.m.', actividad: 'Orquesta San Salvador Este', icon: Music },
      { hora: '10:30 p.m.', actividad: 'Pólvora', icon: Sparkles }
    ]
  },
  {
    fecha: '26 de Octubre',
    color: '#D1A148',
    eventos: [
      { hora: '5:00 a.m.', actividad: 'Mañanitas al Santo Niño de Atocha', icon: Music },
      { hora: '10:00 a.m.', actividad: 'Santa Misa en honor al Santo Niño de Atocha', icon: Church }
    ]
  }
];
