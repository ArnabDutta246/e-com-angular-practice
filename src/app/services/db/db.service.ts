import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageData, Product } from 'src/app/interface/interface';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class DbService {
  doc: DocumentReference;

  constructor(private http:HttpClient,private firestore: Firestore) {
   }
  
   // add data
   addData(pageData: PageData) {
    const pageDataRef = collection(this.firestore, 'textbd'); 
    return addDoc(pageDataRef, pageData);
  }
   // get data
   getPagesData(): Observable<PageData[]> {
    const pageDataRef = collection(this.firestore, 'textbd');
    return collectionData(pageDataRef, { idField: 'id' }) as Observable<PageData[]>;
  }
  getpageID(id: string) {
    const bookRef = doc(this.firestore, `textbd/${id}`);
    return docData(bookRef, { idField: 'id' }) as Observable<PageData>;
  }
  
  updatePageData(pageData: PageData) {
    const bookDocRef = doc(this.firestore, `textbd/${pageData.id}`);
    return setDoc(bookDocRef, pageData);
  }
  
  modifyPageData(pageData: PageData, obj) {
    const bookDocRef = doc(this.firestore, `textbd/${pageData.id}`);
    return updateDoc(bookDocRef, { ...obj });
  }



  // api
  url = 'https://fakestoreapi.com/products?limit=6';
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
}
