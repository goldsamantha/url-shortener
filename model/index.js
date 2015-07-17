var HashTable = require('hashtable');
var hashtable = new HashTable();


exports.getShortenedURL = function(url){
  var sz = hashtable.size();
  hashtable.put(sz, url);
  console.log("Getting result of ", sz, ": ", hashtable.get(sz));

  return  sz;

}

exports.getExpandedURL = function(idnum, cb){
  // var sz = hashtable.size();
  // hashtable.put(sz, url);
  var url = 'http://localhost:3000';
  console.log('IDNUMBER: ', idnum);
  if (hashtable.has(idnum)){
    url = hashtable.get(idnum);
    if (url.slice(0,3) != 'http'){
      url = 'http://'+url;
    }
    console.log('URL: ', url);
    cb(null, url);
  }
  // cb(null, url);
}
