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
  hidden?: boolean;
};

const microFactoryImages = [
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/1.jpeg',
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/10.jpeg',
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/11.jpeg',
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/12.jpeg',
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/13.jpeg',
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/14.jpeg',
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/15.jpeg',
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/16.jpeg',
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/17.jpeg',
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/18.jpeg',
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/19.jpeg',
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/2.jpeg',
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/20.jpeg',
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/21.jpeg',
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/22.jpeg',
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/3.jpeg',
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/4.jpeg',
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/5.jpeg',
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/6.jpeg',
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/7.jpeg',
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/8.jpeg',
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/9.jpeg',
  '/assets/الإنشاءات/Micro factory - جامعة النيل/صور المشروع/BIG 5.jpeg',
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
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.05 PM (1).jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.05 PM (2).jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.05 PM.jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.06 PM (1).jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.06 PM (2).jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.06 PM.jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.07 PM (1).jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.07 PM (2).jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.07 PM.jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.08 PM (1).jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.08 PM (2).jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.08 PM.jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.09 PM (1).jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.09 PM (2).jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.09 PM (3).jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.09 PM (4).jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.09 PM.jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.10 PM (1).jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.10 PM (2).jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.10 PM (3).jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.10 PM.jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.11 PM (1).jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.11 PM.jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.12 PM (1).jpeg',
  '/assets/التشطيبات/شقة مدينتي/WhatsApp Image 2026-04-14 at 1.21.12 PM.jpeg',
];

const district15HouseImages = [
  '/assets/التشطيبات/مشروع الحي 15 بيت 276/WhatsApp Image 2026-04-14 at 1.15.47 PM (1).jpeg',
  '/assets/التشطيبات/مشروع الحي 15 بيت 276/WhatsApp Image 2026-04-14 at 1.15.47 PM (2).jpeg',
  '/assets/التشطيبات/مشروع الحي 15 بيت 276/WhatsApp Image 2026-04-14 at 1.15.47 PM (3).jpeg',
  '/assets/التشطيبات/مشروع الحي 15 بيت 276/WhatsApp Image 2026-04-14 at 1.15.47 PM.jpeg',
];

const sadatAccountingOfficeImages = [
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.08 PM (1).jpeg',
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.08 PM (2).jpeg',
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.08 PM (3).jpeg',
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.08 PM.jpeg',
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.09 PM (1).jpeg',
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.09 PM (2).jpeg',
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.09 PM (3).jpeg',
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.09 PM.jpeg',
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.10 PM (1).jpeg',
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.10 PM (2).jpeg',
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.10 PM (3).jpeg',
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.10 PM.jpeg',
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.11 PM (1).jpeg',
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.11 PM (2).jpeg',
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.11 PM.jpeg',
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.12 PM (1).jpeg',
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.12 PM (2).jpeg',
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.12 PM (3).jpeg',
  '/assets/التشطيبات/مكتب محاسبة مدينة السادات/WhatsApp Image 2026-04-14 at 1.33.12 PM.jpeg',
];

const lunaW01Images = [
  '/assets/real-estate/Luna-W01/2.jpeg',
  '/assets/real-estate/Luna-W01/3.jpg.jpeg',
  '/assets/real-estate/Luna-W01/4.jpeg',
  '/assets/real-estate/Luna-W01/1-land-floor-3d/1.jpg',
  '/assets/real-estate/Luna-W01/1-land-floor-3d/2.png',
  '/assets/real-estate/Luna-W01/1-land-floor-3d/ground 5.jpeg',
  '/assets/real-estate/Luna-W01/2-first-floor-3d/1.jpeg',
  '/assets/real-estate/Luna-W01/2-first-floor-3d/2.jpeg',
  '/assets/real-estate/Luna-W01/2-first-floor-3d/3.jpeg',
];

