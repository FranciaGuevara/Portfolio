import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  Name: string='';
  Email: string='';
  Message: string='';
  response: string='';


  ngOnInit() {

  }
  
  submitForm() {
    const form = document.getElementById('google') as HTMLFormElement;
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzEk0kv8SOY6WMl93-rv0v-Gpc5uWLuruhdMkDCV6KMCg9KU4qvIkQ1K0UsqSl1yXsv/exec'

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => this.response="Message sent!")
      .catch(error => this.response="Message failed.")
  }

}
