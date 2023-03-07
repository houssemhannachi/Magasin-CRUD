import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {TokenStorageService} from './_services/token-storage.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  title = "Magasin";
  eventBusSub?: Subscription;
  private roles: string[] = [];

  constructor(private router: Router, private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.email;
    }


  }


  logout(): void {
    this.tokenStorageService.signOut();

    this.isLoggedIn = false;
    this.roles = [];
    this.showAdminBoard = false;
    this.showModeratorBoard = false;
    this.router.navigate(['/home'])
  }

  goToProducts() {
    this.router.navigate(['/products']);
  }

  goToCategories() {
    this.router.navigate(['/category']);
  }

  goToClients() {
    this.router.navigate(['/clients']);
  }

  goToCommandes() {
    this.router.navigate(['/commandes']);
  }

  goToHistory() {
    this.router.navigate(['/actions'])
  }
}
