import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    var config = {
      apiKey: "AIzaSyDM4TeU7OflnyEkQg_jrkablZ6fMWNe27Y",
      authDomain: "jta-instagram-clone-6baf1.firebaseapp.com",
      databaseURL: "https://jta-instagram-clone-6baf1.firebaseio.com",
      projectId: "jta-instagram-clone-6baf1",
      storageBucket: "jta-instagram-clone-6baf1.appspot.com",
      messagingSenderId: "662108898505"
    };
    firebase.initializeApp(config);
  }
  title = 'app';
}
