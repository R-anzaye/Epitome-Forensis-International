import {
  Building2,
  Scale,
  Home,
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
];
