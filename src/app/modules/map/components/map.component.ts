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
import { Collection, Feature } from 'ol';
import Polygon from 'ol/geom/Polygon';
import Circle from 'ol/style/Circle';
import Fill from 'ol/style/Fill';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: unknown 
  subscription: Subscription = new Subscription()
  vectorLayer: VectorLayer = new VectorLayer({})
  vectorSource: VectorSource = new VectorSource({})

  constructor(
    private http: HttpClient
  ) { }

  layer = new TileLayer({
    source: new OSM()
  })

  ngOnInit(): void {
    this.map = new Map({
      target: 'map',
      layers: [this.layer, this.vectorLayer],
      view: new View({
        center: fromLonLat([37.6,55.8]),
        zoom: 10,
      }),
    })

    this.vectorLayer.setSource(this.vectorSource)
    // this.vectorLayer.setStyle(this._styleFunc)
    this.vectorLayer.setStyle(this.style)
    this.addData()
  }

  public async addData() {
    this.http.get('assets/bus-station.json')
    .subscribe((busStations) => {
      const busStationsFeatures = this.preparePointData(busStations)
      this.vectorSource.addFeatures(busStationsFeatures)
    })

    this.http.get('assets/shop.json')
    .subscribe((shop) => {
      const shopFeatures = this.preparePointData(shop)
      this.vectorSource.addFeatures(shopFeatures)
    })


    // this.http.get('assets/OKN_zone.json')
    // .subscribe((zone) => {
    //   const zoneFeatures = this.preparePolygonData(zone)
    //   this.vectorSource.addFeatures(zoneFeatures)
    // })

  }

  public _styleFunc = (feature: Feature) => this.styleFunc(feature)

  // style = new Style({
  //   image: new Icon({
  //     src: 'assets/bus-station.svg',
  //     scale: 0.013
  //   })
  // })

  style = new Style({
    image: new Circle({
      radius: 5,
      fill: new Fill({
        color: 'orange',
      })
    })
  })

  private styleFunc(feature: Feature) {
    // if (this.map.getView().getZoom() > 12) {

    const style = new Style({
      image: new Circle({
        radius: 5,
        fill: new Fill({
          color: 'orange',
        })
      })
    })

      return style
    // }
  }

  //Переделать под универсальные типы геометрии
  public preparePointData(data: {}):Feature[] {
    const featureCollection: Feature[]= new GeoJSON().readFeatures(data)
    featureCollection.forEach((feature) => {
      const geometry = <Point>feature.getGeometry()
      const coord = geometry.getCoordinates()
      const coor = fromLonLat(coord)
      geometry.setCoordinates(coor)
    })
    return featureCollection
  }

  public preparePolygonData(data: {}):Feature[] {
    const featureCollection: Feature[]= new GeoJSON().readFeatures(data)
    featureCollection.forEach((feature) => {
      const geometry = <Polygon>feature.getGeometry()
      const coord = geometry.getCoordinates()[0]

      const coor = coord.map((coordinate) => fromLonLat(coordinate))
      console.log(coor)
      geometry.setCoordinates([coor])
    })

    return featureCollection
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
