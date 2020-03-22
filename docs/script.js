  var firebaseConfig = {
    apiKey: "AIzaSyCTABZYb5V9Ua5xx8FHpl7b546sOJ8Hmc4",
    authDomain: "caronatestfinal.firebaseapp.com",
    databaseURL: "https://caronatestfinal.firebaseio.com",
    projectId: "caronatestfinal",
    storageBucket: "caronatestfinal.appspot.com",
    messagingSenderId: "826601020999",
    appId: "1:826601020999:web:1a3319e0d9be28876e5b62",
    measurementId: "G-MEK2H5C0F4"
  };
  var test3 = 0;
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
 var ref = firebase.database().ref(); 
 function updateEvent () {
var ref = firebase.database().ref();                           


ref.once('value').then(function (snap) {
 console.log('snap.val()', snap.val());
	testSnap = snap;
	testValue = snap.val();
 	test3 = JSON.stringify(snap.val(), null, 2);
    //data.innerHTML = test3
	var content = '';
					content +='<tr>';
                content += '<th>' + 'Name' + '</th>';
                content += '<th>' + 'Id' + '</th>';

                content += '</tr>';
	 testSnap.forEach(function(data){
                var val = data.val();

                content +='<tr>';
                content += '<td>' + val.name + '</td>';
                content += '<td>' + val.id + '</td>';

                content += '</tr>';
            });
	 $('#orders').append(content);
 });
 
 }
updateEvent ();
 
 function updateData (evt) {
  var name = document.getElementById('name');
  var id = document.getElementById('id');
  
  ref.push().update({ 
    name: name.value,
    id: id.value
  });
  console.log('done', Date.now(), name.value);
  $('#orders').find('tr').remove();
  updateEvent ();
  
}
