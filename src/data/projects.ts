export const projectTypes = [
  { value: 'construction', labelAr: 'الإنشاءات', labelEn: 'Construction' },
  { value: 'finishing', labelAr: 'التشطيبات', labelEn: 'Finishing' },
  { value: 'realEstateDevelopment', labelAr: 'التطوير العقارى', labelEn: 'Real Estate Development' },
  { value: 'bridges', labelAr: 'الكبارى', labelEn: 'Bridges' },
] as const;

export const projectStatuses = [
  { value: 'completed', labelAr: 'مكتمل', labelEn: 'Completed' },
  { value: 'inProgress', labelAr: 'قيد التنفيذ', labelEn: 'In Progress' },
] as const;

export type ProjectTypeKey = (typeof projectTypes)[number]['value'];
export type ProjectStatusKey = (typeof projectStatuses)[number]['value'];

export type Project = {
  id: number;
  slug: string;
  titleAr: string;
  titleEn: string;
  typeKey: ProjectTypeKey;
  status: ProjectStatusKey;
  locationAr?: string;
  locationEn?: string;
  year?: string;
  area?: string;
  clientAr?: string;
  clientEn?: string;
  ownerAr?: string;
  ownerEn?: string;
  contractorAr?: string;
  contractorEn?: string;
  subcontractorAr?: string;
  subcontractorEn?: string;
  descriptionAr?: string;
  descriptionEn?: string;
  scopeAr?: string[];
  scopeEn?: string[];
  thumbnail?: string;
  images: string[];
  featured?: boolean;
};

type ProjectImageSize = {
  width: number;
  height: number;
};

const microFactoryImages = [
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/1.jpeg',
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/2.jpeg',
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/3.jpeg',
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/4.jpeg',
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/5.jpeg',
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/6.jpeg',
];

const woodCommercialZoneImages = [
  '/assets/الإنشاءات/المنطقة التجارية للأخشاب - ميناء الإسكندرية/صور المشروع/1.png',
];

const lrtStationImages = [
  '/assets/الإنشاءات/محطة المنطقة الصناعية - القطار الكهربائى LRT/صور المشروع/1.jpeg',
  '/assets/الإنشاءات/محطة المنطقة الصناعية - القطار الكهربائى LRT/صور المشروع/2.jpeg',
  '/assets/الإنشاءات/محطة المنطقة الصناعية - القطار الكهربائى LRT/صور المشروع/3.jpeg',
  '/assets/الإنشاءات/محطة المنطقة الصناعية - القطار الكهربائى LRT/صور المشروع/4.jpeg',
];

const madinatyApartmentImages = [
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.05 PM.jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.06 PM.jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.07 PM.jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.08 PM.jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.09 PM.jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.10 PM.jpeg',
];

const district15HouseImages = [
  '/assets/التشطيبات/مشروع الحي 15 بيت 276/WhatsApp Image 2026-04-14 at 1.15.47 PM.jpeg',
  '/assets/التشطيبات/مشروع الحي 15 بيت 276/WhatsApp Image 2026-04-14 at 1.15.47 PM (1).jpeg',
  '/assets/التشطيبات/مشروع الحي 15 بيت 276/WhatsApp Image 2026-04-14 at 1.15.47 PM (2).jpeg',
  '/assets/التشطيبات/مشروع الحي 15 بيت 276/WhatsApp Image 2026-04-14 at 1.15.47 PM (3).jpeg',
];

const sadatAccountingOfficeImages = [
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.08 PM.jpeg',
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.08 PM (1).jpeg',
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.09 PM.jpeg',
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.09 PM (1).jpeg',
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.10 PM.jpeg',
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.11 PM.jpeg',
];

