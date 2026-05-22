import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface Document {
  id: string;
  name: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

@Component({
  selector: 'app-documents-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './documents-table.component.html',
  styleUrl: './documents-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentsTableComponent {
  displayedColumns: string[] = ['name', 'type', 'createdAt', 'updatedAt', 'actions'];

  documents: Document[] = [
    {
      id: '1',
      name: 'Documento 1',
      type: 'PDF',
      createdAt: '2025-05-20',
      updatedAt: '2025-05-21',
    },
    {
      id: '2',
      name: 'Documento 2',
      type: 'DOCX',
      createdAt: '2025-05-19',
      updatedAt: '2025-05-20',
    },
    {
      id: '3',
      name: 'Documento 3',
      type: 'PDF',
      createdAt: '2025-05-18',
      updatedAt: '2025-05-19',
    },
  ];
}
