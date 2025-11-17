import { Component } from '@angular/core';
import { PoModule } from '@po-ui/ng-components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-tree',
  standalone: true,
  imports: [CommonModule, PoModule], // Coloque aqui os módulos PO-UI e dependências
  templateUrl: './category-tree.component.html',
  styleUrl: './category-tree.component.css'
})
export class CategoryTreeComponent {}
