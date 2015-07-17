var HashTable = require('hashtable');
var hashtable = new HashTable();


exports.getShortenedURL = function(url){
  // The next key can be the size of the hashtable, since we know that
  // that number will not have been entered as a key.
  var sz = hashtable.size();
  hashtable.put(sz, url);
  return  sz;

}

exports.getExpandedURL = function(idnum, cb){

  // Assign home as the init location
  var url = '#'; //'http://localhost:3000';
  if (hashtable.has(idnum)){
    url = hashtable.get(idnum);
    if (url.slice(0,3) != 'http'){
      url = 'http://'+url;
    }
    cb(null, url);
  }

  cb('ERROR', url);

}
