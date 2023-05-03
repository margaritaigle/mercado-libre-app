export interface IProductData {
    id:                  string;
    title:               string;
    condition:           string;
    thumbnail_id:        string;
    catalog_product_id:  null | string;
    listing_type_id:     string;
    permalink:           string;
    buying_mode:         string;
    site_id:             string;
    category_id:         string;
    domain_id:           string;
    thumbnail:           string;
    currency_id:         string;
    order_backend:       number;
    price:               number;
    original_price:      number | null;
    sale_price:          null;
    sold_quantity:       number;
    available_quantity:  number;
    official_store_id:   null;
    use_thumbnail_id:    boolean;
    accepts_mercadopago: boolean;
    tags:                string[];
    variation_filters?:  string[];
    shipping:            Shipping;
    stop_time:           Date;
    seller:              Seller;
    seller_address:      SellerAddress;
    address:             Address;
    attributes:          Attribute[];
    variations_data?:    VariationsData;
    installments:        null;
    winner_item_id:      null;
    discounts:           null;
    promotions:          any[];
    inventory_id:        null;
    catalog_listing?:    boolean;
}

export interface Address {
    state_id:   string;
    state_name: string;
    city_id:    string;
    city_name:  string;
}

export interface Attribute {
    id:                   string;
    name:                 string;
    value_id:             string;
    value_name:           string;
    attribute_group_id:   AttributeGroupID;
    attribute_group_name: AttributeGroupName;
    value_struct:         Struct | null;
    values:               Value[];
    source:               number;
    value_type:           ValueType;
}

export enum AttributeGroupID {
    Others = "OTHERS",
}

export enum AttributeGroupName {
    Otros = "Otros",
}

export interface Struct {
    number: number;
    unit:   string;
}

export enum ValueType {
    List = "list",
    NumberUnit = "number_unit",
    String = "string",
}

export interface Value {
    id:     string;
    name:   string;
    struct: Struct | null;
    source: number;
}

export interface Seller {
    id:                 number;
    nickname:           string;
    car_dealer:         boolean;
    real_estate_agency: boolean;
    _:                  boolean;
    registration_date:  Date;
    tags:               string[];
    car_dealer_logo:    string;
    permalink:          string;
    seller_reputation:  SellerReputation;
    eshop?:             Eshop;
}

export interface Eshop {
    eshop_id:         number;
    seller:           number;
    nick_name:        string;
    eshop_status_id:  number;
    site_id:          string;
    eshop_experience: number;
    eshop_rubro:      EshopRubro | null;
    eshop_locations:  EshopLocation[];
    eshop_logo_url:   string;
}

export interface EshopLocation {
    neighborhood: NeighborhoodClass;
    state:        NeighborhoodClass;
    city:         NeighborhoodClass;
    country:      NeighborhoodClass;
}

export interface NeighborhoodClass {
    id: null | string;
}

export interface EshopRubro {
    category_id: string;
    id:          string;
    name:        string;
}

export interface SellerReputation {
    level_id:            string;
    power_seller_status: string;
    transactions:        Transactions;
    metrics:             Metrics;
}

export interface Metrics {
    sales:                 Sales;
    claims:                Cancellations;
    delayed_handling_time: Cancellations;
    cancellations:         Cancellations;
}

export interface Cancellations {
    period: Period;
    rate:   number;
    value:  number;
}

export enum Period {
    The120Days = "120 days",
}

export interface Sales {
    period:    Period;
    completed: number;
}

export interface Transactions {
    canceled:  number;
    completed: number;
    period:    string;
    ratings:   Ratings;
    total:     number;
}

export interface Ratings {
    negative: number;
    neutral:  number;
    positive: number;
}

export interface SellerAddress {
    comment:      string;
    address_line: string;
    id:           null;
    latitude:     null;
    longitude:    null;
    country:      SellerAddressCity;
    state:        SellerAddressCity;
    city:         SellerAddressCity;
}

export interface SellerAddressCity {
    id:   string;
    name: string;
}

export interface Shipping {
    store_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: string;
    mode:          string;
    tags:          string[];
    promise:       null;
}

export interface VariationsData {
    "60943737606": The60943737606;
}

export interface The60943737606 {
    thumbnail:    string;
    ratio:        string;
    name:         string;
    pictures_qty: number;
}