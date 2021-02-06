import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

import Map from 'ol/Map'
import View from 'ol/View'
import OSM from 'ol/source/OSM'
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { fromLonLat } from 'ol/proj';
import GeoJSON, { GeoJSONFeature, GeoJSONFeatureCollection, GeoJSONGeometryCollection, GeoJSONObject } from 'ol/format/GeoJSON';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import Point from 'ol/geom/Point';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: Map
  subscription: Subscription = new Subscription()

  constructor(
    private http: HttpClient
  ) { }

  layer = new TileLayer({
    source: new OSM()
  })

  ngOnInit(): void {
    this.map = new Map({
      target: 'map',
      layers: [this.layer],
      view: new View({
        center: fromLonLat([37.6,55.8]),
        zoom: 10,
      }),
    })
    this.addLayer()
  }

  public async addLayer() {
    const busStation = this.http.get('assets/bus-station.json')
    .subscribe((busStations) => {
      const source: VectorSource = new VectorSource({
        features: new GeoJSON().readFeatures(busStations)
      })
      source.forEachFeature((feature) => {
        const geometry = <Point>feature.getGeometry()
        const coord = geometry.getCoordinates()
        const coor = fromLonLat(coord)
        geometry.setCoordinates(coor)
      })
      const layer: VectorLayer = new VectorLayer({
        source: source,
        style: this._styleFunc
      })
      this.map.addLayer(layer)
      console.log(layer.getSource().getFeatures())
    })
    this.subscription.add(busStation)
  }

  public _styleFunc = (feature) => this.styleFunc(feature)

  private styleFunc(feature) {
    if(this.map.getView().getZoom() > 12) {
      console.log(1)
      const style = new Style({
        image: new Icon({
          src: 'assets/bus-station.svg',
          scale: 0.013
        })
      })
      return style
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
