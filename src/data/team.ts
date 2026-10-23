export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  tier: 'Managing Partner' | 'Senior Associates' | 'Associates' | 'Support';
  bio: string;
  qualifications: string;
  specializations: string[];
  linkedin?: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    slug: 'managing-partner-placeholder',
    name: '[Managing Partner]',
    role: 'Managing Partner',
    tier: 'Managing Partner',
    bio: '[Biography to be added. This section should describe the managing partner\u2019s background, professional experience, and areas of expertise once verified.]',
    qualifications: '[LL.B, [University], Advocate of the High Court of Kenya \u2014 to be verified]',
    specializations: ['Corporate Law', 'Commercial Litigation', 'Strategic Advisory'],
    linkedin: undefined,
    image: 'https://images.pexels.com/photos/37605831/pexels-photo-37605831.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'senior-associate-one',
    name: '[Senior Associate]',
    role: 'Senior Associate',
    tier: 'Senior Associates',
    bio: '[Biography to be added. This section should describe the senior associate\u2019s legal experience and key practice areas once verified.]',
    qualifications: '[LL.B, [University] \u2014 to be verified]',
    specializations: ['Civil Litigation', 'Dispute Resolution', 'Real Estate'],
    linkedin: undefined,
    image: 'https://images.pexels.com/photos/38758069/pexels-photo-38758069.png?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'senior-associate-two',
    name: '[Senior Associate]',
    role: 'Senior Associate',
    tier: 'Senior Associates',
    bio: '[Biography to be added. This section should describe the senior associate\u2019s legal experience and key practice areas once verified.]',
    qualifications: '[LL.B, [University] \u2014 to be verified]',
    specializations: ['Employment Law', 'Family Law', 'Estate Planning'],
    linkedin: undefined,
    image: 'https://images.pexels.com/photos/36733305/pexels-photo-36733305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'associate-one',
    name: '[Associate]',
    role: 'Associate',
    tier: 'Associates',
    bio: '[Biography to be added. This section should describe the associate\u2019s background and practice focus once verified.]',
    qualifications: '[LL.B, [University] \u2014 to be verified]',
    specializations: ['Contract Drafting', 'Regulatory Compliance', 'Intellectual Property'],
    linkedin: undefined,
    image: 'https://images.pexels.com/photos/31880922/pexels-photo-31880922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'associate-two',
    name: '[Associate]',
    role: 'Associate',
    tier: 'Associates',
    bio: '[Biography to be added. This section should describe the associate\u2019s background and practice focus once verified.]',
    qualifications: '[LL.B, [University] \u2014 to be verified]',
    specializations: ['Banking Law', 'Commercial Transactions', 'Compliance Advisory'],
    linkedin: undefined,
    image: 'https://images.pexels.com/photos/28446973/pexels-photo-28446973.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'support-one',
    name: '[Practice Manager]',
    role: 'Practice Manager',
    tier: 'Support',
    bio: '[Biography to be added. This section should describe the role and experience of this professional once verified.]',
    qualifications: '[Relevant qualifications to be verified]',
    specializations: ['Practice Operations', 'Client Relations'],
    linkedin: undefined,
    image: 'https://images.pexels.com/photos/11655430/pexels-photo-11655430.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const teamTiers = [
  'Managing Partner',
  'Senior Associates',
  'Associates',
  'Support',
] as const;
