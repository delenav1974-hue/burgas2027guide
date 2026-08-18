// Affiliate Integration Configuration
// Replace these markers with your actual IDs from Travelpayouts or direct partner programs.

export const AFFILIATE_CONFIG = {
  // Your Travelpayouts Marker (extracted from your Drive script)
  travelpayoutsMarker: '563600',
  
  // Direct program IDs if you are not using Travelpayouts for everything
  bookingAid: 'YOUR_BOOKING_AID',
  getYourGuidePartnerId: 'YOUR_GYG_ID',
};

// Helper function to generate tracked links
export function getAffiliateLink(provider: string, defaultHref?: string): string {
  const marker = AFFILIATE_CONFIG.travelpayoutsMarker;
  
  switch (provider) {
    case 'booking':
      // Using Travelpayouts Hotellook/Booking white-label or direct Booking.com
      return `https://search.hotellook.com/hotels?destination=Burgas&marker=${marker}`;
      
    case 'kiwitaxi':
      // KiwiTaxi via Travelpayouts
      return `https://kiwitaxi.com/?pap=${marker}`;
      
    case 'discovercars':
      // DiscoverCars via Travelpayouts
      return `https://www.discovercars.com/?a_aid=${marker}`;
      
    case 'airalo':
      // Airalo eSIM via Travelpayouts
      return `https://airalo.tp.st/${marker}`;
      
    case 'getyourguide':
      // GetYourGuide direct or via TP
      return `https://getyourguide.tp.st/${marker}`;
      
    default:
      return defaultHref || '#';
  }
}
