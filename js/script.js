function initMap(){

 var giorgio = {
 info: '<strong>Giorgio's Pizza</strong><br>\
        9 E Market St, Indianapolis, IN 46204<br>\
         Category: Italian<br>\
         Comments: Delicious Pizza!',
 lat: 39.768258,
 long: -86.157044
};
 var shapiro = {
  info:'<strong>Shapiro's Delicatessen</strong><br>\
       1808 S Meridian St, Indianapolis, IN 46225<br>\
       Category: Sandwiches<br>\
       Comments: They have tasty Pastrami Sandwiches!',
  lat: 39.756259,
  long: -86.159505
 };

 var map = new google.maps.Map(document.getElementById('map'),{
 zoom: 14,   
 center: new google.maps.LatLng(39.767155, -86.159801),
 mapTypeId: google.maps.MapTypeId.ROADMAP   
 });
 
 var locations = [[giorgio.info, giorgio.lat, giorgio.long, 0],
                 [shapiro.info, shapiro.lat, shapiro.long, 1],];
  
 
 var infowindow = new google.maps.InfoWindow({});
 var marker, i;
 
 for(i = 0; i < locations.length; i++)
 {
   marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1],locations[i][2]),
    map: map
   });
  
  google.maps.event.addListener(marker, 'click', (function (marker,i){
   return function(){
    infowindow.setContent(locations[i][0]);
    infowindow.open(map, marker);
   }
  })(marker,i));
 
 }

}
