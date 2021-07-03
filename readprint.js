var firebaseConfig = {
  apiKey:
authDomain:
databaseURL:
projectId:
storageBucket:
messagingSenderId:
appId:
measurementId:
};
firebase.initializeApp(firebaseConfig);

/=================Sktm=============//
var firebaseRef = firebase.database().ref("FormSktm");          
    firebaseRef.once("value", function(snapshot){
        var stdNo = 0;
        snapshot.forEach(function(element){
            
            document.getElementById('root').innerHTML +=`
                <div>
                    <td> ${innerHTML = ++stdNo}</td>
                    <td>${element.val().nama}</td> 
                    <td>${element.val().tempatlahir}</td> 
                    <td>${element.val().tanggallahir}</td>
                    <td>${element.val().alamat}</td>
                    <td><input type="button" onclick="frames['frame'].print()" value="print"></td> 
                 </div>`
         });
     })

//======================surat sktm===============================//
     function addItemsToList(namA,ttL,tgL,alamaT){       
        var _name  = document.getElementById('namaSktm');
        var _tempatlahir  = document.getElementById('ttlSktm');
        var _tgl  = document.getElementById('tglSktm');
        var _alamat  = document.getElementById('alamatSktm');

        _name.innerHTML=': '+ namA;
        _tempatlahir.innerHTML=': '+ttL;
        _tgl.innerHTML=': ' + tgL;
        _alamat.innerHTML=': '+alamaT;
        
        ul.appendChild(_name);
        ul.appendChild(_tempatlahir);
        ul.appendChild(_tgl);
        ul.appendChild(_alamat); 
    }
    function FetchAllData(){
        firebase.database().ref('FormSktm').once('value',function(snapshot){
            snapshot.forEach(
                function(ChildSnapshot){
                    let nAme = ChildSnapshot.val().nama;
                    let tmptlhr = ChildSnapshot.val().tempatlahir;
                    let tGl = ChildSnapshot.val().tanggallahir;
                    let almt = ChildSnapshot.val().alamat;
                    addItemsToList(nAme,tmptlhr,tGl,almt);
                }
            );
        });
    }
    window.onload(FetchAllData()); 
