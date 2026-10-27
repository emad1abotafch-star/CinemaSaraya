// catalogue.js — Cinema Saraya
// All Unsplash images are VISUAL PLACEHOLDERS only — not real movie posters.
// Ratings are approximate, sourced from IMDb, and have not been live-verified.
//
// tmdbId: optional field reserved for Phase 5C (TMDB integration).
//   Set to null on all entries until IDs are verified against the TMDB API
//   and approved for inclusion. Do not guess or invent TMDB IDs.
//   The fetch script (scripts/fetch-tmdb.js, not yet created) will use this
//   field to retrieve official metadata when the integration is implemented.

export const CATALOGUE = [
  {
    id: 'dune-2',
    type: 'film',
    titleAr: 'ديون: الجزء الثاني',
    titleEn: 'Dune: Part Two',
    year: 2024,
    genres: ['خيال علمي', 'ملحمي', 'مغامرات'],
    status: 'released',
    tmdbId: null, // to be filled in Phase 5C after verification
    posterUnsplashId: 'photo-1534447677768-be436bb09401', // placeholder image — not the actual poster
    synopsis: 'يواصل بول أتريدس رحلته بين شعب الفريمن في كوكب أراكيس، ساعيًا للثأر من مَن دمّروا عائلته.',
    rating: 8.5, // approximate, sourced from IMDb
    ratingSource: 'IMDb',
  },
  {
    id: 'oppenheimer',
    type: 'film',
    titleAr: 'أوبنهايمر',
    titleEn: 'Oppenheimer',
    year: 2023,
    genres: ['تاريخي', 'دراما', 'إثارة'],
    status: 'released',
    tmdbId: null, // to be filled in Phase 5C after verification
    posterUnsplashId: 'photo-1526374965328-7f61d4dc18c5', // placeholder image — not the actual poster
    synopsis: 'سيرة حياة ج. روبرت أوبنهايمر، العالم الذي قاد مشروع مانهاتن لتطوير القنبلة الذرية.',
    rating: 8.9, // approximate, sourced from IMDb
    ratingSource: 'IMDb',
  },
  {
    id: 'spider-verse-2',
    type: 'film',
    titleAr: 'سبايدر مان: عبر عالم العنكبوت',
    titleEn: 'Spider-Man: Across the Spider-Verse',
    year: 2023,
    genres: ['مغامرات', 'رسوم متحركة', 'خيال علمي'],
    status: 'released',
    tmdbId: null, // to be filled in Phase 5C after verification
    posterUnsplashId: 'photo-1635070041078-e363dbe005cb', // placeholder image — not the actual poster
    synopsis: 'يلتقي مايلز موراليس بنسخ متعددة من سبايدر مان عبر أكوان موازية في مغامرة بصرية استثنائية.',
    rating: 8.6, // approximate, sourced from IMDb
    ratingSource: 'IMDb',
  },
  {
    id: 'batman-2022',
    type: 'film',
    titleAr: 'الرجل الوطواط',
    titleEn: 'The Batman',
    year: 2022,
    genres: ['جريمة', 'إثارة', 'أكشن'],
    status: 'released',
    tmdbId: null, // to be filled in Phase 5C after verification
    posterUnsplashId: 'photo-1509347528160-9a9e33742cdb', // placeholder image — not the actual poster
    synopsis: 'في عامه الثاني كبطل خارق، يواجه بروس واين محقق الوجه الألغازي في مدينة غوثام المظلمة.',
    rating: 7.8, // approximate, sourced from IMDb
    ratingSource: 'IMDb',
  },
  {
    id: 'killers-flower-moon',
    type: 'film',
    titleAr: 'قتلة زهرة القمر',
    titleEn: 'Killers of the Flower Moon',
    year: 2023,
    genres: ['تاريخي', 'دراما', 'جريمة'],
    status: 'released',
    tmdbId: null, // to be filled in Phase 5C after verification
    posterUnsplashId: 'photo-1474044159687-1ee9f3a51722', // placeholder image — not the actual poster
    synopsis: 'ملحمة تاريخية تروي قصة سلسلة جرائم القتل التي استهدفت شعب أوساج الأمريكي الأصلي في عشرينيات القرن الماضي.',
    rating: 7.7, // approximate, sourced from IMDb
    ratingSource: 'IMDb',
  },
  {
    id: 'deadpool-wolverine',
    type: 'film',
    titleAr: 'ديدبول وولفرين',
    titleEn: 'Deadpool & Wolverine',
    year: 2024,
    genres: ['أكشن', 'كوميديا', 'خيال علمي'],
    status: 'released',
    tmdbId: null, // to be filled in Phase 5C after verification
    posterUnsplashId: 'photo-1536440136628-849c177e76a1', // placeholder image — not the actual poster
    synopsis: 'يضطر ديدبول للتعاون مع ولفرين في مهمة تمتد عبر الأكوان المتعددة.',
    rating: 7.8, // approximate, sourced from IMDb
    ratingSource: 'IMDb',
  },
  {
    id: 'thunderbolts',
    type: 'film',
    titleAr: 'ثندربولتس',
    titleEn: 'Thunderbolts*',
    year: 2025,
    genres: ['أكشن', 'خيال علمي', 'مغامرات'],
    // Status corrected from 'upcoming' to 'released'.
    // Theatrical release: May 2, 2025 (United States).
    // Sources: Wikipedia (en.wikipedia.org/wiki/Thunderbolts*),
    //          IMDB (imdb.com/news/ni65427744/),
    //          TMDB (themoviedb.org/movie/986056-thunderbolts/releases).
    status: 'released',
    tmdbId: null, // to be filled in Phase 5C after verification
    posterUnsplashId: 'photo-1620121692029-d088224ddc74', // placeholder image — not the actual poster
    synopsis: 'فريق من العملاء السريين المشكوك فيهم يُجنَّدون لتنفيذ مهمة خطيرة.',
    rating: null, // not yet populated — will be sourced from TMDB in Phase 5C
    ratingSource: null,
  },
  {
    id: 'shogun-2024',
    type: 'series',
    titleAr: 'شوغن',
    titleEn: 'Shōgun',
    year: 2024,
    genres: ['تاريخي', 'دراما', 'حرب'],
    status: 'released',
    tmdbId: null, // to be filled in Phase 5C after verification
    posterUnsplashId: 'photo-1545569341-9eb8b30979d9', // placeholder image — not the actual poster
    synopsis: 'ملحمة تاريخية في اليابان الإقطاعية، تتبع ملاحًا إنجليزيًا يجد نفسه في قلب صراع السلطة السياسية.',
    rating: 8.7, // approximate, sourced from IMDb
    ratingSource: 'IMDb',
  },
  {
    id: 'last-of-us',
    type: 'series',
    titleAr: 'ذا لاست أوف أس',
    titleEn: 'The Last of Us',
    year: 2023,
    genres: ['دراما', 'رعب', 'مغامرات'],
    status: 'released',
    tmdbId: null, // to be filled in Phase 5C after verification
    posterUnsplashId: 'photo-1518012312832-96aea3c91144', // placeholder image — not the actual poster
    synopsis: 'في عالم ما بعد الكارثة، يرافق جويل طفلةً تحمل في دمها المناعة الوحيدة لإنقاذ البشرية.',
    rating: 8.7, // approximate, sourced from IMDb
    ratingSource: 'IMDb',
  },
  {
    id: 'fallout',
    type: 'series',
    titleAr: 'فولاوت',
    titleEn: 'Fallout',
    year: 2024,
    genres: ['خيال علمي', 'مغامرات', 'رعب'],
    status: 'released',
    tmdbId: null, // to be filled in Phase 5C after verification
    posterUnsplashId: 'photo-1558618666-fcd25c85cd64', // placeholder image — not the actual poster
    synopsis: 'مقتبسة من سلسلة الألعاب الشهيرة، تدور أحداثها في عالم ما بعد نووي يكتشف أسراره الناجون تحت الأرض.',
    rating: 8.5, // approximate, sourced from IMDb
    ratingSource: 'IMDb',
  },
  {
    id: 'fantastic-four',
    type: 'film',
    titleAr: 'الأربعة الرائعون: الخطوات الأولى',
    titleEn: 'The Fantastic Four: First Steps',
    year: 2025,
    genres: ['أكشن', 'مغامرات', 'خيال علمي'],
    // Status corrected from 'upcoming' to 'released'.
    // Theatrical release: July 25, 2025 (United States).
    // Sources: Wikipedia (en.wikipedia.org/wiki/The_Fantastic_Four:_First_Steps),
    //          Hollywood Reporter (hollywoodreporter.com, July 22 2025 premiere coverage),
    //          IMDB (imdb.com/news/ni65617032/).
    status: 'released',
    tmdbId: null, // to be filled in Phase 5C after verification
    posterUnsplashId: 'photo-1613323593608-abc90fec84ff', // placeholder image — not the actual poster
    synopsis: 'إطلالة أولى على الأسرة الرائعة الخارقة في كون مارفل السينمائي.',
    rating: null, // not yet populated — will be sourced from TMDB in Phase 5C
    ratingSource: null,
  },
];

