var wms_layers = [];

var lyr_STOrtofotocolor2022_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_2022",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "[ST] Ortofoto color [2022]",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_STOrtofotocolor2022_0, 0]);
var format_PositiusVilabella17052024_1 = new ol.format.GeoJSON();
var features_PositiusVilabella17052024_1 = format_PositiusVilabella17052024_1.readFeatures(json_PositiusVilabella17052024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PositiusVilabella17052024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PositiusVilabella17052024_1.addFeatures(features_PositiusVilabella17052024_1);
var lyr_PositiusVilabella17052024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PositiusVilabella17052024_1, 
                style: style_PositiusVilabella17052024_1,
                popuplayertitle: "Positius Vilabella 17052024",
                interactive: true,
                title: '<img src="styles/legend/PositiusVilabella17052024_1.png" /> Positius Vilabella 17052024'
            });
var group_Mapasdefondo = new ol.layer.Group({
                                layers: [lyr_STOrtofotocolor2022_0,],
                                fold: "open",
                                title: "Mapas de fondo"});

lyr_STOrtofotocolor2022_0.setVisible(true);lyr_PositiusVilabella17052024_1.setVisible(true);
var layersList = [group_Mapasdefondo,lyr_PositiusVilabella17052024_1];
lyr_PositiusVilabella17052024_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Àrea': 'Àrea', });
lyr_PositiusVilabella17052024_1.set('fieldImages', {'fid': 'Range', 'id': 'Range', 'Àrea': 'Range', });
lyr_PositiusVilabella17052024_1.set('fieldLabels', {'fid': 'inline label - always visible', 'id': 'inline label - always visible', 'Àrea': 'inline label - always visible', });
lyr_PositiusVilabella17052024_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});