const projectImageSizes: Record<string, ProjectImageSize> = {
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/1.jpeg': { width: 1600, height: 720 },
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/2.jpeg': { width: 1600, height: 720 },
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/3.jpeg': { width: 1600, height: 720 },
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/4.jpeg': { width: 1280, height: 468 },
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/5.jpeg': { width: 1280, height: 576 },
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/6.jpeg': { width: 1599, height: 666 },
  '/assets/الإنشاءات/المنطقة التجارية للأخشاب - ميناء الإسكندرية/صور المشروع/1.png': { width: 690, height: 501 },
  '/assets/الإنشاءات/محطة المنطقة الصناعية - القطار الكهربائى LRT/صور المشروع/1.jpeg': { width: 1280, height: 720 },
  '/assets/الإنشاءات/محطة المنطقة الصناعية - القطار الكهربائى LRT/صور المشروع/2.jpeg': { width: 1280, height: 430 },
  '/assets/الإنشاءات/محطة المنطقة الصناعية - القطار الكهربائى LRT/صور المشروع/3.jpeg': { width: 720, height: 1280 },
  '/assets/الإنشاءات/محطة المنطقة الصناعية - القطار الكهربائى LRT/صور المشروع/4.jpeg': { width: 960, height: 540 },
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.05 PM.jpeg': { width: 1280, height: 1207 },
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.06 PM.jpeg': { width: 1280, height: 1207 },
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.07 PM.jpeg': { width: 1280, height: 1207 },
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.08 PM.jpeg': { width: 1087, height: 1280 },
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.09 PM.jpeg': { width: 1280, height: 1207 },
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.10 PM.jpeg': { width: 1087, height: 1280 },
  '/assets/التشطيبات/مشروع الحي 15 بيت 276/WhatsApp Image 2026-04-14 at 1.15.47 PM.jpeg': { width: 1179, height: 1280 },
  '/assets/التشطيبات/مشروع الحي 15 بيت 276/WhatsApp Image 2026-04-14 at 1.15.47 PM (1).jpeg': { width: 966, height: 1280 },
  '/assets/التشطيبات/مشروع الحي 15 بيت 276/WhatsApp Image 2026-04-14 at 1.15.47 PM (2).jpeg': { width: 1179, height: 1280 },
  '/assets/التشطيبات/مشروع الحي 15 بيت 276/WhatsApp Image 2026-04-14 at 1.15.47 PM (3).jpeg': { width: 941, height: 1280 },
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.08 PM.jpeg': { width: 1000, height: 750 },
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.08 PM (1).jpeg': { width: 1000, height: 750 },
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.09 PM.jpeg': { width: 1000, height: 750 },
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.09 PM (1).jpeg': { width: 1000, height: 750 },
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.10 PM.jpeg': { width: 1000, height: 750 },
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.11 PM.jpeg': { width: 1000, height: 750 },
};

