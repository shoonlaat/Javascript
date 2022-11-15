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
		listInput.id = "inputbox" + id;
		listInput.className = "inputbox";
		listInput.setAttribute("type", "text");
		listInput.setAttribute("size", "30");
		listInput.setAttribute("value", inputValue);
		listInput.setAttribute('disabled', 'disabled');
		listgp.appendChild(listInput);
		document.getElementById("input").value = "";
		var btngp = document.createElement("div");
		btngp.className = "btn-gp";
		btngp.innerHTML = '<i class="fa-solid fa-circle-check success" id="success"></i>' + '<i class="fa-solid fa-pen-to-square edit" id="edit' + id + '"></i>' + '<i class="fa-solid fa-trash delete" id="delete"></i>';
		console.log("edit" + id);
		listgp.appendChild(btngp);
		document.querySelectorAll('.success').forEach(element => {
			element.onclick = () => successItem(element);
		})
		id = id + 1;
	}
	document.querySelectorAll('.delete').forEach(element => {
		element.onclick = () => deleteItem(element);
	})
	document.querySelectorAll('.edit').forEach(element => {
		element.onclick = () => editItem(element);
	})
	function deleteItem(e) {
		var result = confirm("Are you Sure Want To Delete");
		if (result) {
			e.parentElement.previousSibling.parentElement.remove();
		}
	}
	function successItem(e) {
		var txt = e.parentElement.previousSibling;
		e.nextSibling.style.pointerEvents = "none";
		txt.style.color = "lightgreen";
		txt.style.border = "1px solid lightgreen";
		e.style.color = "lightgreen";
	}
	function editItem(e) {
		console.log(e.id);
		//alert(editid)
		e.classList.toggle('fa-pen-to-square');
		e.classList.toggle('fa-floppy-disk');
		if (e.classList.contains("fa-floppy-disk")) {
			for (i = 0; i < id; i++) {
				var idname = "edit" + i;
				if (idname != e.id) {
					document.getElementById(idname).style.pointerEvents = "none";
				}
				else {
					document.getElementById(idname).style.pointerEvents = "auto";
				}
			}
			console.log(e);
			e.style.pointerEvents = "auto";
			e.style.color = "#e1a8bb";
			e.nextSibling.style.pointerEvents = "none";
			e.previousSibling.style.pointerEvents = "none";
			var txt = e.parentElement.previousSibling;
			console.log(txt);
			txt.focus();
			txt.disabled = false;
			document.getElementById("input").setAttribute("disabled", "disabled");
			document.getElementById("btn").setAttribute("disabled", "disabled");
			var testid = document.getElementById(listInput.id);
			console.log(testid);
			const testword = testid.value.length;
			console.log(testword);
			testid.focus();
			testid.setSelectionRange(testword, testword);
		}
		else {
			e.style.color = "#000";
			e.nextSibling.style.pointerEvents = "auto";
			e.previousSibling.style.pointerEvents = "auto";
			document.getElementById("input").removeAttribute("disabled", "disabled");
			document.getElementById("btn").removeAttribute("disabled", "disabled");
			e.nextSibling.style.pointerEvents = "auto";
			e.previousSibling.style.pointerEvents = "auto";
			for (i = 0; i < id; i++) {
				var idname = "edit" + i;
				document.getElementById(idname).style.pointerEvents = "auto";
			}
		}
	}

});