import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import * as email from 'emailjs-com';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SendMailService {
  mailSend=new BehaviorSubject(false)
  constructor(private ToastrService:ToastrService) { 
    
  }

  sendEmail(data: any) {
    // Define your template ID
    const templateId = 'template_720nn5n';
    // Use the send method to send the email
    email.send('service_k02118u', templateId, data,'-8J0q3RwDTI5pSPWf')
    .then(response => {
        this.mailSend.next(true)
        this.ToastrService.success('MESSAGE SEND!')
      })

}

}