export const projectsData: Project[] = [
  {
    id: 1,
    slug: 'micro-factory-nile-university',
    titleAr: 'مشروع المصنع المصغر - Micro Factory',
    titleEn: 'Micro Factory - Nile University',
    typeKey: 'construction',
    status: 'completed',
    locationAr: 'جامعة النيل - المحور المركزى - السادس من اكتوبر',
    locationEn: 'Nile University - Central Axis - 6th of October',
    ownerAr: 'جامعة النيل الأهلية',
    ownerEn: 'Nile University',
    contractorAr: 'شركة وايزر للمقاولات العامة',
    contractorEn: 'Wiser General Contracting Company',
    year: '2024',
    descriptionAr:
      'مشروع المصنع المصغر أو الـ Micro Factory في جامعة النيل الأهلية بمصر هو أحد المشاريع الرائدة والفريدة من نوعها في المنطقة، وقد أُسس كجزء من المبادرة القومية "رواد النيل" (NilePreneurs) التي يرعاها البنك المركزي المصري، وبالتعاون مع وزارة التخطيط والتنمية الاقتصادية من خلال مشروع رواد 2030.\n\nفي عام 2024 تم ترشيح المشروع كأفضل مشروع تجاري في السنة ضمن جوائز BIG 5 Egypt Impact Awards، ووصل للمرحلة النهائية وكان من أفضل 3 مشاريع تجارية في مصر لعام 2024.\n\nقامت شركة وايزر للمقاولات العامة بتنفيذ أعمال الورش والمبنى الإداري، حيث تم تجهيز وتشطيب عدد 5 ورش، كما تم إنشاء المبنى الإداري باستخدام عدد 9 حاويات مكونة من دورين.',
    descriptionEn:
      'The Micro Factory project at Nile University in Egypt is one of the leading and most distinctive projects of its kind in the region. It was established as part of the national NilePreneurs initiative, sponsored by the Central Bank of Egypt, in cooperation with the Ministry of Planning and Economic Development through the Rowad 2030 project.\n\nIn 2024, the project was nominated for Commercial Project of the Year at the BIG 5 Egypt Impact Awards. It reached the final stage and was ranked among the top three commercial projects in Egypt for 2024.\n\nWiser General Contracting Company executed the workshop and administrative building works. The scope included fitting out and finishing five workshops, as well as constructing a two-story administrative building using nine containers.',
    scopeAr: [
      'تجهيز وتشطيب عدد 5 ورش',
      'إنشاء المبنى الإداري باستخدام عدد 9 حاويات مكونة من دورين',
      'أعمال الأرضيات الإيبوكسية',
      'أعمال أرضيات الفينيل',
      'أعمال حوائط وأسقف الساندوتش بانل',
      'أعمال حوائط المارموكس',
      'أعمال البياض والدهانات',
      'أعمال أبواب وشبابيك PVC',
      'أعمال الأبواب الخشبية',
      'الأعمال الكهربائية',
      'أعمال مكافحة الحريق',
      'أعمال إنذار الحريق',
      'أعمال الصحي',
      'أعمال التهوية والتكييفات',
      'أعمال الموقع العام',
    ],
    scopeEn: [
      'Fitting out and finishing five workshops',
      'Constructing the two-story administrative building using nine containers',
      'Epoxy flooring works',
      'Vinyl flooring works',
      'Sandwich panel walls and ceilings',
      'Marmox wall works',
      'Plastering and painting works',
      'PVC doors and windows',
      'Wooden doors',
      'Electrical works',
      'Firefighting works',
      'Fire alarm works',
      'Plumbing works',
      'Ventilation and air conditioning works',
      'General site works',
    ],
    images: microFactoryImages,
  },
  {
    id: 2,
    slug: 'wood-commercial-zone-alexandria-port',
    titleAr: 'المنطقة التجارية للأخشاب - ميناء الإسكندرية',
    titleEn: 'Wood Commercial Zone - Alexandria Port',
    typeKey: 'construction',
    status: 'completed',
    locationAr: 'الإسكندرية',
    locationEn: 'Alexandria',
    ownerAr: 'ميناء الإسكندرية',
    ownerEn: 'Alexandria Port',
    contractorAr: 'شركة النيل العامة للإنشاءات والطرق والأعمال البحرية',
    contractorEn: 'Nile General Company for Construction, Roads and Marine Works',
    subcontractorAr: 'شركة وايزر للمقاولات العامة',
    subcontractorEn: 'Wiser General Contracting Company',
    descriptionAr:
      'مشروع المنطقة التجارية واللوجستية للأخشاب بميناء الإسكندرية يمثل جزءاً محورياً من المخطط الشامل للدولة لتحويل ميناء الإسكندرية الكبير إلى مركز عالمي للتجارة واللوجستيات، ولحل مشكلة التكدس المروري وزيادة الطاقة الاستيعابية للميناء.\n\nقامت شركة وايزر للمقاولات العامة بتنفيذ مجموعة متكاملة من الأعمال المدنية والمعمارية والكهروميكانيكية وأعمال الموقع العام.',
    descriptionEn:
      'The Wood Commercial and Logistics Zone project at Alexandria Port is a key part of the state’s comprehensive plan to transform Greater Alexandria Port into a global trade and logistics hub. The project also supports efforts to reduce traffic congestion and increase the port’s handling capacity.\n\nWiser General Contracting Company executed an integrated scope of civil, architectural, electromechanical, and general site works.',
    scopeAr: [
      'أعمال الحفر والردم',
      'أعمال القواعد العادية والمسلحة',
      'أعمال الكمرات والبلاطات والسلالم والحوائط المسلحة',
      'أعمال المباني',
      'أعمال البياض',
      'أعمال الدهانات',
      'أعمال السيراميك والرخام',
      'أعمال الحدادة',
      'أعمال الأبواب والشبابيك',
      'أعمال الأسقف المعلقة',
      'أعمال الزجاج',
      'الأعمال الكهربائية والميكانيكية',
      'الأعمال الصحية',
      'أعمال الموقع العام',
      'أعمال الرصف الخرساني',
    ],
    scopeEn: [
      'Excavation and backfilling works',
      'Plain and reinforced concrete foundation works',
      'Beams, slabs, stairs, and reinforced wall works',
      'Masonry works',
      'Plastering works',
      'Painting works',
      'Ceramic and marble works',
      'Steel works',
      'Doors and windows works',
      'Suspended ceiling works',
      'Glass works',
      'Electrical and mechanical works',
      'Plumbing works',
      'General site works',
      'Concrete paving works',
    ],
    images: woodCommercialZoneImages,
  },
  {
    id: 3,
    slug: 'lrt-industrial-zone-station',
    titleAr: 'محطة المنطقة الصناعية - القطار الكهربائى LRT',
    titleEn: 'Industrial Zone Station - LRT Electric Train',
    typeKey: 'construction',
    status: 'completed',
    locationAr: 'القطار الكهربائى LRT',
    locationEn: 'LRT Electric Train',
    images: lrtStationImages,
  },
  {
    id: 4,
    slug: 'madinaty-apartment',
    titleAr: 'شقة مدينتي',
    titleEn: 'Madinaty Apartment',
    typeKey: 'finishing',
    status: 'completed',
    locationAr: 'مدينتي',
    locationEn: 'Madinaty',
    images: madinatyApartmentImages,
    featured: true,
  },
  {
    id: 5,
    slug: 'hamdy-villa-neighborhood-88',
    titleAr: 'م حمدي فيلا مجاورة 88',
    titleEn: 'Engineer Hamdy Villa - Neighborhood 88',
    typeKey: 'finishing',
    status: 'completed',
    locationAr: 'مجاورة 88',
    locationEn: 'Neighborhood 88',
    images: [],
  },
  {
    id: 6,
    slug: 'district-15-house-276',
    titleAr: 'مشروع الحي 15 بيت 276',
    titleEn: 'District 15 House 276',
    typeKey: 'finishing',
    status: 'completed',
    locationAr: 'الحي 15',
    locationEn: 'District 15',
    images: district15HouseImages,
    featured: true,
  },
  {
    id: 7,
    slug: 'sadat-city-accounting-office',
    titleAr: 'مكتب محاسبة مدينة السادات',
    titleEn: 'Sadat City Accounting Office',
    typeKey: 'finishing',
    status: 'completed',
    locationAr: 'مدينة السادات',
    locationEn: 'Sadat City',
    images: sadatAccountingOfficeImages,
    featured: true,
  },
];

export const featuredProjectsData = projectsData.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projectsData.find((project) => project.slug === slug);
}

export function getProjectTypeLabel(typeKey: ProjectTypeKey, locale: string) {
  const type = projectTypes.find((item) => item.value === typeKey);
  return (locale === 'ar' ? type?.labelAr : type?.labelEn) ?? typeKey;
}

export function getProjectStatusLabel(statusKey: ProjectStatusKey, locale: string) {
  const status = projectStatuses.find((item) => item.value === statusKey);
  return (locale === 'ar' ? status?.labelAr : status?.labelEn) ?? statusKey;
}

export function getProjectImageSize(src: string): ProjectImageSize {
  return projectImageSizes[src] ?? { width: 1600, height: 900 };
}
