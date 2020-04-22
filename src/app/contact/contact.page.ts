import { Component } from '@angular/core';
import { GoogleMaps, GoogleMapsEvent, LatLng, MarkerOptions, Marker } from "@ionic-native/google-maps";
import { Platform } from "@ionic/angular";

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss'],
})
export class Contact {
  constructor(public platform: Platform) { }

  ngAfterViewInit() {
    this.platform.ready().then(() => this.loadMap());
  }

  loadMap() {
    const map = GoogleMaps.create('map');

    map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
      const coordinates: LatLng = new LatLng(45.558484, 9.052425);

      console.log('map is ready to use.');
      let marker: Marker = map.addMarkerSync({
        title: 'Museo Storico Alfa Romeo',
        icon: 'red',
        animation: 'DROP',
        position: {
          lat: 45.558484,
          lng: 9.052425
        },
        map:map
      });

      map.setCameraTarget(coordinates);
      map.setCameraZoom(8);
    });

  }
}
