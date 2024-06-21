var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_VinylChloridelbsperyearreleasedintotheair0indicateswastedisposalsitewithnoreleasedata_1 = new ol.format.GeoJSON();
var features_VinylChloridelbsperyearreleasedintotheair0indicateswastedisposalsitewithnoreleasedata_1 = format_VinylChloridelbsperyearreleasedintotheair0indicateswastedisposalsitewithnoreleasedata_1.readFeatures(json_VinylChloridelbsperyearreleasedintotheair0indicateswastedisposalsitewithnoreleasedata_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VinylChloridelbsperyearreleasedintotheair0indicateswastedisposalsitewithnoreleasedata_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VinylChloridelbsperyearreleasedintotheair0indicateswastedisposalsitewithnoreleasedata_1.addFeatures(features_VinylChloridelbsperyearreleasedintotheair0indicateswastedisposalsitewithnoreleasedata_1);
var lyr_VinylChloridelbsperyearreleasedintotheair0indicateswastedisposalsitewithnoreleasedata_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VinylChloridelbsperyearreleasedintotheair0indicateswastedisposalsitewithnoreleasedata_1, 
                style: style_VinylChloridelbsperyearreleasedintotheair0indicateswastedisposalsitewithnoreleasedata_1,
                popuplayertitle: "Vinyl Chloride (lbs per year released into the air,  0 indicates waste disposal site with no release data)",
                interactive: true,
    title: 'Vinyl Chloride (lbs per year released into the air,  0 indicates waste disposal site with no release data)<br />\
    <img src="styles/legend/VinylChloridelbsperyearreleasedintotheair0indicateswastedisposalsitewithnoreleasedata_1_0.png" /> 0 - 0<br />\
    <img src="styles/legend/VinylChloridelbsperyearreleasedintotheair0indicateswastedisposalsitewithnoreleasedata_1_1.png" /> 0 - 915<br />\
    <img src="styles/legend/VinylChloridelbsperyearreleasedintotheair0indicateswastedisposalsitewithnoreleasedata_1_2.png" /> 915 - 15126<br />\
    <img src="styles/legend/VinylChloridelbsperyearreleasedintotheair0indicateswastedisposalsitewithnoreleasedata_1_3.png" /> 15126 - 18769<br />\
    <img src="styles/legend/VinylChloridelbsperyearreleasedintotheair0indicateswastedisposalsitewithnoreleasedata_1_4.png" /> 18769 - 116382<br />'
        });
var format_PCEEPASuperfundNPLSites_2 = new ol.format.GeoJSON();
var features_PCEEPASuperfundNPLSites_2 = format_PCEEPASuperfundNPLSites_2.readFeatures(json_PCEEPASuperfundNPLSites_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PCEEPASuperfundNPLSites_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PCEEPASuperfundNPLSites_2.addFeatures(features_PCEEPASuperfundNPLSites_2);
var lyr_PCEEPASuperfundNPLSites_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PCEEPASuperfundNPLSites_2, 
                style: style_PCEEPASuperfundNPLSites_2,
                popuplayertitle: "PCE- EPA Superfund NPL Sites",
                interactive: true,
                title: '<img src="styles/legend/PCEEPASuperfundNPLSites_2.png" /> PCE- EPA Superfund NPL Sites'
            });
var format_TCEppbindrinkingwater_3 = new ol.format.GeoJSON();
var features_TCEppbindrinkingwater_3 = format_TCEppbindrinkingwater_3.readFeatures(json_TCEppbindrinkingwater_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCEppbindrinkingwater_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCEppbindrinkingwater_3.addFeatures(features_TCEppbindrinkingwater_3);
var lyr_TCEppbindrinkingwater_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCEppbindrinkingwater_3, 
                style: style_TCEppbindrinkingwater_3,
                popuplayertitle: "TCE (ppb in drinking water)",
                interactive: true,
    title: 'TCE (ppb in drinking water)<br />\
    <img src="styles/legend/TCEppbindrinkingwater_3_0.png" /> 0 - 0.3<br />\
    <img src="styles/legend/TCEppbindrinkingwater_3_1.png" /> 0.3 - 0.4<br />\
    <img src="styles/legend/TCEppbindrinkingwater_3_2.png" /> 0.4 - 0.7<br />\
    <img src="styles/legend/TCEppbindrinkingwater_3_3.png" /> 0.7 - 1.3<br />\
    <img src="styles/legend/TCEppbindrinkingwater_3_4.png" /> 1.3 - 5.5<br />'
        });
