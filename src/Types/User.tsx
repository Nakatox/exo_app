
export interface User {
    name: Name;
    email: string;
    phone: string;
    picture: Picture;
    gender: string;
}

interface Picture {
    large: string;
}

interface Name {
    first: string;
    last: string;
}



