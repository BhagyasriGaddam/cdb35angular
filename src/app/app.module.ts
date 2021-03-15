import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { ChildComponent } from './child/child.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { FormsModule } from '@angular/forms';
import { RegisterreactiveformComponent } from './registerreactiveform/registerreactiveform.component';
import { ReactiveFormsModule} from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
//import { PostserviceComponent } from './postservice/postservice.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ContactusComponent,
    TechnologiesComponent,
    TypescriptComponent,
    JavascriptComponent,
    ChildComponent,
    BootstrapComponent,
    RegisterreactiveformComponent,
    PostsComponent,
   // PostserviceComponent,
    PostdetailsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
