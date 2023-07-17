import {atom} from 'jotai';
import { DocumentData } from 'firebase/firestore';

export const postAtom = atom<DocumentData[]>([]);

export const loginAtom = atom(false)

