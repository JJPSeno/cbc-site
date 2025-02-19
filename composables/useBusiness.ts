export const useBusiness = () => {
  const businesses = useState<Business[]>('businesses', () => {
    return [
      {
        id: "b0237536-0d2f-4140-9f22-45ecc5c6b767",
        companyName: "Juan's Sari-Sari Store",
        address: "123 Mabuhay St, Quezon City",
        contactInfo: {
          email: "juansari@email.com",
          phoneNumber: "09*********",
        },
        desription: "Serving fresh local food and vegetables available right in your reach. Everyday!"
      },
      {
        id: "819006bf-13f8-4bb8-8c26-5b666ceb36ca",
        companyName: "Pedro's Carinderia",
        address: "456 Bayanihan Ave, Manila",
        contactInfo: {
          email: "pedrocarinderia@email.com", 
          phoneNumber: "09*********"
        },
      },
      {
        id: "9e719a5d-a45e-4e44-b201-42f8a0197934",
        companyName: "Maria’s Laundry Service",
        address: "789 Laban St, Cebu City",
        contactInfo: {
          phoneNumber: "09*********"
        },
        desription: "30 pesos per kilo only. Contact 09********* for franchising questions"
      },
    ]
  })

  return {
    businesses
  }
}