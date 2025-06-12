interface Country {
    name: string;
  }
  
  interface State {
    name: string;
    slug: string;
    country: Country;
  }
  
  interface District {
    name: string;
    state: State;
  }
  
  interface MapLocation {
    lat: number;
    lng: number;
  }
  
  interface Amenity {
    icon: string;
    amenity: string;
    subItem: string;
  }
  
  interface ExteriorPhoto {
    caption: string;
    imgPath: string;
    loading: boolean;
    progress: number;
  }
  
  interface FullPaymentInfo {
    Cash: string;
    BankTransfer: string;
    DebitCard: string;
  }
  
  interface Hotel {
    id: number;
    state: State;
    country: Country;
    district: District;
    hotel_name: string;
    property_type: string;
    hotel_phone_code_1: string;
    i_own_this_property: string;
    hotel_phone_number_1: string;
    hotel_phone_code_2: string;
    hotel_phone_number_2: string;
    hotel_email: string;
    have_channel_manager: string;
    property_channel_manager: string;
    owner_role: string;
    is_part_of_hotel_chain: string;
    property_chain_manager: string;
    describe_property: string;
    proximity_to_major_attractions: string[];
    things_to_do: string[];
    places_nearby: string[];
    popular_landmarks: string[];
    property_policy: string;
    star_rating: number;
    location_building_address: string;
    location_building_number: string;
    location_country: string;
    location_state: string;
    location_city: string;
    location_plot: string;
    map_location: MapLocation;
    location_timezone: string;
    number_of_bedrooms: null;
    number_of_rooms: string;
    postal_code: string;
    amenities: Amenity[];
    things_allowed: null;
    number_rooms_type: string;
    full_payment: boolean;
    full_payment_info: string[];
    pay_half: boolean;
    pay_at_hotel: boolean;
    pay_through_agency: boolean;
    property_video: null;
    cancellation_policy_time: string;
    cancellation_policy_update_name: null;
    cancellation_policy_update_time: null;
    cancellation_policy_percentage: string;
    vat: string;
    post_stay: null;
    vat_percentage: null;
    agree_is_best_price: boolean;
    age_restriction: string;
    check_in_time: string;
    check_out_time: string;
    main_photo: string[];
    exterior_photo: ExteriorPhoto[];
    accept_terms_and_conditions: boolean;
    go_live: boolean;
    hotel_status: string;
    created_at: string;
    updated_at: string;
    agreement_doc: null;
    number_clickes: number;
    agreement_file: null;
    commission: string;
    hotel_late_night_deals: boolean;
    number_likes: number;
    hotel_badge: string;
    urgency_notification: boolean;
    urgency_notification_time: string;
    urgency_notification_message: string;
    user: number;
  }
  
  interface RoomImage {
    id: number;
    image_url: string;
    created_at: string;
    room: number;
  }
  
  interface LateNightDate {
    id: number;
    late_night_date: string;
    room: number;
  }
  
  interface RoomAdditionalDeal {
    icon: string;
    amenity: string;
    subItem: string;
  }
  
  interface RoomAmenity {
    icon: string;
    amenity: string;
    subItem: string;
  }
  
 export interface Room {
    id: number;
    hotel: Hotel;
    roomimages: RoomImage[];
    late_night_date: LateNightDate[];
    rooms_rates_per_night: number;
    number_of_rooms: number;
    number_of_room_taken: number;
    room_name: string;
    rooms_capacity: number;
    room_video: null;
    rooms_type: string;
    rooms_class: string;
    rooms_bed_type: string;
    rooms_additional_deals: RoomAdditionalDeal[];
    rooms_amenities: RoomAmenity[];
    rooms_week_rate_off: number;
    rooms_month_rate_off: number;
    rooms_deals_per_night: number;
    late_night_deals: boolean;
    late_night_room_rate_off: number;
    late_night_rooms_remaining: number;
    late_night_amenities: any[];
    created_at: string;
  }
  
  interface UserDetails {
    username: string;
    email: string;
    push_token: string;
  }
  
  interface User {
    id: number;
    user: UserDetails;
    user_ref_uid: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    country_code: string;
    date_of_birth: null;
    bank_name: string;
    account_number: string;
    account_name: string;
    bank_code: string;
    created_at: string;
    updated_date: string;
    country: null;
    state: null;
    district: null;
  }
  
  export interface HotelData {
    id: number;
    rooms: Room[];
    user: User;
    country: Country;
    state: State;
    district: District;
    hotel_name: string;
    property_type: string;
    hotel_phone_code_1: string;
    i_own_this_property: string;
    hotel_phone_number_1: string;
    hotel_phone_code_2: string;
    hotel_phone_number_2: string;
    hotel_email: string;
    have_channel_manager: string;
    property_channel_manager: string;
    owner_role: string;
    is_part_of_hotel_chain: string;
    property_chain_manager: string;
    describe_property: string;
    proximity_to_major_attractions: string[];
    things_to_do: string[];
    places_nearby: string[];
    popular_landmarks: string[];
    property_policy: string;
    star_rating: number;
    location_building_address: string;
    location_building_number: string;
    location_country: string;
    location_state: string;
    location_city: string;
    location_plot: string;
    map_location: MapLocation;
    location_timezone: string;
    number_of_bedrooms: null;
    number_of_rooms: string;
    postal_code: string;
    amenities: Amenity[];
    things_allowed: null;
    number_rooms_type: string;
    full_payment: boolean;
    full_payment_info: string[];
    pay_half: boolean;
    pay_at_hotel: boolean;
    pay_through_agency: boolean;
    property_video: null;
    cancellation_policy_time: string;
    cancellation_policy_update_name: null;
    cancellation_policy_update_time: null;
    cancellation_policy_percentage: string;
    vat: string;
    post_stay: null;
    vat_percentage: null;
    agree_is_best_price: boolean;
    age_restriction: string;
    check_in_time: string;
    check_out_time: string;
    main_photo: string[];
    exterior_photo: ExteriorPhoto[];
    accept_terms_and_conditions: boolean;
    go_live: boolean;
    hotel_status: string;
    created_at: string;
    updated_at: string;
    agreement_doc: null;
    number_clickes: number;
    agreement_file: null;
    commission: string;
    hotel_late_night_deals: boolean;
    number_likes: number;
    hotel_badge: string;
    urgency_notification: boolean;
    urgency_notification_time: string;
    urgency_notification_message: string;
  }