export const FILM_NEWS = [
  {
    id: 'news-1',
    headlineAr: 'أخبار صناعة السينما العالمية',
    sourceNameAr: 'فارايتي',
    sourceName: 'Variety',
    url: 'https://variety.com',
    dateAr: 'يناير 2025',
    dateTime: '2025-01',
    summary: 'آخر أخبار صناعة السينما، المهرجانات، وإطلاق الأفلام الكبرى.',
  },
  {
    id: 'news-2',
    headlineAr: 'تقارير ومراجعات المهرجانات السينمائية',
    sourceNameAr: 'ذا هوليوود ريبورتر',
    sourceName: 'The Hollywood Reporter',
    url: 'https://www.hollywoodreporter.com',
    dateAr: 'فبراير 2025',
    dateTime: '2025-02',
    summary: 'تغطية شاملة لمهرجانات الأفلام الدولية والجوائز السينمائية.',
  },
  {
    id: 'news-3',
    headlineAr: 'أخبار الإنتاج والتوزيع السينمائي',
    sourceNameAr: 'سكرين دايلي',
    sourceName: 'Screen Daily',
    url: 'https://www.screendaily.com',
    dateAr: 'مارس 2025',
    dateTime: '2025-03',
    summary: 'متابعة مستمرة لأخبار الإنتاج الدولي وصفقات التوزيع.',
  },
  {
    id: 'news-4',
    headlineAr: 'تحليلات وتقارير صناعة الترفيه',
    sourceNameAr: 'ديدلاين',
    sourceName: 'Deadline',
    url: 'https://deadline.com',
    dateAr: 'أبريل 2025',
    dateTime: '2025-04',
    summary: 'تحليلات معمّقة حول مستقبل صناعة السينما والمنصات الرقمية.',
  },
];
