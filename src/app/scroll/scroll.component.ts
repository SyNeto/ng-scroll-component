import { Component, OnInit, ViewChild, ElementRef, HostListener, AfterContentInit } from '@angular/core';

import { MdSliderChange } from "@angular/material";


@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {

  @ViewChild('frameElement') frame: ElementRef;
  
  private frameElement: HTMLElement;
  private scrollHeight: number;
  private currentScroll: number;


  constructor() { }

  ngOnInit() {
    this.frameElement = this.getFrameNativeElement()
  }
  
  ngAfterContentInit() {
    this.scrollHeight = this.frameElement.scrollHeight - this.frameElement.clientHeight;
    this.currentScroll = this.frameElement.scrollTop;
    console.log(this.frameElement.clientHeight);
  }

  getFrameNativeElement(): HTMLElement{
    return this.frame.nativeElement
  }

  goUp(): void{
   this.frameElement.scrollTop = this.frameElement.scrollTop - 10;
  }

  goDown(): void{
   this.frameElement.scrollTop = this.frameElement.scrollTop + 10;
  }

  goTo(scrollPosition: MdSliderChange): void{
    console.log(this.frameElement.scrollTop);
    console.log(scrollPosition)
    this.frameElement.scrollTop = scrollPosition.value;
  }

  updateCurrentScroll(){
    this.currentScroll = this.frameElement.scrollTop;
    console.log(this.currentScroll);
  }

}
