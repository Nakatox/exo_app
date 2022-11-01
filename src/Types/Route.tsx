import { User } from './User';
import { Route } from "@react-navigation/native"

interface Params {
    user: User;
}

export interface Props {
    key: string
    name: string
    path?: string
    params: Params
}