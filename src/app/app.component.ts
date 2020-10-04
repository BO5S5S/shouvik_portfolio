import { Component } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Portfolio';
  dataset;
  valueNo: number = 0
  toggle=true;

  checked: boolean = false;
  scroll:any;
  ngAfterViewInit(){
   
    
    const options = {
      strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 100,
     
      
      loop: true
 };
 
    const typed1 = new Typed('.typing', options);

    const options1 = {
      strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
 };
 
    const typed = new Typed('.typing-2', options1);
    window.addEventListener('scroll', () => {
     this.scroll = window.pageYOffset;
     if (this.scroll > 20){

      let element = document.querySelector('.navbar');
      element.classList.add("sticky");
  }else{
    let element = document.querySelector('.navbar');
    element.classList.remove("sticky");
      
  }
  
  // scroll-up button show/hide script
     if (this.scroll > 500){
    let element = document.querySelector('.scroll-up-btn');
    element.classList.add("show");
      
  }else{
    let element = document.querySelector('.scroll-up-btn');
    element.classList.remove("show");
      
   
  }
    });
        
    
  }

  scrollup(event){
    
    window.scroll(0,0);
      
  }
    ngOnInit() {
  
    }
  changenav(){
if (this.checked == false)
{
  return "navbar";
}
if (this.checked == true)
{
  return "dark-navbar";
}

  }
  classtoggle(){
    this.toggle= !this.toggle;
  }
  changeli(){

if (this.checked == true)
{
  return ".dark-li";
}

  }
  changena(){

if (this.checked == true)
{
  return "dark-a";
}

  }
  ChangeMode(post){
      
    console.log(post);
    
    console.log(post.currentTarget.checked);
    this.checked = post.currentTarget.checked;
  }
  onhover(post)
  {
    if (post == 'HTML5')
  {this.valueNo = 1;
  }
    if (post == 'CSS')
  {
    this.valueNo = 2;
  }
    if (post == 'JavaScript')
  {
    this.valueNo = 3;
  }
    if (post == 'Angular')
  {
    this.valueNo = 4;
  }
    
  }
}
