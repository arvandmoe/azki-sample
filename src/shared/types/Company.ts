export interface Company {
  id: number;
  title: string;
  satisfaction: number;
  wealthLevel: number;
  complaintResponseTime: number;
  branchNumber: number;
  enable: boolean;
  marketerEnable: boolean;
  available: boolean;
  maxBranchDiscount: number;
  branchDiscountPercent: number;
  maxCompanyDiscount: number;
  companyDiscountPercent: number;
  maxBimitoDiscount: number;
  bimitoDiscountPercent: number;
  maxMarketerDiscount: number;
  marketerDiscountPercent: number;
  bimitoDiscountTitle: string;
  azkiDiscountTitle: string;
  hideDiscount: boolean;
  description: string;
  productDescription: string;
  giftTitle: string;
  hasGift: boolean;
  onlineDamage: boolean;
  features: Feature[];
  installments: Installment2[];
  icon: string;
  helpIcons: HelpIcon[];
  oldVehicleAge: number;
  oldVehiclePercent: number;
  oldVehiclePenaltyPercent: number;
  extraPercent: number;
  extraPenaltyPercent: number;
  damagedShortTermEnable: boolean;
  maxDayOfPenalty: number;
  forgivenessDescription: string;
  enableExpireDatePayment: boolean;
  shortPenaltyForgiveness: boolean;
  longPenaltyForgiveness: boolean;
  cashPayment: boolean;
  azkiPenaltyDiscountEnable: boolean;
  maxAzkiPenaltyDiscount: number;
}

interface HelpIcon {
  title: string;
  url: string;
}

interface Installment2 {
  enable: boolean;
  enableForSellers: boolean;
  installments: Installment[];
  title: string;
  label: string;
  description: string;
  type: number;
  default: boolean;
}

interface Installment {
  percent: number;
  month: number;
}

interface Feature {
  icon: string;
  title: string;
  newRelease: boolean;
  description: string;
}
