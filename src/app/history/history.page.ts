import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-history',
  templateUrl: 'history.page.html',
  styleUrls: ['history.page.scss']
})
export class History {

  options: InAppBrowserOptions = {
    location: 'yes',
    hidden: 'no',
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no',
    closebuttoncaption: 'Close',
    disallowoverscroll: 'no',
    toolbar: 'yes',
    enableViewportScale: 'no',
    allowInlineMediaPlayback: 'no',
    presentationstyle: 'pagesheet',
    fullscreen: 'yes',
  };

  constructor(private theInAppBrowser: InAppBrowser) {

  }

  public openWithInAppBrowser(url: string) {
    let target = "_blank";
    this.theInAppBrowser.create(url, target, this.options);
  }

  public openWithCordovaBrowser(url: string) {
    let target = "_self";
    this.theInAppBrowser.create(url, target, this.options);
  }

  button = "SHOW";
  show(blockName) {
    var paragraph = document.getElementById(blockName);
    var button = document.getElementById("showBtn");
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
      this.button = "HIDE";
    } else {
      paragraph.style.display = "none";
      this.button = "SHOW";
    }
  }
}
