import { Component, OnInit } from '@angular/core';
import {IFaq } from './faq'
import {FaqService } from './faq.service'

@Component({
    moduleId: module.id,
    templateUrl: './faq.component.html',
    styleUrls: ["./faq.component.css"]
})

export class FaqComponent implements OnInit {
    word:string;
    constructor (private _faqservice:FaqService){}
    faqs:IFaq[];
    isOpen:boolean=false;
    ngOnInit():void{
        this.faqs=this._faqservice.getQuestions();
    }  

       
}