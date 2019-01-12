export default function fetchSlaves () {
  return new Promise(resolve => {
    resolve([{
      'image': 'https://ak0.picdn.net/shutterstock/videos/3343970/thumb/1.jpg',
      'name': 'mechanikai',
      'price': 0
    }, {
      'image': 'https://image.shutterstock.com/z/stock-photo-portrait-asian-engineer-smiling-look-on-you-camera-137604548.jpg',
      'name': 'xin pin-ying',
      'price': 7.83
    }])
  })
}
