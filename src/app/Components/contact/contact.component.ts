import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SendMailService } from 'src/app/Core/Service/send-mail.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  Mailsend:boolean=false

  constructor(private SendMailService:SendMailService) { }

  ngOnInit(): void {
    this.SendMailService.mailSend.subscribe((res)=>{
      this.Mailsend=res
    })
  }


  onSubmit(form:NgForm){
    if(form.valid){
        this.SendMailService.sendEmail(form.value)
    }
  }
}
