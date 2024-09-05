var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_1 = new ol.layer.Tile({
            'title': 'Google Labels',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_PP_2 = new ol.format.GeoJSON();
var features_PP_2 = format_PP_2.readFeatures(json_PP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PP_2.addFeatures(features_PP_2);
var lyr_PP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PP_2, 
                style: style_PP_2,
                popuplayertitle: "PP",
                interactive: true,
                title: '<img src="styles/legend/PP_2.png" /> PP'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleLabels_1.setVisible(true);lyr_PP_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleLabels_1,lyr_PP_2];
lyr_PP_2.set('fieldAliases', {'Name': 'Name', 'Adress': 'Adress', 'Coords': 'Coords', });
lyr_PP_2.set('fieldImages', {'Name': '', 'Adress': '', 'Coords': '', });
lyr_PP_2.set('fieldLabels', {'Name': 'inline label - always visible', 'Adress': 'no label', 'Coords': 'no label', });
lyr_PP_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});