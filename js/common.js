const button = document.getElementById("btn");
var id = 0;
button.addEventListener('click', () => {
	var inputValue = document.getElementById("input").value;
	console.log(inputValue);
	$("#alert_message p").remove();
	if (inputValue == "") {
		var alert_error = document.getElementById("alert_message");
		var errormessage = document.createElement("p");
		errormessage.innerHTML = "Please Fill The Data";
		alert_error.appendChild(errormessage);
	}
	else {
		$("#alert_message p").remove();
		var sectionlist = document.getElementById("section-list");
		var listgp = document.createElement("div");
		listgp.className = "list";
		sectionlist.appendChild(listgp);
		var listInput = document.createElement("INPUT");
		listInput.className = "inputbox";
		listInput.setAttribute("type", "text");
		listInput.setAttribute("size", "30");
		listInput.setAttribute("value", inputValue);
		listInput.setAttribute('disabled', 'disabled');
		listgp.appendChild(listInput);
		document.getElementById("input").value = "";
		var btngp = document.createElement("div");
		btngp.className = "btn-gp";
		btngp.innerHTML = '<i class="fa-solid fa-circle-check success" id="success"></i>' + '<i class="fa-solid fa-pen-to-square edit" id="edit"></i>' + '<i class="fa-solid fa-trash delete" id="delete"></i>';
		listgp.appendChild(btngp);
		document.querySelectorAll('.success').forEach(element => {
			element.onclick = () => successItem(element);
		})
	}
	document.querySelectorAll('.delete').forEach(element => {
		element.onclick = () => deleteItem(element);
	})
	document.querySelectorAll('.edit').forEach(element => {
		element.onclick = () => editItem(element);
	})
	function deleteItem(e) {
		console.log(e);
		e.parentElement.previousSibling.parentElement.remove();
		console.log(e.parentElement.previousSibling.parentElement);
	}
	function successItem(e) {
		var txt = e.parentElement.previousSibling;
		e.nextSibling.style.pointerEvents = "none";
		txt.style.color = "lightgreen";
		txt.style.border = "1px solid lightgreen";
		e.style.color = "lightgreen";
	}
	function editItem(e) {
		e.classList.toggle('fa-pen-to-square');
		e.classList.toggle('fa-floppy-disk');
		if (e.classList.contains("fa-pen-to-square")) {
			var txt = e.parentElement.previousSibling;
			txt.disabled = true;
			e.nextSibling.style.pointerEvents = "auto";
			e.previousSibling.style.pointerEvents = "auto";
		}
		else {
			var txt = e.parentElement.previousSibling;
			txt.disabled = false;
			var testid = document.querySelector(".inputbox");
			console.log(testid);
			const testword = testid.value.length;
			console.log(testword);
			testid.focus();
			testid.setSelectionRange(testword, testword);
			e.nextSibling.style.pointerEvents = "none";
			e.previousSibling.style.pointerEvents = "none";
		}

	}

});