const bridgeProjects: Project[] = [
  {
    id: 8,
    slug: 'bridge-project-1',
    titleAr: 'مشروع تطوير البر الايمن للرياح التوفيقى - كوبرى اسنيت الشرقى - كوبرى المنشاة الكبرى',
    titleEn: 'Right Bank Development of El-Rayah El-Tawfiky - Esneit East Bridge - El-Mansha El-Kobra Bridge',
    typeKey: 'bridges',
    status: 'completed',
    locationAr: 'بنها – المنصورة',
    locationEn: 'Benha – Mansoura',
    ownerAr: 'الهيئة العامة للطرق والكبارى',
    ownerEn: 'General Authority for Roads and Bridges',
    clientAr: 'النيل للاستشارات الهندسية',
    clientEn: 'Nile Engineering Consultants',
    contractorAr: 'شركة النيل العامة للطرق والكبارى والأعمال البحرية',
    contractorEn: 'Nile General Company for Roads, Bridges and Marine Works',
    subcontractorAr: 'شركة وايزر للمقاولات العامة',
    subcontractorEn: 'Wiser General Contracting Company',
    descriptionAr:
      `مشروع تطوير البر الأيمن للرياح التوفيقي هو واحد من أضخم المشروعات القومية في قطاع النقل بمصر، ويهدف بشكل أساسي إلى حل الأزمات المرورية الخانقة على طريق بنها - المنصورة.

قامت شركة وايزر للمقاولات العامة بتنفيذ كوبريَّين ضمن هذا المشروع:
- كوبرى اسنيت الشرقى: بطول 850 م وعرض 13 م
- كوبرى المنشأة الكبرى: بطول 750 م وعرض 17 م`,
    descriptionEn:
      `The Right Bank Development of El-Rayah El-Tawfiky project is one of the largest national infrastructure projects in Egypt's transport sector. Its primary objective is to alleviate severe traffic congestion on the Benha–Mansoura road.

Wiser General Contracting Company executed two bridges within this project:
- Esneit East Bridge: 850 m long and 13 m wide
- El-Mansha El-Kobra Bridge: 750 m long and 17 m wide`,
    scopeAr: [
      'أعمال الخوازيق للقواعد المسلحة',
      'أعمال الخوازيق الساندة',
      'أعمال خوازيق البنتونيت',
      'أعمال القواعد المسلحة',
      'أعمال الحوائط المسلحة',
      'أعمال الأعمدة المونوبايل والأعمدة التيجان',
      'أعمال الهامات',
      'أعمال البلاطات على خوازيق',
      'أعمال الكمرات السابقة الصب',
      'أعمال البلاطات فوق الكمرات',
      'أعمال بلاطات القطاع الصندوقى',
      'أعمال دهانات السافيتو',
    ],
    scopeEn: [
      'Piling works for reinforced foundations',
      'Retaining pile works',
      'Bentonite pile works',
      'Reinforced concrete foundation works',
      'Reinforced wall works',
      'Monopile column and crown column works',
      'Cap beam works',
      'Pile-supported slab works',
      'Precast beam works',
      'Slabs over beams',
      'Box section slab works',
      'Saveto coating works',
    ],
    images: [
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع تطوير البر الايمن للرياح التوفيقى - كوبرى اسنيت الشرقى - كوبرى المنشاة الكبرى/صور المشروع/1.jpg',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع تطوير البر الايمن للرياح التوفيقى - كوبرى اسنيت الشرقى - كوبرى المنشاة الكبرى/صور المشروع/2.jpeg',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع تطوير البر الايمن للرياح التوفيقى - كوبرى اسنيت الشرقى - كوبرى المنشاة الكبرى/صور المشروع/3.jpeg',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع تطوير البر الايمن للرياح التوفيقى - كوبرى اسنيت الشرقى - كوبرى المنشاة الكبرى/صور المشروع/4.png',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع تطوير البر الايمن للرياح التوفيقى - كوبرى اسنيت الشرقى - كوبرى المنشاة الكبرى/صور المشروع/5.png',
    ],
  },
  {
    id: 9,
    slug: 'bridge-project-2',
    titleAr: 'مشروع كوبرى المستقبل',
    titleEn: 'El Mostakbal Bridge Project',
    typeKey: 'bridges',
    status: 'completed',
    locationAr: 'طريق الإسماعيلية الصحراوى',
    locationEn: 'Ismailia Desert Road',
    ownerAr: 'الهيئة العامة للطرق والكبارى',
    ownerEn: 'General Authority for Roads and Bridges',
    contractorAr: 'الشركة الوطنية للتشييد - سامكو',
    contractorEn: 'National Construction Company - SAMCO',
    subcontractorAr: 'شركة وايزر للمقاولات العامة',
    subcontractorEn: 'Wiser General Contracting Company',
    descriptionAr:
      `تُعدّ محطة وكوبرى مدينة المستقبل واحدة من أهم نقاط التوقف في المرحلة الأولى لمشروع القطار الكهربائي الخفيف (LRT)، نظرًا لموقعها الاستراتيجي الذي يخدم التوسعات العمرانية شرق القاهرة. يخدم الكوبرى سكان مدينة المستقبل ومدينة العبور الجديدة والتجمعات السكنية المحيطة، مما يقلل الاعتماد على السيارات الخاصة والأتوبيسات التقليدية.`,
    descriptionEn:
      `The El Mostakbal City station and bridge is one of the most important stops in Phase 1 of the Light Rail Transit (LRT) project, owing to its strategic location serving the urban expansions east of Cairo. The bridge serves residents of El Mostakbal City, New El Obour City, and the surrounding residential communities, reducing dependence on private cars and traditional buses.`,
    scopeAr: [
      'أعمال القواعد المسلحة',
      'أعمال الأعمدة والهامات',
      'أعمال بلاطات القطاع الصندوقى',
    ],
    scopeEn: [
      'Reinforced concrete foundation works',
      'Column and cap beam works',
      'Box section slab works',
    ],
    images: [
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع كوبرى المستقبل/صور المشروع/1.jpg',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع كوبرى المستقبل/صور المشروع/2.jpg',
    ],
  },
  {
    id: 10,
    slug: 'bridge-project-3',
    titleAr: 'مشروع كوبرى برج العرب',
    titleEn: 'Borg El Arab Bridge Project',
    typeKey: 'bridges',
    status: 'completed',
    hidden: true,
    images: [
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع كوبرى برج العرب/صور المشروع/1.png',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع كوبرى برج العرب/صور المشروع/2.png',
    ],
  },
  {
    id: 11,
    slug: 'bridge-project-4',
    titleAr: 'مشروع كوبرى جنيفة',
    titleEn: 'Geneifa Bridge Project',
    typeKey: 'bridges',
    status: 'completed',
    locationAr: 'جنيفة – طريق السويس',
    locationEn: 'Geneifa – Suez Road',
    ownerAr: 'الهيئة القومية للأنفاق',
    ownerEn: 'National Authority for Tunnels',
    clientAr: 'مكتب خطيب وعلمى',
    clientEn: 'Khateeb & Alami',
    contractorAr: 'شركة النيل العامة للطرق والكبارى والأعمال البحرية',
    contractorEn: 'Nile General Company for Roads, Bridges and Marine Works',
    subcontractorAr: 'شركة وايزر للمقاولات العامة',
    subcontractorEn: 'Wiser General Contracting Company',
    descriptionAr:
      `كوبرى جنيفة يُعدّ من المعالم الهندسية الهامة في مشروع القطار الكهربائي الخفيف (LRT)، وهو جزء من المسار الذي يربط القاهرة بالمدن الجديدة وصولاً إلى العاصمة الإدارية. تم إنشاء الكوبرى لتسهيل عبور القطار فوق طريق جنيفة، مما يضمن حركة مرور مستمرة للسيارات والقطار دون تقاطعات سطحية.`,
    descriptionEn:
      `Geneifa Bridge is one of the key engineering landmarks of the Light Rail Transit (LRT) project, forming part of the corridor connecting Cairo to new cities and onward to the New Administrative Capital. The bridge was constructed to facilitate the passage of the train over the Geneifa Road, ensuring continuous traffic flow for both vehicles and trains without any at-grade intersections.`,
    scopeAr: [
      'أعمال القواعد المسلحة',
      'أعمال الأعمدة والهامات',
      'أعمال الكمرات سابقة الإجهاد',
      'أعمال البلاطات العلوية أعلى الكمر',
    ],
    scopeEn: [
      'Reinforced concrete foundation works',
      'Column and cap beam works',
      'Prestressed beam works',
      'Top slab works over the beams',
    ],
    images: [
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع كوبرى جنيفة/صور المشروع/1.png',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع كوبرى جنيفة/صور المشروع/2.png',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع كوبرى جنيفة/صور المشروع/3.png',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع كوبرى جنيفة/صور المشروع/4.png',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع كوبرى جنيفة/صور المشروع/5.png',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع كوبرى جنيفة/صور المشروع/6.png',
    ],
  },
  {
    id: 12,
    slug: 'bridge-project-5',
    titleAr: 'مشروع كوبرى ريجوا - كبارى القطار السريع',
    titleEn: 'Regwa Bridge Project - High-Speed Rail Bridges',
    typeKey: 'bridges',
    status: 'completed',
    locationAr: 'طريق مصر – الإسكندرية الصحراوى',
    locationEn: 'Cairo – Alexandria Desert Road',
    ownerAr: 'الهيئة العامة للطرق والكبارى',
    ownerEn: 'General Authority for Roads and Bridges',
    clientAr: 'SYSTRA CONSULTANT',
    clientEn: 'SYSTRA CONSULTANT',
    contractorAr: 'شركة النيل العامة للطرق والكبارى والأعمال البحرية',
    contractorEn: 'Nile General Company for Roads, Bridges and Marine Works',
    subcontractorAr: 'شركة وايزر للمقاولات العامة',
    subcontractorEn: 'Wiser General Contracting Company',
    descriptionAr:
      `مشروع كبارى القطار السريع هو أول مشروع سكك حديدية كهربائية في مصر، وعند اكتماله سيُصبح سادس أكبر مشروع من نوعه على مستوى العالم. ستربط خطوط السكك الحديدية 60 مدينة في جميع أنحاء البلاد عبر قطارات تصل سرعتها إلى 230 كيلومترًا في الساعة، وسيخدم النظام الركاب والبضائع ويربط المدن والموانئ البحرية والبرية والمدن الأثرية والمواقع السياحية في جميع أنحاء مصر، مما يُسهم في تنمية قطاعات متعددة في الاقتصاد المصري.

يشمل نطاق عملنا إنشاء كوبرى علوى لمسار القطار الكهربائي السريع بطول 180 م وعرض 12 م.`,
    descriptionEn:
      `The High-Speed Rail Bridges project is Egypt's first electric railway project and, upon completion, will become the sixth largest project of its kind in the world. The rail network will connect 60 cities across the country with trains reaching speeds of up to 230 km/h. The system will serve both passengers and freight, linking cities, seaports, land ports, historic cities, and tourist sites throughout Egypt, contributing to the development of multiple sectors of the Egyptian economy.

Our scope of work covers the construction of an elevated bridge along the high-speed electric railway corridor, with a total length of 180 m and a width of 12 m.`,
    scopeAr: [
      'أعمال القواعد المسلحة',
      'أعمال الأعمدة والتيجان',
      'أعمال البلاطات العلوية القطاع الصندوقى سابقة الإجهاد',
      'أعمال الكوبستات سابقة الصب',
    ],
    scopeEn: [
      'Reinforced concrete foundation works',
      'Column and crown works',
      'Prestressed box section top slab works',
      'Precast parapet works',
    ],
    images: [
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع كوبرى ريجوا - كبارى القطار السريع/صور المشروع/1.jpg',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع كوبرى ريجوا - كبارى القطار السريع/صور المشروع/2.jpg',
    ],
  },
  {
    id: 13,
    slug: 'bridge-project-6',
    titleAr: 'مشروع كوبرى سيدى كرير',
    titleEn: 'Sidi Kerir Bridge Project',
    typeKey: 'bridges',
    status: 'completed',
    hidden: true,
    locationAr: 'الإسكندرية',
    locationEn: 'Alexandria',
    ownerAr: 'الهيئة العامة للطرق والكبارى',
    ownerEn: 'General Authority for Roads and Bridges',
    contractorAr: 'شركة السعداء للمقاولات',
    contractorEn: 'Al-Saadaa Contracting Company',
    subcontractorAr: 'شركة وايزر للمقاولات العامة',
    subcontractorEn: 'Wiser General Contracting Company',
    descriptionAr:
      `مشروع كوبرى سيدى كرير بغرب محافظة الإسكندرية هو أحد المشروعات القومية الهامة لشبكة الطرق، وقد تم إنشاؤه بهدف رئيسي وهو إنهاء التكدس المروري وفض الاشتباك بين حركة السيارات المتجهة إلى الساحل الشمالي وتلك القادمة من وإلى مدينة ومطار برج العرب.`,
    descriptionEn:
      `The Sidi Kerir Bridge project, located in the western part of Alexandria Governorate, is one of the important national road network projects. It was constructed with the primary aim of eliminating traffic congestion and resolving the conflict between vehicles heading to the North Coast and those traveling to and from Borg El Arab city and airport.`,
    scopeAr: [
      'أعمال القواعد المسلحة',
      'أعمال الأعمدة والهامات المسلحة',
      'أعمال البلاطات العلوية',
    ],
    scopeEn: [
      'Reinforced concrete foundation works',
      'Reinforced column and cap beam works',
      'Top slab works',
    ],
    images: [
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع كوبرى سيدى كرير/صور المشروع/1.png',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع كوبرى سيدى كرير/صور المشروع/2.png',
    ],
  },
  {
    id: 14,
    slug: 'bridge-project-7',
    titleAr: 'مشروع كوبرى عرب الرمل - اجهور الرمل',
    titleEn: 'Arab El-Raml - Aghour El-Raml Bridge Project',
    typeKey: 'bridges',
    status: 'completed',
    locationAr: 'طريق القاهرة – الإسكندرية الزراعى',
    locationEn: 'Cairo – Alexandria Agricultural Road',
    ownerAr: 'الهيئة العامة للطرق والكبارى',
    ownerEn: 'General Authority for Roads and Bridges',
    clientAr: 'الهيئة العامة للطرق والكبارى',
    clientEn: 'General Authority for Roads and Bridges',
    contractorAr: 'شركة النيل العامة للطرق والكبارى والأعمال البحرية',
    contractorEn: 'Nile General Company for Roads, Bridges and Marine Works',
    subcontractorAr: 'شركة وايزر للمقاولات العامة',
    subcontractorEn: 'Wiser General Contracting Company',
    descriptionAr:
      `مشروع كوبرى عرب الرمل وأجهور الرمل هو واحد من أهم المشروعات القومية التي نُفذت على طريق القاهرة - الإسكندرية الزراعى، ويهدف بشكل أساسي إلى حل أزمات مرورية مزمنة في هذه المنطقة الحيوية، وإلغاء التقاطعات السطحية بين طريق القاهرة - الإسكندرية الزراعى ومداخل قرى عرب الرمل وأجهور الرمل، ومنع التداخل مع حركة القطارات في المناطق المجاورة.

قامت شركة وايزر للمقاولات العامة بتنفيذ عدد (2) كوبرى بواقع كوبرى لكل اتجاه، بطول 1500 م وعرض 12 م للاتجاه الواحد.`,
    descriptionEn:
      `The Arab El-Raml and Aghour El-Raml Bridge project is one of the most important national projects executed on the Cairo–Alexandria Agricultural Road. Its primary objectives are to resolve chronic traffic congestion in this vital area, eliminate at-grade intersections between the Cairo–Alexandria Agricultural Road and the entrances to the Arab El-Raml and Aghour El-Raml villages, and prevent interference with train movements in the surrounding areas.

Wiser General Contracting Company executed two bridges — one bridge per direction — each 1,500 m long and 12 m wide.`,
    scopeAr: [
      'أعمال الخوازيق للقواعد المسلحة',
      'أعمال القواعد المسلحة',
      'أعمال الحوائط المسلحة',
      'أعمال الأعمدة المونوبايل والأعمدة التيجان',
      'أعمال الهامات',
      'أعمال البلاطات على خوازيق',
      'أعمال الكمرات السابقة الصب',
      'أعمال البلاطات فوق الكمرات',
      'أعمال دهانات السافيتو',
    ],
    scopeEn: [
      'Piling works for reinforced foundations',
      'Reinforced concrete foundation works',
      'Reinforced wall works',
      'Monopile column and crown column works',
      'Cap beam works',
      'Pile-supported slab works',
      'Precast beam works',
      'Slabs over beams',
      'Saveto coating works',
    ],
    images: [
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع كوبرى عرب الرمل - اجهور الرمل/صور المشروع/1.jpeg',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع كوبرى عرب الرمل - اجهور الرمل/صور المشروع/2.jpeg',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع كوبرى عرب الرمل - اجهور الرمل/صور المشروع/3.jpeg',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع كوبرى عرب الرمل - اجهور الرمل/صور المشروع/4.jpeg',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع كوبرى عرب الرمل - اجهور الرمل/صور المشروع/5.jpeg',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع كوبرى عرب الرمل - اجهور الرمل/صور المشروع/6.jpeg',
    ],
  },
  {
    id: 15,
    slug: 'bridge-project-8',
    titleAr: 'مشروع كوبرى علوى أسنيت على طريق بنها المنصورة',
    titleEn: 'Esneit Overpass on Benha-Mansoura Road Project',
    typeKey: 'bridges',
    status: 'completed',
    locationAr: 'بنها – المنصورة',
    locationEn: 'Benha – Mansoura',
    ownerAr: 'الهيئة العامة للطرق والكبارى',
    ownerEn: 'General Authority for Roads and Bridges',
    clientAr: 'النيل للاستشارات الهندسية',
    clientEn: 'Nile Engineering Consultants',
    contractorAr: 'شركة النيل العامة للطرق والكبارى والأعمال البحرية',
    contractorEn: 'Nile General Company for Roads, Bridges and Marine Works',
    subcontractorAr: 'شركة وايزر للمقاولات العامة',
    subcontractorEn: 'Wiser General Contracting Company',
    descriptionAr:
      `مشروع تطوير البر الأيمن للرياح التوفيقي هو واحد من أضخم المشروعات القومية في قطاع النقل بمصر، ويهدف بشكل أساسي إلى حل الأزمات المرورية الخانقة على طريق بنها - المنصورة.

قامت شركة وايزر للمقاولات العامة بتنفيذ كوبرى أسنيت ضمن هذا المشروع بطول 600 م وعرض 13 م.`,
    descriptionEn:
      `The Right Bank Development of El-Rayah El-Tawfiky project is one of the largest national infrastructure projects in Egypt's transport sector. Its primary objective is to alleviate severe traffic congestion on the Benha–Mansoura road.

Wiser General Contracting Company executed the Esneit Bridge within this project, with a length of 600 m and a width of 13 m.`,
    scopeAr: [
      'أعمال الخوازيق للقواعد المسلحة',
      'أعمال الخوازيق الساندة',
      'أعمال القواعد المسلحة',
      'أعمال الحوائط المسلحة',
      'أعمال الأعمدة المونوبايل والأعمدة التيجان',
      'أعمال الهامات',
      'أعمال البلاطات على خوازيق',
      'أعمال الكمرات السابقة الصب',
      'أعمال البلاطات فوق الكمرات',
      'أعمال بلاطات القطاع الصندوقى',
      'أعمال دهانات السافيتو',
    ],
    scopeEn: [
      'Piling works for reinforced foundations',
      'Retaining pile works',
      'Reinforced concrete foundation works',
      'Reinforced wall works',
      'Monopile column and crown column works',
      'Cap beam works',
      'Pile-supported slab works',
      'Precast beam works',
      'Slabs over beams',
      'Box section slab works',
      'Saveto coating works',
    ],
    images: [
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع كوبرى علوى أسنيت على طريق بنها المنصورة/صور المشروع/1.png',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع كوبرى علوى أسنيت على طريق بنها المنصورة/صور المشروع/2.png',
    ],
  },
  {
    id: 16,
    slug: 'bridge-project-9',
    titleAr: 'مشروع كوبرى علوى كفر شكر على طريق بنها المنصورة',
    titleEn: 'Kafr Shokr Overpass on Benha-Mansoura Road Project',
    typeKey: 'bridges',
    status: 'completed',
    locationAr: 'بنها – المنصورة',
    locationEn: 'Benha – Mansoura',
    ownerAr: 'الهيئة العامة للطرق والكبارى',
    ownerEn: 'General Authority for Roads and Bridges',
    clientAr: 'النيل للاستشارات الهندسية',
    clientEn: 'Nile Engineering Consultants',
    contractorAr: 'الشركة الوطنية للتشييد - سامكو',
    contractorEn: 'National Construction Company - SAMCO',
    subcontractorAr: 'شركة وايزر للمقاولات العامة',
    subcontractorEn: 'Wiser General Contracting Company',
    descriptionAr:
      `مشروع تطوير البر الأيمن للرياح التوفيقي هو واحد من أضخم المشروعات القومية في قطاع النقل بمصر، ويهدف بشكل أساسي إلى حل الأزمات المرورية الخانقة على طريق بنها - المنصورة.

قامت شركة وايزر للمقاولات العامة بتنفيذ كوبرى كفر شكر ضمن هذا المشروع بطول 350 م وعرض 12 م.`,
    descriptionEn:
      `The Right Bank Development of El-Rayah El-Tawfiky project is one of the largest national infrastructure projects in Egypt's transport sector. Its primary objective is to alleviate severe traffic congestion on the Benha–Mansoura road.

Wiser General Contracting Company executed the Kafr Shokr Bridge within this project, with a length of 350 m and a width of 12 m.`,
    scopeAr: [
      'أعمال الخوازيق للقواعد المسلحة',
      'أعمال القواعد المسلحة',
      'أعمال الأعمدة المونوبايل والأعمدة التيجان',
      'أعمال الهامات',
      'أعمال البلاطات على خوازيق',
      'أعمال دهانات السافيتو',
    ],
    scopeEn: [
      'Piling works for reinforced foundations',
      'Reinforced concrete foundation works',
      'Monopile column and crown column works',
      'Cap beam works',
      'Pile-supported slab works',
      'Saveto coating works',
    ],
    images: [
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع كوبرى علوى كفر شكر على طريق بنها المنصورة/صور المشروع/1.png',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع كوبرى علوى كفر شكر على طريق بنها المنصورة/صور المشروع/2.png',
    ],
  },
  {
    id: 17,
    slug: 'bridge-project-10',
    titleAr: 'مشروع كوبرى ميناء الادبية بالسويس',
    titleEn: 'Adabiya Port Bridge in Suez Project',
    typeKey: 'bridges',
    status: 'completed',
    locationAr: 'السويس',
    locationEn: 'Suez',
    ownerAr: 'الهيئة العامة للطرق والكبارى',
    ownerEn: 'General Authority for Roads and Bridges',
    clientAr: 'المهندسون الاستشاريون الدوليون – أ.د. أسامة عقيل',
    clientEn: 'International Consulting Engineers – Prof. Dr. Osama Oqail',
    contractorAr: 'شركة النيل العامة للطرق والكبارى والأعمال البحرية',
    contractorEn: 'Nile General Company for Roads, Bridges and Marine Works',
    subcontractorAr: 'شركة وايزر للمقاولات العامة',
    subcontractorEn: 'Wiser General Contracting Company',
    descriptionAr:
      `يُعدّ مشروع تطوير الطرق والكبارى بمحيط ميناء الأدبية بالسويس جزءًا محوريًا من خطة الدولة لتحويل منطقة "تراسانتا" والموانئ التابعة للمنطقة الاقتصادية لقناة السويس إلى مراكز لوجستية عالمية.

قامت شركة وايزر للمقاولات العامة بتنفيذ كوبرى ميناء الأدبية بطول 600 م وعرض 30 م.`,
    descriptionEn:
      `The roads and bridges development project around Adabiya Port in Suez is a pivotal component of the state's plan to transform the "Trasanta" zone and the ports under the Suez Canal Economic Zone into world-class logistics hubs.

Wiser General Contracting Company executed the Adabiya Port Bridge with a length of 600 m and a width of 30 m.`,
    scopeAr: [
      'أعمال القواعد المسلحة',
      'أعمال الأعمدة المونوبايل والأعمدة التيجان',
      'أعمال الهامات',
      'أعمال بلاطات القطاع الصندوقى',
    ],
    scopeEn: [
      'Reinforced concrete foundation works',
      'Monopile column and crown column works',
      'Cap beam works',
      'Box section slab works',
    ],
    images: [
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع كوبرى ميناء الادبية بالسويس/صور المشروع/1.png',
    ],
  },
  {
    id: 18,
    slug: 'bridge-project-11',
    titleAr: 'مشروع محور ابو تيج العلوى على النيل',
    titleEn: 'Abu Tig Elevated Axis over the Nile Project',
    typeKey: 'bridges',
    status: 'completed',
    locationAr: 'أسيوط',
    locationEn: 'Assiut',
    ownerAr: 'الهيئة العامة للطرق والكبارى',
    ownerEn: 'General Authority for Roads and Bridges',
    clientAr: 'دار الهندسة',
    clientEn: 'Dar Al-Handasah',
    contractorAr: 'شركة النيل العامة للطرق والكبارى والأعمال البحرية',
    contractorEn: 'Nile General Company for Roads, Bridges and Marine Works',
    subcontractorAr: 'شركة وايزر للمقاولات العامة',
    subcontractorEn: 'Wiser General Contracting Company',
    descriptionAr:
      `يُعتبر محور أبو تيج على النيل بمحافظة أسيوط واحدًا من أهم محاور التنمية في صعيد مصر، وهو جزء من خطة الدولة لتقليل المسافات بين المحاور العرضية على النيل لتصبح 25 كم كحد أقصى.

قامت شركة وايزر للمقاولات العامة بتنفيذ كوبرى أبو تيج بطول 500 م وعرض 24 م.`,
    descriptionEn:
      `The Abu Tig elevated axis over the Nile in Assiut Governorate is one of the most important development corridors in Upper Egypt. It is part of the state's plan to reduce the distances between transverse Nile crossings to a maximum of 25 km.

Wiser General Contracting Company executed the Abu Tig Bridge with a length of 500 m and a width of 24 m.`,
    scopeAr: [
      'أعمال القواعد المسلحة',
      'أعمال الأعمدة المونوبايل والأعمدة التيجان',
      'أعمال الهامات',
    ],
    scopeEn: [
      'Reinforced concrete foundation works',
      'Monopile column and crown column works',
      'Cap beam works',
    ],
    images: [
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع محور ابو تيج العلوى على النيل/صور المشروع/1.png',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع محور ابو تيج العلوى على النيل/صور المشروع/2.png',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع محور ابو تيج العلوى على النيل/صور المشروع/3.png',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع محور ابو تيج العلوى على النيل/صور المشروع/4.jpg',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع محور ابو تيج العلوى على النيل/صور المشروع/5.jpg',
    ],
  },
  {
    id: 19,
    slug: 'bridge-project-12',
    titleAr: 'مشروع محور الفردوس',
    titleEn: 'Al Ferdous Axis Project',
    typeKey: 'bridges',
    status: 'completed',
    locationAr: 'القاهرة',
    locationEn: 'Cairo',
    ownerAr: 'الجهاز المركزي للتعمير',
    ownerEn: 'Central Agency for Urban Development',
    contractorAr: 'الشركة الوطنية للتشييد - سامكو',
    contractorEn: 'National Construction Company - SAMCO',
    subcontractorAr: 'شركة وايزر للمقاولات العامة',
    subcontractorEn: 'Wiser General Contracting Company',
    descriptionAr:
      `مشروع محور الفردوس — الذي أُطلق عليه رسمياً لاحقاً اسم محور جيهان السادات — هو واحد من أهم المشروعات القومية لشبكة الطرق داخل محافظة القاهرة. يهدف المشروع بالأساس إلى خلق شريان مروري حر يربط قلب العاصمة بالمحاور الطولية الكبرى وصولاً إلى المدن الجديدة.

قامت شركة وايزر للمقاولات العامة بتنفيذ الأعمال المدنية لعدد (2) محور ضمن هذا المشروع.`,
    descriptionEn:
      `The Al Ferdous Axis project — officially renamed Al Ferdous Axis later as Jihan El-Sadat Axis — is one of the most important national road network projects within Cairo Governorate. The project's primary objective is to create a free-flowing traffic artery connecting the heart of the capital to the major longitudinal corridors leading to new cities.

Wiser General Contracting Company executed the civil works for two axes within this project.`,
    scopeAr: [
      'أعمال القواعد المسلحة',
      'أعمال الأعمدة والهامات',
      'أعمال الكمرات سابقة الصب',
      'أعمال البلاطات العلوية',
    ],
    scopeEn: [
      'Reinforced concrete foundation works',
      'Column and cap beam works',
      'Precast beam works',
      'Top slab works',
    ],
    images: [
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع محور الفردوس/صور المشروع/1.jpg',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع محور الفردوس/صور المشروع/2.png',
    ],
  },
];

