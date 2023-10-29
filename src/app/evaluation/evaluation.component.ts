import { Component, OnInit} from '@angular/core';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss'],
  providers: [MessageService] 
})


export class EvaluationComponent implements OnInit {
  selectedSubject!: string;
  questionResponses: { [question: string]: string } = {};  
  subjects: string[] = ['Math', 'Science', 'History'];

  questions: string[] = [
    'Question 1: La présentation du cours (fiche module, acquis d’apprentissage et modalités d’évaluation) est',
    'Question 2: La pédagogie adoptée (approche, explication, réponse aux questions et rythme) est',
    'Question 3: L’adaptation des activités d’apprentissage aux objectifs du cours (innovation et pertinence) est',
    'Question 4: La charge de travail (en heures) associée au cours (en dehors des heures en classe) est',
    'Question 5: L’ atteinte des acquis d’apprentissage (maîtrise des acquis énoncés dans la fiche module) est',
    'Question 6: La disponibilité des ressources pédagogiques  sur classroom (support de cours) est'
  ]
  constructor(private messageService: MessageService) {}
  ngOnInit(): void {
    
  }
  send(){
    console.log("test");
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'votre evaluation du cours a été envoyée avec succés' });

  }
}
