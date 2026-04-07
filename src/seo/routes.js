export const SITE_NAME = 'Wonder Christian Centre'
export const DEFAULT_SITE_URL = 'https://www.shapingdestinies.com'
export const DEFAULT_OG_IMAGE = '/2024/08/DSC_0120.jpg'
export const SITE_DESCRIPTION =
  'Wonder Christian Centre, also known as WCCUG and Wonder Church, is a miracle-working family church in Kampala, Uganda shaping destinies through worship, outreach, discipleship, evangelism, compassion, leadership conferences, and community impact.'

export const PRIMARY_KEYWORDS = [
  'Shaping Destinies',
  'Wonder Christian Centre',
  'WCCUG',
  'Wonder Church',
  'WCC',
  'Benjamin Kiconco',
  'Apostle Benjamin',
  'Best Church in Uganda',
  'Best Kampala Churches',
  'Busega Church',
  'Family Church',
  'Loving Church',
  'Miracle Working Church',
  'Married Ministries',
  'Children Ministries',
  'Leadership Conferences',
  'Dreams of Hope',
  'Mass Evangelism Crusades',
  'Feed His Image',
  'University Fellowship',
  'Campus Fellowships',
  'Schools Ministries',
  'High School Outreaches',
  'Free Medical Camps Uganda',
  'Giving Church',
  'Donations Church',
]

