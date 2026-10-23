import {
  Building2,
  Scale,
  Home,
  Users,
  Briefcase,
  Lightbulb,
  Landmark,
  FileText,
  FileSignature,
  ShieldCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface PracticeArea {
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
  issues: string[];
  clients: string[];
  image: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: 'corporate-commercial-law',
    title: 'Corporate and Commercial Law',
    icon: Building2,
    description:
      'Comprehensive legal support for businesses, from formation and governance to commercial transactions and regulatory compliance.',
    issues: [
      'Company incorporation and structuring',
      'Shareholder agreements and joint ventures',
      'Commercial contract negotiation and drafting',
      'Mergers, acquisitions, and corporate restructuring',
      'Corporate governance and compliance advisory',
    ],
    clients: [
      'Startups and SMEs',
      'Established corporations',
      'Boards and management teams',
      'Investors and joint venture partners',
    ],
    image: 'https://images.pexels.com/photos/7841457/pexels-photo-7841457.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'civil-litigation-dispute-resolution',
    title: 'Civil Litigation and Dispute Resolution',
    icon: Scale,
    description:
      'Strategic representation in civil disputes, with a focus on efficient resolution through negotiation, mediation, and litigation.',
    issues: [
      'Contract disputes and breach claims',
      'Debt recovery and enforcement',
      'Tort claims and liability matters',
      'Mediation and alternative dispute resolution',
      'Commercial and civil court representation',
    ],
    clients: [
      'Individuals and businesses in dispute',
      'Companies facing breach of contract',
      'Parties in negotiation or mediation',
      'Creditors seeking recovery',
    ],
    image: 'https://images.pexels.com/photos/37726678/pexels-photo-37726678.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'real-estate-conveyancing',
    title: 'Real Estate and Conveyancing',
    icon: Home,
    description:
      'End-to-end legal assistance for property transactions, including conveyancing, leasing, and real estate development.',
    issues: [
      'Residential and commercial conveyancing',
      'Property transfers and title registration',
      'Lease agreements and tenancy matters',
      'Real estate development and joint ventures',
      'Due diligence and property compliance',
    ],
    clients: [
      'Property buyers and sellers',
      'Landlords and tenants',
      'Real estate developers',
      'Investors and commercial property owners',
    ],
    image: 'https://images.pexels.com/photos/8470844/pexels-photo-8470844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'family-law',
    title: 'Family Law',
    icon: Users,
    description:
      'Sensitive and confidential legal guidance on family matters, handled with discretion and a focus on fair outcomes.',
    issues: [
      'Divorce and matrimonial disputes',
      'Child custody and access arrangements',
      'Property and financial settlements',
      'Adoption and guardianship matters',
      'Cohabitation and prenuptial agreements',
    ],
    clients: [
      'Individuals navigating family transitions',
      'Parents in custody matters',
      'Couples planning marriage or cohabitation',
      'Families in inheritance disputes',
    ],
    image: 'https://images.pexels.com/photos/7841459/pexels-photo-7841459.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'employment-labour-law',
    title: 'Employment and Labour Law',
    icon: Briefcase,
    description:
      'Practical legal advice for employers and employees on workplace rights, contracts, and labour disputes.',
    issues: [
      'Employment contracts and policies',
      'Unfair dismissal and wrongful termination',
      'Workplace discrimination and harassment',
      'Labour relations and union matters',
      'Severance and exit negotiations',
    ],
    clients: [
      'Employers and HR departments',
      'Employees and executives',
      'Unions and employee associations',
      'Contractors and freelancers',
    ],
    image: 'https://images.pexels.com/photos/7876092/pexels-photo-7876092.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'intellectual-property',
    title: 'Intellectual Property',
    icon: Lightbulb,
    description:
      'Protection and enforcement of intellectual property rights, including trademarks, copyrights, and trade secrets.',
    issues: [
      'Trademark registration and protection',
      'Copyright and licensing agreements',
      'IP enforcement and infringement disputes',
      'Trade secret and confidentiality agreements',
      'Technology transfer and IP commercialisation',
    ],
    clients: [
      'Creators and entrepreneurs',
      'Brands and creative businesses',
      'Technology companies',
      'Licensors and licensees',
    ],
    image: 'https://images.pexels.com/photos/6077665/pexels-photo-6077665.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'banking-financial-law',
    title: 'Banking and Financial Law',
    icon: Landmark,
    description:
      'Legal support for banking transactions, lending arrangements, and financial regulatory compliance.',
    issues: [
      'Loan and security documentation',
      'Project finance and syndicated lending',
      'Financial regulatory compliance',
      'Debt restructuring and insolvency',
      'Banking transaction advisory',
    ],
    clients: [
      'Banks and financial institutions',
      'Borrowers and guarantors',
      'Investors in financial transactions',
      'Companies in restructuring',
    ],
    image: 'https://images.pexels.com/photos/7875996/pexels-photo-7875996.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'estate-planning-succession',
    title: 'Estate Planning and Succession',
    icon: FileText,
    description:
      'Thoughtful planning for the preservation and transfer of wealth, including wills, trusts, and estate administration.',
    issues: [
      'Wills and estate planning',
      'Trust formation and administration',
      'Probate and estate administration',
      'Succession planning for family businesses',
      'Powers of attorney and guardianship',
    ],
    clients: [
      'Individuals planning their estate',
      'Families managing inheritance',
      'Trustees and executors',
      'Business owners planning succession',
    ],
    image: 'https://images.pexels.com/photos/6077091/pexels-photo-6077091.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'contract-drafting-review',
    title: 'Contract Drafting and Review',
    icon: FileSignature,
    description:
      'Precise, commercially aware contract drafting and review services to protect your interests in every transaction.',
    issues: [
      'Commercial contract drafting',
      'Contract review and negotiation',
      'Service and supply agreements',
      'Partnership and shareholder agreements',
      'Non-disclosure and confidentiality agreements',
    ],
    clients: [
      'Businesses entering commercial deals',
      'Service providers and contractors',
      'Partners and shareholders',
      'Individuals in significant transactions',
    ],
    image: 'https://images.pexels.com/photos/7841486/pexels-photo-7841486.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'regulatory-compliance-advisory',
    title: 'Regulatory and Compliance Advisory',
    icon: ShieldCheck,
    description:
      'Strategic guidance on regulatory requirements and compliance frameworks to keep your business operating with confidence.',
    issues: [
      'Regulatory compliance audits',
      'Sector-specific licensing and permits',
      'Policy development and risk management',
      'Government relations and regulatory liaison',
      'Data protection and privacy compliance',
    ],
    clients: [
      'Regulated businesses and industries',
      'Companies in licensing processes',
      'Organisations managing compliance risk',
      'Startups navigating regulatory frameworks',
    ],
    image: 'https://images.pexels.com/photos/37429756/pexels-photo-37429756.png?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];
