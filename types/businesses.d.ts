declare interface ContactInformation {
  email?: string;
  phoneNumber: string;
}

declare interface Business {
  id: string
  companyName: string
  address: string
  contactInfo: ContactInformation
}