const priorityBridgeProjects: Project[] = [
  {
    id: 20,
    slug: 'bridge-project-13',
    titleAr: 'مشروع محور ديروط العلوى على النيل',
    titleEn: 'Dayrout Elevated Axis over the Nile Project',
    typeKey: 'bridges',
    status: 'completed',
    locationAr: 'أسيوط',
    locationEn: 'Assiut',
    ownerAr: 'الهيئة العامة للطرق والكبارى',
    ownerEn: 'General Authority for Roads and Bridges',
    clientAr: 'النيل للاستشارات الهندسية',
    clientEn: 'Nile Engineering Consultants',
    contractorAr: 'شركة النيل العامة للطرق والكبارى والأعمال البحرية',
    contractorEn: 'Nile General Company for Roads, Bridges and Marine Works',
    subcontractorAr: 'شركة وايزر للمقاولات العامة',
    subcontractorEn: 'Wiser General Contracting Company',
    descriptionAr:
      `يُعتبر محور ديروط العلوي على النيل بمحافظة أسيوط واحدًا من أهم المشروعات القومية التي نُفذت في قطاع الطرق والكبارى بصعيد مصر. الهدف الأساسي منه هو خلق شريان حياة جديد يربط شرق النيل بغربه، ويهدف المحور إلى الربط بين الطريق الصحراوى الشرقى (القاهرة - أسوان) والطريق الزراعى الغربى وصولاً إلى الطريق الصحراوى الغربى.

قامت شركة وايزر للمقاولات العامة بتنفيذ عدد (7) أعمال صناعية ضمن هذا المحور.`,
    descriptionEn:
      `The Dayrout elevated axis over the Nile in Assiut Governorate is one of the most important national projects executed in the roads and bridges sector in Upper Egypt. Its primary objective is to create a new vital artery connecting the east bank of the Nile to the west bank. The axis aims to link the Eastern Desert Road (Cairo–Aswan) with the Western Agricultural Road, extending through to the Western Desert Road.

Wiser General Contracting Company executed seven structural works within this axis.`,
    scopeAr: [
      'أعمال الخوازيق للقواعد المسلحة',
      'أعمال القواعد المسلحة',
      'أعمال الحوائط المسلحة',
      'أعمال الأعمدة المونوبايل والأعمدة التيجان',
      'أعمال الهامات',
      'أعمال البلاطات على خوازيق',
      'أعمال الكمرات السابقة الصب',
      'أعمال البلاطات فوق الكمرات',
      'بربخ شرق النيل',
    ],
    scopeEn: [
      'Piling works for reinforced foundations',
      'Reinforced concrete foundation works',
      'Reinforced wall works',
      'Monopile column and crown column works',
      'Cap beam works',
      'Pile-supported slab works',
      'Precast beam works',
      'Slabs over beams',
      'East Nile culvert works',
    ],
    images: [
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع محور ديروط العلوى على النيل/صور المشروع/1.jpg',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع محور ديروط العلوى على النيل/صور المشروع/2.jpeg',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع محور ديروط العلوى على النيل/صور المشروع/3.jpeg',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع محور ديروط العلوى على النيل/صور المشروع/4.jpeg',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع محور ديروط العلوى على النيل/صور المشروع/5.jpeg',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع محور ديروط العلوى على النيل/صور المشروع/6.jpeg',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع محور ديروط العلوى على النيل/صور المشروع/7.jpg',
      '/assets/bridges/مشروعات تم الانتهاء منها/مشروع محور ديروط العلوى على النيل/صور المشروع/8.jpeg',
    ],
  },
  {
    id: 21,
    slug: 'bridge-project-14',
    titleAr: 'مشروع كوبرى 6 العاصمة الادارية',
    titleEn: 'Administrative Capital Bridge 6 Project',
    typeKey: 'bridges',
    status: 'inProgress',
    locationAr: 'العاصمة الإدارية',
    locationEn: 'New Administrative Capital',
    ownerAr: 'الهيئة القومية للأنفاق',
    ownerEn: 'National Authority for Tunnels',
    clientAr: 'مكتب خطيب وعلمى',
    clientEn: 'Khateeb & Alami',
    contractorAr: 'شركة النيل العامة للطرق والكبارى والأعمال البحرية',
    contractorEn: 'Nile General Company for Roads, Bridges and Marine Works',
    subcontractorAr: 'شركة وايزر للمقاولات العامة',
    subcontractorEn: 'Wiser General Contracting Company',
    descriptionAr:
      `يُعتبر القطار الكهربائي الخفيف (LRT) شريانًا حيويًا جديدًا للتنمية في المجتمعات الحضرية الجديدة، وهو أبرز مشروعات النقل الذكى المستدام في مصر، إذ يُسهم في سرعة الانتقال والربط بين القاهرة والمدن الجديدة والربط مع العاصمة الإدارية الجديدة.

يشمل نطاق عملنا أعمال الأساسات الميكانيكية والأعمال المدنية ضمن المرحلة الثالثة للمشروع في المسار ما بين محطة القيادة ومحطة المدينة الأولمبية، والذي يتألف من كوبرى علوى بطول إجمالي يبلغ 1800 مترًا وعرض 10 أمتار.`,
    descriptionEn:
      `The Light Rail Transit (LRT) represents a vital new artery for development in new urban communities and is Egypt's most prominent sustainable smart transport project. It contributes to rapid mobility and connectivity between Cairo, new cities, and the New Administrative Capital.

Our scope of work covers mechanical foundation works and civil works within Phase 3 of the project, on the corridor between the Leadership Station and the Olympic City Station. This section consists of an elevated bridge with a total length of 1,800 meters and a width of 10 meters.`,
    scopeAr: [
      'أعمال الخوازيق بماكينات الخوازيق الخاصة بالشركة',
      'أعمال القواعد المسلحة',
      'أعمال الأعمدة والهامات بالفرم المعدنية الخاصة والمملوكة لشركة وايزر للمقاولات العامة',
      'أعمال الكمرات سابقة الإجهاد بمختلف أطوالها بالفرم المعدنية الخاصة والمملوكة لشركة وايزر للمقاولات العامة',
      'أعمال البلاطات العلوية أعلى الكمر',
    ],
    scopeEn: [
      'Piling works using the company\'s own piling machines',
      'Reinforced concrete foundation works',
      'Column and cap beam works using Wiser\'s own proprietary metal formwork',
      'Prestressed beam works of various lengths using Wiser\'s own proprietary metal formwork',
      'Top slab works over the beams',
    ],
    images: [
      '/assets/bridges/مشروعات جارية/مشروع كوبرى 6 العاصمة الادارية/صور المشروع/1.jpg',
      '/assets/bridges/مشروعات جارية/مشروع كوبرى 6 العاصمة الادارية/صور المشروع/2.jpg',
      '/assets/bridges/مشروعات جارية/مشروع كوبرى 6 العاصمة الادارية/صور المشروع/3.jpg',
      '/assets/bridges/مشروعات جارية/مشروع كوبرى 6 العاصمة الادارية/صور المشروع/4.jpg',
      '/assets/bridges/مشروعات جارية/مشروع كوبرى 6 العاصمة الادارية/صور المشروع/5.jpg',
      '/assets/bridges/مشروعات جارية/مشروع كوبرى 6 العاصمة الادارية/صور المشروع/6.jpg',
    ],
  },
  {
    id: 22,
    slug: 'bridge-project-15',
    titleAr: 'مشروع كوبرى تقاطع الدائرى الاقليمى - كبارى القطار السريع',
    titleEn: 'Regional Ring Road Interchange Bridge Project - High-Speed Rail Bridges',
    typeKey: 'bridges',
    status: 'inProgress',
    locationAr: 'الدائرى الاقليمى',
    locationEn: 'Regional Ring Road',
    ownerAr: 'الهيئة العامة للطرق والكبارى',
    ownerEn: 'General Authority for Roads and Bridges',
    clientAr: 'PENTA CONSULTANT',
    clientEn: 'PENTA CONSULTANT',
    contractorAr: 'شركة النيل العامة للطرق والكبارى والأعمال البحرية',
    contractorEn: 'Nile General Company for Roads, Bridges and Marine Works',
    subcontractorAr: 'شركة وايزر للمقاولات العامة',
    subcontractorEn: 'Wiser General Contracting Company',
    descriptionAr:
      `مشروع كبارى القطار السريع هو أول مشروع سكك حديدية كهربائية في مصر، وعند اكتماله سيُصبح سادس أكبر مشروع من نوعه على مستوى العالم. ستربط خطوط السكك الحديدية 60 مدينة في جميع أنحاء البلاد عبر قطارات تصل سرعتها إلى 230 كيلومترًا في الساعة، وسيخدم النظام الركاب والبضائع، ويربط المدن والموانئ البحرية والبرية والمدن الأثرية والمواقع السياحية في جميع أنحاء مصر، مما يُسهم في تنمية قطاعات متعددة في الاقتصاد المصري.

يشمل نطاق عملنا إنشاء كبارى علوية على مسار القطار الكهربائي السريع، حيث يتم تنفيذ عدد (2) كوبرى داعم بطول 200 م وعرض 15 م، وعدد (2) كوبرى رئيسي بطول 200 م وعرض 22 م، وذلك عند المحطة (ST191+500) على الطريق الدائرى الاقليمى.

تم الانتهاء من عدد (2) كوبرى الداعمين، وجارٍ حاليًا تنفيذ أعمال كبارى الطريق الرئيسي.`,
    descriptionEn:
      `The High-Speed Rail Bridges project is Egypt's first electric railway project and, upon completion, will become the sixth largest project of its kind in the world. The rail network will connect 60 cities across the country with trains reaching speeds of up to 230 km/h. The system will serve both passengers and freight, linking cities, seaports, land ports, historic cities, and tourist sites throughout Egypt, contributing to the development of multiple sectors of the Egyptian economy.

Our scope of work covers the construction of elevated bridges along the high-speed electric railway corridor. The works include two supporting bridges, each 200 m long and 15 m wide, and two main bridges, each 200 m long and 22 m wide, located at station (ST191+500) on the Regional Ring Road.

The two supporting bridges have been completed, and works on the main road bridges are currently underway.`,
    scopeAr: [
      'أعمال الخوازيق بالمشروع',
      'أعمال القواعد المسلحة',
      'أعمال الأعمدة والهامات بالفرم الخاصة بالشركة',
      'أعمال الكمرات سابقة الصب',
      'أعمال البلاطات العلوية القطاع الصندوقى سابقة الإجهاد',
    ],
    scopeEn: [
      'Piling works',
      'Reinforced concrete foundation works',
      'Column and cap beam works using the company\'s own formwork',
      'Precast beam works',
      'Prestressed box section top slab works',
    ],
    images: [
      '/assets/bridges/مشروعات جارية/مشروع كوبرى تقاطع الدائرى الاقليمى - كبارى القطار السريع/صور المشروع/IMG-20260414-WA0000.jpg',
      '/assets/bridges/مشروعات جارية/مشروع كوبرى تقاطع الدائرى الاقليمى - كبارى القطار السريع/صور المشروع/IMG-20260414-WA0001.jpg',
      '/assets/bridges/مشروعات جارية/مشروع كوبرى تقاطع الدائرى الاقليمى - كبارى القطار السريع/صور المشروع/IMG-20260414-WA0002.jpg',
      '/assets/bridges/مشروعات جارية/مشروع كوبرى تقاطع الدائرى الاقليمى - كبارى القطار السريع/صور المشروع/IMG-20260414-WA0003.jpg',
      '/assets/bridges/مشروعات جارية/مشروع كوبرى تقاطع الدائرى الاقليمى - كبارى القطار السريع/صور المشروع/IMG-20260414-WA0004.jpg',
      '/assets/bridges/مشروعات جارية/مشروع كوبرى تقاطع الدائرى الاقليمى - كبارى القطار السريع/صور المشروع/IMG-20260414-WA0005.jpg',
      '/assets/bridges/مشروعات جارية/مشروع كوبرى تقاطع الدائرى الاقليمى - كبارى القطار السريع/صور المشروع/IMG-20260414-WA0006.jpg',
    ],
  },
  {
    id: 23,
    slug: 'bridge-project-16',
    titleAr: 'مشروع كوبرى7 العاصمة الادارية',
    titleEn: 'Administrative Capital Bridge 7 Project',
    typeKey: 'bridges',
    status: 'inProgress',
    locationAr: 'العاصمة الإدارية',
    locationEn: 'New Administrative Capital',
    ownerAr: 'الهيئة القومية للأنفاق',
    ownerEn: 'National Authority for Tunnels',
    clientAr: 'مكتب خطيب وعلمى',
    clientEn: 'Khateeb & Alami',
    contractorAr: 'شركة النيل العامة للإنشاءات والطرق والأعمال البحرية',
    contractorEn: 'Nile General Company for Construction, Roads and Marine Works',
    subcontractorAr: 'شركة وايزر للمقاولات العامة',
    subcontractorEn: 'Wiser General Contracting Company',
    descriptionAr:
      `يُعتبر القطار الكهربائي الخفيف (LRT) شريانًا حيويًا جديدًا للتنمية في المجتمعات الحضرية الجديدة، وهو أبرز مشروعات النقل الذكى المستدام في مصر، إذ يُسهم في سرعة الانتقال والربط بين القاهرة والمدن الجديدة والربط مع العاصمة الإدارية الجديدة.

يشمل نطاق عملنا أعمال الأساسات الميكانيكية والأعمال المدنية ضمن المرحلة الثالثة للمشروع في المسار ما بين محطة المدينة الأولمبية ومحطة العاصمة، والذي يتألف من كوبرى علوى بطول إجمالي يبلغ 1650 مترًا وعرض 10 أمتار.`,
    descriptionEn:
      `The Light Rail Transit (LRT) represents a vital new artery for development in new urban communities and is Egypt's most prominent sustainable smart transport project. It contributes to rapid mobility and connectivity between Cairo, new cities, and the New Administrative Capital.

Our scope of work covers mechanical foundation works and civil works within Phase 3 of the project, on the corridor between the Olympic City Station and the Capital Station. This section consists of an elevated bridge with a total length of 1,650 meters and a width of 10 meters.`,
    scopeAr: [
      'أعمال الخوازيق بالمشروع',
      'أعمال القواعد المسلحة',
      'أعمال الأعمدة والهامات بالفرم المعدنية الخاصة والمملوكة لشركة وايزر للمقاولات العامة',
      'أعمال الكمرات سابقة الإجهاد بمختلف أطوالها بالفرم المعدنية الخاصة والمملوكة لشركة وايزر للمقاولات العامة',
      'أعمال البلاطات العلوية أعلى الكمر',
    ],
    scopeEn: [
      'Piling works',
      'Reinforced concrete foundation works',
      'Column and cap beam works using Wiser\'s own proprietary metal formwork',
      'Prestressed beam works of various lengths using Wiser\'s own proprietary metal formwork',
      'Top slab works over the beams',
    ],
    images: [
      '/assets/bridges/مشروعات جارية/مشروع كوبرى7 العاصمة الادارية/صور المشروع/1.jpg',
      '/assets/bridges/مشروعات جارية/مشروع كوبرى7 العاصمة الادارية/صور المشروع/2.jpg',
      '/assets/bridges/مشروعات جارية/مشروع كوبرى7 العاصمة الادارية/صور المشروع/3.jpg',
      '/assets/bridges/مشروعات جارية/مشروع كوبرى7 العاصمة الادارية/صور المشروع/4.jpg',
      '/assets/bridges/مشروعات جارية/مشروع كوبرى7 العاصمة الادارية/صور المشروع/5.jpg',
      '/assets/bridges/مشروعات جارية/مشروع كوبرى7 العاصمة الادارية/صور المشروع/6.jpg',
      '/assets/bridges/مشروعات جارية/مشروع كوبرى7 العاصمة الادارية/صور المشروع/7.jpg',
      '/assets/bridges/مشروعات جارية/مشروع كوبرى7 العاصمة الادارية/صور المشروع/8.jpg',
    ],
  },
];

