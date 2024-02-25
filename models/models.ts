export type LinkData = {

    link: string,
    url: string
}

export type Credentials = {

    emailOrUsername: string,
    password: string
}

export type AddressData = {

    country: string,
    firstName: string,
    lastName: string,
    company: string,
    address: string,
    addressLine2: string,
    city: string,
    postcode: string,
    phone: string,
    email: string
}

export type NewsletterData = {

    name: string,
    email: string
}

export type ProductToCart = {

    url: string,
    quantity: string
}

export type ProductData = {

    name: string | null;
    price: string | null;
    quantity: string | null;
}

export type ThumbnailData = {

    tycheProduct: string,
    link: string;
}