export const MAIN_NAVIGATION = [
  { name: 'Home', path: '/' },
  { name: 'About Wonder Christian Centre', path: '/about' },
  { name: 'Team Leader Benjamin Kiconco', path: '/team-leader' },
  { name: 'Amazing Journey', path: '/amazing-journey' },
  { name: 'Ambassadors of Hope Outreach', path: '/outreach' },
  { name: 'Partnership', path: '/donate' },
  { name: 'Give', path: '/give' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Women of Destiny', path: '/women-of-destiny' },
  { name: 'Contact', path: '/contact' },
]

export const ORGANIZATION_DATA = {
  name: 'Wonder Christian Centre',
  alternateName: ['WCCUG', 'Wonder Church', 'WCC'],
  email: 'wonderchristiancentre@gmail.com',
  telephone: '+256707000999',
  description: SITE_DESCRIPTION,
  founder: {
    '@type': 'Person',
    name: 'Benjamin Kiconco',
    alternateName: ['Pastor Benjamin Kiconco', 'Apostle Benjamin'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Busega-Kibumbiro',
    addressLocality: 'Kampala',
    addressCountry: 'UG',
  },
  areaServed: ['Kampala', 'Uganda', 'East Africa'],
  keywords: PRIMARY_KEYWORDS,
  sameAs: [
    'https://www.facebook.com/wccug',
    'https://www.instagram.com/wccug',
    'https://youtube.com/@wccug?si=P8YJjF2mwdE4fFoR',
    'https://www.tiktok.com/@wccug?_r=1&_t=ZS-956s5H5QE0z',
    'https://wa.me/256707000999',
  ],
}

export const seoRoutes = [
  {
    path: '/',
    title: 'Wonder Christian Centre Uganda | Shaping Destinies',
    description:
      'Discover Wonder Christian Centre in Kampala, Uganda, also known as WCCUG and Wonder Church, a family church shaping destinies through worship, outreach, discipleship, miracles, and community impact.',
    keywords: [
      ...PRIMARY_KEYWORDS,
      'church in Kampala Uganda',
      'Christian church Uganda',
      'worship service Kampala',
      'faith community Uganda',
    ],
    image: '/2024/09/wonder.jpg',
    imageAlt: 'Wonder Christian Centre worship gathering in Kampala Uganda',
    type: 'WebPage',
    changefreq: 'weekly',
    priority: '1.0',
    breadcrumbs: [{ name: 'Home', path: '/' }],
  },
  {
    path: '/about',
    title: 'About Wonder Christian Centre | Our Story and Mission',
    description:
      'Learn the story, mission, and ministry focus of Wonder Christian Centre as we preach Christ, serve communities, and shape destinies in Uganda and beyond.',
    keywords: [
      'about Wonder Christian Centre',
      'church mission Uganda',
      'Christian ministry Kampala',
      'Wonder Christian Centre story',
      'Uganda church vision',
      'WCCUG history',
      'Wonder Church Kampala',
    ],
    image: '/2024/08/DSC_0120.jpg',
    imageAlt: 'Wonder Christian Centre congregation in Kampala Uganda',
    type: 'AboutPage',
    changefreq: 'monthly',
    priority: '0.9',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
    ],
    faqSection: {
      eyebrow: 'About FAQ',
      title: 'Questions people ask about Wonder Christian Centre',
      intro:
        'These answers help first-time visitors and search engines understand who we are, what we believe, and where to begin.',
      items: [
        {
          question: 'What is Wonder Christian Centre?',
          answer:
            'Wonder Christian Centre is a Christian church in Kampala, Uganda committed to preaching Christ, serving people, and shaping destinies through worship, teaching, outreach, and discipleship.',
        },
        {
          question: 'What is the mission of Wonder Christian Centre?',
          answer:
            "Our mission is to shape destinies through the preaching of the Word of God's grace, faith, miracles, signs, and practical expressions of compassion in the community.",
        },
        {
          question: 'Where is Wonder Christian Centre located?',
          answer:
            'Wonder Christian Centre is based in Busega-Kibumbiro, Kampala, Uganda, and welcomes people seeking a Bible-centered church family and spiritual growth.',
        },
      ],
      links: [
        { label: 'Meet our team leader', href: '/team-leader' },
        { label: 'Explore our journey', href: '/amazing-journey' },
        { label: 'Contact the church', href: '/contact' },
      ],
    },
  },
  {
    path: '/team-leader',
    title: 'Pastor Benjamin Kiconco | Wonder Christian Centre',
    description:
      'Meet Pastor Benjamin Kiconco, founder and senior pastor of Wonder Christian Centre, serving with faith, grace, leadership, and a heart for transformed lives.',
    keywords: [
      'Pastor Benjamin Kiconco',
      'Wonder Christian Centre pastor',
      'Christian leader Uganda',
      'senior pastor Kampala',
      'Benjamin Kiconco ministry',
      'Apostle Benjamin',
    ],
    image: '/2024/10/MG_0267.jpg',
    imageAlt: 'Benjamin Kiconco founder of Wonder Christian Centre',
    type: 'ProfilePage',
    changefreq: 'monthly',
    priority: '0.8',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Team Leader', path: '/team-leader' },
    ],
  },
  {
    path: '/amazing-journey',
    title: 'The Amazing Journey of WCC | Wonder Christian Centre',
    description:
      'Explore the amazing journey of Wonder Christian Centre through the visual story of faith, growth, worship, identity, and ministry impact over time.',
    keywords: [
      'Amazing Journey of WCC',
      'Wonder Christian Centre history',
      'church journey Uganda',
      'ministry growth Kampala',
      'Wonder Christian Centre story',
    ],
    image: '/2024/09/CHURCH-IMPRESSION-BANNER.png',
    imageAlt: 'Amazing journey of Wonder Christian Centre ministry growth',
    type: 'CollectionPage',
    changefreq: 'monthly',
    priority: '0.8',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Amazing Journey', path: '/amazing-journey' },
    ],
  },
  {
    path: '/outreach',
    title: 'Ambassadors of Hope Outreach | Wonder Christian Centre',
    description:
      'See how Wonder Christian Centre reaches communities through Ambassadors of Hope outreach, evangelism, compassion, and gospel-centered impact in Uganda.',
    keywords: [
      'Ambassadors of Hope',
      'church outreach Uganda',
      'Wonder Christian Centre outreach',
      'community ministry Kampala',
      'Christian outreach programs Uganda',
    ],
    image: '/2024/08/img_e4w.jpg',
    imageAlt: 'Ambassadors of Hope outreach by Wonder Christian Centre',
    type: 'CollectionPage',
    changefreq: 'weekly',
    priority: '0.9',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Ambassadors of Hope', path: '/outreach' },
    ],
  },
  {
    path: '/outreach/mass-evangelism',
    title: 'Mass Evangelism in Uganda | Wonder Christian Centre',
    description:
      'Learn how Wonder Christian Centre advances mass evangelism in Uganda through crusades, gospel outreach, prayer, partnership, and soul-winning ministry.',
    keywords: [
      'mass evangelism Uganda',
      'gospel crusades Uganda',
      'Wonder Christian Centre evangelism',
      'Christian outreach Kampala',
      'soul winning ministry Uganda',
      'Mass Evangelism Crusades',
    ],
    image: '/2024/08/img_e4w.jpg',
    imageAlt: 'Mass evangelism crusade by Wonder Christian Centre in Uganda',
    type: 'WebPage',
    changefreq: 'monthly',
    priority: '0.8',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Ambassadors of Hope', path: '/outreach' },
      { name: 'Mass Evangelism', path: '/outreach/mass-evangelism' },
    ],
  },
  {
    path: '/outreach/school-and-university',
    title: 'School and University Outreach | Wonder Christian Centre',
    description:
      'Discover Wonder Christian Centre school and university outreach, equipping children, teenagers, and students with biblical truth, hope, and direction.',
    keywords: [
      'school outreach Uganda',
      'university outreach Kampala',
      'student ministry Uganda',
      'teen outreach church',
      'Wonder Christian Centre youth outreach',
      'University Fellowship',
      'Campus Fellowships',
      'Schools Ministries',
      'High School Outreaches',
    ],
    image: '/2024/08/Ordination.jpg',
    imageAlt: 'School and university outreach by Wonder Christian Centre',
    type: 'WebPage',
    changefreq: 'monthly',
    priority: '0.8',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Ambassadors of Hope', path: '/outreach' },
      { name: 'School and University', path: '/outreach/school-and-university' },
    ],
  },
  {
    path: '/outreach/free-medical-outreach',
    title: 'Free Medical Outreach Uganda | Wonder Christian Centre',
    description:
      'See how Wonder Christian Centre serves children and families through free medical outreach in Uganda with compassionate care and gospel ministry.',
    keywords: [
      'free medical outreach Uganda',
      'medical camp Kampala',
      'church medical ministry Uganda',
      'Wonder Christian Centre outreach',
      'community healthcare ministry',
      'Free Medical Camps Uganda',
    ],
    image: '/2024/08/medical_camp.jpg',
    imageAlt: 'Free medical camp ministry by Wonder Christian Centre in Uganda',
    type: 'WebPage',
    changefreq: 'monthly',
    priority: '0.8',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Ambassadors of Hope', path: '/outreach' },
      { name: 'Free Medical Outreach', path: '/outreach/free-medical-outreach' },
    ],
  },
  {
    path: '/outreach/food-distribution',
    title: 'Food Distribution Ministry | Wonder Christian Centre',
    description:
      'Explore Wonder Christian Centre food distribution ministry supporting vulnerable children, elderly caregivers, and families through practical compassion and faith.',
    keywords: [
      'food distribution ministry Uganda',
      'church feeding program Kampala',
      'Wonder Christian Centre food outreach',
      'community support Uganda',
      'Christian charity food distribution',
      'Feed His Image',
    ],
    image: '/2024/08/feed his image.jpg',
    imageAlt: 'Feed His Image food distribution ministry in Uganda',
    type: 'WebPage',
    changefreq: 'monthly',
    priority: '0.8',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Ambassadors of Hope', path: '/outreach' },
      { name: 'Food Distribution', path: '/outreach/food-distribution' },
    ],
  },
  {
    path: '/donate',
    title: 'Partner With Wonder Christian Centre | Gospel Impact',
    description:
      'Partner with Wonder Christian Centre to help advance the gospel, support outreach, and increase kingdom impact through prayer, generosity, and shared vision.',
    keywords: [
      'partner with church Uganda',
      'support Wonder Christian Centre',
      'gospel partnership ministry',
      'Christian ministry partnership',
      'church support Kampala',
      'Giving Church',
      'Donations Church',
    ],
    image: '/2024/09/AM5A2026.jpg',
    imageAlt: 'Partnership ministry at Wonder Christian Centre',
    type: 'WebPage',
    changefreq: 'monthly',
    priority: '0.8',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Partnership', path: '/donate' },
    ],
    faqSection: {
      eyebrow: 'Partnership FAQ',
      title: 'How partnership with WCC works',
      intro:
        'Partnership is more than a transaction. It is shared commitment to the gospel, the church, and real lives being transformed.',
      items: [
        {
          question: 'What does partnership with Wonder Christian Centre support?',
          answer:
            'Partnership helps support evangelism, outreach, discipleship, community care, ministry events, and the wider mission of Wonder Christian Centre in Uganda and beyond.',
        },
        {
          question: 'Can I partner with Wonder Christian Centre from outside Uganda?',
          answer:
            'Yes. Friends and partners can support Wonder Christian Centre from different locations through the giving channels shared on our Give page and by contacting the ministry directly.',
        },
        {
          question: 'How do I start partnering with Wonder Christian Centre?',
          answer:
            'You can begin by reaching out through the Contact page, praying with us, and choosing a giving or partnership path that aligns with your heart for the gospel and the ministry vision.',
        },
      ],
      links: [
        { label: 'See ways to give', href: '/give' },
        { label: 'Contact the ministry', href: '/contact' },
        { label: 'Explore outreach work', href: '/outreach' },
      ],
    },
  },
  {
    path: '/give',
    title: 'Give to Wonder Christian Centre | Support the Mission',
    description:
      'Give to Wonder Christian Centre online or by bank transfer and help support worship, outreach, discipleship, compassion ministry, and kingdom impact.',
    keywords: [
      'give to church Uganda',
      'Wonder Christian Centre giving',
      'donate to Christian ministry Uganda',
      'support church outreach Kampala',
      'church giving online Uganda',
      'Giving Church',
      'Donations Church',
    ],
    image: '/2024/11/_MG_1025.jpg.jpeg',
    imageAlt: 'Giving and donations at Wonder Christian Centre',
    type: 'WebPage',
    changefreq: 'weekly',
    priority: '0.9',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Give', path: '/give' },
    ],
    faqSection: {
      eyebrow: 'Giving FAQ',
      title: 'Everything you need to know before you give',
      intro:
        'This section helps donors understand the available giving channels and the ministry impact behind every contribution.',
      items: [
        {
          question: 'How can I give to Wonder Christian Centre?',
          answer:
            'You can give to Wonder Christian Centre through the listed bank accounts, mobile money options, or by using the card giving form available on the Give page.',
        },
        {
          question: 'What does my giving support?',
          answer:
            'Your giving supports the preaching of the gospel, church ministry, outreach programs, compassion work, and practical efforts that shape destinies in the community.',
        },
        {
          question: 'Can I contact the church before giving?',
          answer:
            'Yes. If you would like clarification before giving, you can contact Wonder Christian Centre by phone, email, WhatsApp, or the contact form on the Contact page.',
        },
      ],
      links: [
        { label: 'Contact before giving', href: '/contact' },
        { label: 'Learn about partnership', href: '/donate' },
        { label: 'See ministry impact', href: '/outreach' },
      ],
    },
  },
  {
    path: '/success',
    title: 'Giving Success | Wonder Christian Centre',
    description:
      'Thank you for supporting Wonder Christian Centre. Your giving helps advance ministry, outreach, discipleship, and compassion work.',
    keywords: [
      'Wonder Christian Centre giving success',
      'church donation confirmation',
      'ministry support confirmation',
      'Wonder Christian Centre thank you',
    ],
    image: '/2024/11/_MG_1017.jpg.jpeg',
    imageAlt: 'Thank you for supporting Wonder Christian Centre',
    type: 'WebPage',
    changefreq: 'monthly',
    priority: '0.3',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Giving Success', path: '/success' },
    ],
  },
  {
    path: '/cancel',
    title: 'Giving Canceled | Wonder Christian Centre',
    description:
      'Your donation checkout was canceled. You can return to the giving page anytime to continue supporting Wonder Christian Centre.',
    keywords: [
      'Wonder Christian Centre giving canceled',
      'donation checkout canceled',
      'return to giving page',
    ],
    image: '/2024/11/_MG_1017.jpg.jpeg',
    imageAlt: 'Return to Wonder Christian Centre giving page',
    type: 'WebPage',
    changefreq: 'monthly',
    priority: '0.2',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Giving Canceled', path: '/cancel' },
    ],
  },
  {
    path: '/gallery',
    title: 'Wonder Christian Centre Gallery | Worship and Outreach',
    description:
      'Browse the Wonder Christian Centre gallery featuring worship moments, ministry events, outreach activities, church gatherings, and community life in Uganda.',
    keywords: [
      'Wonder Christian Centre gallery',
      'church photos Uganda',
      'worship gallery Kampala',
      'outreach gallery Uganda',
      'ministry events Wonder Christian Centre',
      'Google Images Wonder Christian Centre',
    ],
    image: '/2024/11/_MG_1019.jpg.jpeg',
    imageAlt: 'Wonder Christian Centre worship and outreach gallery',
    type: 'CollectionPage',
    changefreq: 'weekly',
    priority: '0.8',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Gallery', path: '/gallery' },
    ],
    faqSection: {
      eyebrow: 'Gallery FAQ',
      title: 'Frequently asked gallery questions',
      intro: 'Quick answers about viewing church moments, downloading photos, and ministry highlights.',
      items: [
        {
          question: 'What does the Wonder Christian Centre gallery show?',
          answer: 'The gallery showcases worship services, ministry events, outreach programs, crusades, community gatherings, and key moments from Wonder Christian Centre ministry in Uganda.',
        },
        {
          question: 'Can I download photos from the gallery?',
          answer: 'Gallery images are available for personal use and sharing to promote the gospel. Right-click to save or contact us for high-resolution ministry images.',
        },
        {
          question: 'How often is the gallery updated?',
          answer: 'The gallery is regularly updated with recent worship services, crusades, outreach events, and special ministry moments from Wonder Christian Centre.',
        },
      ],
      links: [
        { label: 'See recent outreach', href: '/outreach' },
        { label: 'Explore women ministry', href: '/women-of-destiny' },
        { label: 'View team leader', href: '/team-leader' },
      ],
    },
  },
  {
    path: '/women-of-destiny',
    title: 'Women of Destiny Uganda | Wonder Christian Centre',
    description:
      'Explore Women of Destiny at Wonder Christian Centre, a ministry nurturing teenage girls with faith, identity, purpose, wisdom, and godly confidence.',
    keywords: [
      'Women of Destiny Uganda',
      'girls ministry Kampala',
      'teen girls Christian ministry',
      'Wonder Christian Centre women ministry',
      'youth mentorship church Uganda',
      'Married Ministries',
    ],
    image: '/2024/09/AM5A2015.jpg',
    imageAlt: 'Women of Destiny ministry at Wonder Christian Centre',
    type: 'WebPage',
    changefreq: 'monthly',
    priority: '0.8',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Women of Destiny', path: '/women-of-destiny' },
    ],
  },
  {
    path: '/contact',
    title: 'Contact Wonder Christian Centre | Kampala, Uganda',
    description:
      'Contact Wonder Christian Centre in Kampala, Uganda for directions, ministry inquiries, prayer, giving questions, and ways to connect online or in person.',
    keywords: [
      'contact Wonder Christian Centre',
      'church contact Kampala',
      'Wonder Christian Centre Uganda',
      'Christian church directions Uganda',
      'church phone email Kampala',
      'Best Kampala Churches',
      'Busega Church',
    ],
    image: '/2024/11/_MG_1019.jpg.jpeg',
    imageAlt: 'Contact Wonder Christian Centre in Kampala Uganda',
    type: 'ContactPage',
    changefreq: 'monthly',
    priority: '0.8',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ],
    faqSection: {
      eyebrow: 'Contact FAQ',
      title: 'Helpful answers before you reach out',
      intro:
        'If you are planning your first visit or trying to connect with the ministry team, these quick answers should help.',
      items: [
        {
          question: 'How can I contact Wonder Christian Centre?',
          answer:
            'You can contact Wonder Christian Centre by email, phone, WhatsApp, or by using the contact form on the Contact page.',
        },
        {
          question: 'Where is Wonder Christian Centre located?',
          answer:
            'Wonder Christian Centre is located in Busega-Kibumbiro, Kampala, Uganda, and directions are available through the website and map link.',
        },
        {
          question: 'Where can I follow Wonder Christian Centre online?',
          answer:
            'You can follow Wonder Christian Centre on Facebook, Instagram, YouTube, TikTok, and WhatsApp to stay connected with ministry updates and encouragement.',
        },
      ],
      links: [
        { label: 'Read about the church', href: '/about' },
        { label: 'Support the mission', href: '/give' },
        { label: 'View the gallery', href: '/gallery' },
      ],
    },
  },
  {
    path: '/search',
    title: 'Search Wonder Christian Centre | WCCUG',
    description:
      'Search Wonder Christian Centre pages, ministries, outreach programs, giving information, and Benjamin Kiconco resources.',
    keywords: [
      'search Wonder Christian Centre',
      'search WCCUG',
      'Wonder Church search',
    ],
    image: '/2024/09/wonder.jpg',
    imageAlt: 'Search Wonder Christian Centre pages',
    type: 'SearchResultsPage',
    changefreq: 'weekly',
    priority: '0.4',
    robots: 'noindex, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Search', path: '/search' },
    ],
  },
]

export const seoRouteMap = Object.fromEntries(seoRoutes.map((route) => [route.path, route]))

export function getSeoEntry(pathname) {
  return seoRouteMap[pathname] || seoRouteMap['/']
}
