/**
 * Utility listings — single source of truth.
 *
 * Used as the fallback for the /utilities page AND as the seed source
 * (scripts/seed-utilities.mjs flattens this into Sanity `utilityListing` docs).
 * Keep display order here; the page preserves it.
 *
 * Many `url`s are placeholders today (the original site linked them to "#").
 * Provider entries with no url/phone/email render as plain text until real
 * links are added (in Sanity, once seeded, or here).
 */
export type UtilityProvider = {
  provider: string;
  linkLabel?: string;
  url?: string;
  phone?: string;
  phoneTel?: string;
  email?: string;
};
export type UtilityCounty = { county: string; providers: UtilityProvider[] };
export type UtilityRegion = { region: 'dc' | 'md' | 'va'; label: string; counties: UtilityCounty[] };

export const UTILITIES: UtilityRegion[] = [
  {
    region: 'dc',
    label: 'District of Columbia',
    counties: [
      {
        county: 'District of Columbia Utilities',
        providers: [
          { provider: 'Washington Gas', linkLabel: 'Start and Stop Service' },
          { provider: 'PEPCO', linkLabel: 'Start, Stop, Move' },
          { provider: 'DC Water', linkLabel: 'Contact Information' },
        ],
      },
    ],
  },
  {
    region: 'md',
    label: 'Maryland',
    counties: [
      { county: 'Anne Arundel County', providers: [
        { provider: 'BGE', linkLabel: 'Start, Stop, Move' },
        { provider: 'A.A. County Water & Sewer', phone: '(410) 222-1144', phoneTel: '4102221144', email: 'custserv@aacounty.org' },
      ]},
      { county: 'Baltimore County & City', providers: [
        { provider: 'BGE', linkLabel: 'Start, Stop, Move' },
        { provider: 'Bureau of Water', linkLabel: 'webpage link' },
      ]},
      { county: 'Calvert County', providers: [
        { provider: 'BGE', linkLabel: 'Start, Stop, Move' },
        { provider: 'SMECO', linkLabel: 'Sign Up For Residential Service' },
        { provider: 'Water & Sewer', phone: '(410) 535-1600', phoneTel: '4105351600' },
      ]},
      { county: 'Carroll County', providers: [
        { provider: 'Water', linkLabel: 'Service-Request' },
      ]},
      { county: 'Charles County', providers: [
        { provider: 'Washington Gas', linkLabel: 'Start and Stop Service' },
        { provider: 'SMECO', linkLabel: 'Sign Up For Residential Service' },
        { provider: 'Water & Sewer', linkLabel: 'Water and Sewer Billing' },
      ]},
      { county: 'Frederick County', providers: [
        { provider: 'Frequency Gas', linkLabel: 'Washington Gas, Frederick Division' },
        { provider: 'Water Dept.', linkLabel: 'Water and Sewer Utilities' },
        { provider: 'Washington Gas', linkLabel: 'Start and Stop Service' },
      ]},
      { county: 'Frederick City', providers: [
        { provider: 'Water Dept.', linkLabel: 'Water & Sewer' },
        { provider: 'Washington Gas', linkLabel: 'Start and Stop Service' },
      ]},
      { county: 'Howard County', providers: [
        { provider: 'BGE', linkLabel: 'Start, Stop, Move' },
        { provider: 'Utilities', phone: '(410) 313-4900', phoneTel: '4103134900' },
      ]},
      { county: 'Montgomery County', providers: [
        { provider: 'Washington Gas', linkLabel: 'Start and Stop Service' },
        { provider: 'PEPCO', linkLabel: 'Start, Stop, Move' },
        { provider: 'WSSC', linkLabel: 'Start Service / Stop Service' },
        { provider: 'Rockville Water', phone: '(240) 314-8420', phoneTel: '2403148420', email: 'utilitybilling@rockvillemd.gov' },
      ]},
      { county: 'Prince Georges County', providers: [
        { provider: 'BGE', linkLabel: 'Start, Stop, Move' },
        { provider: 'Washington Gas', linkLabel: 'Start and Stop Service' },
        { provider: 'PEPCO', linkLabel: 'Start, Stop, Move' },
        { provider: 'WSSC', linkLabel: 'Start Service / Stop Service' },
      ]},
    ],
  },
  {
    region: 'va',
    label: 'Virginia',
    counties: [
      { county: 'Alexandria City', providers: [
        { provider: 'American Water', linkLabel: 'Turn Service On/Off' },
        { provider: 'Dominion Energy', linkLabel: 'Start/Stop Service' },
        { provider: 'Washington Gas', linkLabel: 'Start and Stop Service' },
      ]},
      { county: 'Arlington County', providers: [
        { provider: 'Arlington Water & Utilities', linkLabel: 'Start or Stop Service' },
        { provider: 'Washington Gas', linkLabel: 'Start and Stop Service' },
      ]},
      { county: 'Chesapeake', providers: [
        { provider: 'City of Chesapeake Water', linkLabel: 'Connect to Water and Sewer Service' },
        { provider: 'Dominion Energy', linkLabel: 'Start/Stop Service' },
      ]},
      { county: 'Culpeper County', providers: [
        { provider: 'Culpeper Water Dept', phone: '(540) 825-8591', phoneTel: '5408258591' },
        { provider: 'Dominion Energy', linkLabel: 'Start/Stop Service' },
      ]},
      { county: 'Fairfax County', providers: [
        { provider: 'Fairfax Water', linkLabel: 'Customer Service' },
        { provider: 'Dominion Energy', linkLabel: 'Start/Stop Service' },
      ]},
      { county: 'Fairfax City', providers: [
        { provider: 'Fairfax City', linkLabel: 'Utility Payments & Information' },
        { provider: 'Washington Gas', linkLabel: 'Start and Stop Service' },
        { provider: 'Dominion Energy', linkLabel: 'Start/Stop Service' },
      ]},
      { county: 'Falls Church City', providers: [
        { provider: 'Fairfax Water', linkLabel: 'Start Service' },
      ]},
      { county: 'Fauquier County', providers: [
        { provider: 'Fauquier Water and Sanitation Authority', linkLabel: 'Customer Service' },
        { provider: 'Dominion Energy', linkLabel: 'Start/Stop Service' },
      ]},
      { county: 'City of Fredericksburg', providers: [
        { provider: 'FXBG Utilities', linkLabel: 'Utility Billing Office' },
        { provider: 'Dominion Energy', linkLabel: 'Start/Stop Service' },
      ]},
      { county: 'City of Hampton', providers: [
        { provider: 'Water Customer Service', phone: '(870) 798-2753', phoneTel: '8707982753' },
        { provider: 'Dominion Energy', linkLabel: 'Start/Stop Service' },
      ]},
      { county: 'Loudoun County', providers: [
        { provider: 'Loudoun Water', linkLabel: 'Start Service' },
        { provider: 'Washington Gas', linkLabel: 'Start and Stop Service' },
        { provider: 'Dominion Energy', linkLabel: 'Start/Stop Service' },
      ]},
      { county: 'Manassas City', providers: [
        { provider: 'Manassas Utilities', linkLabel: 'Welcome page' },
        { provider: 'Dominion Energy', linkLabel: 'Start/Stop Service' },
      ]},
      { county: 'Newport News', providers: [
        { provider: 'Newport News Waterworks', linkLabel: 'Customer Service' },
        { provider: 'Dominion Energy', linkLabel: 'Start/Stop Service' },
      ]},
      { county: 'Prince William County', providers: [
        { provider: 'PWC Service Authority', linkLabel: 'Billpay login' },
        { provider: 'Washington Gas', linkLabel: 'Start and Stop Service' },
      ]},
      { county: 'City of Richmond', providers: [
        { provider: 'RVA Public Utilities', linkLabel: 'Water Utility' },
        { provider: 'Dominion Energy', linkLabel: 'Start/Stop Service' },
      ]},
    ],
  },
];
