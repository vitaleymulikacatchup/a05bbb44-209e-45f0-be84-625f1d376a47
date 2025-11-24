"use client"

import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import TagAbout from '@/components/sections/about/TagAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ThemeProvider } from '@/providers/themeProvider/ThemeProvider';
import { Home, Sparkles, Crown } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="large"
      sizing="small"
      background="dotGrid"
      cardStyle="glass-depth"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="outline"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Luxe Stay"
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Dining", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Experience Luxury & Comfort"
          description="Discover your perfect getaway at Luxe Stay. Premium accommodations, world-class amenities, and exceptional service await you."
          tag="Welcome"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763983783725-4trhu7yx.jpg"
          imageAlt="Luxury hotel lobby with modern architecture"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={true}
          buttons={[
            { text: "Book Your Room", href: "contact" },
            { text: "Explore More", href: "rooms" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="About Luxe Stay"
          description="For over 25 years, we have been a destination of choice for travelers seeking exceptional hospitality. Our commitment to excellence, attention to detail, and personalized service define every guest experience at Luxe Stay."
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Our Rooms"
          description="Choose from our carefully curated selection of rooms and suites, each designed for maximum comfort and luxury."
          tag="Accommodations"
          products={[
            {
              id: "1",
              name: "Standard Room",
              price: "$129/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763983785720-nkhdb8v9.jpg",
              imageAlt: "Comfortable standard hotel room"
            },
            {
              id: "2",
              name: "Deluxe Room",
              price: "$189/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763983784641-ehaijrgr.jpg",
              imageAlt: "Luxurious deluxe room with premium amenities"
            },
            {
              id: "3",
              name: "Executive Suite",
              price: "$299/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763983785140-ugeg42c5.jpg",
              imageAlt: "Executive suite with panoramic views"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardEight
          title="World-Class Amenities"
          description="Indulge in our premium facilities designed to enhance your stay."
          tag="Facilities"
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Olympic Pool",
              description: "Relax in our heated infinity pool with panoramic views",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763983786338-0ck82ste.jpg"
            },
            {
              id: 2,
              title: "Spa & Wellness",
              description: "Rejuvenate with our full-service spa and wellness center",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763983787108-izegus3b.jpg"
            },
            {
              id: 3,
              title: "Fitness Center",
              description: "State-of-the-art equipment and personal training available",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763983787758-yt4vp0fc.jpg"
            },
            {
              id: 4,
              title: "Fine Dining",
              description: "Award-winning restaurant with international cuisine",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763983788266-fvdygftc.jpg"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Dining Packages"
          description="Choose the perfect meal plan for your stay."
          tag="Food & Beverage"
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "1",
              badge: "Room Only",
              badgeIcon: Home,
              price: "Included",
              subtitle: "Perfect for independent diners",
              buttons: [
                { text: "Select", href: "contact" }
              ],
              features: [
                "Room accommodation",
                "24-hour room service",
                "Continental breakfast",
                "WiFi access"
              ]
            },
            {
              id: "2",
              badge: "Half Board",
              badgeIcon: Sparkles,
              price: "+$45",
              subtitle: "Breakfast and dinner included",
              buttons: [
                { text: "Select", href: "contact" }
              ],
              features: [
                "All Room Only benefits",
                "Breakfast daily",
                "Dinner nightly",
                "Premium beverages",
                "Priority restaurant seating"
              ]
            },
            {
              id: "3",
              badge: "All Inclusive",
              badgeIcon: Crown,
              price: "+$75",
              subtitle: "Everything is included",
              buttons: [
                { text: "Select", href: "contact" }
              ],
              features: [
                "All meals unlimited",
                "Premium bar service",
                "Spa credit included",
                "Activity programs",
                "Concierge service"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Guest Reviews"
          description="Hear from travelers who have experienced Luxe Stay."
          tag="Testimonials"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              handle: "@sarahtravels",
              testimonial: "Absolutely incredible stay! The room was immaculate, the staff was attentive, and the breakfast exceeded expectations. Will definitely return.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763983788956-9d43lkww.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Chen",
              handle: "@jchen_adventures",
              testimonial: "Best hotel experience I've had in years. The location is perfect, the amenities are top-notch, and the service is genuine and warm.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763983789717-kqns8wt1.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              handle: "@emma_wanderlust",
              testimonial: "Luxe Stay made our honeymoon unforgettable. From the romantic room setup to the spa treatments, every detail was perfect.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763983790501-stdhgzf8.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "David Park",
              handle: "@davidpark_travel",
              testimonial: "Business trip turned into a pleasure stay. Great workspace, comfortable bed, and excellent restaurant. Highly recommended for professionals.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763983791269-i55cg5dm.jpg",
              imageAlt: "David Park"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Common Questions"
          sideDescription="Find answers to frequently asked questions about your stay at Luxe Stay."
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What time is check-in and check-out?",
              content: "Check-in is available from 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request depending on room availability."
            },
            {
              id: "2",
              title: "Is WiFi included in the room rate?",
              content: "Yes, complimentary high-speed WiFi is included for all guests throughout the property, including rooms, lobby, and dining areas."
            },
            {
              id: "3",
              title: "Do you have parking facilities?",
              content: "We offer both self-parking and valet parking services. Rates start at $15 per night for self-parking and $20 for valet service."
            },
            {
              id: "4",
              title: "Can I cancel my reservation?",
              content: "Cancellations made 48 hours prior to arrival receive a full refund. Cancellations within 48 hours are subject to one night's charge."
            },
            {
              id: "5",
              title: "Are pets allowed at the hotel?",
              content: "Yes, we are a pet-friendly hotel. Pets stay for $30 per night and we provide special amenities including food bowls and beds."
            },
            {
              id: "6",
              title: "What payment methods do you accept?",
              content: "We accept all major credit cards, debit cards, and digital payment methods. A valid ID is required at check-in for room registration."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Ready to Book?"
          title="Plan Your Perfect Stay"
          description="Get in touch with our reservations team to book your room or ask any questions about our accommodations and services."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763983791812-w5r73gs9.jpg"
          imageAlt="Hotel concierge service"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Reserve Now"
          termsText="By booking you agree to our terms. We'll send you confirmation details via email."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Luxe Stay"
          copyrightText="© 2025 Luxe Stay Hotels. All rights reserved."
          columns={[
            {
              title: "Rooms",
              items: [
                { label: "Standard Rooms", href: "rooms" },
                { label: "Deluxe Rooms", href: "rooms" },
                { label: "Suites", href: "rooms" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Dining", href: "pricing" },
                { label: "Spa & Wellness", href: "amenities" },
                { label: "Events", href: "contact" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "FAQs", href: "faq" },
                { label: "Policies", href: "https://example.com/policies" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}