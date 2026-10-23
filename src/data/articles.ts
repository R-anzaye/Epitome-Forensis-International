export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  content: string[];
  featured?: boolean;
  draft?: boolean;
}

export const articleCategories = [
  'All',
  'Corporate Law',
  'Property',
  'Employment',
  'Family Law',
  'Dispute Resolution',
];

export const articles: Article[] = [
  {
    slug: 'understanding-corporate-governance-obligations',
    title: 'Understanding Corporate Governance Obligations for Growing Businesses',
    excerpt:
      'A practical overview of the governance duties and compliance steps that growing companies in Kenya should be aware of at each stage of expansion.',
    category: 'Corporate Law',
    date: '2025-09-15',
    readTime: '6 min read',
    author: '[Author placeholder]',
    image: 'https://images.pexels.com/photos/5673490/pexels-photo-5673490.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
    draft: true,
    content: [
      '[This article is draft content. All legal references, statutory citations, and regulatory observations must be reviewed and verified by a qualified advocate before publication.]',
      'Corporate governance is the system by which companies are directed and controlled. As a business grows, the obligations placed on its directors and officers become more complex. Understanding these obligations early can help prevent disputes, regulatory penalties, and reputational harm.',
      'In Kenya, the Companies Act, 2015 sets out key duties for directors, including the duty to act within powers, to promote the success of the company, to exercise independent judgment, and to exercise reasonable care, skill, and diligence. These duties apply to all directors, whether executive or non-executive.',
      '[Add jurisdiction-specific guidance, recent regulatory developments, and practical checklists for compliance once verified by a qualified advocate.]',
      'For growing businesses, implementing basic governance structures \u2014 such as regular board meetings, clear delegation of authority, documented decision-making, and proper record-keeping \u2014 can lay a strong foundation for sustainable growth and investor confidence.',
      '[This section should be expanded with verified legal analysis and practical examples before publication. Do not rely on this draft content for legal decision-making.]',
    ],
  },
  {
    slug: 'key-considerations-in-property-transactions',
    title: 'Key Considerations in Residential Property Transactions',
    excerpt:
      'A concise guide to the legal steps involved in buying or selling residential property, from due diligence to completion.',
    category: 'Property',
    date: '2025-08-28',
    readTime: '5 min read',
    author: '[Author placeholder]',
    image: 'https://images.pexels.com/photos/8470844/pexels-photo-8470844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    draft: true,
    content: [
      '[This article is draft content. All legal references must be verified by a qualified advocate before publication.]',
      'Buying or selling property is often one of the most significant financial transactions a person will undertake. Understanding the legal process can help reduce risk and ensure a smooth transfer.',
      'In Kenya, the process typically involves a letter of offer, due diligence on the title and encumbrances, preparation of the transfer documents, payment of stamp duty, and registration of the transfer. Each step has its own legal requirements and potential pitfalls.',
      '[Add verified, jurisdiction-specific guidance on stamp duty rates, registration requirements, and common title issues before publication.]',
      'Engaging a qualified advocate early in the process can help identify title defects, planning permissions, and other issues that might not be apparent from the sale agreement alone.',
      '[This section should be expanded with verified legal analysis before publication.]',
    ],
  },
  {
    slug: 'employment-contracts-essential-terms',
    title: 'Essential Terms Every Employment Contract Should Include',
    excerpt:
      'A guide to the key clauses that protect both employers and employees, and how to ensure your contracts are compliant.',
    category: 'Employment',
    date: '2025-08-10',
    readTime: '7 min read',
    author: '[Author placeholder]',
    image: 'https://images.pexels.com/photos/6170906/pexels-photo-6170906.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    draft: true,
    content: [
      '[This article is draft content. All legal references must be verified by a qualified advocate before publication.]',
      'A well-drafted employment contract is the foundation of a clear and fair working relationship. In Kenya, the Employment Act, 2007 requires that certain essential terms be set out in writing.',
      'Key terms include the nature of employment, job description, remuneration, working hours, leave entitlements, termination provisions, and grievance procedures. Each of these terms should be clearly defined to avoid ambiguity and future disputes.',
      '[Add verified, jurisdiction-specific guidance on statutory minimums, recent employment law developments, and practical drafting tips before publication.]',
      'For employers, a clear contract helps manage expectations and provides a basis for action if the relationship breaks down. For employees, it ensures their rights and entitlements are documented.',
      '[This section should be expanded with verified legal analysis before publication.]',
    ],
  },
  {
    slug: 'navigating-family-disputes-mediation',
    title: 'Navigating Family Disputes Through Mediation',
    excerpt:
      'How mediation can offer a less adversarial path to resolving family law matters, and when it may be the right choice.',
    category: 'Family Law',
    date: '2025-07-22',
    readTime: '6 min read',
    author: '[Author placeholder]',
    image: 'https://images.pexels.com/photos/7841459/pexels-photo-7841459.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    draft: true,
    content: [
      '[This article is draft content. All legal references must be verified by a qualified advocate before publication.]',
      'Family disputes can be emotionally and financially draining. Mediation offers a confidential, less adversarial alternative to court proceedings, allowing parties to reach mutually acceptable solutions.',
      'In Kenya, mediation is increasingly encouraged in family matters, including divorce, child custody, and property division. The process involves a neutral mediator who facilitates discussion but does not impose a decision.',
      '[Add verified, jurisdiction-specific guidance on the legal framework for mediation, court-annexed mediation, and practical considerations before publication.]',
      'Mediation is not suitable in every case, particularly where there are concerns about safety or significant power imbalances. Legal advice should be sought to determine the most appropriate path.',
      '[This section should be expanded with verified legal analysis before publication.]',
    ],
  },
  {
    slug: 'alternative-dispute-resolution-explained',
    title: 'Alternative Dispute Resolution: A Practical Overview',
    excerpt:
      'Understanding the range of ADR options available and how they compare to traditional litigation.',
    category: 'Dispute Resolution',
    date: '2025-07-05',
    readTime: '8 min read',
    author: '[Author placeholder]',
    image: 'https://images.pexels.com/photos/8112180/pexels-photo-8112180.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    draft: true,
    content: [
      '[This article is draft content. All legal references must be verified by a qualified advocate before publication.]',
      'Alternative Dispute Resolution (ADR) encompasses a range of processes \u2014 including mediation, arbitration, and negotiation \u2014 that offer alternatives to court litigation.',
      'Each method has its own characteristics. Mediation is facilitative and non-binding, arbitration is adjudicative and binding, and negotiation is informal and party-driven. The right choice depends on the nature of the dispute, the relationship between the parties, and the desired outcome.',
      '[Add verified, jurisdiction-specific guidance on the Arbitration Act, court-annexed mediation, and enforceability of ADR outcomes before publication.]',
      'ADR can offer significant benefits in terms of cost, speed, and confidentiality, but it is not a substitute for legal advice. Parties should understand their rights before committing to any process.',
      '[This section should be expanded with verified legal analysis before publication.]',
    ],
  },
  {
    slug: 'protecting-intellectual-property-for-startups',
    title: 'Protecting Intellectual Property for Startups',
    excerpt:
      'A practical guide to the IP protections every startup should consider, from trademarks to confidentiality.',
    category: 'Corporate Law',
    date: '2025-06-18',
    readTime: '5 min read',
    author: '[Author placeholder]',
    image: 'https://images.pexels.com/photos/6077665/pexels-photo-6077665.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    draft: true,
    content: [
      '[This article is draft content. All legal references must be verified by a qualified advocate before publication.]',
      'Intellectual property is often a startup\u2019s most valuable asset, yet many founders overlook the steps needed to protect it. From the outset, it is important to identify what IP exists and how it can be safeguarded.',
      'Key protections include trademark registration for brand names and logos, copyright for creative works, patents for inventions, and confidentiality agreements for trade secrets. Each serves a different purpose and requires a different registration process.',
      '[Add verified, jurisdiction-specific guidance on Kenya Industrial Property Institute (KIPI) procedures, international IP treaties, and practical registration steps before publication.]',
      'For startups, early IP protection can prevent costly disputes later and add significant value when seeking investment or planning an exit.',
      '[This section should be expanded with verified legal analysis before publication.]',
    ],
  },
];
