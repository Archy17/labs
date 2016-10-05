///////////// Public Properties
var data = {
  options: [
    'INDEXEDDB',
    'WEBSQL',
    'LOCALSTORAGE'
  ]
};

///////////// Private Properties

///////////// Public Methods
var saveData   = saveData;
var updateData = updateData;

///////////// Private Methods

localforage
  .setDriver(localforage.LOCALSTORAGE);




///////////// Functions declarations
function saveData(key, data) {
  localforage
    .setItem(key, data)
    .then(function(value) {
      // data saved successfully
      console.log('=== DATA STORED');
      console.log(JSON.stringify(value, null, 2));
    })
    .catch(function(error) {
      console.error(error);
    }); 
}

function updateData(key, data) {
  localforage
    .removeItem(key)
    .then(function() {
      console.log('=== ' + key + ' was removed!');

    });
}