var format_Benzenelongtermaverageofhighestfenclineconcentrationsinmcgpercubicmeter_4 = new ol.format.GeoJSON();
var features_Benzenelongtermaverageofhighestfenclineconcentrationsinmcgpercubicmeter_4 = format_Benzenelongtermaverageofhighestfenclineconcentrationsinmcgpercubicmeter_4.readFeatures(json_Benzenelongtermaverageofhighestfenclineconcentrationsinmcgpercubicmeter_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Benzenelongtermaverageofhighestfenclineconcentrationsinmcgpercubicmeter_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Benzenelongtermaverageofhighestfenclineconcentrationsinmcgpercubicmeter_4.addFeatures(features_Benzenelongtermaverageofhighestfenclineconcentrationsinmcgpercubicmeter_4);
var lyr_Benzenelongtermaverageofhighestfenclineconcentrationsinmcgpercubicmeter_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Benzenelongtermaverageofhighestfenclineconcentrationsinmcgpercubicmeter_4, 
                style: style_Benzenelongtermaverageofhighestfenclineconcentrationsinmcgpercubicmeter_4,
                popuplayertitle: "Benzene (long term average of highest fencline concentrations, in mcg per cubic meter)",
                interactive: true,
    title: 'Benzene (long term average of highest fencline concentrations, in mcg per cubic meter)<br />\
    <img src="styles/legend/Benzenelongtermaverageofhighestfenclineconcentrationsinmcgpercubicmeter_4_0.png" /> 3 - 4.4<br />\
    <img src="styles/legend/Benzenelongtermaverageofhighestfenclineconcentrationsinmcgpercubicmeter_4_1.png" /> 4.4 - 6<br />\
    <img src="styles/legend/Benzenelongtermaverageofhighestfenclineconcentrationsinmcgpercubicmeter_4_2.png" /> 6 - 7.8<br />\
    <img src="styles/legend/Benzenelongtermaverageofhighestfenclineconcentrationsinmcgpercubicmeter_4_3.png" /> 7.8 - 10.9<br />\
    <img src="styles/legend/Benzenelongtermaverageofhighestfenclineconcentrationsinmcgpercubicmeter_4_4.png" /> 10.9 - 63.1<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_VinylChloridelbsperyearreleasedintotheair0indicateswastedisposalsitewithnoreleasedata_1.setVisible(true);lyr_PCEEPASuperfundNPLSites_2.setVisible(true);lyr_TCEppbindrinkingwater_3.setVisible(true);lyr_Benzenelongtermaverageofhighestfenclineconcentrationsinmcgpercubicmeter_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_VinylChloridelbsperyearreleasedintotheair0indicateswastedisposalsitewithnoreleasedata_1,lyr_PCEEPASuperfundNPLSites_2,lyr_TCEppbindrinkingwater_3,lyr_Benzenelongtermaverageofhighestfenclineconcentrationsinmcgpercubicmeter_4];
lyr_VinylChloridelbsperyearreleasedintotheair0indicateswastedisposalsitewithnoreleasedata_1.set('fieldAliases', {'fid': 'fid', 'City,  State': 'City,  State', 'Exposure Source': 'Exposure Source', 'Amount (lbs per year)': 'Amount (lbs per year)', });
lyr_PCEEPASuperfundNPLSites_2.set('fieldAliases', {'City,  State': 'City,  State', 'Site Name': 'Site Name', 'NPL List Date': 'NPL List Date', });
lyr_TCEppbindrinkingwater_3.set('fieldAliases', {'fid': 'fid', 'City,  State': 'City,  State', 'Level (ppb)': 'Level (ppb)', });
lyr_Benzenelongtermaverageofhighestfenclineconcentrationsinmcgpercubicmeter_4.set('fieldAliases', {'fid': 'fid', 'City,  State': 'City,  State', 'Exposure Source': 'Exposure Source', 'Amount (mcg)': 'Amount (mcg)', 'Date data collection began': 'Date data collection began', });
lyr_VinylChloridelbsperyearreleasedintotheair0indicateswastedisposalsitewithnoreleasedata_1.set('fieldImages', {'fid': 'TextEdit', 'City,  State': 'TextEdit', 'Exposure Source': 'TextEdit', 'Amount (lbs per year)': 'TextEdit', });
lyr_PCEEPASuperfundNPLSites_2.set('fieldImages', {'City,  State': 'TextEdit', 'Site Name': 'TextEdit', 'NPL List Date': 'DateTime', });
lyr_TCEppbindrinkingwater_3.set('fieldImages', {'fid': 'TextEdit', 'City,  State': 'TextEdit', 'Level (ppb)': 'TextEdit', });
lyr_Benzenelongtermaverageofhighestfenclineconcentrationsinmcgpercubicmeter_4.set('fieldImages', {'fid': 'TextEdit', 'City,  State': 'TextEdit', 'Exposure Source': 'TextEdit', 'Amount (mcg)': 'TextEdit', 'Date data collection began': 'TextEdit', });
lyr_VinylChloridelbsperyearreleasedintotheair0indicateswastedisposalsitewithnoreleasedata_1.set('fieldLabels', {'fid': 'no label', 'City,  State': 'header label - visible with data', 'Exposure Source': 'inline label - visible with data', 'Amount (lbs per year)': 'inline label - visible with data', });
lyr_PCEEPASuperfundNPLSites_2.set('fieldLabels', {'City,  State': 'header label - visible with data', 'Site Name': 'inline label - visible with data', 'NPL List Date': 'inline label - visible with data', });
lyr_TCEppbindrinkingwater_3.set('fieldLabels', {'fid': 'no label', 'City,  State': 'header label - visible with data', 'Level (ppb)': 'inline label - visible with data', });
lyr_Benzenelongtermaverageofhighestfenclineconcentrationsinmcgpercubicmeter_4.set('fieldLabels', {'fid': 'no label', 'City,  State': 'header label - visible with data', 'Exposure Source': 'inline label - visible with data', 'Amount (mcg)': 'inline label - visible with data', 'Date data collection began': 'no label', });
lyr_Benzenelongtermaverageofhighestfenclineconcentrationsinmcgpercubicmeter_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});