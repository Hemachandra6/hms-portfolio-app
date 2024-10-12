import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isSidebarVisible = false;

  ngOnInit(): void {
    const toggleButton = document.getElementById('toggleSidebar');
    if (toggleButton) {
      toggleButton.addEventListener('click', () => {
        this.isSidebarVisible = !this.isSidebarVisible; // Toggle visibility state
        this.toggleSidebar();
      });
    }
  }

  toggleSidebar(): void {
    const sidebar = document.querySelector('.bg-dark');
    if (this.isSidebarVisible) {
      sidebar?.classList.remove('d-none'); // Show sidebar
    } else {
      sidebar?.classList.add('d-none'); // Hide sidebar
    }
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth'});
    }
  }
}
