import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { TechSkillsComponent } from './tech-skills/tech-skills.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'about', component: AboutMeComponent, data: { title: 'About' } },
  { path: 'work-experience', component: WorkExperienceComponent,data: { title: 'work experience' } },
  { path: 'education', component: EducationComponent,data: { title: 'education' } },
  { path: 'tech-skills', component: TechSkillsComponent,data: { title: 'tech skills' } },
  { path: 'skills', component: SkillsComponent,data: { title: 'skills' } },
  { path: 'contact', component: ContactComponent,data: { title: 'contact' } },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