const allProjectsData: Project[] = [
  ...priorityBridgeProjects,
  {
    id: 1,
    slug: 'micro-factory-nile-university',
    titleAr: 'مشروع المصنع المصغر - Micro Factory',
    titleEn: 'Micro Factory - Nile University',
    typeKey: 'construction',
    status: 'completed',
    locationAr: 'جامعة النيل - المحور المركزي - السادس من أكتوبر',
    locationEn: 'Nile University - Central Axis - 6th of October',
    ownerAr: 'جامعة النيل الأهلية',
    ownerEn: 'Nile University',
    contractorAr: 'شركة وايزر للمقاولات العامة',
    contractorEn: 'Wiser General Contracting Company',
    year: '2021',
    descriptionAr:
      `مشروع المصنع المصغر أو الـ Micro Factory في جامعة النيل الأهلية بمصر هو أحد المشاريع الرائدة والفريدة من نوعها في المنطقة، وقد أُسس كجزء من المبادرة القومية "رواد النيل" (NilePreneurs) التي يرعاها البنك المركزي المصري، وبالتعاون مع وزارة التخطيط والتنمية الاقتصادية من خلال مشروع رواد 2030.

في عام 2024 تم ترشيح المشروع كأفضل مشروع تجاري في السنة ضمن جوائز BIG 5 Egypt Impact Awards، ووصل للمرحلة النهائية وكان من أفضل 3 مشاريع تجارية في مصر لعام 2021.

قامت شركة وايزر للمقاولات العامة بتنفيذ أعمال الورش والمبنى الإداري، حيث تم تجهيز وتشطيب عدد 5 ورش، كما تم إنشاء المبنى الإداري باستخدام عدد 9 حاويات مكونة من دورين.`,
    descriptionEn:
      `The Micro Factory project at Nile University in Egypt is one of the leading and most distinctive projects of its kind in the region. It was established as part of the national NilePreneurs initiative, sponsored by the Central Bank of Egypt, in cooperation with the Ministry of Planning and Economic Development through the Rowad 2030 project.

In 2021, the project was nominated for Commercial Project of the Year at the BIG 5 Egypt Impact Awards. It reached the final stage and was ranked among the top three commercial projects in Egypt for 2021.

Wiser General Contracting Company executed the workshop and administrative building works. The scope included fitting out and finishing five workshops, as well as constructing a two-story administrative building using nine containers.`,
    scopeAr: [
      'تجهيز وتشطيب عدد 5 ورش',
      'إنشاء المبنى الإداري باستخدام عدد 9 حاويات مكونة من دورين',
      'أعمال الأرضيات الإيبوكسي',
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
      `مشروع المنطقة التجارية واللوجستية للأخشاب بميناء الإسكندرية يمثل جزءاً محورياً من المخطط الشامل للدولة لتحويل ميناء الإسكندرية الكبير إلى مركز عالمي للتجارة واللوجستيات، ولحل مشكلة التكدس المروري وزيادة الطاقة الاستيعابية للميناء.

قامت شركة وايزر للمقاولات العامة بتنفيذ مجموعة متكاملة من الأعمال المدنية والمعمارية والكهروميكانيكية وأعمال الموقع العام.`,
    descriptionEn:
      `The Wood Commercial and Logistics Zone project at Alexandria Port is a key part of the state?s comprehensive plan to transform Greater Alexandria Port into a global trade and logistics hub. The project also supports efforts to reduce traffic congestion and increase the port?s handling capacity.

Wiser General Contracting Company executed an integrated scope of civil, architectural, electromechanical, and general site works.`,
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
    titleAr: 'محطة المنطقة الصناعية - القطار الكهربائي LRT',
    titleEn: 'Industrial Zone Station - LRT Electric Train',
    typeKey: 'construction',
    status: 'completed',
    locationAr: 'القطار الكهربائي LRT',
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
    titleAr: 'م. حمدي فيلا مجاورة 88',
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
  {
    id: 24,
    slug: 'luna-w01',
    titleAr: 'لونا مبنى 1',
    titleEn: 'Luna Building 1',
    typeKey: 'realEstateDevelopment',
    status: 'inProgress',
    locationAr: 'الحي 17 – حي الواحة، العاشر من رمضان',
    locationEn: 'District 17 – Al-Waha, 10th of Ramadan City',
    descriptionAr: `في وايزر… إحنا مش بنقدّم مشروع وخلاص، إحنا بنبني قيمة حقيقية بتبدأ من الفكرة… وبتكمل في كل تفصيلة على أرض الواقع.

16 سنة خبرة هندسية في قلب مواقع التنفيذ، و8 سنوات تخصص فعلي في التطوير العقاري والتشطيبات، خلّتنا نفهم السوق مش من برّه… لكن من جوّه، بكل تفاصيله وتحدياته.

لونا مبنى 1 — استثمار عقاري راقٍ يجمع بين الفخامة والعائد المجزي، صُمِّم ليكون معياراً جديداً في سوق العقارات الفاخرة. يقع في قلب الحي 17 – حي الواحة، على بعد 10 دقائق من الموقف الجديد ومستشفى الجامعة وجامعة الابتكار وكارفور.

تم الانتهاء من الخرسانات والمباني بالكامل بخرسانة جاهزة. الاستلام خلال 4 شهور.

شقق للبيع بمساحات تبدأ من 114 م² إلى 150 م² — نصف تشطيب متكامل يشمل: تأسيس كهرباء، مواسير صرف للتكييفات، عداد كهرباء ومياه، محارة داخلية، باب مصفح، مدخل فاخر، أسانسير، سيستم كاميرات، واجهات مودرن، عزل مائي وحراري للسطح.

أنظمة السداد: مقدم 50% والباقي على 12 شهر — خصم 10% للكاش.`,
    descriptionEn: `At Wiser, we don't just deliver projects — we build real value from concept through every last detail on the ground.

16 years of engineering expertise at the heart of execution sites, and 8 years of specialized experience in real estate development and finishing, give us an insider's understanding of the market and all its challenges.

Luna Building 1 — a premium real estate investment combining luxury and strong returns, designed to set a new standard in the upscale property market. Located in the heart of District 17 – Al-Waha, just 10 minutes from the new bus terminal, University Hospital, Innovation University, and Carrefour.

Concrete structure fully completed using ready-mix concrete. Delivery within 4 months.

Apartments for sale ranging from 114 m² to 150 m² — semi-finished with full fitout including: electrical rough-in, A/C drainage pipes, electricity and water meters, interior plastering, armored door, luxury entrance, elevator, camera system, modern facades, and thermal/waterproof roof insulation.

Payment plans: 50% down payment, balance over 12 months — 10% discount for cash.`,
    scopeAr: [
      'شقق الأدوار المتكررة: 150 م² – 3 غرف، مطبخ، 2 حمام، ريسبشن، تراس',
      'شقة أرضي: 128 م² – 3 غرف، مطبخ، حمام، ريسبشن كبير + حديقة خاصة 118 م²',
      'روف 114 م²: 2 غرف، مطبخ، حمام + تراس 36 م² بإطلالة مفتوحة',
      'روف 228 م²: 2 غرف، مطبخ، حمام + تراس 72 م² بإطلالة مفتوحة',
      'تأسيس كهرباء ومواسير صرف للتكييفات',
      'عداد كهرباء ومياه',
      'محارة داخلية وباب مصفح',
      'مدخل فاخر وأسانسير',
      'سيستم كاميرات متطور',
      'واجهات مودرن وعزل مائي وحراري للسطح',
      'مناطق خضراء وحديقة للدور الأرضي',
    ],
    scopeEn: [
      'Repeated floor apartments: 150 m² – 3 bedrooms, kitchen, 2 bathrooms, reception, terrace',
      'Ground floor apartment: 128 m² – 3 bedrooms, kitchen, bathroom, large reception + 118 m² private garden',
      'Roof 114 m²: 2 bedrooms, kitchen, bathroom + 36 m² open-view terrace',
      'Roof 228 m²: 2 bedrooms, kitchen, bathroom + 72 m² open-view terrace',
      'Electrical rough-in and A/C drainage pipes',
      'Electricity and water meters',
      'Interior plastering and armored door',
      'Luxury entrance and elevator',
      'Advanced camera security system',
      'Modern facades and thermal/waterproof roof insulation',
      'Green areas and private garden for ground floor',
    ],
    images: lunaW01Images,
    featured: true,
  },
  ...bridgeProjects,
];

export const projectsData = allProjectsData.filter((p) => !p.hidden);

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

export function getProjectImageSize() {
  return { width: 1600, height: 900 };
}
