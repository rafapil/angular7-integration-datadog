import { Component, OnInit } from '@angular/core';
import { datadogLogs } from '@datadog/browser-logs'

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    datadogLogs.logger.error('Acesso desconhecido', { action: 'invalid path', user: 'user xpto' })
  }

}
