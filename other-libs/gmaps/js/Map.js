class Map extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    this.updateMap(newProps.points);
  }

  updateMap(points) {
    if(points.length > 0 && typeof window.google != "undefined"){
      let firstPoint = points[0];
      var myLatLng = {lat: firstPoint.lat, lng: firstPoint.lon};

      var map = new window.google.maps.Map(document.querySelector('.map'), {
        center: myLatLng,
        zoom: 4
      });

      let markers = points.map(item => new window.google.maps.Marker({
        map: map,
        position: {lat: item.lat, lng: item.lon},
        title: 'Мы находимся тут!'
      }));
    }
  }
  
  render() {
    return (
      <div></div>
    );
  }
}
