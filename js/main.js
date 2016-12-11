'use strict';

document.addEventListener('DOMContentLoaded', function(){

	var root = firebase.database().ref('/');
	var rootData = {};
	var el = {
		output: document.getElementById('output'),
		json: document.getElementById('json'),
		input: document.getElementById('input'),
		trigger: document.getElementById('trigger')
	}

	root.on('child_added', didAdd);
	el.trigger.addEventListener('click', doPush);

	function doPush(){
		root.push({input: (input.value || Date.now())}, didPush);
	}

	function doPlace(data, key){
		var li = document.createElement('LI');
		if(key) li.textContent += key + ': ';
		li.textContent += data.input;
		el.output.appendChild(li);
	}

	function didPush(){
		console.log('Pushed!');
	}

	function didAdd(snapshot){
		var data = snapshot.val();
		var key = snapshot.key;
		rootData[key] = data;
		doPlace(data, key);
		json.value = JSON.stringify(rootData);
	}

});
