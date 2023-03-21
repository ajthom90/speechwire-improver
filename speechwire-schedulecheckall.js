
$(document).ready(() => {
	console.log("running schedulecheckall");

	function checkAll(column, isChecked) {
		$("input[type='checkbox']").each((num, input) => {
			if (input.name.endsWith("[" + column + "]")) {
				input.checked = isChecked;
			}
		});
		//
		// let a;
		//
		// for (a = 0; a < document.form1.elements.length; a++) {
		// 	if (document.form1.elements[a].name.substr(0, 14) === "schedgroupings") {
		// 		console.log(document.form1.element[a].name)
		// 		document.form1.elements[a].checked = chkval;
		// 	}
		// }
	}

	$("table.dd").first().find("tr.tableheader").each((row, tr) => {
		$(tr).find("td.centered").each((column, td) => {
			const newCheckbox = document.createElement("input");
			newCheckbox.setAttribute("type", "checkbox");
			newCheckbox.onclick = function () {
				console.log(this.checked);
				checkAll(column + 1, this.checked);
			}
			td.append(newCheckbox);
		});
	});

	// $("table.dd").last().find("tr:not(.tableheader)").each((row, tr) => {
	// 	const newTD = document.createElement("td");
	// 	newTD.classList.add("dd");
	// 	$(newTD).attr("align", "center");
	// 	const newA = document.createElement("a");
	//
	// 	const sectionTd = tr.children[0];
	// 	const judgeTd = tr.children[1];
	// 	const sectionA = $(sectionTd).find("a").first()
	// 	const sectionHref = sectionA.attr("href");
	// 	const sectionMatch = sectionIdRegex.exec(sectionHref);
	// 	const sectionId = sectionMatch[1];
	// 	const judgeA = $(judgeTd).find("a").first()
	// 	const judgeHref = judgeA.attr("href");
	// 	const judgeMatch = judgeIdRegex.exec(judgeHref);
	// 	const judgeId = judgeMatch[1];
	// 	console.log(sectionId);
	// 	console.log(judgeId);
	//
	// 	let query = "sectionid=" + sectionId + "&judgeid=" + judgeId + "&compid=" + compId;
	// 	const url = "/tabroom/eballot-view-speech-comments.php?" + query;
	//
	// 	$(newA).attr("href", url);
	// 	$(newA).text("View");
	// 	$(newTD).append(newA);
	// 	$(tr).append(newTD);
	// });
});
