import { Component } from '@angular/core';
import { cibCodesandbox} from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IconDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) { }
  navigateTo(link: string): void {
    this.router.navigate([link]);
  }
  

  icons = { cibCodesandbox };
}
