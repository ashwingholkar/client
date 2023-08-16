import { Photo } from "./photo";


export interface Member {
    id: number;
    userName: string;
    photoUrl: string;
    age: number;
    knownAs: string;
    created: string;
    lastActive: string;
    gender: string;
    introduction: string;
    intrests?: any;
    city: string;
    country: string;
    lookingFor: string;
    photos: Photo[];
  }
  
